interface IStartButton {
  label: string;
  handleClick: Function;
}

const StartButton = ({ label, handleClick }: IStartButton) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="h-[80px] sm:h-[120px] w-full bg-[#FF3B3F] rounded-full cursor-pointer"
        onClick={() => handleClick()}
      >
        <span className="font-nunito text-white font-black text-[32px] leading-[50px] sm:text-[48px] sm:leading-[67px]">
          {label}
        </span>
      </button>
    </div>
  );
};

export default StartButton;
