# ADR 0002: Data Architecture

**Date:** March 2026
**Status:** Accepted

## Context

Audit data for ~200 tools across 6 RCCs lives in six Google Sheets with a shared controlled-vocabulary schema. The site needs to filter, browse, and display this data. The team updates sheets periodically (monthly cadence).

## Decision

Six center audit sheets are exported as static CSVs and committed to `data/raw/`. A local normalization script in `pipeline/` merges, validates controlled vocabulary, and outputs `tools.json` and GeoJSON artifacts to `data/processed/`. Artifacts are committed to the repo and served by Vercel at build time. No cloud infra required for v1.

## Rationale

- Data changes at most monthly; static artifacts are appropriate for this cadence
- Zero credentials, zero cloud infra, zero runtime dependencies for v1
- Local script is inspectable and runnable by any contributor with Node/Python
- Upgrade path to GCP pipeline is preserved in `pipeline/` structure and documented in this ADR
- Drive transfer to EDGI org does not affect v1 at all

## Consequences

- GCP project, Sheets API credentials, and GCS bucket required
- Sheet IDs are env vars; transfer to EDGI Drive requires credential rotation only
