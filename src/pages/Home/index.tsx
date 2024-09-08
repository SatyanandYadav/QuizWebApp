import { useContext } from "react";
import companyLogo from "../../assets/icons/companyLogo.svg";
import StartButton from "../../components/StartButton";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../assets/context/QuizContext";
import useCreateQuiz from "../../api/hooks/useCreateQuiz";
import { UserData } from "../../constants/common";

const Home = () => {
  const navigate = useNavigate();
  const { setQuizId } = useContext(QuizContext);
  const { mutate } = useCreateQuiz();

  const handleStartButtonClick = () => {
    mutate(UserData, {
      onSuccess: (response) => {
        console.log(response.data);
        if (response.data.quizId) setQuizId(response.data.quizId);
        navigate("/question");
      },
      onError: (error) => {
        console.error("Oops, something went wrong. Please try again.", error);
      },
    });
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-white to-[#AF9CF3] flex flex-col justify-between">
      <header className="w-full pt-5 sm:pt-10 flex items-center justify-center">
        <img
          src={companyLogo}
          alt="company-logo"
          className="h-[32px] sm:h-[60px]"
        />
      </header>
      <div className="w-[200px] h-[190px] sm:w-[400px] sm:h-[375px] bg-white rounded-full shadow-lg self-center flex items-center justify-center">
        <span className="font-poppins font-extrabold text-[36px] leading-[46px] sm:text-[80px] sm:leading-[90px] text-[#FF3B3C]">
          Quiz
        </span>
      </div>
      <footer className="p-6 sm:p-14">
        <StartButton label="Start" handleClick={handleStartButtonClick} />
      </footer>
    </div>
  );
};

export default Home;
