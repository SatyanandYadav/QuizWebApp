export interface IReportResult {
    questionId: string | number;
    userAnswerId: (string | number)[];
    correct: boolean;
  }
  
 export interface IQuizContext {
    quizId: string | number;
    setQuizId: React.Dispatch<React.SetStateAction<string | number>>;
    reportData: IReportResult[];
    setReportData: React.Dispatch<React.SetStateAction<IReportResult[]>>;
  }