import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import { CrispProvider } from "@/components/CrispProvider";
import HankoProvider from "@/components/HankoProvider";
import ProModal from "@/components/ProModal";
import ToasterProvider from "@/components/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wasis - AI ChatCode SaaS",
  description: "Awesome AI SaaS to ask anything and generate code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-base-content`}>
        <HankoProvider>
          {children}
          <ProModal />
          <ToasterProvider />
          <CrispProvider />
        </HankoProvider>
      </body>
    </html>
  );
}
