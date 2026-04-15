// src/components/StakesSection.tsx

import { Icon } from "lucide-react";

import {
  Sprout,
  Siren,
  Waves,
  Zap,
  HeartPulse,
  TreePine,
  Landmark,
  Scale,
  Mountain,
  GraduationCap,
} from "lucide-react";

const iconMap = {
  Sprout,
  Siren,
  Waves,
  Zap,
  HeartPulse,
  TreePine,
  Landmark,
  Scale,
  Mountain,
  GraduationCap,
};

const segments = [
  {
    label: "Agriculture",
    description:
      "Farmers and agronomists rely on regional climate tools for planting decisions, drought monitoring, and crop insurance documentation.",
    href: "/tools?segment=agriculture",
    icon: Sprout,
  },
  {
    label: "Emergency Management",
    description:
      "Emergency coordinators use climate tools to anticipate flood risk, heat events, and severe weather windows for response planning.",
    href: "/tools?segment=emergency-management",
    icon: Siren,
  },
  {
    label: "Water Resources",
    description:
      "Water managers depend on precipitation records, snowpack data, and drought indices to manage supply and allocation.",
    href: "/tools?segment=water-resources",
    icon: Waves,
  },
  {
    label: "Energy & Utilities",
    description:
      "Utilities use temperature and demand tools to forecast load, plan infrastructure, and manage grid stress during extreme weather.",
    href: "/tools?segment=energy-utilities",
    icon: Zap,
  },
  {
    label: "Public Health",
    description:
      "Health agencies track heat index, humidity, and air quality tools to issue warnings and allocate cooling resources.",
    href: "/tools?segment=public-health",
    icon: HeartPulse,
  },
  {
    label: "Conservation",
    description:
      "Land managers and wildlife agencies use climate tools to monitor habitat conditions, wildfire risk, and phenological shifts.",
    href: "/tools?segment=conservation",
    icon: TreePine,
  },
  {
    label: "Planning & Policy",
    description:
      "Urban planners and policymakers use climate normals and projections to inform zoning, infrastructure, and resilience investments.",
    href: "/tools?segment=planning-policy",
    icon: Landmark,
  },
  {
    label: "Insurance & Legal",
    description:
      "Insurers and attorneys use certified climate records to assess risk, price policies, and resolve weather-related claims.",
    href: "/tools?segment=insurance-legal",
    icon: Scale,
  },
  {
    label: "Recreation",
    description:
      "Ski areas, parks, and outdoor industries use seasonal forecasts and snowpack tools to plan operations and communicate conditions.",
    href: "/tools?segment=recreation",
    icon: Mountain,
  },
  {
    label: "Research & Education",
    description:
      "Scientists and educators use long-term regional climate datasets as foundational inputs for analysis, modeling, and teaching.",
    href: "/tools?segment=research-education",
    icon: GraduationCap,
  },
];

export default function StakesSection() {
  return (
    <section className="bg-edgi-paper py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-edgi-ink tracking-tight">
            Who depends on these tools
          </h2>
          <p className="mt-3 text-edgi-inkMuted mx-auto max-w-2xl">
            Regional climate tools serve a wide cross-section of practitioners.
            When they go offline, the impact is immediate and often invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map((segment) => (
            <a
              key={segment.label}
              href={segment.href}
              className="group block bg-white border border-edgi-paperDark rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-edgi-green"
            >
              <segment.icon className="w-5 h-5 text-edgi-ink group-hover:text-edgi-green transition-colors duration-200 mb-3" />
              <h3 className="text-edgi-ink font-semibold mb-2 group-hover:text-edgi-green transition-colors duration-200">
                {segment.label}
              </h3>
              <p className="text-edgi-inkMuted text-sm leading-relaxed">
                {segment.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}