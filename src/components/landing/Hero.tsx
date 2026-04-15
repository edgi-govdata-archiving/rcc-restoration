// src/components/landing/Hero.tsx

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-edgi-ink min-h-[74vh] flex items-end pb-22 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-edgi-paper text-5xl md:text-7xl font-bold leading-tight mb-8">
          150 years of regional climate knowledge. Quietly disappearing.
        </h1>
        <p className="text-edgi-paper/70 text-xl leading-relaxed mb-12 max-w-2xl">
          National Oceanic and Atmospheric Administration's (NOAA){" "}
          <a href="/centers" className="text-edgi-teal hover:underline">
            six Regional Climate Centers
          </a>{" "}
          host nearly 200 tools that farmers, emergency managers, water
          planners, and researchers depend on daily. Federal funding cuts are
          putting them at risk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/tools"
            className="bg-edgi-green text-edgi-ink font-medium px-8 py-4 rounded-full text-sm hover:bg-edgi-teal transition-colors inline-block"
          >
            Explore the Tools
          </Link>
          <a
            href="https://forms.gle/LwjQZ7YwL6MshKV68"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-edgi-paper text-edgi-paper font-medium px-8 py-4 rounded-full text-sm hover:border-edgi-teal hover:text-edgi-teal transition-colors inline-block"
          >
            Report a Tool You Use ↗
          </a>
        </div>
      </div>
      {/* RIGHT SIDE VISUAL PLACEHOLDER — see Copy Doc Landing 1.1 Hero — Right Side Visual for options */}
    </section>
  );
}