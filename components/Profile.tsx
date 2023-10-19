"use client";

import { useState } from "react";

export const Profile = ({ align = "left" }: { align?: "right" | "left" }) => {
  const [openState, setOpenState] = useState(false);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button className="text-gray-50" type="button" onClick={openProfile}>
        Profile
      </button>
      {openState && (
        <div
          className={`absolute top-14 ${align == "left"}?"left-0":"right-0"`}
        >
          <section className=" w-[450px] h-auto rounded-2xl bg-white p-5">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};
