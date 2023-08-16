import React from "react";

const RowSkeleton = () => {
  return (
    <tr className="bg-neutral-400 animate-pulse text-neutral-content border-b-2 dark:border-gray-300">
      <td className="p-2">
        {/* <div className="lg:w-12 w-10 rounded-md"></div> */}

        <div class="flex items-center justify-center lg:w-12 w-10 h-9 bg-gray-300 rounded-md sm:w-96 dark:bg-gray-500">
          <svg
            class="w-4 h-4 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div class="h-2 w-16 bg-gray-200 rounded-full dark:bg-gray-500  mt-1 "></div>
      </td>
      <td>
        <div className="flex flex-col mt-3">
          <div class="lg:h-3 lg:w-48 w-24 h-3 bg-gray-400 rounded-full dark:bg-gray-500  mb-3"></div>
          <div class="lg:h-2.5 lg:w-32 w-24 h-3 bg-gray-400 rounded-full dark:bg-gray-500  mb-4"></div>
        </div>
      </td>
      <td className="p-2 ">
        <div class="lg:h-5 lg:mb-2 lg:w-32 w-32 h-5 mb-1  bg-gray-400 rounded-md dark:bg-gray-500  "></div>
        <div class="lg:h-5 lg:mb-2 lg:w-32 w-32 h-5 mb-1  bg-gray-400 rounded-md dark:bg-gray-500  "></div>
      </td>
    </tr>
  );
};

export default RowSkeleton;
