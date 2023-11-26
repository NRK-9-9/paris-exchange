import React from "react";

export default function Info() {
  return (
    <div className="lg:m-16 mx-5 mt-8">
      <h1 className=" font-extrabold lg:text-3xl tracking-wider text-2xl lg:mb-5 mb-4  font-logoFont">
        Qui somme nous?
      </h1>
      <h5 className="lg:text-lg text-md  text-neutral text-opacity-90 ">
        <p className="mt-2 first-letter:ml-4 first-letter:text-xl">
          Paris Exchange est votre solution fiable pour changer les devises sur
          Paris Saint-Michel. Nous vous proposons une grande variété de devises
          étrangères avec l&apos;un des meilleurs taux de change à proposer,
          pour vous aider à être prêts et confidents durant vos prochaines
          vacances et même après votre retour, avec la garantie d&apos;un
          service professionnel, transparent, efficace et sécurisé avec chacune
          de vos visites.
        </p>
        <p className="mt-2 first-letter:ml-4 first-letter:text-xl">
          Notre équipe d&apos;opérateurs et conseillers sont des experts dans
          leurs domaine, bien formés et informés sur les nécessités du change
          pour pouvoir vous guider et garantir votre satisfaction.
        </p>
        <p className="mt-2 first-letter:ml-4 first-letter:text-xl">
          Nous nous engageons à toujours être à jour avec le marché et les
          tendances économiques mondiales pour vous garantir des conseils
          fiables et éprouvés, et une expérience satisfaisante et agréable.
          Notre objectif est simple ; vous faciliter l&apos;accès à l&apos;achat
          et la vente de vos devises dans un des bureaux les plus professionnels
          et réputé de Paris en vous offrant une expérience rapide fluide et
          sécurisée.
        </p>
      </h5>

      <div className="mt-10 ">
        <h1 className=" font-extrabold lg:text-3xl tracking-wider text-2xl lg:mb-5 mb-4  font-logoFont">
          Pourquoi choisir PARIS EXCHANGE?
        </h1>

        <ul className="list-disc list-outside list-image-tower ">
          <li className="ml-4 text-lg ">
            L&apos;expérience et l&apos;expertise dans le domaine du change des
            devises.
          </li>
          <li className="ml-4 text-lg ">
            Un service client réactif et professionnel. Le respect des
          </li>
          <li className="ml-4 text-lg ">
            règlementations et des exigences légales qui assurent votre
            sécurité.
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <p className=" font-extrabold lg:text-3xl tracking-wider text-2xl lg:mb-5 mb-4  font-logoFont">
          Info Pro :
        </p>
        <p className="text-lg">Raison Social : Paris Exchange</p>
        <p className="text-lg">R.S.C 802 887 497 PARIS</p>
        <p className="text-lg">
          Agréé par l&apos;Autorité de Contrôle Prudentiel et de Résolution ACPR
          - Banque de France
        </p>
      </div>
    </div>
  );
}
