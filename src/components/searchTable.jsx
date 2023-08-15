import React from "react";

import SearchIcon from "../../public/search.svg";
const SearchTable = ({ search }) => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <div
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <SearchIcon className="w-5 h-5 "></SearchIcon>
        </div>
      </span>
      <input
        type="search"
        name="q"
        className="input input-ghost pl-10 placeholder:text-base-content w-full border-2 border-base-200"
        placeholder="PAYS"
        autoComplete="off"
        onChange={search}
      />
    </div>
  );
};

export default SearchTable;
