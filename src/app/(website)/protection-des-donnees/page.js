import Link from "next/link";
import React from "react";

const ProtDesDonnes = () => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <h1 className="text-2xl lg:text-4xl uppercase font-bold tracking-widest text-center text-primary font-logoFont lg:mt-10 lg:mb-5 p-1 lg:w-[75vw] lg:place-items-center">
        Protections des données personnelles :
      </h1>
      <div className="flex flex-col lg:w-[60vw] gap-2 p-2">
        <h3 className="text-2xl text-primary text-opacity-90 tracking-wider">
          Protections des données personnelles :
        </h3>
        <p className=" text-sm text-neutral-500">
          A Paris Exchange nous prenons la protection de vos données
          personnelles de façon très sérieuse et comprenons l&apos;importance de
          la protection de celles-ci, ce qui fait notre priorité de respecter
          les règlementations concernant la collecte, l&apos;utilisation et la
          conservation de vos données ci-dessous ce trouve notre politique qui
          vous explique les étapes mises en vigueur pour le traitement et la
          protection de vos données personnelles :
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          {" "}
          Collecte et utilisation des données :
        </h3>
        <p className="first-letter:ml-3">
          Lors de la réalisation d&apos;une commande/réservation sur notre site
          , nous vous demanderons de nous fournir certaines informations
          personnelles (noms, prénoms, date de naissance, une copie de votre
          titre d&apos;identité, etc…) Ces informations sont nécessaires pour
          vérifier votre identité et respecter nos obligations légales en
          matière de (Protection des données personnelles).{" "}
          <Link className="link" href="/LCBD-FT">
            LCBD-FT
          </Link>
        </p>
        <p className="first-letter:ml-3">
          Vos informations personnelles ne sont utilisées que dans le cadre de
          ce que la loi française impose, nous nous engageons à ne jamais
          utiliser vos informations en dehors des lois mandatées, et à ne jamais
          partager ces informations avec des tiers sans votre consentement, sauf
          dans le cas où cela est requis légalement ou dans le cas de la demande
          des autorités compétentes.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Conservation des données :
        </h3>
        <p className="first-letter:ml-3">
          Conformément à la législation française, nous sommes tenus de
          conserver vos données personnelles pendant une durée minimale de 5 ans
          à compter de la date de la transaction.
        </p>
        <p className="first-letter:ml-3">
          Après cette période, nous détruirons vos données de manière sécurisée.
        </p>
        <p className="first-letter:ml-3">
          Durant la période de conservation de vos données, celles-ci sont
          protégées grâce a des mesures de sécurité appropriées que nous mettons
          en œuvre pour la protection contre la perte, l&apos;accès non
          autorisé, la divulgation, l&apos;altération ou destruction etc…. Ces
          mesures de sécurités incluent mais ne sont pas limites à : le
          cryptage, l&apos;utilisation des pares-feux et de systèmes de
          détection d&apos;intrusion, ainsi que la formation de nos agents et
          operateurs sur la sécurité des données.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">Vos droits :</h3>
        <p className="first-letter:ml-3">
          En tant que personne concernée vous disposez de plusieurs droits en
          matière de protection des données personnelles, notamment le droit
          d&apos;accéder à vos données, les rectifier, les supprimer, limiter
          leur traitement ou de vous opposer a leur traitement. Pour exercer ces
          droits, ou pour toutes autres questions, préoccupations et/ou
          renseignement veuillez ne pas hésiter à nous contacter à{" "}
          <Link className="link" href="mailto:contact@paris-change.com">
            contact@paris-change.com
          </Link>
        </p>
        <p className="first-letter:ml-3">
          Nous nous engageons à toujours respecter votre vie privée et à essayer
          de traiter vos informations avec la plus grande sensibilité, respect
          et transparence.
        </p>
      </div>
    </div>
  );
};

export default ProtDesDonnes;
