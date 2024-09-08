import { IQuestion } from "..";

export interface IQuizMutationObject {
  userId: string;
}

export interface IFinishQuizMutationObject {
  quizId: string | number;
}

export interface IGetQuizQuestionsResponse {
  quizId: string;
  userId: string;
  questions: IQuestion[];
}

export interface ISubmitQuizAnswerMutationObject {
  quizId: string | number;
  questionId: string | number;
  answerId: (string | number)[];
  timeSpent: string;
}
