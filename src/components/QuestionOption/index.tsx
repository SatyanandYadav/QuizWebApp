import uncheckedIcon from "../../assets/icons/uncheckedIcon.svg";
import checkedIcon from "../../assets/icons/checkedIcon.svg";
import { IOption } from "../../interface";

interface IQuestionOption {
  optionData: IOption;
  handleOptionChange: (id: string, checked: boolean) => void;
}

const QuestionOption = ({
  optionData,
  handleOptionChange,
}: IQuestionOption) => {
  return (
    <div className="w-full">
      <input
        type="checkbox"
        id={`${optionData?.id}`}
        className="hidden peer"
        defaultChecked={false}
        onChange={(event) => {
          handleOptionChange(event.target.value, event.target.checked);
        }}
        value={optionData?.id}
      ></input>
      <label
        htmlFor={`${optionData?.id}`}
        className="flex items-center px-5 py-8 bg-[#F3F4FA] peer-checked:bg-white rounded-lg 
        border-2 border-solid peer-checked:border-[#44B77B] peer-checked:[&_span]:hidden peer-checked:[&_p]:block"
      >
        <span>
          <img src={uncheckedIcon} alt="unchecked-icon" className="h-7" />
        </span>
        <p className="hidden">
          <img src={checkedIcon} alt="checked-icon" className="h-7" />
        </p>
        <div className="font-nunito font-semibold text-xl text-black ml-4 peer-checked:text-red-600">
          {optionData?.name}
        </div>
      </label>
    </div>
  );
};

export default QuestionOption;
