import { useMutation } from "@tanstack/react-query";
import apiConfig from "../../config/apiConfig";
import axiosInstance from "../axios";

interface ISubmitQuizAnswerMutationObject {
  quizId: string | number;
  questionId: string | number;
  answerId: string | number;
}

const submitQuizAnswer = async (postData: ISubmitQuizAnswerMutationObject) => {
  const apiEndpoint = `${
    apiConfig.urls.quiz +
    postData.quizId +
    apiConfig.urls.questions +
    postData.questionId
  }/submit`;
  return await axiosInstance.post(apiEndpoint, postData);
};

const useSubmitQuizAnswer = () => {
  const mutationFunction = (mutationData: ISubmitQuizAnswerMutationObject) => {
    return submitQuizAnswer(mutationData);
  };

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: mutationFunction,
    onError: (error) => {
      // An error happened!
      console.log("Oops, something went wrong. Please try again.", error);
    },
  });

  return { mutate, isError, isPending, isSuccess };
};

export default useSubmitQuizAnswer;
