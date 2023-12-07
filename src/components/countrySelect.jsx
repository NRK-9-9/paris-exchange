import React from "react";

function CountrySelect({ selectedValue, setValue, setCountry, exchangeData }) {
  const handleTypeSelect = (e) => {
    setValue(e.target.value);
    const searchObject =
      e.target.value !== "none"
        ? exchangeData.find((country) => country.country === e.target.value)
        : false;
    setCountry(searchObject);
    console.log(searchObject);
  };

  return (
    <div className="">
      <div className="form-control w-full max-w-xs">
        <label>
          <p className="text-sm lg:text-lg font-semibold pl-1 animate-pulse-blackred mt-4 mb-2 whitespace-nowrap">
            Choisissez le pays de votre destination:
          </p>
        </label>
        <select
          className="select select-bordered select-md min-w-full"
          onChange={handleTypeSelect}
          value={selectedValue}
        >
          <option value={"none"} className="">
            Iso, code, pays, devise, nom...
          </option>
          {exchangeData?.map((option) => (
            <option key={option.id} value={option.country}>
              {`${option.country} (${option.iso})`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountrySelect;
