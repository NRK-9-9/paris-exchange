import React from "react";
import RowSkeleton from "./rowSkeleton";

const TableSkeleton = ({ type }) => {
  return (
    <div>
      <table className="mt-5 lg:w-[30vw] w-min">
        <thead className="">
          <tr>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tl-lg">
              <div class="lg:h-3 lg:w-10 w-10 h-3 bg-gray-400 rounded-full dark:bg-gray-500  my-0.5"></div>
            </th>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3">
              <div class="lg:h-3 lg:w-32 w-16 h-3 bg-gray-400 rounded-full dark:bg-gray-500  my-0.5"></div>
            </th>
            <th className="bg-neutral lg:text-xs text-xs text-neutral-content px-6 py-3 rounded-tr-lg">
              <div class="lg:h-3 lg:w-32 w-20 h-3 bg-gray-400 rounded-full dark:bg-gray-500  my-0.5"></div>
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
