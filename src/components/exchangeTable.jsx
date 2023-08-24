"use client";
import React, { Suspense, useEffect, useState } from "react";
import CountrySelect from "./countrySelect";
import Table from "./table";
import TableSkeleton from "./skeletons/tableSkeleton";

export default function ExchangeTable({ setGold }) {
  const [exchangeData, setExchangeData] = useState();
  const [shownData, setShownData] = useState();

  const [dataToggle, setToggle] = useState(true);

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
      setShownData(newData.slice(0, 3));
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

  const togg = () => {
    // console.log(dataToggle);
    setToggle(!dataToggle);
    if (dataToggle == true) {
      setShownData(exchangeData);
    } else {
      setShownData(exchangeData.slice(0, 3));
    }
    // console.log(shownData);
  };

  return (
    <div className="">
      <div className=" flex flex-row justify-center">
        <p className="lg:text-2xl text-xl font-semibold font-logoFont p-7 my-5 border-y-2">{`Taux de change du: ${todayDate.toLocaleDateString()}`}</p>
      </div>

      <div className="flex flex-col items-center">
        <CountrySelect
          selectedValue={selectedValue}
          setCountry={setCountry}
          setValue={setValue}
          exchangeData={exchangeData}
        />
        {exchangeData && (
          <div className="flex lg:flex-row-reverse flex-col-reverse gap-2">
            <Suspense fallback={<TableSkeleton type="sell" />}>
              <Table
                exchangeData={shownData}
                selectedCountry={selectedCountry}
                type="sell"
                toggle={togg}
                dataToggle={dataToggle}
              />
            </Suspense>

            <Suspense fallback={<TableSkeleton type="buy" />}>
              <Table
                exchangeData={shownData}
                selectedCountry={selectedCountry}
                type="buy"
                toggle={togg}
                dataToggle={dataToggle}
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}
