import React from "react";

const YesNoQuestion = ({ Question, noFunc, yesFunc }) => {
  return (
    <div className="card lg:p-4 p-1 bg-secondary ">
      <p className="font-semibold lg:text-lg text-xs flex flex-row justify-center ">
        {Question}
      </p>
      <div className="flex flex-row justify-evenly mt-3">
        <button className="btn btn-xs  btn-error" onClick={noFunc}>
          NO
        </button>
        <button className="btn btn-xs  btn-success" onClick={yesFunc}>
          YES
        </button>
      </div>
    </div>
  );
};

export default YesNoQuestion;
