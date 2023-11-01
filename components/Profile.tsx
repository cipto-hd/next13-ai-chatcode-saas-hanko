"use client";

import { useState } from "react";

const Profile = ({ align = "left" }: { align?: "right" | "left" }) => {
  const [openState, setOpenState] = useState(false);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button type="button" onClick={openProfile} className="btn btn-nav">
        Profile
      </button>
      {openState && (
        <div
          className={`absolute top-14 z-50 ${
            align == "left"
          }?"left-0":"right-0"`}
        >
          <section className="w-[450px] h-auto rounded-2xl bg-white p-5 border border-gray-200">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};

export default Profile;
