"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
import CountrySelect from "./countrySelect";

export default function ExchangeTable({ res }) {
  const [countries, setCountries] = useState([]);

  const [exchangeData, setExchangeData] = useState();

  const [selectedValue, setValue] = useState("none");
  const [selectedCountry, setCountry] = useState();

  useEffect(() => {
    async function exCall() {
      const res = await fetch("/api/countryexchange", {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.NEXT_PUBLIC_YODAFOREX,
        },
        cache: "no-store",
      });
      const data = await res.json();

      console.log(data);

      const sortedList = data.sort((a, b) =>
        a.country.localeCompare(b.country)
      );

      setExchangeData(sortedList);
      setCountries(sortedList);
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
      {exchangeData && (
        <CountrySelect
          selectedValue={selectedValue}
          setValue={setValue}
          setCountry={setCountry}
          exchangeData={exchangeData}
        />
      )}
      <table className="table table-compact lg:w-full w-min mx-[2%] lg:mt-10 mt-7">
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
              <div className="flex justify-center  p-0">ON VEND</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedValue === "none" ? (
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
          )}
        </tbody>
      </table>
    </div>
  );
}
