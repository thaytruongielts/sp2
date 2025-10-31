export type SlideType = 'title' | 'content' | 'exercise_drag_drop' | 'exercise_fill_blank' | 'exercise_multiple_choice' | 'summary';

export interface ExampleSentence {
  text: string;
  highlight?: string;
}

export interface DragDropChoice {
  id: string;
  text: string;
  type: 'item' | 'target';
}

export interface DragDropExercise {
  instruction: string;
  items: DragDropChoice[];
  targets: DragDropChoice[];
  correctMapping: { [itemId: string]: string }; // maps item.id to target.id
}

export interface FillBlankExercise {
    instruction: string;
    parts: (string | { blankId: string; answer: string; placeholder: string })[];
}

export interface MultipleChoiceExercise {
    instruction: string;
    question: string;
    options: string[];
    correctAnswer: string;
}


export interface Slide {
  id: number;
  type: SlideType;
  title: string;
  content?: string | string[];
  animation?: 'fade-in' | 'slide-in-left';
  exampleSentences?: ExampleSentence[];
  exerciseData?: DragDropExercise | FillBlankExercise | MultipleChoiceExercise;
}
