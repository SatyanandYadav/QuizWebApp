import companyLogo from "../../assets/icons/companyLogo.svg";
import StartButton from "../../components/StartButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/question");
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-white to-[#AF9CF3] flex flex-col justify-between">
      <header className="w-full pt-7 sm:pt-10 flex items-center justify-center">
        <img
          src={companyLogo}
          alt="company-logo"
          className="h-[46px] sm:h-[60px]"
        />
      </header>
      <div className="w-[300px] h-[275px] sm:w-[400px] sm:h-[375px] bg-white rounded-full shadow-lg self-center flex items-center justify-center">
        <span className="font-poppins font-extrabold text-[50px] leading-[60px] sm:text-[80px] sm:leading-[90px] text-[#FF3B3C]">
          Quiz
        </span>
      </div>
      <footer className="p-8 sm:p-14">
        <StartButton label="Start" handleClick={handleStartButtonClick} />
      </footer>
    </div>
  );
};

export default Home;
