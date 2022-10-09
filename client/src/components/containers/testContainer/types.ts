export type AnswerType = {
  id: string;
  value: string;
  isCorrect?: boolean;
  selected?: string;
};

export type QuestionType = {
  id: string;
  title: string;
  content: string;
  answers: AnswerType[];
};

export type TestType = {
  id: string;
  questions: QuestionType[];
};
