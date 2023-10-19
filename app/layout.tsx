import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import HankoProvider from "@/components/HankoProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI ChatCode SaaS",
  description: "Awesome AI SaaS to ask anything and generate code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HankoProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </HankoProvider>
      </body>
    </html>
  );
}
