import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";

async function getData() {
  return await (
    await fetch(
      "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.YODAFOREX_API_KEY,
        },
        cache: "no-store",
      }
    )
  ).json();
}

export default function ExchangeTable() {
  const [countries, setCountries] = useState([]);

  const [exchangeData, setExchangeData] = useState();

  const [selectedValue, setValue] = useState("none");
  const [selectedCountry, setCountry] = useState();

  useEffect(() => {
    const exCall = async () => {
      const res = await fetch("/api/currencies").then((res) => res.json());
      const sortedList = res.data.sort((a, b) =>
        a.country.localeCompare(b.country)
      );
      setExchangeData(sortedList);
      setCountries(sortedList);
      console.log(sortedList);
    };
    exCall();
  }, []);

  const handleTypeSelect = (e) => {
    setValue(e.target.value);
    const searchObject =
      e.target.value !== "none"
        ? exchangeData.find((country) => country.country === e.target.value)
        : "none";
    setCountry(searchObject);
    console.log(selectedCountry);
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
            countries.map((country) => (
              <ExchangeTableRow
                key={country.code}
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

{
  /* <div className="p-3 flex flex-row place-items-center border-l-secondary border-l-2 mt-6 ">
            <BuildingIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="/"
            >
              4 Bd Saint-Michel, 75006 Paris
            </Link>
          </div> */
}
