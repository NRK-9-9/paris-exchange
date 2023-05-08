import Link from "next/link";
import React from "react";
import Image from "next/image";
import BuildingIcon from "@/components/icons/buildingIcon";
import PhoneIcon from "@/components/icons/phoneIcon";
import MailIcon from "@/components/icons/mailIcon";

// 4 boulevard saint michel
// 23 rue berger
// 22 avenue de l'Opéra

const Info = () => {
  return (
    <div className="lg:m-16 mx-5 lg:mt-0 mt-16">
      <h1 className="font-extrabold lg:text-3xl text-2xl lg:mb-5 mb-4  font-logoFont">
        Nos Bureaux:
      </h1>
      <h5 className="lg:text-xl text-md  text-gray-500">
        Dignissimos corporis ipsam eveniet soluta ut volupvvatibus volores
        dolores atque.
      </h5>
      <div className=" mt-12 ml-5 lg:mt-0 lg:ml-0 flex lg:flex-row flex-col-reverse lg:gap-20 gap-7">
        <div className="col-span-2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.2696999599048!2d2.3437508999999994!3d48.8530673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671a23e631517%3A0x6312825ff4fd03f1!2sCHANGE%20Saint-Michel%20-%20Bureau%20de%20Change%20-%20Rachat%20Or%20Bijoux%20Pi%C3%A8ces%20Lingots!5e0!3m2!1sen!2slb!4v1682548192067!5m2!1sen!2slb"
            allowfullscreen=""
            className="w-[40vw] h-[40vh] lg:h-[70vh] rounded-md"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <div className="p-3 flex flex-row place-items-center border-l-secondary border-l-2 mt-6 ">
            <BuildingIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="https://goo.gl/maps/KPhC4KCgj1mWvvE18"
            >
              4 Bd Saint-Michel, 75006 Paris
            </Link>
          </div>
          <div className="p-3 flex flex-row place-items-center border-l-base-300 border-l-2  ">
            <PhoneIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="tel:+33 954 455 444"
            >
              +33 954 455 444
            </Link>
          </div>
          <div className="p-3 flex flex-row place-items-center border-l-base-300 border-l-2  ">
            <MailIcon />
            <Link
              className="font-semibold lg:p-2 p-1 lg:pl-3 pl-2 text-sm lg:text-lg text-gray-600 underline underline-offset-4"
              href="/"
            >
              testparisexchange@gmail.com
            </Link>
          </div>
        </div>

        {/* <div className="grid grid-rows-2">
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
        </div> */}
        {/* <div className="grid grid-rows-2">
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
        </div> */}
      </div>
    </div>
  );
};

export default Info;
