import { IStartButton } from "../../interface";

const StartButton = ({ label, handleClick }: IStartButton) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="h-[50px] sm:h-[100px] w-full bg-[#FF3B3F] rounded-full cursor-pointer"
        onClick={() => handleClick()}
      >
        <span className="font-nunito text-white font-black text-[22px] leading-[30px] sm:text-[48px] sm:leading-[67px]">
          {label}
        </span>
      </button>
    </div>
  );
};

export default StartButton;
