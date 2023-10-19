"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Hanko, register } from "@teamhanko/hanko-elements";

const HankoContext = createContext<Hanko | undefined>(undefined);

export default function HankoProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  const redirectAfterLogin = useCallback(() => {
    router.replace(`${process.env.NEXT_PUBLIC_HANKO_AFTER_SIGN_IN_URL}`);
  }, [router]);

  useEffect(() => {
    // register Hanko
    register(process.env.NEXT_PUBLIC_HANKO_API_URL ?? "")
      .then(({ hanko }) => {
        setHanko(hanko);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    hanko?.onAuthFlowCompleted(() => {
      redirectAfterLogin();
    });
  }, [hanko, redirectAfterLogin]);

  return (
    <HankoContext.Provider value={hanko}>{children}</HankoContext.Provider>
  );
}
export const useHanko = () => {
  const hanko = useContext(HankoContext);
  return hanko;
};
