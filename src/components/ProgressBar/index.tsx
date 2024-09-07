interface IprogressBar {
  currentValue: number | string;
  total: number | string;
}

const ProgressBar = ({ currentValue, total }: IprogressBar) => {
  return (
    <div className="w-[140px] h-[140px] bg-white flex items-center justify-center rounded-full">
      <div className="w-[120px] h-[120px] bg-gray-200 flex items-center justify-center rounded-full">
        <div className="w-[100px] h-[100px] bg-white flex items-center justify-center rounded-full font-nunito italic font-black text-black text-6xl">
          <div>
            {currentValue}
            <span className="text-gray-400 text-xl self-end">/{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
