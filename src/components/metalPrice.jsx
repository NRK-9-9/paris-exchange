"use client";
import React, { useEffect, useState } from "react";
import goldpng from "../../public/gold.png";
import Image from "next/image";

const MetalPrice = ({ gold }) => {
  return (
    <div className="p-2">
      <div className="flex justify-center">
        <h1 className="font-semibold text-2xl animate-pulse-blackred font-logoFont">
          Prix Or du jour:
        </h1>
      </div>
      <div className="card rounded-t-md bg-white mt-3 shadow-lg">
        <div className="flex flex-col justify-center place-items-center m-3 mt-5">
          <Image src={goldpng} width={100} height={100} alt="gold_png"></Image>
        </div>
        <div className="bg-neutral  p-4 text-neutral-content rounded-b-lg">
          <div className="flex flex-col justify-center place-items-center mt-2 text-md gap-1">
            <p>Nous achetons le gram d&apos;or 18k à </p>
            <p className="font-bold text-2xl tracking-wide">{gold && gold}€</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-neutral-300 text-center">
              *Payment par chèque
            </p>
            <p className="text-sm text-neutral-300 text-center max-w-[15rem]">
              *Les pièces d&apos;or sont négociables, meilleurs prix garantis,
              veuillez nous appeler pour tout renseignement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalPrice;
