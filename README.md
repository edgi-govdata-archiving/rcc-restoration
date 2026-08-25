# RCC Restoration

A public-facing discovery and advocacy platform documenting the status of climate tools from NOAA's six Regional Climate Centers (RCCs), built under the [Environmental Data & Governance Initiative (EDGI)](https://envirodatagov.org/).

Live at [climate-tools.envirodatagov.org](https://climate-tools.envirodatagov.org)

## What This Is

This project surfaces audit findings from ~200 climate tools across six regional climate centers — NRCC, MRCC, HPRCC, SRCC, SERCC, and WRCC — that are at risk due to federal funding cuts. It serves as a discovery layer for researchers, practitioners, and policymakers, and makes the case for sustained investment in regional climate infrastructure.

## Stack

- **Frontend:** Next.js on Vercel
- **Styling:** Tailwind v4, Mona Sans via `next/font/google`
- **Map:** Mapbox GL JS (provisioned) · D3-generated SVG region map in hero
- **Data pipeline:** Static CSVs → local normalization scripts → static JSON artifacts committed to repo

## Architecture

See [`docs/adr/`](docs/adr/) for architectural decision records.

## Development

Requires Node 24 LTS (managed via asdf) and a `.env.local`:

```bash
NEXT_PUBLIC_MAPBOX_TOKEN=your_token
```

```bash
npm install
npm run dev
```

## Data Pipeline

Audit data lives in `data/raw/csv/` as six per-center CSV exports. US state boundary GeoJSON lives in `data/raw/geo/`. Run these scripts locally before committing — Vercel never runs them.

```bash
npm run normalize        # merges CSVs → data/processed/tools.json + summary.json
npm run build-geojson    # dissolves state polygons → data/processed/centers.geojson (run once)
npm run generate-map     # renders region map → public/rcc-map.svg (run once)
```

Processed artifacts are committed to `data/processed/` and served statically. GCP live pipeline deferred to v2.

## Routes

| Route | Status |
|---|---|
| `/` | Landing page — live |
| `/tools` | Tool inventory — in progress |
| `/centers` | Center map index — in progress |
| `/centers/[rcc]` | Per-center detail — not started |
| `/about` | Methodology — deferred to v2 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This project follows EDGI's [Code of Conduct](CONDUCT.md).

## License

GPL-3.0. Copyright (C) Environmental Data & Governance Initiative (EDGI).
