import { IQuestion } from "../../interface";
import ProgressBar from "../ProgressBar";
import QuestionOption from "../QuestionOption";

interface IQuestionCardData {
  questionData: IQuestion | undefined;
  currentValue: number;
  totalQuestionLength: number;
  handleOptionChange: (id: string, checked: boolean) => void;
}

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtVNegGLnKdVRcAm_9vG7Xw9lhJ5xkvBWpg&s";

const QuestionCard = ({
  questionData,
  currentValue,
  totalQuestionLength,
  handleOptionChange,
}: IQuestionCardData) => {
  return (
    <div className="relative rounded-3xl bg-white w-full mt-12 pt-24 mb-20">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ProgressBar currentValue={currentValue} total={totalQuestionLength} />
      </div>
      <div className="font-nunito font-black text-black text-2xl px-5">
        {questionData?.question_text}
      </div>
      {questionData?.image && (
        <div className="flex w-full items-center justify-center p-5">
          <img
            src={questionData?.image}
            alt="question-image"
            className="min-h-60 max-h-96 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-3 p-5">
        {questionData?.options.map((option) => {
          return (
            <QuestionOption
              key={`${questionData.id}` + option.id}
              optionData={option}
              handleOptionChange={handleOptionChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
