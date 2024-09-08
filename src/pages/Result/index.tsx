import questionbackground from "../../assets/backgroundImage/questionBackground.svg";
import semiCircleIcon from "../../assets/backgroundImage/semiCircleBackground.svg";
import halfCircleIcon from "../../assets/backgroundImage/halfColorCircle.svg";
import Button from "../../components/Button";
import { QuizContext } from "../../context/QuizContext";
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
    <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-[#AF9CF3] to-white relative gap-4 overflow-auto">
      <div className="flex-none">
        <img
          src={questionbackground}
          alt="questionBackground"
          className=" lg:h-80"
        ></img>
      </div>
      <div className="flex-1 rounded-t-3xl bg-white w-full mt-12 sm:mt-14 lg:mt-16 mb-20 sm:mb-28 lg:mb-32 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 p-6 md:p-8 lg:p-12">
        <p className="font-nunito font-extrabold text-3xl md:text-4xl lg:text-5xl text-black pt-6 md:pt-8 lg:pt-10">
          Your Result
        </p>
        <Speedometer value={percentageValue} />
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full">
          <div className=" w-full text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:gap-5 lg:gap-7 text-black px-6 py-6 md:p-7 lg:p-8 bg-green-100 rounded-lg md:rounded-xl lg:rounded-2xl">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#44B77B]"></div>
            {result[0]}
            <span className="text-gray-500 font-semibold">Correct</span>
          </div>
          <div className=" w-full text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-3 md:gap-5 lg:gap-7 text-black px-6 py-6 md:p-7 lg:p-8 bg-red-100 rounded-lg md:rounded-xl lg:rounded-2xl">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FF3B3F]"></div>
            {result[1]}
            <span className="text-gray-500 font-semibold">Incorrect</span>
          </div>
        </div>
      </div>
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
    <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
      <img src={semiCircleIcon} alt="semi-circle-icon" />
      <div className="absolute top-0 left-0">
        <img src={halfCircleIcon} alt="half-circle-icon" />
      </div>
      <div className="w-56 h-56 md:w-64 md:h-64 lg:h-72 lg:w-72 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-solid border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E1E28] font-nunito">
            {value}%
          </span>
        </div>
      </div>
      <div
        style={{ rotate: `${rotateValue}deg` }}
        className={`w-56 md:w-64 lg:w-72 p-1 bg-transparent absolute top-1/2 right-[15%] md:right-[16%] transform translate-y-1/2
      before:content-['►'] before:absolute before:w-0 before:h-0 before:top-9 md:before:top-12 lg:before:top-15 before:left-0 before:rotate-[180deg]
      before:text-[40px] md:before:text-[50px] lg:before:text-[60px]`}
      ></div>
    </div>
  );
};
