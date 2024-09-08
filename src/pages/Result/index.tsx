import questionbackground from "../../assets/backgroundImage/questionBackground.svg";
import semiCircleIcon from "../../assets/backgroundImage/semiCircleBackground.svg";
import halfCircleIcon from "../../assets/backgroundImage/halfColorCircle.svg";
import Button from "../../components/Button";
import { QuizContext } from "../../assets/context/QuizContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { reportData, setReportData } = useContext(QuizContext);
  const result = reportData.reduce(
    (finalResult, data) => {
      if (data.correct) {
        finalResult[0]++;
      } else {
        finalResult[1]++;
      }
      return finalResult;
    },
    [0, 0]
  );
  const percentageValue = Math.floor((result[0] / reportData.length) * 100);
  return (
    <div className="flex flex-col h-screen w-screen bg-[#AF9CF3] relative gap-4">
      <div className="flex-none">
        <img
          src={questionbackground}
          alt="questionBackground"
          className="sm:w-full"
        ></img>
      </div>
      <div className="flex-1 rounded-t-3xl bg-white w-full mt-12 flex flex-col items-center gap-8 p-6">
        <p className="font-nunito font-extrabold text-3xl text-black pt-6">
          Your Result
        </p>
        <Speedometer value={percentageValue} />
        <div className="flex flex-col items-center gap-6 w-full">
          <div className=" w-full text-xl font-bold flex items-center gap-3 text-black px-6 py-6 bg-green-100 rounded-lg">
            <div className="w-5 h-5 rounded-full bg-[#44B77B]"></div>
            {result[0]}
            <span className="text-gray-500 font-semibold">Correct</span>
          </div>
          <div className=" w-full text-xl font-bold flex items-center gap-3 text-black px-6 py-6 bg-red-100 rounded-lg">
            <div className="w-5 h-5 rounded-full bg-[#FF3B3F]"></div>
            {result[1]}
            <span className="text-gray-500 font-semibold">Incorrect</span>
          </div>
        </div>
      </div>
      {/* <QuestionCard /> */}
      <footer className="fixed bottom-0 left-0 right-0 p-5 sm:p-10">
        <Button
          label="Start Again"
          onClick={() => {
            navigate("/");
            setReportData([]);
          }}
        ></Button>
      </footer>
    </div>
  );
};

export default Result;

export const Speedometer = ({ value }: { value: number }) => {
  const rotateValue = (value / 100) * 180;
  return (
    // <>
    <div className="relative h-[400px] w-[400px]">
      <img src={semiCircleIcon} alt="semi-circle-icon" />
      <div className="absolute top-0 left-0">
        <img src={halfCircleIcon} alt="half-circle-icon" />
      </div>
      <div className="w-64 h-64 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-solid border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-5xl font-black text-[#1E1E28] font-nunito">
            {value}%
          </span>
        </div>
      </div>
      <div
        style={{ rotate: `${rotateValue}deg` }}
        className={`w-64 p-2 bg-transparent absolute top-1/2 right-[18%] transform translate-y-1/2
      before:content-["\\25BA"] before:absolute before:w-0 before:h-0 before:top-12 before:left-0 before:rotate-[180deg]
      before:text-[50px]`}
      ></div>
    </div>
  );
};
