import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import * as turf from "@turf/turf";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_GEO_DIR = join(__dirname, "../data/raw/geo");
const PROCESSED_DIR = join(__dirname, "../data/processed");
const SUMMARY_PATH = join(PROCESSED_DIR, "summary.json");

const RCC_STATES = {
  NRCC: [
    "Maine",
    "New Hampshire",
    "Vermont",
    "Massachusetts",
    "Connecticut",
    "Rhode Island",
    "Delaware",
    "New York",
    "Pennsylvania",
    "New Jersey",
    "Maryland",
    "West Virginia",
    "District of Columbia",
  ],
  MRCC: [
    "Illinois",
    "Indiana",
    "Iowa",
    "Kentucky",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Ohio",
    "Wisconsin",
  ],
  HPRCC: [
    "Colorado",
    "Kansas",
    "Nebraska",
    "North Dakota",
    "South Dakota",
    "Wyoming",
  ],
  SRCC: [
    "Arkansas",
    "Louisiana",
    "Mississippi",
    "Oklahoma",
    "Tennessee",
    "Texas",
  ],
  SERCC: [
    "Alabama",
    "Florida",
    "Georgia",
    "North Carolina",
    "South Carolina",
    "Virginia",
    "Puerto Rico",
    "Virgin Islands",
  ],
  WRCC: [
    "Alaska",
    "Arizona",
    "California",
    "Idaho",
    "Montana",
    "Nevada",
    "New Mexico",
    "Oregon",
    "Utah",
    "Washington",
    "Hawaii",
    "Guam",
    "American Samoa",
    "Northern Mariana Islands",
  ],
};

const statesGeoJSON = JSON.parse(
  readFileSync(join(RAW_GEO_DIR, "us-states.geojson"), "utf-8"),
);
const summary = JSON.parse(readFileSync(SUMMARY_PATH, "utf-8"));

const features = [];

for (const [rcc, states] of Object.entries(RCC_STATES)) {
  const stateFeatures = statesGeoJSON.features.filter((f) =>
    states.includes(f.properties.NAME),
  );

  if (stateFeatures.length === 0) {
    console.warn(`⚠️  No state features found for ${rcc}`);
    continue;
  }

  let dissolved = stateFeatures[0];
  for (let i = 1; i < stateFeatures.length; i++) {
    try {
      dissolved = turf.union(
        turf.featureCollection([dissolved, stateFeatures[i]]),
      );
    } catch (e) {
      console.warn(
        `⚠️  Union failed for ${rcc} at state ${stateFeatures[i].properties.NAME}`,
      );
    }
  }

  dissolved.properties = {
    rcc,
    ...summary[rcc],
  };

  features.push(dissolved);
}

const geojson = turf.featureCollection(features);

writeFileSync(
  join(PROCESSED_DIR, "centers.geojson"),
  JSON.stringify(geojson, null, 2),
);

console.log(`✓ centers.geojson written with ${features.length} RCC regions`);
