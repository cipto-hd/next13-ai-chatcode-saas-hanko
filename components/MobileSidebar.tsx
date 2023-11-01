"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import { useMobileSidebar } from "@/hooks";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mobileSidebar = useMobileSidebar();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="drawer md:hidden z-[100]">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={mobileSidebar.isOpen}
        onChange={mobileSidebar.toggle}
      />

      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost cursor-pointer">
          <Menu />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-0 w-72 h-full bg-gray-900">
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
