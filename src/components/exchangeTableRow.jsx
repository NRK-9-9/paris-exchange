import React, { useState } from "react";
import FlagCoded from "../components/flagCoded";
import YesNoQuestion from "./yesNoQuestion";

const ExchangeTableRow = ({ code, currency, name, Rate, index, type }) => {
  const [buyCur, setbuyCur] = useState("");
  const [buyEur, setbuyEur] = useState("");

  const color = index % 2 == 0 ? "bg-base-200" : "bg-base-100";

  const [VenteRes, setVenteRes] = useState(false);
  const [AchatRes, setAchatRes] = useState(false);

  function changebuyCur(e) {
    setbuyEur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyCur((e.target.value.replace(/\D/, "") * Rate).toFixed(3))
      : setbuyCur("");
  }

  function changebuyEur(e) {
    setbuyCur(e.target.value.replace(/\D/, ""));
    e.target.value != ""
      ? setbuyEur((e.target.value.replace(/\D/, "") / Rate).toFixed(3))
      : setbuyEur("");
  }

  return (
    <tr
      className={`${color} hover:bg-primary hover:text-primary-content text-neutral-500`}
    >
      <td className="p-2">
        <FlagCoded code={code} />
        <p className="text-sm ">{name}</p>
      </td>
      <td>
        <div className="flex flex-col ">
          <p className="text-md font-bold  lg:text-lg ">
            1 EUR = {(1 * Rate).toFixed(3)} {currency}
          </p>
          <p className="text-xs  lg:text-sm ">
            1 {currency} = {(1 / Rate).toFixed(3)} EUR
          </p>
        </div>
      </td>
      <td className="p-2">
        {!VenteRes ? (
          <div className="lg:flex lg:flex-row gap-1 lg:gap-4">
            <div className="flex flex-col gap-1">
              <div className="gap-1 flex place-items-center">
                <input
                  className="text-neutral-700 input input-bordered font-semibold lg:input-xs input-xs resize-none w-24 "
                  value={buyCur}
                  onChange={changebuyEur}
                  placeholder={`Saisir en ${currency}`}
                ></input>
                <button
                  className="btn btn-xs btn-primary hover:btn-info"
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
                  className="text-neutral-700 input input-bordered font-semibold lg:input-xs input-xs resize-none w-24 "
                  value={buyEur}
                  onChange={changebuyCur}
                  placeholder="Saisir en EUR"
                ></input>
                <button
                  className="btn btn-xs btn-primary hover:btn-info "
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
          </div>
        ) : (
          <div>
            {type === "sell" ? (
              <div>
                {VenteRes === "num2" ? (
                  <YesNoQuestion
                    Question1={`Changer ${buyCur} ${currency}`}
                    Question2={` pour ${buyEur} EUR?`}
                    noFunc={() => setVenteRes(false)}
                    yesData={{
                      orderType: "buy",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : (
                  <YesNoQuestion
                    Question1={`Pour ${buyEur} EUR `}
                    Question2={`changer ${buyCur} ${currency}?`}
                    noFunc={() => setVenteRes(false)}
                    yesData={{
                      orderType: "buy",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                )}
              </div>
            ) : (
              <div>
                {AchatRes === "num2" ? (
                  <YesNoQuestion
                    Question1={`Pour ${buyEur} EUR `}
                    Question2={`changer ${buyCur} ${currency}?`}
                    noFunc={() => setAchatRes(false)}
                    yesData={{
                      orderType: "sell",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                ) : (
                  <YesNoQuestion
                    Question1={`Changer ${buyCur} ${currency}`}
                    Question2={`pour ${buyEur} EUR?`}
                    noFunc={() => setAchatRes(false)}
                    yesData={{
                      orderType: "sell",
                      currency: currency,
                      currencyAmount: buyCur,
                      eurAmount: buyEur,
                    }}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </td>
    </tr>
  );
};

export default ExchangeTableRow;
