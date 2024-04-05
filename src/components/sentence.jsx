import React from "react";
import { getSentence } from "../../sanity/lib/client";

export default async function Sentence() {
  const sen = await getSentence();
  console.log(sen[0]);
  return (
    <div className="">
      {sen[0].message !== "none" ? (
        <div className="flex flex-row bg-primary bg-opacity-80 lg:text-2xl text-xs pt-1 w-full overflow-hidden py-1 ">
          <p className="animate-conveyor-belt text-gray-900 uppercase font-mono font-[550] whitespace-nowrap ">
            {sen[0].message}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
