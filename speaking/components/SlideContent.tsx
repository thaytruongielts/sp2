import React, { useState, useEffect } from 'react';
import type { Slide, DragDropExercise, FillBlankExercise, MultipleChoiceExercise } from '../types';
import AudioButton from './AudioButton';

interface SlideContentProps {
  slide: Slide;
  userAnswer: any;
  onAnswerChange: (answer: any) => void;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, userAnswer, onAnswerChange }) => {
  const animationClass = slide.animation ? `animate-${slide.animation}` : 'animate-fade-in';

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return <ul className="space-y-4 text-lg md:text-xl">{content.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    }
    return <p className="text-lg md:text-xl">{content}</p>;
  };

  const renderExercise = () => {
    switch (slide.type) {
      case 'exercise_drag_drop':
        // A simple placeholder for drag-drop, as a full implementation is complex.
        // This demonstrates the structure.
        const ddData = slide.exerciseData as DragDropExercise;
        return (
          <div className="mt-6 text-center">
            <h4 className="font-semibold text-xl mb-4">{ddData.instruction}</h4>
            <div className="p-4 bg-slate-100 rounded-lg">
              <p className="text-slate-600">Drag and drop functionality would appear here.</p>
               <div className="flex justify-around mt-4">
                  <div className="space-y-2">{ddData.items.map(i => <div key={i.id} className="p-2 bg-white border rounded shadow-sm">{i.text}</div>)}</div>
                  <div className="space-y-2">{ddData.targets.map(t => <div key={t.id} className="p-2 bg-indigo-100 border-indigo-300 border-dashed rounded w-32">{t.text}</div>)}</div>
               </div>
            </div>
          </div>
        );

      case 'exercise_fill_blank':
        const fbData = slide.exerciseData as FillBlankExercise;
        return (
          <div className="mt-6">
            <h4 className="font-semibold text-xl mb-4">{fbData.instruction}</h4>
            <div className="text-lg md:text-xl p-4 bg-slate-100 rounded-lg flex flex-wrap items-center gap-2">
              {fbData.parts.map((part, index) => {
                if (typeof part === 'string') {
                  return <span key={index}>{part}</span>;
                }
                const isCorrect = userAnswer?.[part.blankId]?.toLowerCase() === part.answer.toLowerCase();
                return (
                  <input
                    key={index}
                    type="text"
                    placeholder={part.placeholder}
                    value={userAnswer?.[part.blankId] || ''}
                    onChange={(e) => onAnswerChange({ ...userAnswer, [part.blankId]: e.target.value })}
                    className={`px-2 py-1 border-b-2 w-32 focus:outline-none transition-colors ${
                      userAnswer?.[part.blankId]
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-slate-300 focus:border-indigo-500'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        );

      case 'exercise_multiple_choice':
        const mcData = slide.exerciseData as MultipleChoiceExercise;
        return (
           <div className="mt-6">
            <h4 className="font-semibold text-xl mb-4">{mcData.instruction}</h4>
            <p className="text-lg md:text-xl mb-4 p-4 bg-slate-100 rounded-lg">{mcData.question}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mcData.options.map((option, index) => {
                    const isSelected = userAnswer === option;
                    const isCorrect = mcData.correctAnswer === option;
                    let buttonClass = 'bg-white hover:bg-slate-100 border-slate-300';
                    if (isSelected) {
                        buttonClass = isCorrect ? 'bg-green-500 text-white border-green-600' : 'bg-red-500 text-white border-red-600';
                    }
                    return (
                        <button key={index} onClick={() => onAnswerChange(option)} className={`p-4 rounded-lg border-2 font-semibold text-center transition-all ${buttonClass}`}>
                            {option}
                        </button>
                    )
                })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`h-full flex flex-col justify-center ${animationClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">{slide.title}</h2>
      
      {slide.content && renderContent(slide.content)}

      {slide.exampleSentences && (
        <div className="mt-6 space-y-3">
          {slide.exampleSentences.map((sentence, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
              <AudioButton textToSpeak={sentence.text} />
              <p className="text-md md:text-lg text-slate-700 flex-grow" dangerouslySetInnerHTML={{ __html: sentence.highlight ? sentence.text.replace(sentence.highlight, `<strong class="text-indigo-600">${sentence.highlight}</strong>`) : sentence.text }} />
            </div>
          ))}
        </div>
      )}

      {slide.exerciseData && renderExercise()}
    </div>
  );
};

export default SlideContent;
