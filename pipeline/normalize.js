import { parse } from "csv-parse/sync";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = join(__dirname, "../data/raw/csv");
const PROCESSED_DIR = join(__dirname, "../data/processed");

// controlled vocabulary — validated against raw CSV column headers
const VOCAB = {
  "Accessibility Status (Active, Partially Broken, Fully Broken, Offline, Unknown)":
    ["Active", "Partially Broken", "Fully Broken", "Offline", "Unknown"],
  "Restoration Feasibility (L / M / H)": ["High", "Medium", "Low"],
  "ACIS Dependent (Y / N)": ["Y", "N"],
  "Priority (H / M / L)": ["High", "Medium", "Low"],
  "Substitute Exists (Y / N / Partial)": ["Y", "N", "Partial"],
  "Archive Type (Internal (PEDP/EDGI), External, None Found, Unknown)": [
    "Internal (PEDP/EDGI)",
    "External",
    "None Found",
    "Unknown",
  ],
  "Verification Method (Loaded - Data Returned, Loaded - Page Only, Center Directory, Contact Confirmed, Unreachable, Inferred)":
    [
      "Loaded - Data Returned",
      "Loaded - Page Only",
      "Center Directory",
      "Contact Confirmed",
      "Unreachable",
      "Inferred",
    ],
};

// slug map for segment categories — used for URL-safe filter params
const SEGMENT_SLUGS = {
  Agriculture: "agriculture",
  "Water Resources": "water-resources",
  "Emergency Management": "emergency-management",
  "Fire & Rangeland": "fire-rangeland",
  "Public Health": "public-health",
  "Planning & Policy": "planning-policy",
  Transportation: "transportation",
  "Research & Education": "research-education",
  "Data & Technical": "data-technical",
  "Media & Communications": "media-communications",
};

const CENTERS = ["nrcc", "mrcc", "hprcc", "srcc", "sercc", "wrcc"];

const errors = [];

// normalize multiline headers from CSV export
function normalizeHeaders(content) {
  return content
    .replace(
      /("Restoration Feasibility\s*\n\s*\(L \/ M \/ H\)")/g,
      '"Restoration Feasibility (L / M / H)"',
    )
    .replace(/("Priority\s*\n\s*\(H \/ M \/ L\)")/g, '"Priority (H / M / L)"')
    .replace(
      /("Substitute Exists\s*\n?\s*\(Y \/ N \/ Partial\)\s*")/g,
      '"Substitute Exists (Y / N / Partial)"',
    );
}

function validateRow(row, center, index) {
  for (const [field, valid] of Object.entries(VOCAB)) {
    const value = row[field]?.trim();
    if (value && !valid.includes(value)) {
      errors.push(
        `[${center.toUpperCase()}] Row ${index + 2}: "${field}" has invalid value "${value}"`,
      );
    }
  }
}

// parse segment category string into array of URL-safe slugs
function parseSegments(raw) {
  if (!raw?.trim()) return [];
  return raw
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => SEGMENT_SLUGS[s])
    .filter(Boolean);
}

function normalizeRow(row, center) {
  return {
    rcc: row["RCC"]?.trim() || center.toUpperCase(),
    toolName: row["Tool Name"]?.trim(),
    url: row["URL"]?.trim(),
    function: row["Function"]?.trim(),
    category: row["Category"]?.trim(),
    dataSource: row["Data Source"]?.trim(),
    accessibilityStatus:
      row[
        "Accessibility Status (Active, Partially Broken, Fully Broken, Offline, Unknown)"
      ]?.trim(),
    firstObserved: row["First Observed"]?.trim(),
    lastConfirmedLive: row["Last Confirmed Live"]?.trim(),
    verificationMethod:
      row[
        "Verification Method (Loaded - Data Returned, Loaded - Page Only, Center Directory, Contact Confirmed, Unreachable, Inferred)"
      ]?.trim(),
    verifiedDate: row["Verified Date"]?.trim(),
    archiveType:
      row[
        "Archive Type (Internal (PEDP/EDGI), External, None Found, Unknown)"
      ]?.trim(),
    archiveLink: row["Archive Link"]?.trim(),
    archiveContents:
      row[
        "Archive Contents (Interface, Documentation, Data, Code, None Found, Unknown)"
      ]?.trim(),
    userSegment: row["User Segment"]?.trim(),
    segments: parseSegments(
      row[
        "Segment Category (Agriculture, Water Resources, Emergency Management,  Fire & Rangeland, Public Health, Planning & Policy, Transportation, Research & Education, Data & Technical, Media & Communications)"
      ],
    ),
    restorationFeasibility: row["Restoration Feasibility (L / M / H)"]?.trim(),
    acisDependent: row["ACIS Dependent (Y / N)"]?.trim(),
    priority: row["Priority (H / M / L)"]?.trim(),
    substituteExists: row["Substitute Exists (Y / N / Partial) "]?.trim(),
    impactEvidence: row["Impact Evidence"]?.trim(),
    evidenceType:
      row["Evidence Type (Documented, Reported, Inferred, None)"]?.trim(),
    notes: row["Notes"]?.trim(),
  };
}

function summarize(tools) {
  const centers = {};
  for (const tool of tools) {
    const rcc = tool.rcc;
    if (!centers[rcc]) {
      centers[rcc] = {
        rcc,
        total: 0,
        active: 0,
        partiallyBroken: 0,
        fullyBroken: 0,
        offline: 0,
        unknown: 0,
        acisDependent: 0,
        highPriority: 0,
        noSubstitute: 0,
        // V2: add archived once Archive Type verification pass is complete
        // archived: 0,
      };
    }
    const c = centers[rcc];
    c.total++;
    if (tool.accessibilityStatus === "Active") c.active++;
    if (tool.accessibilityStatus === "Partially Broken") c.partiallyBroken++;
    if (tool.accessibilityStatus === "Fully Broken") c.fullyBroken++;
    if (tool.accessibilityStatus === "Offline") c.offline++;
    if (tool.accessibilityStatus === "Unknown") c.unknown++;
    if (tool.acisDependent === "Y") c.acisDependent++;
    if (tool.priority === "High") c.highPriority++;
    if (tool.substituteExists === "N") c.noSubstitute++;
  }
  return centers;
}

// main
mkdirSync(PROCESSED_DIR, { recursive: true });

const allTools = [];

for (const center of CENTERS) {
  const filePath = join(RAW_DIR, `${center}.csv`);
  const content = readFileSync(filePath, "utf-8");
  const normalizedContent = normalizeHeaders(content);
  const rows = parse(normalizedContent, {
    columns: true,
    skip_empty_lines: true,
  }).filter(row => row["Category"]?.trim() !== "Legacy / Discontinued Tools");

  rows.forEach((row, index) => {
    validateRow(row, center, index);
    allTools.push(normalizeRow(row, center));
  });
}

if (errors.length > 0) {
  console.warn("\n⚠️  Controlled vocabulary errors:");
  errors.forEach((e) => console.warn(" ", e));
  console.warn("");
}

const summary = summarize(allTools);

writeFileSync(
  join(PROCESSED_DIR, "tools.json"),
  JSON.stringify(allTools, null, 2),
);
writeFileSync(
  join(PROCESSED_DIR, "summary.json"),
  JSON.stringify(summary, null, 2),
);

console.log(
  `✓ ${allTools.length} tools processed across ${CENTERS.length} centers`,
);
console.log(`✓ Written to data/processed/`);
