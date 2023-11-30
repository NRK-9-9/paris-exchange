import Link from "next/link";
import React from "react";

const MentionsLegales = () => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <h1 className="text-3xl lg:text-4xl font-bold tracking-widest text-center text-primary font-logoFont lg:mt-10 lg:mb-5 p-1 lg:w-[75vw] lg:place-items-center">
        Mentions Legales
      </h1>
      <div className="flex flex-col lg:w-[60vw] gap-4 p-2">
        <p className="text-xl font-bold">
          Identification de l&apos;entreprise : Paris Exchange
        </p>
        <p className="text-xl font-bold">Forme juridique : SARL</p>
        <p className="text-xl font-bold">
          Adresse du siège social: 23 Rue Berger Chatelet 75001 Paris
        </p>
        <p className="text-xl font-bold">
          Numéro de téléphone: (+33) 09 54 45 54 44
        </p>
        <p className="text-xl font-bold">
          Immatriculation: immatriculé au Registre du Commerce et des Sociétés
          (R.C.S) de Paris sous le numéro: 802 887 497
        </p>
        <p className="text-xl font-bold">Numéro de SIRET 802 887 497 000 31</p>
        <p className="text-xl font-bold">
          Responsable de la publication: Mr. Tamer, Assad
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Propriété intellectuelle
        </h3>
        <p>
          L&apos;ensemble des éléments composant ce site, tels que les textes,
          images, graphismes, logos, icônes, sons et logiciels, est la propriété
          de Paris Exchange ou de ses partenaires. Toute reproduction,
          représentation, modification, publication ou adaptation de tout ou
          partie des éléments du site, quel que soit le moyen ou le procédé
          utilisé, est interdite sans l&apos;autorisation écrite préalable de
          Paris Exchange.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Limitation de responsabilité
        </h3>
        <p>
          Paris Exchange ne peut être tenue pour responsable des dommages
          directs ou indirects résultant de l&apos;utilisation de ce site ou de
          l&apos;impossibilité d&apos;y accéder. Les informations contenues sur
          ce site sont fournies à titre indicatif et ne sauraient engager la
          responsabilité de Paris Exchange en cas d&apos;erreur ou
          d&apos;omission.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Politique de confidentialité
        </h3>
        <p>
          {
            "Pour consulter notre politique de confidentialité, veuillez-vous rendre sur notre page "
          }
          <Link className="link" href="/protection-des-donnees">
            Protections Des Donnees
          </Link>
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Conditions générales de vente
        </h3>
        <p>
          {`Pour consulter nos conditions générales de vente, veuillez-vous rendre
          sur notre page `}
          <Link className="link" href="/cgv">
            CGV
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
