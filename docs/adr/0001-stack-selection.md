# ADR 0001: Stack Selection

**Date:** March 2026  
**Status:** Accepted

## Context

We needed a deployment stack for a public-facing advocacy and discovery subdomain (~199 tools across 6 RCCs). Requirements: publicly accessible without auth, extensible over time, compatible with a volunteer team's Drive-based workflow, and capable of supporting an interactive map.

## Decision

**Next.js on Vercel** for the frontend. **Google Sheets as source of truth**, fetched via Sheets API by a **GCP Cloud Function**, normalized, and written as static JSON artifacts to **GCS**. Vercel redeploys on a webhook trigger from the pipeline. **Mapbox GL JS** for the interactive map.

No runtime database. No Supabase. Static JSON at build time for all tool data.

## Rationale

- Google Sheets keeps the data workflow in Drive where the research team already operates
- Static JSON baked at build eliminates runtime dependencies and is resilient to pipeline downtime
- GCP pipeline stays within the Google ecosystem; Cloud Scheduler + Cloud Function is minimal infra
- Next.js is the most handoff-friendly React framework for a volunteer project
- Mapbox GL JS provides the visual quality needed for stakeholder and funder impressions
- Vercel deploy hooks allow the pipeline to trigger rebuilds without manual intervention

## Consequences

- Data updates require a manual export, script run, commit, and push — acceptable for v1 cadence
- GCP project, Sheets API credentials, and GCS bucket deferred to v2
- Sheet ID env vars and credential rotation planned for post-Drive-transfer v2 migration

## Alternatives Considered

- **Supabase** — rejected; introduces a runtime dependency requiring ongoing maintenance
- **Leaflet + OSM** — rejected in favor of Mapbox for visual quality
- **Pure static (Astro)** — rejected; loses extensibility too quickly
