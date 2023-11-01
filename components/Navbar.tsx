"use client";

import Link from "next/link";

import Logout from "./Logout";
import MobileSidebar from "./MobileSidebar";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex flex-row w-full justify-end items-center space-x-2">
        <Link href="/" className="btn btn-nav">
          Home
        </Link>
        <Profile align="right" /> <Logout />
      </div>
    </div>
  );
};
export default Navbar;
