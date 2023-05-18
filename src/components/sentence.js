import React from "react";
import { getSentence } from "../../sanity/lib/client";

export default async function Sentence() {
  const sen = await getSentence();
  console.log(sen[0]);
  return (
    <div>
      {sen[0].message !== "none" ? (
        <div className="flex flex-row bg-primary-content lg:text-2xl text-sm w-full overflow-hidden">
          <p className="animate-conveyor-belt text-primary-content py-2 uppercase font-sans font-semibold">
            {sen[0].message}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
