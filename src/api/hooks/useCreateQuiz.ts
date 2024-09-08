import { useMutation } from "@tanstack/react-query";
import apiConfig from "../../config/apiConfig";
import axiosInstance from "../axios";
import { IQuizMutationObject } from "../../interface/api";

const createQuiz = async (postData: IQuizMutationObject) => {
  const apiEndpoint = `${apiConfig.urls.quiz}start`;
  const response = await axiosInstance.post(apiEndpoint, postData);
  return response;
};

const useCreateQuiz = () => {
  const mutationFunction = (mutationData: IQuizMutationObject) => {
    return createQuiz(mutationData);
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

export default useCreateQuiz;
