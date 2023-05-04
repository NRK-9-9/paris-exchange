import React, { useState } from "react";
import FlagCoded from "../components/flagCoded";
import YesNoQuestion from "./yesNoQuestion";

const ExchangeTableRow = ({ code, currency, name, buyRate, sellRate }) => {
  const [sellCur, setsellCur] = useState("");
  const [sellEur, setsellEur] = useState("");
  const [buyCur, setbuyCur] = useState("");
  const [buyEur, setbuyEur] = useState("");

  const [VenteRes, setVenteRes] = useState(false);
  const [AchatRes, setAchatRes] = useState(false);

  function changebuyCur(e) {
    setbuyEur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyCur((e.target.value.replace(/\D/, "") * sellRate).toFixed(3))
      : setbuyCur("");
  }

  function changebuyEur(e) {
    setbuyCur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyEur((e.target.value.replace(/\D/, "") / sellRate).toFixed(3))
      : setbuyEur("");
  }

  function changesellCur(e) {
    setsellEur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setsellCur((e.target.value.replace(/\D/, "") * buyRate).toFixed(3))
      : setsellCur("");
    console.log(e.target.value);
  }

  function changesellEur(e) {
    setsellCur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setsellEur((e.target.value.replace(/\D/, "") / buyRate).toFixed(3))
      : setsellEur("");
  }

  return (
    <tr className="hover">
      <th className="pl-1 lg:flex hidden lg:justify-center pt-5">
        <FlagCoded code={code} render="h-20 " />
      </th>
      <td className="w-28 gap-1">
        <p className="truncate font-semibold w-20 lg:pb-0 pb-1 lg:text-md">
          {name}
        </p>
        <FlagCoded code={code} render="lg:hidden block " />
      </td>
      <td className="flex-row">
        {!AchatRes ? (
          <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
            <div className="flex flex-col gap-2">
              <div className="gap-1 flex place-items-center">
                <input
                  className="input input-bordered font-semibold lg:input-xs input-xs resize-none lg:w-20 w-16 "
                  value={sellCur}
                  onChange={changesellEur}
                  placeholder={currency}
                ></input>
                <button
                  className="btn btn-xs btn-primary "
                  disabled={sellCur === ""}
                  onClick={() => {
                    setAchatRes(true);
                    setVenteRes(false);
                  }}
                >
                  {">>"}
                </button>
              </div>
              <div className="gap-1 flex place-items-center">
                <input
                  className="input input-bordered font-semibold lg:input-xs input-xs resize-none lg:w-20 w-16 "
                  value={sellEur}
                  onChange={changesellCur}
                  placeholder="EUR"
                ></input>
                <button
                  className="btn btn-xs btn-primary "
                  disabled={sellEur === ""}
                  onClick={() => {
                    setAchatRes("num2");
                    setVenteRes(false);
                  }}
                >
                  {">>"}
                </button>
              </div>
            </div>

            <div className="mt-1 mb-0">
              <p className="text-md font-bold text-neutral-500 lg:text-sm ">
                1 {currency} = {(1 / buyRate).toFixed(3)} EUR
              </p>
              <p className="text-xs text-neutral-500 lg:text-sm ">
                1 EUR = {(1 * buyRate).toFixed(3)} {currency}
              </p>
            </div>
          </div>
        ) : (
          <div>
            {AchatRes === "num2" ? (
              <YesNoQuestion
                Question={`Pour ${sellEur} EUR changer ${sellCur} ${currency}`}
                noFunc={() => setAchatRes(false)}
              />
            ) : (
              <YesNoQuestion
                Question={`Changer ${sellCur} ${currency} pour ${sellEur} EUR`}
                noFunc={() => setAchatRes(false)}
              />
            )}
          </div>
        )}
      </td>

      <td className="flex-row">
        {!VenteRes ? (
          <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
            <div className="flex flex-col gap-2">
              <div className="gap-1 flex place-items-center">
                <input
                  className="input input-bordered font-semibold lg:input-xs input-xs resize-none lg:w-20 w-16 "
                  value={buyCur}
                  onChange={changebuyEur}
                  placeholder={currency}
                ></input>
                <button
                  className="btn btn-xs btn-primary "
                  disabled={buyCur === ""}
                  onClick={() => {
                    setVenteRes(true);
                    setAchatRes(false);
                  }}
                >
                  {">>"}
                </button>
              </div>
              <div className="gap-1 flex place-items-center">
                <input
                  className="input input-bordered font-semibold lg:input-xs input-xs resize-none lg:w-20 w-16 "
                  value={buyEur}
                  onChange={changebuyCur}
                  placeholder="EUR"
                ></input>
                <button
                  className="btn btn-xs btn-primary "
                  disabled={buyEur === ""}
                  onClick={() => {
                    setVenteRes("num2");
                    setAchatRes(false);
                  }}
                >
                  {">>"}
                </button>
              </div>
            </div>

            <div className="mt-1 mb-0">
              <p className="text-md font-bold text-neutral-500 lg:text-sm ">
                1 {currency} = {(1 / sellRate).toFixed(3)} EUR
              </p>
              <p className="text-xs text-neutral-500 lg:text-sm ">
                1 EUR = {(1 * sellRate).toFixed(3)} {currency}
              </p>
            </div>
          </div>
        ) : (
          <div>
            {VenteRes === "num2" ? (
              <YesNoQuestion
                Question={`Changer ${buyCur} ${currency} pour ${buyEur} EUR`}
                noFunc={() => setVenteRes(false)}
              />
            ) : (
              <YesNoQuestion
                Question={`Pour ${buyEur} EUR changer ${buyCur} ${currency}`}
                noFunc={() => setVenteRes(false)}
              />
            )}
          </div>
        )}
      </td>
    </tr>
  );
};

export default ExchangeTableRow;
