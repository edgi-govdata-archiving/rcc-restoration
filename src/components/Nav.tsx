// src/components/Nav.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import mainHorizontalLogo from "../../public/EDGI-Logo-Blue.svg";
import mainIconLogo from "../../public/EDGI-Icon-Blue.png"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-edgi-paper border-b border-edgi-paperDark">
      <div className="w-full px-6 h-20 flex items-center justify-between relative">
        {/* left — EDGI logo */}
        <a href="/" className="flex items-center">
          {isLarge ? (
            <Image
              src={mainHorizontalLogo}
              alt="Environmental Data & Governance Initiative"
              width={200}
              style={{ height: "auto" }}
            />
          ) : (
            <Image
              src={mainIconLogo}
              alt="Environmental Data & Governance Initiative"
              width={40}
              style={{ height: "auto" }}
            />
          )}
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
            Centers
          </Link>
          {/* <Link
            href="/about"
            className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          >
            About
          </Link> */}
          <a
            href="https://forms.gle/LwjQZ7YwL6MshKV68"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-edgi-green text-edgi-ink text-sm font-medium px-5 py-2 rounded-full hover:bg-edgi-ink hover:text-edgi-paper transition-colors"
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
          className="text-edgi-ink text-sm font-medium"
          onClick={() => setMenuOpen(false)}
        >
          Tools
        </Link>
        <Link
          href="/centers"
          className="text-edgi-ink text-sm font-medium"
          onClick={() => setMenuOpen(false)}
        >
          Centers
        </Link>
        {/* <Link
          href="/about"
          className="text-edgi-ink text-sm font-medium"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link> */}
        <a
          href="https://forms.gle/LwjQZ7YwL6MshKV68"
          target="_blank"
          rel="noopener noreferrer"
          className="text-edgi-ink text-sm font-medium"
        >
          Report a Tool ↗
        </a>
      </div>
    </nav>
  );
}
