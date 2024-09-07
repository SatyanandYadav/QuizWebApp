import uncheckedIcon from "../../assets/icons/uncheckedIcon.svg";
import checkedIcon from "../../assets/icons/checkedIcon.svg";

const QuestionOption = () => {
  return (
    <div className="w-full">
      <input type="checkbox" id="1" className="hidden peer"></input>
      <label
        htmlFor="1"
        className="flex items-center px-5 py-8 bg-[#F3F4FA] peer-checked:bg-white rounded-lg border-2 border-solid peer-checked:border-[#44B77B] peer-checked:[&_span]:hidden peer-checked:[&_p]:block"
      >
        <span>
          <img src={uncheckedIcon} alt="unchecked-icon" className="h-7" />
        </span>
        <p className="hidden">
          <img src={checkedIcon} alt="checked-icon" className="h-7" />
        </p>
        <div className="font-nunito font-semibold text-xl text-black ml-4 peer-checked:text-red-600">
          Data Analysis
        </div>
      </label>
    </div>
  );
};

export default QuestionOption;
