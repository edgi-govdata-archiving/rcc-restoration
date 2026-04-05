# Styling Guide

> **Note:** This document is based on the EDGI Visual Identity Refinement deck (Louis Charron, February 2026) and is considered provisional. Final design documentation is expected shortly and this guide will be updated to reflect any changes. See [Roadmap](../ROADMAP.md) for tracking.

## Typography

### Primary Typeface — Mona Sans

- **Author:** Tobias Bjerrome Ahlin, 2025
- **License:** Free & Open Source
- **Weights used:** Regular, Medium, Bold
- **Implementation:** Loaded via `next/font/google`, applied as `--font-mona-sans` CSS variable, set as default `font-sans` in Tailwind theme

### Fallback

`sans-serif`

---

## Color Tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme` block. Available as Tailwind utilities e.g. `bg-edgi-paper`, `text-edgi-ink`.

| Token | Hex | Usage |
| --- | --- | --- |
| `edgi-paper` | `#F9F7F4` | Default page background |
| `edgi-paper-dark` | `#EEEBE6` | Secondary backgrounds, hover states |
| `edgi-ink` | `#092439` | Primary text, headings |
| `edgi-green` | `#44BFAF` | Brand primary, CTAs, active states |
| `edgi-teal` | `#80E9DB` | Highlight, AA accessible on dark backgrounds |
| `edgi-red` | `#F69A8D` | Broken/offline status indicators, AA accessible |
| `edgi-gray` | `#747270` | Secondary text, metadata |
| `edgi-blue` | `#19649F` | Links, secondary actions |

### Accessibility

- `edgi-teal` (`#80E9DB`) — AA compliant per identity deck
- `edgi-red` (`#F69A8D`) — AA compliant per identity deck
- `edgi-green` (`#44BFAF`) — use with `edgi-ink` text for sufficient contrast

---

## Visual Language

### Tone

Design decisions should serve the advocacy framing: these tools exist, people depend on them, they are being lost. Avoid generic data portal aesthetics. Editorial, research-artifact feel with a clear point of view.

### Key Patterns (from identity deck)

- Warm off-white backgrounds (`edgi-paper`) as default
- Dark navy (`edgi-ink`) for primary text and headings
- Teal (`edgi-green`, `edgi-teal`) as the signature accent — CTAs, highlights, active states
- Highlight red (`edgi-red`) reserved for broken/offline/at-risk status indicators
- Rounded pill buttons for CTAs
- Tight tracking on uppercase labels (`tracking-widest`)

### Patterns to Avoid

- Generic SaaS dashboard aesthetics
- Heavy drop shadows
- Bright white (`#FFFFFF`) as primary background — use `edgi-paper` instead

---

## Status Indicators

Reserved color semantics for tool accessibility status:

| Status | Color Token |
| --- | --- |
| Active | `edgi-teal` |
| Partially Broken | `edgi-red` (muted) |
| Fully Broken | `edgi-red` |
| Offline | `edgi-gray` |
| Archived | `edgi-gray` |

---

## Notes for Final Design Handoff

When final design documentation arrives, update:

- Any revised color tokens or spacing scale
- Component-level specs if provided
- This note and the provisional warning at the top of this document
