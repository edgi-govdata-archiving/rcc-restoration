// src/components/AuditDataSection.tsx

import summary from "../../../data/processed/summary.json";

const totals = Object.values(summary).reduce(
  (acc, center) => ({
    total: acc.total + center.total,
    noSubstitute: acc.noSubstitute + center.noSubstitute,
    highPriority: acc.highPriority + center.highPriority,
    acisDependent: acc.acisDependent + center.acisDependent,
    // V2: add archived once Archived modifier pass is complete
    // archived: acc.archived + center.archived,
  }),
  { total: 0, noSubstitute: 0, highPriority: 0, acisDependent: 0 },
);

const stats = [
  {
    number: `${totals.total + 1}+`,
    label: "Tools audited across six Regional Climate Centers",
  },
  { number: `${totals.noSubstitute}`, label: "Tools with no known substitute" },
  { number: `${totals.highPriority}`, label: "High priority tools" },
  {
    number: `${totals.acisDependent}`,
    label: "Tools dependent on shared federal infrastructure",
  },
  /* V2: Add archived stat once Archived modifier pass (internal/external/Wayback) is complete
  { number: `${totals.archived}`, label: "Tools archived and preserved" }, */
];

export default function AuditDataSection() {
  return (
    <section className="bg-edgi-ink py-16 px-6 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-edgi-teal text-4xl md:text-6x font-bold mb-3">
              {stat.number}
            </p>
            <p className="text-edgi-gray text-sm leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
