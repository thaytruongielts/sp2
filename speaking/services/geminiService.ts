import { GoogleGenAI, Modality } from "@google/genai";

export async function generateSpeech(text: string): Promise<string> {
    if (!process.env.API_KEY) {
        console.warn("API_KEY not set for audio generation. This feature will not work.");
        // To allow UI testing without an API key, we can return a silent audio clip.
        // This is a base64 encoded 1-second silent WAV file.
        return "UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAAABkYXRhAAAAAA==";
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: {
                    // Using a clear, friendly voice suitable for educational content
                    prebuiltVoiceConfig: { voiceName: 'Kore' },
                },
            },
        },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
        throw new Error("Audio data not found in the API response.");
    }

    return base64Audio;
}
