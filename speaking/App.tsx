import React, { useState, useCallback } from 'react';
import { slides } from './slides';
import SlideContent from './components/SlideContent';
import { ChevronLeftIcon, ChevronRightIcon } from './components/icons';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to hold answers for exercises, mapping slide index to answer data
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});

  const goToNext = () => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  };

  const goToPrev = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleAnswerChange = useCallback((slideIndex: number, answer: any) => {
    setAnswers(prev => ({ ...prev, [slideIndex]: answer }));
  }, []);

  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans bg-slate-50 text-slate-800">
      <main className="w-full max-w-4xl h-[70vh] min-h-[500px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-r-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-grow p-6 md:p-10 overflow-y-auto relative">
          <SlideContent
            slide={slides[currentSlide]}
            onAnswerChange={(answer) => handleAnswerChange(currentSlide, answer)}
            userAnswer={answers[currentSlide]}
          />
        </div>

        {/* Navigation Footer */}
        <footer className="w-full p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            Prev
          </button>
          <span className="text-sm font-medium text-slate-600">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <button
            onClick={goToNext}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-all"
            aria-label="Next Slide"
          >
            Next
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default App;
