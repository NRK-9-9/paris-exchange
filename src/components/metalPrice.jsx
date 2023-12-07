"use client";
import React, { useEffect, useState } from "react";
import goldpng from "../../public/gold.png";
import Image from "next/image";

const MetalPrice = ({ gold }) => {
  return (
    <div className="lg:p-3 p-2">
      <div className="flex justify-center">
        <h1 className="font-semibold text-2xl animate-pulse-blackred font-logoFont">
          Prix Or du jour:
        </h1>
      </div>
      <div className="card rounded-t-md bg-white mt-6 shadow-lg">
        <div className="flex flex-col justify-center place-items-center m-3 mt-5">
          <Image src={goldpng} width={100} height={100} alt="gold_png"></Image>
        </div>
        <div className="bg-neutral  p-4 text-neutral-content rounded-b-lg">
          <p className="flex justify-center text-xl font-semibold ">
            Nous Achetons:
          </p>
          <div className="flex flex-col justify-center place-items-center mt-2 text-lg gap-4">
            <p>Pour 1 gram d&apos;Or 18k</p>
            <p className="font-bold text-3xl tracking-wide">{gold && gold}€</p>
          </div>
          <p className="text-sm text-neutral-400 text-center">
            *Payment par chèque
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetalPrice;
