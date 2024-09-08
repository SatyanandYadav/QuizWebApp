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

export interface IButton {
  label: string;
  onClick: Function;
  isArrowIcon?: Boolean;
  disabled?: boolean;
}

export interface IprogressBar {
  currentValue: number | string;
  total: number | string;
}

export interface IQuestionCardData {
  questionData: IQuestion | undefined;
  currentValue: number;
  totalQuestionLength: number;
  handleOptionChange: (id: string, checked: boolean) => void;
}

export interface IQuestionOption {
  optionData: IOption;
  handleOptionChange: (id: string, checked: boolean) => void;
}

export interface IStartButton {
    label: string;
    handleClick: Function;
  }