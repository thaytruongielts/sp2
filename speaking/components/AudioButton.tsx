import React, { useState, useRef } from 'react';
import { generateSpeech } from '../services/geminiService';
import { decode, createWavBlob, toInt16Array } from '../utils';
import { PlayIcon, ArrowDownTrayIcon } from './icons';

interface AudioButtonProps {
  textToSpeak: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ textToSpeak }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const handleGenerateAndPlay = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      const base64Audio = await generateSpeech(textToSpeak);
      const rawAudioBytes = decode(base64Audio);
      const pcmData = toInt16Array(rawAudioBytes);
      const wavBlob = createWavBlob(pcmData, 24000, 1);
      
      setAudioBlob(wavBlob);
      const url = URL.createObjectURL(wavBlob);

      if (audioPlayerRef.current) {
        audioPlayerRef.current.src = url;
        audioPlayerRef.current.play();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate audio.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!audioBlob) return;
    const url = URL.createObjectURL(audioBlob);
    const a = document.createElement('a');
    a.href = url;
    const safeFilename = textToSpeak.substring(0, 20).replace(/[^a-z0-9]/gi, '_').toLowerCase();
    a.download = `${safeFilename}.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center space-x-1">
      <audio ref={audioPlayerRef} hidden />
      <button
        onClick={handleGenerateAndPlay}
        disabled={isLoading}
        className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 disabled:text-slate-400 disabled:bg-slate-200 transition-colors"
        aria-label="Play audio"
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <PlayIcon className="w-5 h-5" />
        )}
      </button>
      {audioBlob && (
        <button
          onClick={handleDownload}
          className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          aria-label="Download audio"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default AudioButton;
