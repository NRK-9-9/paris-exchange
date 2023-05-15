"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
import CountrySelect from "./countrySelect";
import LoadingTableRow from "./loadingTableRow";
import { CH, GB } from "country-flag-icons/react/3x2";

export default function ExchangeTable({ setGold }) {
  const [alphaOrder, setalphaOrder] = useState([]);
  const [exchangeData, setExchangeData] = useState();
  const [selectedValue, setValue] = useState("none");
  const [selectedCountry, setCountry] = useState(false);

  const [loading, setLoading] = useState(true);
  const todayDate = new Date();

  useEffect(() => {
    setLoading(true);
    async function exCall() {
      const res = await fetch("/api/countryexchange", {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.NEXT_PUBLIC_YODAFOREX,
        },
      });
      let data = await res.json();
      const indx = data.findIndex((v) => v.id === 1);
      setGold(data[indx].webBuyRate);
      data.splice(indx, 1);
      let newData = [];
      const arr = ["USD", "GBP", "CHF", "JPY", "CAD", "AUD"];

      arr.forEach((x) => {
        const indx = data.findIndex((c) => c.iso === x);
        newData.push(data[indx]);
        console.log(newData, x, data[indx]);
      });

      setExchangeData(newData);
      setalphaOrder(newData);
      setLoading(false);
    }
    exCall();
    const interval = setInterval(() => {
      exCall();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <div className=" flex flex-row justify-center">
        <p className="lg:text-2xl text-xl font-semibold font-logoFont p-7 my-7 border-y-2">{`Exchange Rates at: ${todayDate.toLocaleDateString()}`}</p>
      </div>

      <div className="flex flex-col items-center">
        <CountrySelect
          selectedValue={selectedValue}
          setValue={setValue}
          setCountry={setCountry}
          exchangeData={exchangeData}
        />
        <table className="table table-compact w-min lg:mt-7 mt-7 ">
          <thead>
            <tr>
              <th className="bg-neutral-900 text-neutral-content lg:text-sm text-xs">
                PAYS
              </th>
              <th className="bg-neutral-900 text-neutral-content lg:text-sm text-xs">
                <div className="flex justify-center">paris exchange achete</div>
              </th>
              <th className="bg-neutral-900 text-neutral-content lg:text-sm text-xs">
                PAYS
              </th>
              <th className="p-0 bg-neutral-900 text-neutral-content lg:text-sm text-xs">
                <div className="flex justify-center">paris exchange vend</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              selectedValue === "none" ? (
                exchangeData.map((country, index) => (
                  <ExchangeTableRow
                    key={index}
                    index={index}
                    code={country.countryIso2}
                    currency={country.iso}
                    name={country.country}
                    buyRate={country.webBuyRate}
                    sellRate={country.webSellRate}
                  ></ExchangeTableRow>
                ))
              ) : (
                <ExchangeTableRow
                  index={0}
                  key={selectedCountry.code}
                  code={selectedCountry.countryIso2}
                  currency={selectedCountry.iso}
                  name={selectedCountry.country}
                  buyRate={selectedCountry.deskBuyRate}
                  sellRate={selectedCountry.deskSellRate}
                ></ExchangeTableRow>
              )
            ) : (
              [1, 2, 3, 4, 5, 6].map((coun, ind) => (
                <LoadingTableRow key={ind} />
              ))
            )}
            {}
          </tbody>
        </table>
      </div>
    </div>
  );
}
