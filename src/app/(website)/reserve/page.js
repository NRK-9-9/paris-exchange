"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { send } from "emailjs-com";
import { atom, useAtom } from "jotai";

const dataAtom = atom(async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + "/api/countryexchange",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.NEXT_PUBLIC_YODAFOREX,
      },
    }
  );
  let data = await res.json();

  data = data.filter(function (obj) {
    return obj.id !== 1;
  });
  return data;
});

const Order = () => {
  // atoms
  const countData = useAtom(dataAtom)[0];
  const router = useRouter();
  // extract params from search
  const sp = useSearchParams();
  // setting up order config
  // const order_type = sp.get("order_type");
  // const currency = sp.get("currency");
  // const currency_amount = sp.get("currency_amount");
  // const eur_amount = sp.get("eur_amount");

  //modal
  const [modal, setModal] = useState(false);

  //search params to state
  const [order_type, setOrder_type] = useState(sp.get("order_type"));
  const [currency, setCurrency] = useState(sp.get("currency") || "GBP");
  const [currency_amount, setCurrency_amount] = useState(
    sp.get("currency_amount") || 0
  );
  const [eur_amount, setEur_amount] = useState(sp.get("eur_amount") || 0);

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [date, setExchangeDate] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [remarque, setRemarque] = useState();

  const [multiplier, setMultiplier] = useState();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(order_type);

    let dateOfDay = new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    dateOfDay =
      dateOfDay.slice(0, 2) +
      dateOfDay.slice(3, 5) +
      dateOfDay.slice(6, 8) +
      dateOfDay.slice(10, 12) +
      dateOfDay.slice(13, 15) +
      dateOfDay.slice(16, 17);
    const serial = `${order_type == "buy" ? "VC" : "AC"}-${dateOfDay}`;
    console.log(serial);

    send(
      "service_2pcvelf", //service_okb8odt {{order_type}} {{devise_or_metal}} {{from_prenom}} {{from_nom}}
      "template_7zelano",
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
        remarque: remarque,
      },
      "KQzl7aHqeIUNqL7Cd"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // setModal(true);
    document.querySelector("dialog").showModal();
    // router.push("#my_modal_8");
  };

  useEffect(() => {
    // console.log(currency, countData);
    let mult = countData.find((o) => o.iso == currency);
    setMultiplier(mult.webSellRate);
    setEur_amount((currency_amount / mult.webSellRate).toFixed(2));
  }, [currency]);

  return (
    <>
      <dialog id="my_modal_5" className="modal-box ">
        <div className="">
          <h3 className="font-bold text-xl ">Merci Pour Votre Confiance</h3>
          <p className="py-4 text-lg">
            Votre réservation va bientôt être prise en charge par nos agents,
            merci d&apos;attendre la confirmation par mail ou par téléphone.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={() => router.push("/")}>
                Retour à la page d&apos;accueil
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="lg:flex lg:justify-center lg:mt-10 mt-7 mx-4">
        <div className="card bg-base-200 shadow-xl">
          <h1 className="text-2xl underline underline-offset-4 font-bold font-logoFont flex justify-center mt-7 tracking-widest">
            RESERVER DEVISE
          </h1>
          <form
            className="grid grid-cols-1 py-7 lg:px-7 px-2 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <div className="mb-4">
                <h1 className="text-xl font-logoFont font-bold mt-2">
                  INFORMATION:
                </h1>
                <div className="flex flex-row lg:items-center flex-wrap gap-1 mt-3">
                  <p className="text-sm lg:text-lg">J&apos;achète</p>
                  <div className="">
                    <input
                      onChange={(e) => {
                        setCurrency_amount(e.target.value);
                        setEur_amount((e.target.value / multiplier).toFixed(2));
                      }}
                      type="text"
                      placeholder=""
                      value={currency_amount}
                      className="input p-1 input-bordered lg:input-sm lg:p-1 input-xs lg:w-auto w-auto  rounded-r-none border-l-0"
                    />
                    <select
                      value={currency}
                      className="select lg:select-sm select-xs select-bordered rounded-l-none "
                      onChange={(e) => {
                        setCurrency(e.target.value);
                      }}
                    >
                      {countData.map((count) => (
                        <option key={count.id} value={count.iso}>
                          {count.iso}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-sm lg:text-lg">{"pour"}</p>
                  <input
                    value={eur_amount}
                    onChange={(e) => {
                      setEur_amount(e.target.value);
                      setCurrency_amount(
                        (e.target.value * multiplier).toFixed(2)
                      );
                    }}
                    type="text"
                    placeholder=""
                    className="input p-1  input-bordered lg:input-sm input-xs lg:w-auto w-auto  "
                  />
                  <p className="font-bold text-sm lg:text-lg">EUR</p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:gap-5 gap-2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-logoFont text-xs lg:text-sm tracking-wide">
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
                    className="input input-bordered lg:input-md input-sm w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs ">
                  <label className="label">
                    <span className="label-text font-logoFont text-xs lg:text-sm tracking-wide">
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
                    className="input input-bordered lg:input-md input-sm w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="form-control w-full max-w-xs lg:mt-5 mt-3">
                <label className="label">
                  <span className="label-text w-full max-w-lg font-logoFont text-xs lg:text-sm">
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
                  className="input input-bordered lg:input-md input-sm w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs lg:mt-5 mt-3">
                <label className="label">
                  <span className="label-text font-logoFont text-xs lg:text-sm tracking-wide">
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
                  placeholder="+33 66 77 88 99"
                  className="input input-bordered lg:input-md input-sm w-full max-w-xs"
                />
              </div>
              <div className="lg:mt-5 mt-3">
                <label className="label">
                  <span className="label-text font-logoFont text-xs lg:text-sm tracking-wide">
                    Remarque:
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Remarque"
                  onChange={(e) => setRemarque(e.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col max-w-prose lg:mt-5 mt-3 text-sm text-neutral-500">
                <p>
                  *Réservation uniquement valide après réception de confirmation
                  par mail ou téléphone.
                </p>
                <p>*Réservation confirmée valable pendant 24h uniquement.</p>
              </div>
            </div>
            <div className="flex justify-end items-start ">
              <button
                // onClick={() => window.alert("asdadasdas")}
                className="btn btn-secondary"
              >
                reserver
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
