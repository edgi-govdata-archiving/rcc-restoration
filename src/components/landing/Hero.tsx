// src/components/landing/Hero.tsx

import Link from "next/link";

import rccMap from "../../public/rcc-map.svg";

export default function Hero() {
  return (
    <section className="bg-edgi-ink min-h-[74vh] flex items-end pb-14 md:pb-22 px-6 pt-10 md:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <h1 className="text-edgi-paper text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center sm:text-left  mb-8">
            150 years of regional climate knowledge. Quietly disappearing.
          </h1>
          <p className="text-edgi-paper/70 text-lg md:text-xl text-center sm:text-left leading-relaxed mb-12 max-w-2xl">
            National Oceanic and Atmospheric Administration's (NOAA){" "}
            <a href="/centers" className="text-edgi-teal hover:underline">
              six Regional Climate Centers
            </a>{" "}
            host nearly 200 tools that farmers, emergency managers, water
            planners, and researchers depend on daily. Federal funding cuts are
            putting them at risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-60">
            <Link
              href="/tools"
              className="bg-edgi-green text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:bg-edgi-teal transition-colors text-center w-full sm:w-auto"
            >
              Explore the Tools
            </Link>
            <a
              href="https://forms.gle/LwjQZ7YwL6MshKV68"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-edgi-paper text-edgi-paper font-medium px-8 py-4 rounded-full text-sm hover:border-edgi-teal hover:text-edgi-teal transition-colors text-center w-full sm:w-auto"
            >
              Report a Tool You Use ↗
            </a>
          </div>
        </div>
        <img
          src="/rcc-map.svg"
          alt="Map of the six NOAA Regional Climate Center coverage areas"
          className="w-full max-w-xs h-auto mt-12 lg:mt-0 mx-auto"
        />
      </div>
    </section>
  );
}
