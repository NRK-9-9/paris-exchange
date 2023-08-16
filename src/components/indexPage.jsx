"use client";
import React, { useState } from "react";
import ExchangeTable from "./exchangeTable";
import tableSkeleton from "./skeletons/tableSkeleton";
import MetalPrice from "./metalPrice";

const IndexPage = () => {
  const [gold, setGold] = useState();
  return (
    <div className="lg:mt-10 mt-2 lg:grid lg:grid-cols-4 lg:gap-10 lg:mx-10">
      <div className="lg:col-span-3 place-items-center">
        <ExchangeTable setGold={setGold} />
      </div>
      <div className="card lg:w-full lg:h-full bg-base-300 p-3 lg:m-0 m-7 lg:mt-0 mt-14 flex flex-col justify-center">
        <MetalPrice gold={gold} />
      </div>
    </div>
  );
};

export default IndexPage;
