import React from "react";

const Carouselhero = () => {
  return (
    <div>
      <div class="max-w-sm rounded-lg border border-gray-200 p-5 shadow">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Card Title
        </h2>
        <div class="flex flex-col items-start">
          <p class="mb-3 text-gray-700">Card description</p>
          <button class="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Card button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carouselhero;
