"use client";
import React from "react";
import Link from "next/link";
import Sentence from "./sentence";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content shadow-lg">
        <Link
          href="/"
          className="text-lg font-extrabold flex-1 justify-between place-items-center lg:ml-[39%] lg:text-xl "
        >
          <p className="lg:text-4xl text-2xl font-logoFont lg:mt-3 lg:tracking-wider">
            PARIS EXCHANGE
          </p>
        </Link>
        <div className="lg:mr-4 lg:visible lg:text-lg text-xs text-white text-opacity-60 ">
          <Link className="font-logoFont font-[600]" href="tel:+33 954 455 444">
            Tél: +33 9 54 45 54 44
          </Link>
        </div>
      </div>
      <div className="tabs lg:ml-3 flex justify-center">
        <Link
          // className="tab tabs-boxed tab-lg"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm lg:hover:font-bold"
          href="/"
        >
          Acceuil
        </Link>
        <Link
          className="lg:btn hover-underline-animation pt-2  lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm lg:hover:font-bold"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="lg:btn hover-underline-animation pt-2  lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost btn-sm lg:hover:font-bold"
          href="/info"
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
