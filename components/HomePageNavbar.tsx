"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useHanko } from "./HankoProvider";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const HomePageNavbar = () => {
  const hanko = useHanko();
  const isLoggedIn = hanko?.session.isValid() || false;

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" sizes="2.5rem" />
        </div>
        <h1 className={`text-2xl font-bold text-white ${font.className}`}>
          Wasis
        </h1>
      </Link>
      <div className="flex flex-row items-center gap-x-10">
        <Link href={isLoggedIn ? "/dashboard" : "/sign-in"}>
          <button className="btn btn-outline rounded-full bg-white">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default HomePageNavbar;
