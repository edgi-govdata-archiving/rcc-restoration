// pipeline/generate-map-svg.js

// reads centers.geojson and outputs a styled SVG map to public/rcc-map.svg

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import * as d3 from "d3";
import * as turf from "@turf/turf";
import { JSDOM } from "jsdom";

const __dirname = dirname(fileURLToPath(import.meta.url));

const geojson = JSON.parse(
  readFileSync(join(__dirname, "../data/processed/centers.geojson"), "utf-8"),
);

// D3 expects clockwise exterior rings; GeoJSON/Turf produce counterclockwise.
// without this, D3 renders each region as "everything except this area."
const features = geojson.features.map((f) =>
  turf.rewind(f, { reverse: true, mutate: false }),
);

// ARCHVIE
// one distinct hue per RCC — reduced opacity reads as a glow on dark bg
// const RCC_COLORS = {
//   NRCC: "#6EB5FF", // blue
//   MRCC: "#80E9DB", // teal 
//   HPRCC: "#FFD166", // amber
//   SRCC: "#FF6B6B", // coral
//   SERCC: "#A29BFE", // lavender
//   WRCC: "#55EFC4", // mint
// };

const WIDTH = 960;
const HEIGHT = 600;

const dom = new JSDOM("<!DOCTYPE html><body></body>");
const body = d3.select(dom.window.document).select("body");

const svg = body
  .append("svg")
  .attr("xmlns", "http://www.w3.org/2000/svg")
  .attr("viewBox", `0 0 ${WIDTH} ${HEIGHT}`)
  .attr("fill", "none");

// albers USA — repositions Alaska and Hawaii as insets
// fitSize auto-scales so nothing is clipped
const projection = d3.geoAlbersUsa();
projection.fitSize([WIDTH, HEIGHT], { type: "FeatureCollection", features });

const path = d3.geoPath().projection(projection);

// staggered pulse — one region lights up at a time
const CYCLE = 12; // seconds for full loop through all 6

svg.append("style").text(`
  .fill {
    fill: #ffffff;
    fill-opacity: 0;
    animation: pulse ${CYCLE}s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { fill-opacity: 0; }
    4%       { fill-opacity: 0.35; }
    12%      { fill-opacity: 0; }
  }
  ${features
    .map(
      (f, i) =>
        `.fill-${f.properties.rcc} { animation-delay: ${(i * CYCLE) / features.length}s; }`,
    )
    .join("\n  ")}
`);

// pass 1 — fills, no strokes (adjacent fills would cover each other's borders)
svg
  .selectAll("path.fill")
  .data(features)
  .enter()
  .append("path")
  // .attr("class", "fill")
  .attr("class", (d) => `fill fill-${d.properties.rcc}`)
  .attr("d", path)
  // .attr("fill", (d) => RCC_COLORS[d.properties.rcc] || "#ffffff")
  // .attr("fill-opacity", 0.45)
  .attr("stroke", "none");

// pass 2 — strokes drawn on top so every region border stays visible
svg
  .selectAll("path.stroke")
  .data(features)
  .enter()
  .append("path")
  .attr("class", "stroke")
  .attr("d", path)
  .attr("fill", "none")
  .attr("stroke", "#ffffff")
  .attr("stroke-width", 1)
  .attr("stroke-opacity", 0.9)
  .attr("stroke-linejoin", "round");

const svgString = body.select("svg").node().outerHTML;
writeFileSync(join(__dirname, "../public/rcc-map.svg"), svgString);

console.log(`✓ rcc-map.svg written to public/ (${features.length} regions)`);
