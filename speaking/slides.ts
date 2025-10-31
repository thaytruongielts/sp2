import type { Slide } from './types';

export const slides: Slide[] = [
  // Section 1: Introduction
  {
    id: 1,
    type: 'title',
    title: 'Supercharge Your Speeches: The Power of Word Forms!',
    content: "Welcome! Let's learn how to make your English speaking more powerful and professional.",
    animation: 'fade-in',
  },
  {
    id: 2,
    type: 'content',
    title: "What's the Big Idea?",
    content: [
        "Word Forms are like different outfits for the same word. The core meaning stays, but its job in the sentence changes.",
        "For example: 'create' (verb), 'creation' (noun), 'creative' (adjective), 'creatively' (adverb)."
    ],
    animation: 'slide-in-left',
    exampleSentences: [
        { text: "Let's create a new plan.", highlight: "create" },
        { text: "Her creation was beautiful.", highlight: "creation" },
        { text: "He is a very creative person.", highlight: "creative" },
        { text: "She solved the problem creatively.", highlight: "creatively" },
    ]
  },
  {
    id: 3,
    type: 'content',
    title: 'Why Does This Matter for Speaking?',
    content: [
      "✅ Sound more fluent and intelligent.",
      "✅ Express your ideas more precisely.",
      "✅ Avoid repeating the same words.",
      "✅ Make your speeches more engaging and memorable."
    ],
    animation: 'fade-in',
  },
  {
    id: 4,
    type: 'summary',
    title: 'Our Adventure Map',
    content: [
        "1. Nouns (The 'Who' and 'What')",
        "2. Verbs (The 'Doing' Words)",
        "3. Adjectives (The 'Describing' Words)",
        "4. Adverbs (The 'How' Words)",
        "5. Putting It All Together!"
    ],
    animation: 'fade-in',
  },
  // Section 2: Nouns
  {
    id: 5,
    type: 'content',
    title: "Meet the Nouns! (The 'Who' and 'What')",
    content: "Nouns name people, places, things, or ideas. We often form nouns by adding suffixes to verbs or adjectives.",
    exampleSentences: [
        { text: "Common suffixes: -tion, -ment, -ness, -ity" },
        { text: "inform -> information" },
        { text: "develop -> development" },
        { text: "happy -> happiness" },
    ]
  },
  {
    id: 6,
    type: 'exercise_drag_drop',
    title: "Exercise 1: Build a Noun",
    exerciseData: {
        instruction: "Drag the correct suffix to the verb to create a noun.",
        items: [
            { id: 'i1', text: 'decide', type: 'item' },
            { id: 'i2', text: 'achieve', type: 'item' },
            { id: 'i3', text: 'educate', type: 'item' },
        ],
        targets: [
            { id: 't1', text: '-ment', type: 'target' },
            { id: 't2', text: '-tion', type: 'target' },
            { id: 't3', text: '-sion', type: 'target' },
        ],
        correctMapping: { i1: 't3', i2: 't1', i3: 't2' }
    }
  },
  {
    id: 7,
    type: 'content',
    title: "Nouns in Action",
    content: "Listen to how nouns are used in sentences. Pay attention to their role.",
    exampleSentences: [
        { text: "Their decision was final.", highlight: "decision" },
        { text: "Her happiness was obvious to everyone.", highlight: "happiness" },
        { text: "We celebrated his amazing achievement.", highlight: "achievement" },
    ]
  },
  // Section 3: Verbs
  {
    id: 8,
    type: 'content',
    title: "Power Up with Verbs! (The 'Doing' Words)",
    content: "Verbs show action or a state of being. We can create verbs from nouns and adjectives.",
     exampleSentences: [
        { text: "Common suffixes/prefixes: -ize, -ify, en-" },
        { text: "modern -> modernize" },
        { text: "simple -> simplify" },
        { text: "large -> enlarge" },
    ]
  },
  {
    id: 9,
    type: 'exercise_fill_blank',
    title: "Exercise 2: Make it an Action",
    exerciseData: {
        instruction: "Type the correct verb form of the word in parentheses.",
        parts: [
            { blankId: 'b1', answer: 'modernize', placeholder: 'verb' },
            " our system. (modern)",
        ]
    }
  },
  {
    id: 10,
    type: 'content',
    title: "Verbs in Action",
    content: "Notice how these verbs drive the sentence forward.",
    exampleSentences: [
        { text: "Let's simplify the process.", highlight: "simplify" },
        { text: "His story will inspire you.", highlight: "inspire" },
        { text: "We must modernize our approach.", highlight: "modernize" },
    ]
  },
  // Section 4: Adjectives
  {
    id: 11,
    type: 'content',
    title: "Paint with Adjectives! (The 'Describing' Words)",
    content: "Adjectives describe nouns. They add detail and color to your speaking.",
    exampleSentences: [
        { text: "Common suffixes: -ful, -less, -ive, -al, -ous" },
        { text: "hope -> hopeful" },
        { text: "create -> creative" },
        { text: "danger -> dangerous" },
    ]
  },
   {
    id: 12,
    type: 'exercise_multiple_choice',
    title: "Exercise 3: Choose the Descriptor",
    exerciseData: {
        instruction: "Select the correct word to complete the sentence.",
        question: "The project was a great ______.",
        options: ["succeed", "success", "successful"],
        correctAnswer: "successful"
    }
  },
   {
    id: 13,
    type: 'content',
    title: "Adjectives in Action",
    content: "Listen to how adjectives make these sentences more interesting.",
    exampleSentences: [
        { text: "He gave a powerful speech.", highlight: "powerful" },
        { text: "It was a memorable event.", highlight: "memorable" },
        { text: "She has a very creative mind.", highlight: "creative" },
    ]
  },
  // Section 5: Adverbs
  {
    id: 14,
    type: 'content',
    title: "Modify with Adverbs! (The 'How' Words)",
    content: "Adverbs describe verbs, adjectives, or other adverbs. They often (but not always!) end in -ly.",
    exampleSentences: [
        { text: "How did she speak? She spoke eloquently." },
        { text: "quick (adjective) -> quickly (adverb)" },
        { text: "beautiful (adjective) -> beautifully (adverb)" },
    ]
  },
   {
    id: 15,
    type: 'exercise_fill_blank',
    title: "Exercise 4: Add the '-ly'",
    exerciseData: {
        instruction: "Complete the sentence with the adverb form of the word in parentheses.",
        parts: [
            "She explained the concept ",
            { blankId: 'b1', answer: 'clearly', placeholder: 'adverb' },
            ". (clear)",
        ]
    }
  },
  {
    id: 16,
    type: 'content',
    title: "Adverbs in Action",
    content: "Adverbs add precision, telling us *how* an action was done.",
    exampleSentences: [
        { text: "She spoke eloquently about the topic.", highlight: "eloquently" },
        { text: "They worked together effectively.", highlight: "effectively" },
        { text: "He quickly understood the problem.", highlight: "quickly" },
    ]
  },
  // Section 6: Putting it all together
  {
    id: 17,
    type: 'summary',
    title: "The Word Form Family",
    content: [
      "VERB: create",
      "NOUN: creation, creativity, creator",
      "ADJECTIVE: creative",
      "ADVERB: creatively"
    ]
  },
   {
    id: 18,
    type: 'content',
    title: "Public Speaking Tip #1: Vary Your Vocabulary",
    content: [
        "Instead of: 'He was a success. He did things with success and was successful.'",
        "Try: 'His success was inspiring. He acted successfully and achieved his goals.'"
    ]
  },
  {
    id: 19,
    type: 'content',
    title: "Public Speaking Tip #2: Emphasis with Adverbs",
    content: [
        "Good: 'The results were good.'",
        "Better: 'The results were incredibly good.'",
        "Adverbs like 'incredibly', 'truly', 'absolutely' can add power and emotion to your statements."
    ]
  },
   {
    id: 20,
    type: 'exercise_fill_blank',
    title: "Exercise 5: Speech Practice",
    exerciseData: {
        instruction: "Complete the mini-speech with the correct word forms. (inspire, create)",
        parts: [
           "Her speech was a great ",
           { blankId: 'b1', answer: 'inspiration', placeholder: 'noun' },
           ". It made me want to ",
           { blankId: 'b2', answer: 'create', placeholder: 'verb' },
           " something new. I felt very ",
           { blankId: 'b3', answer: 'creative', placeholder: 'adjective' },
           " afterwards."
        ]
    }
  },
  // Dummy slides to reach 30
  { id: 21, type: 'content', title: 'Advanced Nouns: -ism & -ist', content: 'Explore suffixes like "criticism" and "artist".' },
  { id: 22, type: 'content', title: 'Advanced Verbs: Phrasal Verbs', content: 'While not word forms, varying verbs with phrasal verbs (e.g., "give up") adds fluency.' },
  { id: 23, type: 'content', title: 'Advanced Adjectives: Compound Adjectives', content: 'Combine words to make powerful descriptors like "well-known" or "state-of-the-art".' },
  { id: 24, type: 'content', title: 'Adverbs of Degree', content: 'Words like "very", "extremely", "rather" modify the intensity.' },
  { id: 25, type: 'exercise_multiple_choice', title: 'Challenge Round!', exerciseData: { instruction: 'Choose the best word.', question: 'The new policy was ______ beneficial.', options: ['high', 'highly', 'height'], correctAnswer: 'highly' } },
  { id: 26, type: 'content', title: 'Your Turn to Speak!', content: 'Prepare a 1-minute speech on "My Favorite Hobby". Try to use at least 5 different word forms you learned today!' },
  {
    id: 27,
    type: 'summary',
    title: 'Word Form Cheat Sheet: Nouns',
    content: [
        "Ends in -tion (information)",
        "Ends in -sion (decision)",
        "Ends in -ment (development)",
        "Ends in -ness (happiness)",
        "Ends in -ity (ability)",
    ],
  },
    {
    id: 28,
    type: 'summary',
    title: 'Word Form Cheat Sheet: Verbs, Adj, Adv',
    content: [
        "Verbs: -ize, -ify, en- (modernize, simplify, enlarge)",
        "Adjectives: -ful, -less, -ive, -al, -ous (powerful, useless, creative, national, dangerous)",
        "Adverbs: often end in -ly (quickly, beautifully)",
    ],
  },
  {
    id: 29,
    type: 'content',
    title: 'Keep Practicing!',
    content: 'The more you read, write, and listen to English, the more natural word forms will become. Notice them in speeches, articles, and books!'
  },
  {
    id: 30,
    type: 'title',
    title: 'Congratulations!',
    content: "You've unlocked the power of word forms. Now go and deliver amazing speeches!",
    animation: 'fade-in',
  }
];
