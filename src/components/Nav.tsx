import Link from "next/link";
import Image from "next/image";

import mainHorizontalLogo from "../../public/edgi-logo.svg";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-edgi-paper border-b border-edgi-paperDark">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left — EDGI logo */}
        <a
          href="https://envirodatagov.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src={mainHorizontalLogo}
            alt="Enviromental Data & Governance Initiative"
            width={200}
          ></Image>
        </a>

        {/* Right — nav links */}
        <div className="flex items-center gap-8">
          <Link
            href="/tools"
            className="text-edgi-ink text-sm font-medium hover:text-edgi-green transition-colors"
          >
            Explore
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
            className="bg-edgi-green text-edgi-ink text-sm font-medium px-5 py-2 rounded-full hover:bg-edgi-teal transition-colors"
          >
            Report a Tool ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
