"use client";

import { useRouter } from "next/navigation";

import { useHanko } from "./HankoProvider";

export const Logout = () => {
  const router = useRouter();
  const hanko = useHanko();

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button className="text-gray-50" type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};
