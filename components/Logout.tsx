"use client";

import { useRouter } from "next/navigation";

import { useHanko } from "./HankoProvider";

const Logout = () => {
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
    <button type="button" onClick={logout} className="btn btn-nav">
      Logout
    </button>
  );
};

export default Logout;
