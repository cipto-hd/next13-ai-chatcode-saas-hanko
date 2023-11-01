"use client";

import { Code, LayoutDashboard, MessageSquare, Settings } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/useMobileSidebar";
import logoSrc from "@/public/logo.png";

import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const mobileSidebar = useMobileSidebar();

  return (
    <div className="h-full flex flex-col space-y-4 py-4">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image alt="logo" className="object-fill" src={logoSrc} />
          </div>
          <h1
            className={`text-2xl font-bold text-white ${montserrat.className}`}
          >
            Wasis
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              onClick={mobileSidebar.close} // close sheet upon clicking link
              key={route.href}
              href={route.href}
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ${
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              }`}
            >
              <div className="flex items-center flex-1">
                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter />
    </div>
  );
};
export default Sidebar;
