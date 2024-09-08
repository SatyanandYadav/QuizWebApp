import { createContext, useState } from "react";
import { IQuizContext, IReportResult } from "../interface/context";

export const QuizContext = createContext({} as IQuizContext);

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizId, setQuizId] = useState<string | number>("");
  const [reportData, setReportData] = useState<IReportResult[]>([]);
  return (
    <QuizContext.Provider
      value={{ quizId, setQuizId, reportData, setReportData }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
