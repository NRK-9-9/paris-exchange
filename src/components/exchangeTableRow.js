import React, { useState } from "react";
import FlagCoded from "../components/flagCoded";

const ExchangeTableRow = ({ code, currency, name, buyRate, sellRate }) => {
  const [sellNum1, setSellNum1] = useState();
  const [sellNum2, setSellNum2] = useState();
  const [buyNum1, setBuyNum1] = useState();
  const [buyNum2, setBuyNum2] = useState();

  function changeBuyNum1(e) {
    setBuyNum2(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setBuyNum1((e.target.value.replace(/\D/, "") * sellRate).toFixed(3))
      : setBuyNum1("");
  }

  function changeBuyNum2(e) {
    setBuyNum1(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setBuyNum2((e.target.value.replace(/\D/, "") / sellRate).toFixed(3))
      : setBuyNum2("");
  }

  function changeSellNum1(e) {
    setSellNum2(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setSellNum1((e.target.value.replace(/\D/, "") * buyRate).toFixed(3))
      : setSellNum1("");
  }

  function changeSellNum2(e) {
    setSellNum1(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setSellNum2((e.target.value.replace(/\D/, "") / buyRate).toFixed(3))
      : setSellNum2("");
  }

  return (
    <tr className="hover">
      <th className="pl-1 lg:flex hidden lg:justify-center pt-10">
        <FlagCoded code={code} render="h-20 " />
      </th>
      <td className="w-28 gap-1">
        <p className="truncate font-semibold w-20 lg:pb-0 pb-1 lg:text-md">
          {name}
        </p>
        <FlagCoded code={code} render="lg:hidden block " />
      </td>
      <td className="flex-row">
        <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
          <div className="flex flex-col gap-2">
            <input
              className="input input-bordered font-semibold lg:input-sm input-xs resize-none lg:w-28 w-20  "
              placeholder={currency}
              value={sellNum1}
              onChange={changeSellNum2}
            ></input>
            <input
              className="input input-bordered font-semibold lg:input-sm input-xs resize-none lg:w-28 w-20  "
              placeholder="EUR"
              value={sellNum2}
              onChange={changeSellNum1}
            ></input>
          </div>

          <div className="mt-1 mb-0">
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 {currency} = {(1 / buyRate).toFixed(3)} EUR
            </p>
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 EUR = {(1 * buyRate).toFixed(3)} {currency}
            </p>
          </div>
        </div>
      </td>
      <td className="flex-row">
        <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
          <div className="flex flex-col gap-2">
            <input
              className="input input-bordered font-semibold lg:input-sm input-xs resize-none lg:w-28 w-20  "
              placeholder={currency}
              value={buyNum1}
              onChange={changeBuyNum2}
            ></input>
            <input
              className="input input-bordered font-semibold lg:input-sm input-xs resize-none lg:w-28 w-20  "
              placeholder="EUR"
              value={buyNum2}
              onChange={changeBuyNum1}
            ></input>
          </div>
          <div className="mt-1 mb-0">
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 {currency} = {1 / sellRate.toFixed(3)} EUR
            </p>
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 EUR = {(1 * sellRate).toFixed(3)} {currency}
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExchangeTableRow;
