"use client";
import React, { useEffect, useState } from "react";
import ExchangeTableRow from "./exchangeTableRow";
import SearchTable from "./searchTable";

export default function ExchangeTable() {
  const [filteredList, setFilteredList] = useState();
  const [countries, setCountries] = useState([]);

  const [exchangeData, setExchangeData] = useState();

  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;

  useEffect(() => {
    const exCall = async () => {
      const res = await fetch("/api/currencies").then((res) => res.json());
      setExchangeData(res.data);
      setFilteredList(res.data);
      setCountries(res.data);
    };
    exCall();
    console.log(exchangeData);
  }, []);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...countries];
    updatedList = updatedList.filter((item) => {
      const out =
        item.country.toLowerCase().indexOf(query.toLowerCase()) !== -1;

      return out;
    });
    setFilteredList(updatedList);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <SearchTable search={filterBySearch} />
      </div>
      <table className="table table-compact lg:w-full w-[95%] mx-[2.5%] lg:mt-10 mt-7">
        <thead>
          <tr>
            <th className="bg-neutral-900 text-neutral-content lg:text-xl text-lg  lg:block hidden h-16"></th>
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
          {filteredList
            ? filteredList
                .slice(0, 6)
                .map((country, index) => (
                  <ExchangeTableRow
                    key={country.code}
                    code={country.countryIso2}
                    currency={country.iso}
                    name={country.country}
                    buyRate={country.deskBuyRate}
                    sellRate={country.deskSellRate}
                    index={index}
                  ></ExchangeTableRow>
                ))
            : null}
        </tbody>
      </table>
      {/* <div className="bg-base-200 mt-8 p-4 rounded-t-lg lg:text-2xl text-xl justify-center flex">
        Exchange Table
      </div>
      <div>
        {filteredList?.map((country, index) => (
          <ExchangeTableRow
            key={country.code}
            code={country.countryIso2}
            currency={country.iso}
            name={country.country}
            buyRate={country.deskBuyRate}
            sellRate={country.deskSellRate}
            index={index}
          ></ExchangeTableRow>
        ))}
      </div> */}
    </div>
  );
}
