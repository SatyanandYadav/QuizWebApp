import rightArrow from "../../assets/icons/rightArrow.svg";

interface IButton {
  label: string;
  onClick: Function;
  isArrowIcon?: Boolean;
}

const Button = ({ label, onClick, isArrowIcon = false }: IButton) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`h-[50px] sm:h-[100px] px-6 sm:p-10 w-full bg-[#FF3B3F] rounded-full cursor-pointer flex items-center ${
          isArrowIcon ? "justify-between" : "justify-center"
        }`}
        onClick={() => onClick()}
      >
        {isArrowIcon && <div></div>}
        <span className="font-nunito text-white font-black text-[18px] leading-[24px] sm:text-[36px] sm:leading-[50px]">
          {label}
        </span>
        {isArrowIcon && (
          <img src={rightArrow} alt="right-arrow" className="h-3 sm:h-5" />
        )}
      </button>
    </div>
  );
};

export default Button;
