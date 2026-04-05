# RCC Restoration

A public-facing discovery and advocacy platform documenting the degradation of climate tools from NOAA's six Regional Climate Centers (RCCs).

## What This Is

This project surfaces audit findings from ~200 local climate resources/services across six centers — NRCC, MRCC, HPRCC, SRCC, SERCC, and WRCC — that are at risk due to federal funding cuts. It serves as a discovery layer for researchers, practitioners, and policymakers, and a long-term funding surface making the case for sustained investment in regional climate infrastructure.

## Stack

- **Frontend:** Next.js on Vercel
- **Data pipeline:** Google Sheets → GCP Cloud Function → GCS → static JSON (baked at build time)
- **Map:** Mapbox GL JS

## Architecture

See [`docs/adr/`](docs/adr/) for architectural decision records.

## Development

```bash
npm install
npm run dev
```

To update tool data:

```bash
cd pipeline
node normalize.js  # outputs to data/processed/
```

Requires a `.env.local` with:

```bash
NEXT_PUBLIC_MAPBOX_TOKEN=
````

Sheets API key and GCS bucket name deferred to v2.

## Data

Audit data lives in Google Sheets (link to be updated after Drive transfer to EDGI org). The GCP pipeline normalizes and writes to GCS on a schedule. See [`pipeline/`](pipeline/) for source.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This project follows EDGI's [Code of Conduct](CONDUCT.md).

## License

GPL-3.0. Copyright (C) Environmental Data & Governance Initiative (EDGI).
