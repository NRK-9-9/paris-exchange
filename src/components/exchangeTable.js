"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";

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

      // const sortedList = data.sort((a, b) =>
      //   a.country.localeCompare(b.country)
      // );
      setExchangeData(data);
      setCountries(data);
    }
    // exCall();

    // async function exCall2() {
    //   const res = await fetch("/api/asia", {
    //     cache: "no-store",
    //   });
    //   const data = await res.json();

    //   console.log(data);
    // }
    exCall();
    const interval = setInterval(() => {
      exCall();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTypeSelect = (e) => {
    setValue(e.target.value);
    const searchObject =
      e.target.value !== "none"
        ? exchangeData.find((country) => country.country === e.target.value)
        : "none";
    setCountry(searchObject);
    // console.log(selectedCountry);
  };

  return (
    <div>
      {exchangeData && (
        <div className="flex justify-center mt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Choisissez le pays que vous voulez
              </span>
            </label>
            <select
              // options={exchangeData.map((country) => country.country)}
              className="select select-bordered"
              onChange={handleTypeSelect}
              value={selectedValue}
            >
              <option value={"none"} className="text-neutral-400">
                Choisissez un pays
              </option>
              {exchangeData.map((option) => (
                <option key={option.id} value={option.country}>
                  {option.country}
                </option>
              ))}
            </select>
          </div>
        </div>
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
