import { useContext, useEffect, useState } from "react";
import questionbackground from "../../assets/backgroundImage/questionBackground.svg";
import Button from "../../components/Button";
import QuestionCard from "../../components/QuestionCard";
import { QuizContext } from "../../context/QuizContext";
import useGetQuizQuestions from "../../api/hooks/useGetQuizQuestions";
import useSubmitQuizAnswer from "../../api/hooks/useSubmitQuizAnswer";
import useFinishQuiz from "../../api/hooks/useFinishQuiz";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [timeSpent, setTimeSpent] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const { quizId, setReportData } = useContext(QuizContext);
  const { data: questionsData } = useGetQuizQuestions({ quizId });
  const { mutate } = useSubmitQuizAnswer();
  const { mutate: finishMutation } = useFinishQuiz();

  const isLastQuestion = Boolean(
    questionsData?.questions?.length &&
      activeQuestionIndex === questionsData?.questions?.length - 1
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleNextBtnClick = () => {
    const activeQuestionData = questionsData?.questions?.[activeQuestionIndex];
    const mutationData = {
      quizId,
      questionId: `${activeQuestionData?.id}`,
      answerId: selectedValues,
      timeSpent: `${timeSpent}s`,
    };

    mutate(mutationData, {
      onSuccess: (response) => {
        setReportData((prevReportData) => [
          ...prevReportData,
          {
            questionId: `${activeQuestionData?.id}`,
            userAnswerId: selectedValues,
            correct: !!(
              Number(activeQuestionData?.answer) === Number(selectedValues[0])
            ),
            timeSpent: `${timeSpent}s`,
          },
        ]);
        if (
          questionsData?.questions?.length &&
          activeQuestionIndex < questionsData.questions.length - 1
        ) {
          setActiveQuestionIndex(activeQuestionIndex + 1);
        }
        if (isLastQuestion) {
          finishMutation(
            { quizId },
            {
              onSuccess(data, variables, context) {
                navigate("/result");
              },
              onError(error, variables, context) {
                console.error(
                  "Oops, something went wrong. Please try again.",
                  error
                );
              },
            }
          );
        }
        setSelectedValues([]);
        setTimeSpent(0);
      },
      onError: (error) => {
        console.error("Oops, something went wrong. Please try again.", error);
      },
    });
  };

  const handleOptionChange = (id: string | number, checked: boolean) => {
    if (checked && !selectedValues.includes(id)) {
      setSelectedValues([...selectedValues, id]);
    } else if (!checked && selectedValues.includes(id)) {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((value) => value !== id)
      );
    }
  };

  return (
    <div className="w-screen bg-gradient-to-b from-[#AF9CF3] to-white relative pb-1">
      <div>
        <img
          src={questionbackground}
          alt="questionBackground"
          className="sm:w-full"
        ></img>
      </div>
      <QuestionCard
        questionData={questionsData?.questions?.[activeQuestionIndex]}
        currentValue={activeQuestionIndex + 1}
        totalQuestionLength={questionsData?.questions?.length || 0}
        handleOptionChange={handleOptionChange}
      />
      <footer className="fixed bottom-0 left-0 right-0 p-5 sm:p-10">
        <Button
          label={isLastQuestion ? "Finish" : "Next"}
          onClick={handleNextBtnClick}
          isArrowIcon
          disabled={selectedValues.length === 0}
        ></Button>
      </footer>
    </div>
  );
};

export default Question;
