// pipeline/normalize.test.js
// run after npm run normalize to validate processed output

import { strict as assert } from "assert";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROCESSED = join(__dirname, "../data/processed");

const tools = JSON.parse(readFileSync(join(PROCESSED, "tools.json"), "utf-8"));
const summary = JSON.parse(
  readFileSync(join(PROCESSED, "summary.json"), "utf-8"),
);
const centers = Object.values(summary);

// ------ structure -------
assert.ok(tools.length > 0, "tools.json should not be empty");
assert.ok(
  Object.keys(summary).length === 6,
  "summary.json should have 6 centers",
);

// ------- required fields -------
const REQUIRED = [
  "rcc",
  "toolName",
  "url",
  "function",
  "category",
  "accessibilityStatus",
  "priority",
  "acisDependent",
  "substituteExists",
  "segments",
  "archiveType",
  "restorationFeasibility",
  "impactEvidence",
  "notes",
];

for (const tool of tools) {
  for (const field of REQUIRED) {
    assert.ok(
      tool[field] !== undefined,
      `Tool "${tool.toolName}" (${tool.rcc}) missing field "${field}"`,
    );
  }
}

// ------- controlled vocabulary -------
const VALID_STATUS = [
  "Active",
  "Partially Broken",
  "Fully Broken",
  "Offline",
  "Archived",
  "Unknown",
];
const VALID_PRIORITY = ["High", "Medium", "Low"];
const VALID_SUBSTITUTE = ["Y", "N", "Partial"];
const VALID_ACIS = ["Y", "N"];
const VALID_FEASIBILITY = ["High", "Medium", "Low"];
const VALID_ARCHIVE_TYPE = [
  "Internal (PEDP/EDGI)",
  "External",
  "None Found",
  "Unknown",
];
const VALID_SEGMENT_SLUGS = [
  "agriculture",
  "water-resources",
  "emergency-management",
  "fire-rangeland",
  "public-health",
  "planning-policy",
  "transportation",
  "research-education",
  "data-technical",
  "media-communications",
];

for (const tool of tools) {
  if (tool.accessibilityStatus) {
    assert.ok(
      VALID_STATUS.includes(tool.accessibilityStatus),
      `Invalid status "${tool.accessibilityStatus}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
  if (tool.priority) {
    assert.ok(
      VALID_PRIORITY.includes(tool.priority),
      `Invalid priority "${tool.priority}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
  if (tool.substituteExists) {
    assert.ok(
      VALID_SUBSTITUTE.includes(tool.substituteExists),
      `Invalid substitute "${tool.substituteExists}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
  if (tool.acisDependent) {
    assert.ok(
      VALID_ACIS.includes(tool.acisDependent),
      `Invalid ACIS "${tool.acisDependent}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
  if (tool.restorationFeasibility) {
    assert.ok(
      VALID_FEASIBILITY.includes(tool.restorationFeasibility),
      `Invalid feasibility "${tool.restorationFeasibility}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
  if (tool.archiveType) {
    assert.ok(
      VALID_ARCHIVE_TYPE.includes(tool.archiveType),
      `Invalid archive type "${tool.archiveType}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
}

// ------- segments -------
for (const tool of tools) {
  assert.ok(
    Array.isArray(tool.segments),
    `Tool "${tool.toolName}" (${tool.rcc}) segments should be an array`,
  );
  for (const seg of tool.segments) {
    assert.ok(
      !seg.includes(" "),
      `Segment "${seg}" in "${tool.toolName}" is not slugified — contains space`,
    );
    assert.ok(
      !seg.includes("&"),
      `Segment "${seg}" in "${tool.toolName}" is not slugified — contains &`,
    );
    assert.ok(
      VALID_SEGMENT_SLUGS.includes(seg),
      `Unknown segment slug "${seg}" in "${tool.toolName}" (${tool.rcc})`,
    );
  }
}

// ------- warn on tools with no segments -------
const noSegments = tools.filter((t) => t.segments.length === 0);
if (noSegments.length > 0) {
  console.warn(`\n⚠️  ${noSegments.length} tools have no segment category:`);
  noSegments.forEach((t) => console.warn(`   ${t.rcc}: ${t.toolName}`));
}

// ------- uRL format -------
for (const tool of tools) {
  if (tool.url) {
    assert.ok(
      tool.url.startsWith("http"),
      `Tool "${tool.toolName}" (${tool.rcc}) has invalid URL: "${tool.url}"`,
    );
  }
}

// ------- Per-center sanity check -------
for (const [rcc, data] of Object.entries(summary)) {
  assert.ok(data.total > 0, `${rcc} has 0 tools — check CSV`);
}

// ------- audit data section numbers -------
const total = centers.reduce((acc, c) => acc + c.total, 0);
const noSubstitute = centers.reduce((acc, c) => acc + c.noSubstitute, 0);
const highPriority = centers.reduce((acc, c) => acc + c.highPriority, 0);
const acisDependent = centers.reduce((acc, c) => acc + c.acisDependent, 0);

console.log("\n=== Audit Data Section Numbers ===");
console.log(`Total tools:     ${total}`);
console.log(`No substitute:   ${noSubstitute}`);
console.log(`High priority:   ${highPriority}`);
console.log(`ACIS dependent:  ${acisDependent}`);
console.log("===================================\n");

assert.ok(total > 0, "Total tools should be > 0");
assert.ok(noSubstitute > 0, "No substitute count should be > 0");
assert.ok(highPriority > 0, "High priority count should be > 0");
assert.ok(acisDependent > 0, "ACIS dependent count should be > 0");

console.log("✓ All tests passed");
