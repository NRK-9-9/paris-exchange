"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
import CountrySelect from "./countrySelect";
import LoadingTableRow from "./loadingTableRow";
import Table from "./table";

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
        data.splice(indx, 1);
      });

      newData.push(...data);

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
        <p className="lg:text-2xl text-xl font-semibold font-logoFont p-7 my-7 border-y-2">{`Taux de change du: ${todayDate.toLocaleDateString()}`}</p>
      </div>

      <div className="flex flex-col items-center">
        <CountrySelect
          selectedValue={selectedValue}
          setCountry={setCountry}
          setValue={setValue}
          exchangeData={exchangeData}
        />
        {exchangeData && (
          <div className="flex lg:flex-row flex-col gap-2">
            <Table
              exchangeData={exchangeData}
              selectedCountry={selectedCountry}
              type="sell"
            />
            <Table
              exchangeData={exchangeData}
              selectedCountry={selectedCountry}
              type="buy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
