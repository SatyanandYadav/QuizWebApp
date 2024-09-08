export interface IOption {
  id: number;
  name: string;
}

export interface IQuestion {
  id: number;
  answer: number | string;
  image?: string;
  options: IOption[];
  question_text: string;
}
