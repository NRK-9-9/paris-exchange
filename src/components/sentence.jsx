import React from "react";
import { getSentence } from "../../sanity/lib/client";

export default async function Sentence() {
  const sen = await getSentence();
  console.log(sen[0]);
  return (
    <div className="">
      {sen[0].message !== "none" ? (
        <div className="flex flex-row bg-neutral-focus lg:text-2xl text-sm w-full overflow-hidden py-1">
          <p className="animate-conveyor-belt text-secondary uppercase font-mono font-[550] whitespace-nowrap ">
            {sen[0].message}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
