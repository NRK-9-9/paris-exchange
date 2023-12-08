"use client";
import React, { Suspense, useEffect, useState } from "react";
import CountrySelect from "./countrySelect";
import Table from "./table";
import TableSkeleton from "./skeletons/tableSkeleton";
import { useAtom } from "jotai";

export default function ExchangeTable({ setGold }) {
  const [exchangeData, setExchangeData] = useState();
  const [shownData, setShownData] = useState();

  const [dataToggle, setToggle] = useState(true);

  const [selectedValue, setValue] = useState("none");
  const [selectedCountry, setCountry] = useState(false);

  const [loading, setLoading] = useState(true);
  const todayDate = new Date();

  const numOfDeviseShown = 5;

  useEffect(() => {
    setLoading(true);
    async function exCall() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_URL + "/api/countryexchange",
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": process.env.NEXT_PUBLIC_YODAFOREX,
          },
        }
      );
      let data = await res.json();
      //setting Gold
      const indx = data.findIndex((v) => v.id === 1);
      setGold(data[indx].webBuyRate);
      data.splice(indx, 1);
      //sorting countries in specific order
      let newData = [];
      const arr = ["USD", "GBP", "CHF", "JPY", "CAD", "AUD"];
      arr.forEach((x) => {
        const indx = data.findIndex((c) => c.iso === x);
        newData.push(data[indx]);
        data.splice(indx, 1);
      });
      newData.push(...data);
      setExchangeData(newData);
      setShownData(newData.slice(0, numOfDeviseShown));
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
      setShownData(exchangeData.slice(0, numOfDeviseShown));
    }
    // console.log(shownData);
  };

  return (
    <div className="">
      <div className=" flex flex-col items-center">
        <div className="lg:text-xl text-md flex flex-row gap-1 font-semibold font-logoFont p-3 mb-2 mt-7 lg:mt-3 border-y-2">
          <p>{`Taux de change ${todayDate.toLocaleDateString()}`}</p>
          <p className="font-bold">du vente :</p>
        </div>
        <div className="px-4 lg:text-center">
          {" "}
          <p className="text-sm italic">
            *(PARIS EXCHANGE vous vend de devise - vous achetez)
          </p>
          <p className="text-sm italic">
            *Appelez nous pour vous vendez vos devises (nous achetons vos
            devises afin de négocier le meilleur prix)
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <CountrySelect
          selectedValue={selectedValue}
          setCountry={setCountry}
          setValue={setValue}
          exchangeData={exchangeData}
        />
        {exchangeData ? (
          <div className="flex flex-col">
            <Table //enable this when asad wants table dachat back
              exchangeData={shownData}
              selectedCountry={selectedCountry}
              type="sell"
              toggle={togg}
              dataToggle={dataToggle}
            />
            {/* <TableSkeleton></TableSkeleton> */}

            {/* <Table
              exchangeData={shownData}
              selectedCountry={selectedCountry}
              type="buy"
              toggle={togg}
              dataToggle={dataToggle}
            /> */}
          </div>
        ) : (
          <div className="flex lg:flex-row-reverse flex-col-reverse gap-2">
            <TableSkeleton></TableSkeleton>
            {/* <TableSkeleton></TableSkeleton> */}
          </div>
        )}
      </div>
    </div>
  );
}
