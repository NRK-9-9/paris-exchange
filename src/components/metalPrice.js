"use client";
import React, { useEffect, useState } from "react";
import goldpng from "../../public/gold.png";
import Image from "next/image";

const MetalPrice = ({ gold }) => {
  return (
    <div className="p-3">
      <div className="flex justify-center mb-3">
        <h1 className="font-semibold text-3xl">Prix Or du jour:</h1>
      </div>
      <div className="card rounded-t-md bg-white mt-6">
        <div className="flex justify-center place-items-center m-3 mt-5">
          <Image src={goldpng} width={150} height={150} alt="gold_png"></Image>
        </div>
        <div className="bg-neutral-800 p-4 text-neutral-content rounded-b-md">
          <p className="flex justify-center text-xl font-semibold">
            Nous Achetons:
          </p>
          <div className="flex flex-row mt-2 text-lg ">
            <p>18k/gram d&apos;Or</p>
            <p className="font-bold"> {`: ${gold && gold}`}€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalPrice;
