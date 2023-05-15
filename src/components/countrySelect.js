import React from "react";

function CountrySelect({ selectedValue, setValue, setCountry, exchangeData }) {

  const handleTypeSelect = (e) => {
    setValue(e.target.value);
    const searchObject =
      e.target.value !== "none"
        ? exchangeData.find((country) => country.country === e.target.value)
        : "none";
    setCountry(searchObject);
  };

  return (
    <div className="">
      <div className="form-control w-full max-w-xs">
        <label>
          <p className="text-sm animate-pulse-blackred ">Choisissez le pays que vous voulez:</p>
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
            <option key={option.id} value={option.country} >
              {`${option.country} (${option.iso})`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountrySelect;
