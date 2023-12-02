"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { send } from "emailjs-com";

const Order = () => {
  const sp = useSearchParams();
  const router = useRouter();

  const order_type = sp.get("order_type");
  const currency = sp.get("currency");
  const currency_amount = sp.get("currency_amount");
  const eur_amount = sp.get("eur_amount");

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [date, setExchangeDate] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  // if (order_type === null) {
  //   router.push("/");
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(order_type);

    const serial = `${order_type == "buy" ? "VC" : "AC"}-${Math.floor(
      Date.now() / 1000
    )}`;
    console.log(serial);

    send(
      "service_65urbzf",
      "template_bwgmapv",
      {
        order_type: order_type,
        currency: currency,
        currency_amount: currency_amount,
        euro_amount: eur_amount,
        from_nom: prenom,
        from_prenom: nom,
        from_email: email,
        exchange_date: date,
        phone_num: phone,
        serial: serial,
      },
      "PS8ZYXeBp37p8U570"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    router.push("/");
  };

  return (
    <div className="lg:flex lg:justify-center mt-10">
      <div className="card bg-base-200 shadow-xl">
        <h1 className="text-2xl font-bold font-logoFont flex justify-center mt-7 tracking-widest">
          RESERVER DEVISE
        </h1>
        <form
          className="grid grid-cols-1 py-7 lg:px-7 px-4 gap-5"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <div className="flex justify-center items-center lg:gap-5 gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-logoFont text-sm tracking-wide">
                    Nom/Surname:
                  </span>
                </label>
                <input
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                  value={nom}
                  name="from_nom"
                  required
                  type="text"
                  placeholder="Nom"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text font-logoFont text-sm tracking-wide">
                    Prenom/First Name:
                  </span>
                </label>
                <input
                  onChange={(e) => {
                    setPrenom(e.target.value);
                  }}
                  value={prenom}
                  name="from_prenom"
                  required
                  type="text"
                  placeholder="Prenom"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text w-full max-w-lg font-logoFont text-sm">
                  Email:
                </span>
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                name="from_email"
                required
                type="email"
                placeholder="johndoe@gmail.com"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text font-logoFont text-sm tracking-wide">
                  Phone:
                </span>
              </label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                name="from_email"
                required
                type="tel"
                placeholder="+33 777 888 999"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex max-w-prose mt-5 text-sm text-neutral-500">
              <p>
                *Réservation uniquement valide après réception de confirmation
                par mail ou téléphone Réservation confirmée valable pendant 24h
                uniquement
              </p>
            </div>
            {/* <div className="form-control w-full max-w-xs mt-5 flex-row place-items-center">
              <label className="label">
                <span className="label-text text-sm font-logoFont tracking-wide">
                  Day/Month:
                </span>
              </label>
              <div className="ml-3 gap-1">
                <select
                  className="select select-sm"
                  onChange={(e) => {
                    setExchangeDate(e.target.value);
                  }}
                >
                  <option value={new Date().toString()}>Today</option>
                  <option value={addDays(new Date(), 1).toString()}>
                    Tomorrow
                  </option>
                </select>
              </div>
            </div> */}
          </div>
          <div className="flex justify-between items-start">
            <div className="">
              <h1 className="text-xl font-logoFont font-bold mt-1">
                INFORMATION:
              </h1>
              <p>
                {`${
                  order_type == "buy" ? "J'achete" : "Je vend"
                } ${currency_amount} ${currency} pour ${eur_amount} EUR`}
              </p>
            </div>
            <button className="btn btn-secondary" type="submit">
              reserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
