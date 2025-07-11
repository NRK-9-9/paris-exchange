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
    <div className="shadow-sm mb-5 lg:mb-0">
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
      <div className="lg:ml-3 flex justify-center lg:justify-center lg:gap-2">
        <Link
          href="/"
          className="lg:btn flex flex-center  lg:text-lg lg:btn-ghost lg:my-2 mt-0 btn btn-xs  btn-ghost hover:bg-base-100 lg:hover:font-bold lg:gap-2 "
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-1 pt-1 lg:pt-0">
            <HomeIcon className="lg:w-8 lg:h-8 w-5 h-5" />
            <p className="text-[0.72rem] lg:text-lg hover-underline-animation ">
              Acceuil
            </p>
          </div>
        </Link>
        <Link
          href="/#section-1"
          className="lg:btn flex flex-center  lg:text-lg lg:btn-ghost lg:my-2 mt-0 btn btn-xs  btn-ghost hover:bg-base-100 lg:hover:font-bold lg:gap-2 "
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-1 pt-1 lg:pt-0 ">
            <DollarIcon className="lg:w-8 lg:h-8 w-5 h-5" />
            <p className="text-[0.72rem] lg:text-lg hover-underline-animation  ">
              Taux
            </p>
          </div>
        </Link>
        <Link
          href="/reserve?order_type=buy&currency=USD&currency_amount=1&eur_amount=0.935"
          className="lg:btn flex flex-center  lg:text-lg lg:btn-ghost lg:my-2 mt-0 btn btn-xs  btn-ghost hover:bg-base-100 lg:hover:font-bold lg:gap-2 "
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-1 pt-1 lg:pt-0">
            <ReserveIcon className="lg:w-8 lg:h-8 w-5 h-5" />
            <p className="text-[0.72rem] lg:text-lg hover-underline-animation  ">
              Reservation
            </p>
          </div>
        </Link>

        <Link
          href="/info"
          className="lg:btn flex flex-center  lg:text-lg lg:btn-ghost lg:my-2 mt-0 btn btn-xs  btn-ghost hover:bg-base-100 lg:hover:font-bold lg:gap-2 "
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-1 pt-1 lg:pt-0">
            <InfoIcon className="lg:w-8 lg:h-8 w-5 h-5" />
            <p className="text-[0.72rem] lg:text-lg hover-underline-animation  ">
              Info
            </p>
          </div>
        </Link>
        <Link
          href="/contact"
          className="lg:btn flex flex-center  lg:text-lg lg:btn-ghost lg:my-2 mt-0 btn btn-xs  btn-ghost hover:bg-base-100 lg:hover:font-bold lg:gap-2 "
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-1 pt-1 lg:pt-0">
            <PhoneIcon className="lg:w-8 lg:h-8 w-5 h-5" />
            <p className="text-[0.72rem] lg:text-lg hover-underline-animation  ">
              Contact
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
