// src/app/layout.tsx

import type { Metadata } from "next";

import "./globals.css";

import { Mona_Sans } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer"

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "RCC Restoration | Environmental Data & Governance Initiative",
  description:
    "Documenting the status of nearly 200 climate tools across NOAA's six Regional Climate Centers and making the case for their restoration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} font-sans`}>
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
