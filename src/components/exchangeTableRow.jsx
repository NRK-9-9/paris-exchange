import React, { useState } from "react";
import YesNoQuestion from "./yesNoQuestion";
import Image from "next/image";

import ExchangeIcon from "./icons/exchangeIcon";
import FlagCoded from "./flagCoded";

const ExchangeTableRow = ({
  code,
  currency,
  name,
  Rate,
  index,
  type,
  questionCUR,
  setquestionCUR,
}) => {
  const [buyCur, setbuyCur] = useState("");
  const [buyEur, setbuyEur] = useState("");

  function changebuyCur(e) {
    setbuyEur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyCur((e.target.value.replace(/\D/, "") * Rate).toFixed(4))
      : setbuyCur("");
  }

  function changebuyEur(e) {
    setbuyCur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyEur((e.target.value.replace(/\D/, "") / Rate).toFixed(4))
      : setbuyEur("");
  }

  const [reserveType, setReserveType] = useState();

  function setQuestionCur() {
    setquestionCUR(currency);
  }

  const color = index % 2 == 0 ? "bg-base-200" : "bg-base-100";

  return (
    <tr
      className={`${color} hover:transition-colors hover:bg-[#13BFAB] hover:bg-opacity-20 hover:text-primary-content text-neutral-500`}
    >
      <td className="p-2">
        <FlagCoded code={code} />
        <p className="text-sm ">{name}</p>
      </td>
      <td>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <p className="text-md font-bold  lg:text-lg ">
            1 EUR = {(1 * Rate).toFixed(4)} {currency}
          </p>
          <div className="divider lg:divider-horizontal hidden lg:block">
            <ExchangeIcon />
          </div>
          <p className="text-xs  lg:text-lg ">
            1 {currency} = {(1 / Rate).toFixed(4)} EUR
          </p>
        </div>
      </td>
      <td className="p-2 flex justify-end">
        {questionCUR != currency ? (
          <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-neutral-500 text-center tracking-widest">
                PE Vend
              </p>
              <div className="gap-1 flex place-items-center">
                <input
                  className="text-neutral-700 input input-bordered font-semibold lg:input-xs input-xs resize-none w-24 lg:w-32  "
                  value={buyCur}
                  onChange={changebuyEur}
                  placeholder={`Saisir en ${currency}`}
                ></input>
                <button
                  className="btn btn-xs btn-secondary hover:btn-info"
                  onClick={() => {
                    setQuestionCur();
                    setReserveType("1");
                    console.log(reserveType);
                  }}
                >
                  {">>"}
                </button>
              </div>
              <div className="gap-1 flex place-items-center">
                <input
                  className="text-neutral-700 input input-bordered font-semibold lg:input-xs input-xs resize-none w-24 lg:w-32  "
                  value={buyEur}
                  onChange={changebuyCur}
                  placeholder="Saisir en EUR"
                ></input>
                <button
                  className="btn btn-xs btn-secondary hover:btn-info "
                  onClick={() => {
                    setQuestionCur();
                    setReserveType("2");
                    console.log(reserveType);
                  }}
                >
                  {">>"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {type === "sell" ? (
              <div>
                {reserveType === "1" ? (
                  <YesNoQuestion
                    Question1={`Vous auriez ${buyCur} ${currency}`}
                    Question2={` pour ${buyEur} EUR?`}
                    noFunc={() => setquestionCUR(null)}
                    yesData={{
                      orderType: "buy",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : reserveType === "2" ? (
                  <YesNoQuestion
                    Question1={`Pour ${buyEur} EUR `}
                    Question2={`vous auriez ${buyCur} ${currency}?`}
                    noFunc={() => setquestionCUR(null)}
                    yesData={{
                      orderType: "buy",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : null}
              </div>
            ) : type === "buy" ? (
              <div>
                {reserveType === "1" ? (
                  <YesNoQuestion
                    Question1={`Pour ${buyEur} EUR `}
                    Question2={`vous auriez ${buyCur} ${currency}?`}
                    noFunc={() => setquestionCUR(null)}
                    yesData={{
                      orderType: "sell",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : reserveType === "2" ? (
                  <YesNoQuestion
                    Question1={`Vous auriez ${buyCur} ${currency}`}
                    Question2={`pour ${buyEur} EUR?`}
                    noFunc={() => setquestionCUR(null)}
                    yesData={{
                      orderType: "sell",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : (
                  <p>1</p>
                )}
              </div>
            ) : (
              <p>2</p>
            )}
          </div>
        )}
      </td>
    </tr>
  );
};

export default ExchangeTableRow;
