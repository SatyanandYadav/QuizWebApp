import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../constants";
import axiosInstance from "../axios";
import apiConfig from "../../config/apiConfig";
import { IQuestion } from "../../interface";

interface IGetQuizQuestionsResponse {
  quizId: string;
  userId: string;
  questions: IQuestion[];
}

const getQuizQuestions = async (quizId: string | number) => {
  if (!quizId) {
    return;
  }
  const apiEndpoint = `${
    apiConfig.urls.quiz + quizId + apiConfig.urls.questions
  }`;
  const response = await axiosInstance.get(apiEndpoint);
  return response.data;
};

const useGetQuizQuestions = ({ quizId }: { quizId: string | number }) => {
  const response = useQuery<IGetQuizQuestionsResponse>({
    queryKey: [queryKeys.quizQuestions],
    queryFn: () => getQuizQuestions(quizId),
    enabled: !!quizId,
    refetchOnWindowFocus: true,
  });
  return { ...response };
};

export default useGetQuizQuestions;
