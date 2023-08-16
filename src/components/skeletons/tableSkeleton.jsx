import React from "react";
import RowSkeleton from "./rowSkeleton";

const TableSkeleton = ({ type }) => {
  return (
    <div>
      <table className="mt-5 lg:w-[30vw] w-min">
        <thead className="">
          <tr>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tl-lg">
              Pays
            </th>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3">
              {type === "sell" ? "PARS EXCHANGE VEND" : "PARS EXCHANGE ACHETE"}
            </th>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tr-lg">
              {type === "sell" ? "PE VEND" : "PE ACHETE"}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowSkeleton></RowSkeleton>
          <RowSkeleton></RowSkeleton>
          <RowSkeleton></RowSkeleton>
        </tbody>
      </table>
      <div className="flex justify-center w-full bg-primary hover:bg-primary-focus text-primary-content rounded-b-sm"></div>
    </div>
  );
};

export default TableSkeleton;
