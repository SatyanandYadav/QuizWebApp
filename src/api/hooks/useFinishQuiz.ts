import { useMutation } from "@tanstack/react-query";
import apiConfig from "../../config/apiConfig";
import axiosInstance from "../axios";
import { IFinishQuizMutationObject } from "../../interface/api";

const finishQuiz = async (postData: IFinishQuizMutationObject) => {
  const apiEndpoint = `${apiConfig.urls.quiz + postData.quizId}/finish`;
  return await axiosInstance.post(apiEndpoint, postData);
};

const useFinishQuiz = () => {
  const mutationFunction = (mutationData: IFinishQuizMutationObject) => {
    return finishQuiz(mutationData);
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

export default useFinishQuiz;
