# Roadmap

## V1 — Public Prototype (Current)

- Six-center tool audit data exported as static CSVs
- Local normalization pipeline outputting `tools.json` and GeoJSON artifacts
- Browse and filter all ~200 tools by center, category, accessibility status, priority, and substitute exists
- Per-center summary pages
- Interactive Mapbox map with RCC region polygons and drill-down
- Stakeholder self-reporting form integration
- Publicly accessible on EDGI subdomain
- Update styling guide when final EDGI design documentation is received

## V2 — Pipeline + Sustainability

- Migrate data layer to Google Sheets API + GCP Cloud Function + GCS
- Cloud Scheduler for automated pipeline runs and Vercel deploy webhooks
- Firestore for user feedback persistence
- Search by tool name or keyword

## V3 — Advocacy Surface

- Final overview report with embedded data visualizations
- Funder-facing narrative layer
- Center-level stats (tool counts, % active, ACIS dependency ratio)
- High Priority + No Substitute filter view (core thesis view)
