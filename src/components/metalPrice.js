"use client";
import React, { useEffect, useState } from "react";
import goldpng from "../../public/gold.png";
import Image from "next/image";

const MetalPrice = ({ gold }) => {
  return (
    <div className="p-4">
      <div className="flex justify-center mb-3">
        <h1 className="font-semibold text-3xl">Prix Or du jour:</h1>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-5">Nous Achetons:</h2>
        <div className="flex flex-row place-items-center">
          <Image src={goldpng} width={50} height={50} alt="gold_png" />
          {gold && (
            <p className="text-lg">
              18K/ gram :<text className="font-semibold"> {gold}</text>€
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetalPrice;
