"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
import CountrySelect from "./countrySelect";
import LoadingTableRow from "./loadingTableRow";

function removeItem(arr, val) {
  const index = arr.indexOf(val);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export default function ExchangeTable({ setGold }) {
  const [countries, setCountries] = useState([]);
  const [exchangeData, setExchangeData] = useState();
  const [selectedValue, setValue] = useState("none");
  const [selectedCountry, setCountry] = useState(false);

  const [loading, setLoading] = useState(true);

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

      const sortedList = data.sort((a, b) =>
        a.country.localeCompare(b.country)
      );
      setExchangeData(sortedList);
      setCountries(sortedList);
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
    <div>
      <CountrySelect
        selectedValue={selectedValue}
        setValue={setValue}
        setCountry={setCountry}
        exchangeData={exchangeData}
      />

      <table className="table table-compact w-full lg:mt-10 mt-7">
        <thead>
          <tr>
            <th className="bg-neutral-900 text-neutral-content lg:text-xl text-lg lg:block hidden h-16"></th>
            <th className="bg-neutral-900 text-neutral-content lg:text-xl text-lg lg:rounded-none rounded-tl-md">
              PAYS
            </th>
            <th className="bg-neutral-900 text-neutral-content lg:text-xl text-lg">
              <div className="flex justify-center">ON ACHETE</div>
            </th>
            <th className="p-0 bg-neutral-900 text-neutral-content lg:text-xl text-lg">
              <div className="flex justify-center min-w-full p-0">ON VEND</div>
            </th>
          </tr>
        </thead>
        <tbody className="aspect-auto">
          {!loading ? (
            selectedValue === "none" ? (
              countries.map((country, index) => (
                <ExchangeTableRow
                  key={index}
                  code={country.countryIso2}
                  currency={country.iso}
                  name={country.country}
                  buyRate={country.webBuyRate}
                  sellRate={country.webSellRate}
                ></ExchangeTableRow>
              ))
            ) : (
              <ExchangeTableRow
                key={selectedCountry.code}
                code={selectedCountry.countryIso2}
                currency={selectedCountry.iso}
                name={selectedCountry.country}
                buyRate={selectedCountry.deskBuyRate}
                sellRate={selectedCountry.deskSellRate}
              ></ExchangeTableRow>
            )
          ) : (
            [1, 2, 3, 4, 5, 6].map((coun, ind) => <LoadingTableRow key={ind} />)
          )}
          {}
        </tbody>
      </table>
    </div>
  );
}
