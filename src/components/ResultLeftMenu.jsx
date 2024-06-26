import React from "react";

const ResultLeftMenu = ({ wpm, accuracy }) => {
  return (
    <div className="w-48 flex-col justify-center text-center font-semibold mt-6">
      <div>
        <p className="text-2xl">WPM</p>
        <h3 className="text-[45px] text-amber-300">{wpm}</h3>
      </div>
      <div className="mt-4">
        <p className="text-2xl">Accuracy</p>
        <h3 className="text-[45px] text-amber-300">
          {accuracy ? accuracy : 0}%
        </h3>
      </div>
    </div>
  );
};

export default ResultLeftMenu;
