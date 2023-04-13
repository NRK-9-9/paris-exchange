import Link from "next/link";
import React from "react";
import Image from "next/image";
import BuildingIcon from "@/components/icons/buildingIcon";
import PhoneIcon from "@/components/icons/phoneIcon";

// 4 boulevard saint michel
// 23 rue berger
// 22 avenue de l'Opéra

const Info = () => {
  return (
    <div className="lg:m-16 mx-5 mt-8">
      <h1 className="font-extrabold lg:text-3xl text-2xl lg:mb-5 mb-4">
        Nos Bureaux:
      </h1>
      <h5 className="lg:text-xl text-md  text-gray-500">
        Dignissimos corporis ipsam eveniet soluta ut volupvvatibus volores
        dolores atque.
      </h5>
      <div className="grid lg:grid-cols-3 lg:mt-10 mt-6">
        <div className="grid grid-rows-2">
          <div className="p-3 flex flex-row place-items-center border-l-secondary border-l-2 mt-6">
            <BuildingIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="/"
            >
              4 Boulevard Saint Michel
            </Link>
          </div>
          <div className="p-3 flex flex-row place-items-center border-l-2">
            <PhoneIcon />
            <p className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600">
              +33 69 69 669
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="p-3 flex flex-row place-items-center border-l-accent border-l-2 mt-6">
            <BuildingIcon />

            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="/"
            >
              23 Rue Berger
            </Link>
          </div>
          <div className="p-3 flex flex-row place-items-center border-l-2">
            <PhoneIcon />
            <p className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600">
              +33 69 69 669
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="p-3 flex flex-row place-items-center border-l-secondary border-l-2 mt-6">
            <BuildingIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="/"
            >
              22 Avenue de l&apos;Opéra
            </Link>
          </div>
          <div className="p-3 flex flex-row place-items-center border-l-2">
            <PhoneIcon />
            <p className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600">
              +33 69 69 669
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
