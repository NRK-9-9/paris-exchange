import Link from "next/link";
import React from "react";

const Lclbd = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:m-16 lg:w-[60vw] w-[19rem]">
        <h1 className="font-extrabold lg:text-3xl text-primary text-xl lg:mb-5 mb-4 font-logoFont">
          LUTTE CONTRE LE BLANCHIMENT D&apos;ARGENT ET LE FINANCEMENT DU
          TERRORISME
        </h1>
        <div>
          <h5 className="lg:text-lg text-sm text-neutral text-opacity-90">
            <p className="mt-2 first-letter:ml-4 first-letter:text-lg">
              À PARIS EXCHANGE, nous nous engageons fermement à respecter les
              lois et règlements en vigueur en France afin de garantir la
              sécurité de nos clients et de lutter contre le blanchiment
              d&apos;argent et le financement du terrorisme. Conformément à la
              législation française, il nous incombe de procéder à la
              vérification de l&apos;identité de nos clients lorsqu&apos;ils
              effectuent des transactions d&apos;achat de devises ou d&apos;or.
            </p>
            <p className="mt-2 first-letter:ml-4 first-letter:text-lg">
              En qualité d&apos;entreprise évoluant dans le secteur des devises
              et des métaux précieux, nous sommes assujettis à la réglementation
              française en matière de lutte contre le blanchiment d&apos;argent
              et le financement du terrorisme. Ceci implique la mise en place de
              procédures de vérification d&apos;identité pour nos clients, avec
              conservation de registres de ces vérifications.
            </p>
          </h5>
          <p className="my-2  first-letter:ml-4 first-letter:text-lg">
            Pour confirmer votre identité, nous vous prions de bien vouloir
            fournir l&apos;un des documents d&apos;identité suivants:
          </p>
          <ul className="list-disc ml-4 list-outside list-image-tower">
            <li className="ml-3 text-sm"> Carte nationale d&apos;identité </li>
            <li className="ml-3 text-sm"> Passeport </li>
            <li className="ml-3 text-sm"> Titre de séjour</li>
          </ul>
          <p className=" mt-2">
            Il est important de noter que le document doit être en cours de
            validité, lisible, et que vous devez avoir le document physique en
            votre possession (ou une copie numérique avec le recto et le verso
            du document si présent).
          </p>
          <h1 className="font-extrabold text-primary lg:text-3xl tracking-wider text-2xl lg:mb-5 mb-4  font-logoFont mt-10">
            Confidentialité et sécurité
          </h1>
          <p className="first-letter:text-lg first-letter:ml-4 mt-2">
            Nous comprenons l&apos;importance de la protection de vos données
            personnelles. À PARIS EXCHANGE, nous nous engageons à préserver la
            confidentialité de vos informations et à les sécuriser au moyen de
            mesures appropriées. Vos données seront utilisées exclusivement dans
            le cadre des obligations légales et réglementaires, et ne seront en
            aucun cas partagées avec des tiers sans votre consentement, sauf en
            cas de nécessité légale.
          </p>
          <p className="first-letter:text-lg first-letter:ml-4 mt-2">
            En respectant ces exigences, nous contribuons à garantir la sécurité
            et la transparence de nos opérations, tout en préservant nos clients
            et en observant scrupuleusement nos obligations légales.
          </p>
          <p className="first-letter:text-lg first-letter:ml-4 mt-2">
            <p>
              {
                "Décret n°2012-1125 du 3 octobre 2012 et l'article R561-10 modifiant les seuils de l'opération change manuel au premiereuro dès que le client n'est pas présent physiquement "
              }
            </p>
            <Link
              className="link text-sm w-[10vw]"
              href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000026457407"
            >
              www.legifrance.gouv.fr
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lclbd;
