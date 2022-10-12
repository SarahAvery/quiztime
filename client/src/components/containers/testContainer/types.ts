export type AnswerType = {
  id: string;
  value: string;
  isCorrect?: boolean;
  selected?: string;
};

export type QuestionType = {
  id: string;
  title: string;
  content?: string;
  answers: AnswerType[];
};

export type TestType = {
  id: string;
  name: string;
  questions: QuestionType[];
};

export type qAMapResult = {
  correctAnswerId: string;
  answerId: string;
  isCorrect: boolean;
};
