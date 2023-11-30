import Link from "next/link";
import React from "react";

export default function CGV() {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <h1 className="text-2xl lg:text-4xl font-bold tracking-widest text-center text-primary font-logoFont lg:mt-10 lg:mb-5 p-1 lg:w-[75vw] lg:place-items-center">
        CONDITIONS GÉNÉRALES DE VENTE (CGV)
      </h1>

      <div className="flex flex-col lg:w-[60vw] gap-2 p-2">
        <p className=" text-sm text-neutral-500">
          Les présentes conditions générales de vente (CGV) sont applicables à
          toutes les transactions réalisées sur le site web ou dans les bureaux
          de Paris Exchange. En effectuant une réservation ou une commande sur
          notre site, vous acceptez de manière inconditionnelle les présentes
          CGV.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Produits et Disponibilité
        </h3>
        <p className="first-letter:ml-3">
          Les produits disponibles à la vente sur notre site sont des devises
          étrangères. Nous nous efforçons de garantir la disponibilité des
          produits, mais il se peut que certains articles soient temporairement
          en rupture de stock. Dans ce cas, nous vous informerons par courrier
          électronique ou par téléphone, et vous proposerons une solution
          alternative ou une annulation complète de votre réservation/commande.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">Prix </h3>
        <p className="first-letter:ml-3">
          Les prix des produits sont affichés en euros, toutes taxes comprises
          (TTC). Ils peuvent être modifiés à tout moment en fonction des
          fluctuations du marché. Les prix indiqués sur le site au moment de la
          commande sont ceux qui s&apos;appliquent à la transaction, tout comme
          ceux présents en bureau.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Réservation/Commande
        </h3>
        <p className="first-letter:ml-3">
          Pour effectuer une réservation et/ou une commande, vous devez remplir
          le formulaire en ligne et fournir les informations requises, y compris
          une copie de votre pièce d&apos;identité et un justificatif de
          domicile en bureau ou en pièces jointes en cas de commande. Votre
          commande sera considérée comme définitive après réception d&apos;une
          confirmation de Paris Exchange, laquelle vous sera communiquée par
          courrier électronique ou message SMS, accompagnée d&apos;un numéro de
          référence.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">Paiement </h3>
        <p className="first-letter:ml-3">
          Les commandes peuvent être réglées par carte bancaire lors d&apos;une
          réservation ou en ligne pour les commandes (ou en espèces ou carte en
          bureau). Les informations de paiement sont traitées de manière
          sécurisée, conforme à notre politique de sécurité des paiements en
          ligne.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Préparation des Commandes
        </h3>
        <p className="first-letter:ml-3">
          Afin d&apos;assurer l&apos;exactitude de vos commandes et de maintenir
          un service de haute qualité, nous vous informons que la préparation
          des commandes est effectuée sous surveillance vidéo. Cette mesure vise
          à garantir la qualité de nos services et à éviter toute erreur
          potentielle. Toutes les vidéos sont traitées conformément à nos
          politiques de confidentialité et de sécurité.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Droit de Rétractation
        </h3>
        <p className="first-letter:ml-3">
          Conformément à la législation française, vous disposez d&apos;un délai
          de rétractation de 14 jours à compter de la réception de votre
          commande pour exercer votre droit de rétractation, sans justification
          ni frais supplémentaires. Pour exercer ce droit, vous devez nous
          informer par écrit (courrier ou e-mail) de votre décision. Les frais
          de retour des produits sont à votre charge.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">Responsabilité</h3>
        <p className="first-letter:ml-3">
          Paris Exchange ne pourra être tenue responsable en cas de
          non-exécution ou de mauvaise exécution du contrat résultant de
          circonstances indépendantes de notre volonté, telles que des
          événements de force majeure, des problèmes techniques, ou des erreurs
          de la part du client.
        </p>
        <h3 className="text-2xl text-primary tracking-wider">
          Protections des Données Personelles
        </h3>
        <p className="first-letter:ml-3">
          Nous nous engageons a protéger vos données personnelles conformément a
          notre politique de{" "}
          <Link className="link" href="/protection-des-donnees">
            Protections Des Donnees
          </Link>
        </p>
      </div>
    </div>
  );
}
