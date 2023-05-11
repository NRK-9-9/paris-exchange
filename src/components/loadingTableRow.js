import React from "react";

const LoadingTableRow = () => {
  return (
    <tr className=" h-24">
      <th className="bg-base-200 p-2 animate-pulse">
        <div className=" ml-4 lg:w-[79px] w-12 rounded-md h-14 p-7 bg-base-300"></div>
      </th>
      <td className="bg-base-200  animate-pulse"> </td>
      <td className="bg-base-200  animate-pulse">
        <div className="flex flex-row justify-center gap-2">
          <div className="gap-2 flex flex-col">
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
          </div>
          <div className="gap-1 flex flex-col">
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
          </div>
        </div>
      </td>
      <td className="bg-base-200  animate-pulse">
        <div className="flex flex-row justify-center gap-2">
          <div className="gap-2 flex flex-col">
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
          </div>
          <div className="gap-1 flex flex-col">
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
            <p className="bg-base-300 animate-pulse w-32 h-6 rounded-md"></p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default LoadingTableRow;
