import React, { useState } from "react";
import FlagCoded from "../components/flagCoded";

const ExchangeTableRow = ({
  code,
  currency,
  name,
  buyRate,
  sellRate,
  index,
}) => {
  const [sellNum1, setSellNum1] = useState();
  const [sellNum2, setSellNum2] = useState();
  const [buyNum1, setBuyNum1] = useState();
  const [buyNum2, setBuyNum2] = useState();

  function changeBuyNum1(e) {
    setBuyNum2(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setBuyNum1(e.target.value.replace(/\D/, "") * buyRate)
      : setBuyNum1("");
  }

  function changeBuyNum2(e) {
    setBuyNum1(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setBuyNum2(Math.ceil(e.target.value.replace(/\D/, "")) * buyRate)
      : setBuyNum2("");
  }

  function changeSellNum1(e) {
    setSellNum2(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setSellNum1(e.target.value.replace(/\D/, "") * sellRate)
      : setSellNum1("");
  }

  function changeSellNum2(e) {
    setSellNum1(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setSellNum2(Math.ceil(e.target.value.replace(/\D/, "")) * sellRate)
      : setSellNum2("");
  }

  return (
    // <div className={index % 2 == 0 ? "p-4  bg-base-200" : "p-4"}>
    //   <div className="flex-row flex gap-2 lg:justify-center place-items-center ">
    //     <FlagCoded code={code} />
    //     <p className="font-semibold text-2xl">{name}</p>
    //   </div>
    //   <div className="flex flex-row lg:justify-center place-items-center mt-5">
    //     <div className="  w-full">
    //       <p className="flex flex-row justify-center text-neutral-500 font-semibold p-2">
    //         ON ACHETE
    //       </p>
    //       <div className="flex lg:flex-row flex-col justify-center gap-4">
    //         <div>
    //           <input
    //             className="input input-bordered input-md lg:h-10 resize-none lg:input-lg lg:w-36 w-20 px-2 "
    //             placeholder="EUR"
    //             value={buyNum1}
    //             onChange={changeBuyNum2}
    //           />
    //           <p className="text-sm lg:text-sm p-1">1 EUR = 1 {currency}</p>
    //         </div>
    //         <div>
    //           <input
    //             className="input input-bordered input-md lg:h-10 resize-none lg:input-lg lg:w-36 w-20 px-2 "
    //             placeholder={currency}
    //             value={buyNum2}
    //             onChange={changeBuyNum1}
    //           />
    //           <p className="text-sm lg:text-sm p-1">1 {currency} = 1 EUR</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:divider lg:divider-horizontal">OR</div>
    //     <div className="  w-full">
    //       <p className="flex flex-row justify-center text-neutral-500 font-semibold p-2">
    //         ON VEND
    //       </p>
    //       <div className="flex lg:flex-row flex-col justify-center gap-4">
    //         <div>
    //           <input
    //             className="input input-bordered input-md lg:h-10 resize-none lg:input-lg lg:w-36 w-20 px-2 "
    //             placeholder="EUR"
    //             value={sellNum1}
    //             onChange={changeSellNum2}
    //           />
    //           <p className="text-sm lg:text-sm p-1">1 USD = 1 EUR</p>
    //         </div>
    //         <div>
    //           <input
    //             className="input input-bordered input-md lg:h-10 resize-none lg:input-lg lg:w-36 w-20 px-2 "
    //             placeholder={currency}
    //             value={sellNum2}
    //             onChange={changeSellNum1}
    //           />
    //           <p className="text-sm lg:text-sm p-1">1 EUR = 1 USD</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-row">
    //         <div></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
              1 {currency} = {sellRate} EUR
            </p>
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 EUR = {sellRate} {currency}
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
              1 {currency} = {buyRate} EUR
            </p>
            <p className="text-xs text-neutral-500 lg:text-sm ">
              1 EUR = {buyRate} {currency}
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExchangeTableRow;
