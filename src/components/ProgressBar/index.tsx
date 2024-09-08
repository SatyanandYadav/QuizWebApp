interface IprogressBar {
  currentValue: number | string;
  total: number | string;
}

const ProgressBar = ({ currentValue, total }: IprogressBar) => {
  const progressPercentage = (Number(currentValue) / Number(total)) * 100;

  const circleStyle = {
    background: `conic-gradient(
      #44B77B ${progressPercentage * 3.6}deg, 
      #e0e0e0 0deg)`,
  };
  return (
    <div className="w-[140px] h-[140px] bg-white flex items-center justify-center rounded-full">
      <div className="w-[120px] h-[120px] bg-gray-200 flex items-center justify-center rounded-full">
        <div
          className="w-[120px] h-[120px] bg-transparent flex items-center justify-center rounded-full"
          style={circleStyle}
        >
          <div className="w-[100px] h-[100px] bg-white flex items-center justify-center rounded-full font-nunito italic font-black text-black text-6xl">
            <div>
              {currentValue}
              <span className="text-gray-400 text-xl self-end">/{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
