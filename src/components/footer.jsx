"use client";
import React from "react";
import Image from "next/image";
import LOGO from "../../public/LOGO.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="footer p-10 mt-10 bg-neutral text-neutral-content lg:px-80">
        <div>
          <Image
            src={LOGO}
            alt="LOGO"
            width={100}
            height={100}
            className="w-20"
          ></Image>
          <p>
            Paris Exchange.
            <br />
            Fournir des taux de change fiables.
          </p>
        </div>
        <div>
          <span className="footer-title">A propos</span>
          <Link href="/info" className="link link-hover">
            Qui sommes nous?
          </Link>
          <Link href="/contact" className="link link-hover">
            Contactez-nous
          </Link>
        </div>

        <div>
          <span className="footer-title">Informations lÉgales</span>
          <Link href="/mentions-legales" className="link link-hover">
            Mentions légales
          </Link>
          <Link href="/cgv" className="link link-hover">
            CGV
          </Link>
          {/* <Link className="link link-hover" href="/antiblanc">
            Lutte Anti-Blachiment
          </Link> */}
          <Link className="link link-hover" href="/lcbd-ft">
            LCBD-FT
          </Link>

          <Link className="link link-hover" href="protection-des-donnees">
            Protections Des Données
          </Link>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content border-t-[1px] border-t-neutral-600">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - Tous droits réservés par
            Paris Exchange
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
