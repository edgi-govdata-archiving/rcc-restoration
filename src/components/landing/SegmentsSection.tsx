// src/components/SegmentsSection.tsx

import {
  Sprout,
  Siren,
  Waves,
  HeartPulse,
  Landmark,
  GraduationCap,
  Flame,
  Truck,
  Database,
  Megaphone,
} from "lucide-react";

const segments = [
  {
    label: "Agriculture",
    description:
      "Farmers and agronomists rely on regional climate tools for planting decisions, drought monitoring, and crop insurance documentation.",
    href: "/tools?segment=agriculture",
    icon: Sprout,
  },
  {
    label: "Water Resources",
    description:
      "Water managers depend on precipitation records, snowpack data, and drought indices to manage supply and allocation.",
    href: "/tools?segment=water-resources",
    icon: Waves,
  },
  {
    label: "Emergency Management",
    description:
      "Emergency coordinators use climate tools to anticipate flood risk, heat events, and severe weather windows for response planning.",
    href: "/tools?segment=emergency-management",
    icon: Siren,
  },
  {
    label: "Fire & Rangeland",
    description:
      "Fire managers and incident commanders rely on fire weather data, fuel moisture, and rangeland conditions to time burns and stage response.",
    href: "/tools?segment=fire-rangeland",
    icon: Flame,
  },
  {
    label: "Public Health",
    description:
      "Health agencies track heat index, humidity, and air quality tools to issue warnings and allocate cooling resources.",
    href: "/tools?segment=public-health",
    icon: HeartPulse,
  },
  {
    label: "Planning & Policy",
    description:
      "Urban planners and policymakers use climate normals and projections to inform zoning, infrastructure, and resilience investments.",
    href: "/tools?segment=planning-policy",
    icon: Landmark,
  },
  {
    label: "Transportation",
    description:
      "DOT engineers and road crews use precipitation and freeze data for maintenance scheduling and infrastructure design.",
    href: "/tools?segment=transportation",
    icon: Truck,
  },
  {
    label: "Research & Education",
    description:
      "Scientists and educators use long-term regional climate datasets as foundational inputs for analysis, modeling, and teaching.",
    href: "/tools?segment=research-education",
    icon: GraduationCap,
  },
  {
    label: "Data & Technical",
    description:
      "Developers and data analysts build on ACIS web services directly, feeding regional climate data into downstream tools and research pipelines.",
    href: "/tools?segment=data-technical",
    icon: Database,
  },
  {
    label: "Media & Communications",
    description:
      "Journalists and public information officers use climate summaries and historical records to report on drought, heat events, and extreme weather.",
    href: "/tools?segment=media-communications",
    icon: Megaphone,
  },
];

export default function SegmentsSection() {
  return (
    <section className="bg-edgi-paper pt-12 sm:pt-10 pb-16 sm:pb-14 md:pb-12 sm:py-16 px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-edgi-ink tracking-tight">
            Who depends on these tools
          </h2>
          <p className="mt-4 sm:mt-3 text-edgi-ink/70 mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl transition-all duration-300">
            Regional climate tools serve a wide cross-section of practitioners.
            When they go offline, the impact is immediate and often invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto transition-all duration-300">
          {segments.map((segment) => (
            <a
              key={segment.label}
              href={segment.href}
              className="group block bg-white border border-edgi-paperDark rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md "
            >
              <segment.icon className="w-5 h-5 text-edgi-ink group-hover:text-edgi-green transition-colors duration-200 mb-3" />
              <h3 className="text-edgi-ink font-semibold mb-2 group-hover:text-edgi-green transition-colors duration-200">
                {segment.label}
              </h3>
              <p className="text-edgi-ink/75 text-sm leading-relaxed">
                {segment.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
