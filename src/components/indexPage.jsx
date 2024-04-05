"use client";
import React, { useEffect, useRef, useState } from "react";
import ExchangeTable from "./exchangeTable";
import MetalPrice from "./metalPrice";

const IndexPage = () => {
  const [gold, setGold] = useState();

  const ref = useRef(null);
  return (
    <div className="lg:mt-10 mt-2 flex flex-col lg:flex-row justify-center lg:gap-20 lg:items-start ">
      <div className="lg:col-span-3 place-items-center">
        <section id="section-1" ref={ref}>
          <ExchangeTable setGold={setGold} />
        </section>
      </div>
      <div className="card lg:min-w-max lg:h-min-w-max bg-primary bg-opacity-20 p-3 lg:m-0 m-7 lg:mt-10 mt-14 flex flex-col justify-center">
        <MetalPrice gold={gold} />
      </div>
    </div>
  );
};

export default IndexPage;
