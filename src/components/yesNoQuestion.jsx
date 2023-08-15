import Link from "next/link";
import React from "react";

const YesNoQuestion = ({ Question1, Question2, noFunc, yesData }) => {
  return (
    <div className="lg:p-2 p-1 bg-neutral text-neutral-content rounded-md">
      <p className="font-semibold text-xs flex flex-row justify-center ">
        {Question1}
      </p>
      <p className="font-semibold text-xs flex flex-row justify-center ">
        {Question2}
      </p>
      <div className="flex flex-row justify-evenly mt-3">
        <button className="btn btn-xs btn-ghost" onClick={noFunc}>
          back
        </button>
        <Link
          className="btn btn-xs btn-primary"
          href={{
            pathname: "/reserve/",
            query: {
              order_type: yesData.orderType,
              currency: yesData.currency,
              currency_amount: yesData.currencyAmount,
              eur_amount: yesData.eurAmount,
            },
          }}
        >
          reserver
        </Link>
      </div>
    </div>
  );
};

export default YesNoQuestion;
