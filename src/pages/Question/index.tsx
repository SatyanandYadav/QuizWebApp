import questionbackground from "../../assets/backgroundImage/questionBackground.svg";
import Button from "../../components/Button";

const Question = () => {
  return (
    <div className="h-[1500px] w-screen bg-[#AF9CF3] relative">
      <div>
        <img
          src={questionbackground}
          alt="questionBackground"
          className="sm:w-full"
        ></img>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 p-5 sm:p-10">
        <Button label="Next" onClick={() => {}} isArrowIcon></Button>
      </footer>
    </div>
  );
};

export default Question;
