// src/components/Nav.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import mainHorizontalLogo from "../../public/edgi-logo.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-edgi-paper border-b border-edgi-paperDark">
      <div className="w-full px-6 h-20 flex items-center justify-between relative">
        {/* left — EDGI logo */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src={mainHorizontalLogo}
            alt="Enviromental Data & Governance Initiative"
            width={200}
            className="w-40 md:w-48"
          ></Image>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/tools"
            className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/centers"
            className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          >
            Regions
          </Link>
          <Link
            href="/about"
            className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          >
            About
          </Link>
          <a
            href="https://forms.gle/LwjQZ7YwL6MshKV68"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-edgi-green text-sm font-medium px-5 py-2 rounded-full border border-edgi-green hover:text-edgi-paper hover:bg-edgi-ink hover:border-edgi-ink transition-colors"
          >
            Report a Tool ↗
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-edgi-ink text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-5 h-5 transition-transform duration-200" />
          ) : (
            <Menu className="w-5 h-5 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden bg-edgi-paper flex flex-col items-end px-6 overflow-hidden transition-all duration-200 ${menuOpen ? "max-h-96 pb-4 gap-4" : "max-h-0 pb-0 gap-0"}`}
      >
        <Link
          href="/tools"
          className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Tools
        </Link>
        <Link
          href="/centers"
          className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Regions
        </Link>
        <Link
          href="/about"
          className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <a
          href="https://forms.gle/LwjQZ7YwL6MshKV68"
          target="_blank"
          rel="noopener noreferrer"
          className="text-edgi-green text-sm font-medium hover:text-edgi-teal transition-colors"
        >
          Report a Tool ↗
        </a>
      </div>
    </nav>
  );
}
