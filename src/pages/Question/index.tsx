import questionbackground from "../../assets/backgroundImage/questionBackground.svg";
import Button from "../../components/Button";
import QuestionCard from "../../components/QuestionCard";

const Question = () => {
  return (
    <div className="w-screen bg-[#AF9CF3] relative pb-1">
      <div>
        <img
          src={questionbackground}
          alt="questionBackground"
          className="sm:w-full"
        ></img>
      </div>
      <QuestionCard />
      <footer className="fixed bottom-0 left-0 right-0 p-5 sm:p-10">
        <Button label="Next" onClick={() => {}} isArrowIcon></Button>
      </footer>
    </div>
  );
};

export default Question;
