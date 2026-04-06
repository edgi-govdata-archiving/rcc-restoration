import { parse } from "csv-parse/sync";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = join(__dirname, "../data/raw/csv");
const PROCESSED_DIR = join(__dirname, "../data/processed");

// controlled vocabulary
const VOCAB = {
  "Accessibility Status": [
    "Active",
    "Partially Broken",
    "Fully Broken",
    "Offline",
    "Archived",
  ],
  "Restoration Feasibility": ["High", "Medium", "Low"],
  Priority: ["High", "Medium", "Low"],
  "ACIS Dependent": ["Y", "N"],
  "Substitute Exists": ["Y", "N", "Partial"],
};

const CENTERS = ["nrcc", "mrcc", "hprcc", "srcc", "sercc", "wrcc"];

const errors = [];

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

function normalizeRow(row, center) {
  return {
    rcc: row["RCC"]?.trim() || center.toUpperCase(),
    toolName: row["Tool Name"]?.trim(),
    url: row["URL"]?.trim(),
    function: row["Function"]?.trim(),
    category: row["Category"]?.trim(),
    dataSource: row["Data Source"]?.trim(),
    accessibilityStatus: row["Accessibility Status"]?.trim(),
    archiveLink: row["Archive Link"]?.trim(),
    userSegment: row["User Segment"]?.trim(),
    restorationFeasibility: row["Restoration Feasibility"]?.trim(),
    acisDependent: row["ACIS Dependent"]?.trim(),
    priority: row["Priority"]?.trim(),
    substituteExists: row["Substitute Exists"]?.trim(),
    lastChecked: row["Last Checked"]?.trim(),
    impactEvidence: row["Impact Evidence"]?.trim(),
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
        archived: 0,
        acisDependent: 0,
        highPriority: 0,
        noSubstitute: 0,
      };
    }
    const c = centers[rcc];
    c.total++;
    if (tool.accessibilityStatus === "Active") c.active++;
    if (tool.accessibilityStatus === "Partially Broken") c.partiallyBroken++;
    if (tool.accessibilityStatus === "Fully Broken") c.fullyBroken++;
    if (tool.accessibilityStatus === "Offline") c.offline++;
    if (tool.accessibilityStatus === "Archived") c.archived++;
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
  const rows = parse(content, { columns: true, skip_empty_lines: true });

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
