// src/components/landing/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-edgi-ink flex items-end pb-14 md:pb-16 lg:pb-14 px-6 pt-10 lg:pt-14 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center lg:max-w-6xl 2xl:max-w-7xl mx-auto w-full transition-all duration-300">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-edgi-paper text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left max-w-lg md:max-w-xl lg:max-w-2xl mb-8 transition-all duration-300">
            150 years of regional climate knowledge. Quietly disappearing.
          </h1>
          <p className="text-edgi-paper/70 text-lg md:text-xl text-center lg:text-left leading-relaxed mb-12 max-w-lg md:max-w-xl lg:max-w-2xl transition-all duration-300">
            National Oceanic and Atmospheric Administration's (NOAA){" "}
            <a href="/centers" className="text-edgi-teal hover:underline">
              six Regional Climate Centers
            </a>{" "}
            host nearly 200 tools that farmers, emergency managers, water
            planners, and researchers depend on daily. Federal funding cuts are
            putting them at risk.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 w-60 lg:w-md transition-all duration-300">
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
          className="w-full max-w-xs sm:max-w-md h-auto mt-12 lg:mt-0 mx-auto"
        />
      </div>
    </section>
  );
}
