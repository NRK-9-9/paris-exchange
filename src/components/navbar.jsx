"use client";
import React from "react";
import HomeIcon from "./icons/homeIcon";
import PhoneIcon from "./icons/phoneIcon";
import InfoIcon from "./icons/infoIcon";
import Link from "next/link";
import ReserveIcon from "./icons/reserveIcon";
import DollarIcon from "./icons/dollarIcon";

const Navbar = () => {
  return (
    <div className="shadow-sm ">
      <div className="navbar bg-neutral text-neutral-content ">
        <Link
          href="/"
          className="text-lg font-extrabold flex-1 justify-between place-items-center lg:ml-[39%] lg:text-xl "
        >
          <p
            href="/"
            className="lg:text-4xl text-2xl font-logoFont lg:mt-3 lg:tracking-widest"
          >
            PARIS EXCHANGE
          </p>
        </Link>
        <div className="lg:mr-4 lg:visible lg:text-lg text-xs text-white text-opacity-60 ">
          <Link className="font-logoFont font-[600]" href="tel:+33 954 455 444">
            Tél: +33 9 54 45 54 44
          </Link>
        </div>
      </div>
      <div className="tabs lg:ml-3 flex justify-evenly lg:justify-center gap-2">
        <Link
          href="/"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost lg:hover:font-bold  gap-2"
        >
          <HomeIcon className="w-8 h-8 " />
          <p className="lg:block hidden">Acceuil</p>
        </Link>
        <Link
          href="/info"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost lg:hover:font-bold  gap-2"
        >
          <DollarIcon className="w-8 h-8 " />
          <p className="lg:block hidden">Taux </p>
        </Link>
        <Link
          href="/reserve?order_type=buy&currency=USD&currency_amount=1&eur_amount=0.935"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost lg:hover:font-bold  gap-2"
        >
          <ReserveIcon className="w-8 h-8" />
          <p className="lg:block hidden">Reserver devises</p>
        </Link>

        <Link
          href="/info"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost lg:hover:font-bold  gap-2"
        >
          <InfoIcon className="w-8 h-8 " />
          <p className="lg:block hidden">Info</p>
        </Link>
        <Link
          href="/contact"
          className="lg:btn hover-underline-animation pt-2 lg:text-lg tracking-wide lg:btn-ghost font-normal my-2 btn btn-ghost lg:hover:font-bold  gap-2"
        >
          <PhoneIcon className="w-9 h-9 " />
          <p className="lg:block hidden">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
