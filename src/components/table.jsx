import React, { useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
export default function Table({
  exchangeData,
  type,
  selectedCountry,
  toggle,
  dataToggle,
}) {
  const [questionCUR, setquestionCUR] = useState();

  return (
    <div>
      <table className="mt-5 lg:w-[60vw]">
        <thead className="">
          <tr>
            <th className="bg-neutral-focus  text-sm text-neutral-content px-6 py-3 rounded-tl-lg">
              Pays
            </th>
            <th
              className="bg-neutral-focus  text-sm text-neutral-content px-6 py-3 rounded-tr-lg "
              colSpan={2}
            >
              {type === "sell"
                ? "PARIS EXCHANGE VEND"
                : "PARIS EXCHANGE ACHETE"}
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedCountry ? (
            <ExchangeTableRow
              key={0}
              index={0}
              code={selectedCountry.countryIso2}
              currency={selectedCountry.iso}
              name={selectedCountry.country}
              Rate={
                type == "sell"
                  ? selectedCountry.webSellRate
                  : selectedCountry.webBuyRate
              }
              type={type}
              questionCUR={questionCUR}
              setquestionCUR={setquestionCUR}
            ></ExchangeTableRow>
          ) : (
            exchangeData?.map((country, i) => (
              <ExchangeTableRow
                key={i}
                index={i}
                code={country.countryIso2}
                currency={country.iso}
                name={country.country}
                Rate={type == "sell" ? country.webSellRate : country.webBuyRate}
                type={type}
                questionCUR={questionCUR}
                setquestionCUR={setquestionCUR}
              ></ExchangeTableRow>
            ))
          )}
        </tbody>
      </table>
      <div
        className="transition-colors flex justify-center w-full bg-neutral bg-opacity-80 hover:bg-opacity-80 hover:text-primary-content hover:bg-primary text-secondary-content rounded-b-sm"
        onClick={toggle}
      >
        {dataToggle ? (
          <p>Visualise toutes les devises</p>
        ) : (
          <p>Visualise moins de devises</p>
        )}
      </div>
    </div>
  );
}
