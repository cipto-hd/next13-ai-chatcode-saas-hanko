"use client";

import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

import { useHanko } from "./HankoProvider";

const HomePageHero = () => {
  const hanko = useHanko();
  const isLoggedIn = hanko?.session.isValid() || false;

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Code Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isLoggedIn ? "/dashboard" : "/sign-in"}>
          <button className="btn btn-premium md:text-lg rounded-full font-semibold">
            Start Generating For Free
          </button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

export default HomePageHero;
