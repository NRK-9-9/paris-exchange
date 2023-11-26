"use client";
import React from "react";
import Image from "next/image";
import LOGO from "../../public/LOGO.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

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
            Fournir des taux de change fiables depuis 2017
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
          <span className="footer-title">Legal</span>
          <Link href="/cgv" className="link link-hover">
            CGV
          </Link>
          <Link href="/antiblanc">Lutte Anti-Blachiment</Link>
          <Link href="/">Cookie policy</Link>
          <Link href="/lclbd">LCLBD</Link>
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
