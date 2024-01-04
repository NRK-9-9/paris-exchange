"use client";
import React from "react";
import Flags from "country-flag-icons/react/3x2";

const FlagCoded = ({ code }) => {
  const Flag = Flags[code];

  return (
    <div>
      <Flag className="lg:w-12 w-10 rounded-md"></Flag>
    </div>
  );
};

export default FlagCoded;
