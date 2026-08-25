# Roadmap

## V1 — Public Prototype (Current)

- Six-center tool audit data exported as static CSVs
- Local normalization pipeline outputting `tools.json`, `summary.json`, `centers.geojson`, and `rcc-map.svg`
- Landing page with hero, segment cards, audit stats, testimony carousel, and CTA
- Interactive RCC region map with pulsing animation in hero
- Center map index at `/centers` with Mapbox GL JS
- Per-center detail pages at `/centers/[rcc]`
- Tool inventory at `/tools` — searchable and filterable by center, category, accessibility status, priority, substitute exists, and user segment
- Segment column normalized to URL-safe slugs in pipeline
- Stakeholder self-reporting form integration
- Publicly accessible on EDGI subdomain at climate-tools.envirodatagov.org
- Update styling guide when final EDGI design documentation is received

## V2 — Pipeline + Sustainability

- About page — methodology, audit schema, scoring rubrics, EDGI attribution, feedback form links
- Segment pages at `/segments/[segment]` with constituency-specific tool views
- Migrate data layer to Google Sheets API + GCP Cloud Function + GCS
- Cloud Scheduler for automated pipeline runs and Vercel deploy webhooks
- Firestore for user feedback persistence
- Archived status modifier pass (internal/external/Wayback) — unlocks archived stat on landing page
- Visibility/Restoration section — case study previews of restored tools

## V3 — Advocacy Surface

- Segment pages with economic and justice overlay data
- Funder-facing narrative layer
- Final overview report with embedded data visualizations
- High Priority + No Substitute filter view (core thesis view)
