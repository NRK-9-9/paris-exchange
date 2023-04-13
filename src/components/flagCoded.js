"use client";
import React from "react";
import Flags from "country-flag-icons/react/3x2";

const FlagCoded = ({ code, width, render }) => {
  const Flag = Flags[code];

  return (
    <div className={render}>
      <Flag className="lg:w-16 w-10 rounded-md "></Flag>
    </div>
  );
};

export default FlagCoded;
