"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { addDays } from "date-fns";
import React, { useRef, useState } from "react";
import { sendForm, send } from "emailjs-com";

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

  if (order_type === null) {
    router.push("/");
  }

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    // console.log(form.current);

    send(
      "service_65urbzf",
      "template_bwgmapv",
      {
        order_type: order_type,
        currency: currency,
        currency_amount: currency_amount,
        euro_amount: eur_amount,
        from_nom: nom,
        from_prenom: prenom,
        from_email: email,
        exchange_date: date,
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
  };

  return (
    <div className="lg:flex lg:justify-center">
      <div className="card bg-base-200">
        <h1 className="text-2xl font-bold font-logoFont flex justify-center mt-7">
          RESERVER DEVISE
        </h1>
        <form
          className="grid lg:grid-cols-2 grid-cols-1 p-7 gap-7"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-logoFont text-lg">
                  Nom/Last name:
                </span>
              </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
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
            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text font-logoFont text-lg">
                  Prenom:
                </span>
              </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
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
            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text font-logoFont text-lg">Email:</span>
              </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
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
            <div className="form-control w-full max-w-xs mt-5 flex-row place-items-center">
              <label className="label">
                <span className="label-text text-lg font-logoFont ">
                  Day/Month:
                </span>
              </label>
              <div className="ml-3 gap-1">
                <select
                  className="select select-sm"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setExchangeDate(e.target.value);
                  }}
                >
                  <option value={new Date().toString()}>Today</option>
                  <option value={addDays(new Date(), 1).toString()}>
                    Tomorrow
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs mt-5 flex-col ">
              <h1 className="text-xl font-logoFont">INFORMATION:</h1>
              <p>
                I am{" "}
                <text className="font-semibold">{` ${order_type}`}ing </text>
              </p>
              <p>
                <text className="font-semibold">Currency:</text>
                {` ${currency}`}
              </p>
              <p>
                <text className="font-semibold">Currency amount:</text>{" "}
                {` ${currency_amount}`}
              </p>
              <p>
                <text className="font-semibold">Euro amount:</text> {eur_amount}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end ">
            <button className="btn btn-primary" type="submit">
              reserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
