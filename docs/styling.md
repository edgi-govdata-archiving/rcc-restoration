# Styling Guide

Based on the EDGI Visual Identity Guidelines (Louis Charron, 2026, v1.0).

## Typography

### Primary Typeface — Mona Sans

- **License:** Free & Open Source (Google Fonts)
- **Weights used:** Medium, SemiBold (narrow width for titles), Regular (regular width for small/secondary elements)
- **OpenType:** Enable Stylistic Set 1 for appropriate letterforms (double-storey a)
- **Implementation:** Loaded via `next/font/google`, applied as `--font-mona-sans` CSS variable, set as default `font-sans` in Tailwind theme
- **Usage:** Narrow width for titles and subtitles at medium/large sizes only. Regular width for secondary elements, buttons, captions, labels. Never use narrow at small sizes.

### Secondary Typeface — Loretta

- **License:** Adobe Creative Cloud subscription (Adobe Fonts)
- **Weight:** Regular only
- **Usage:** Body copy, secondary/tertiary titles. Lends credibility and warmth. Not for main titles.
- **Status:** Not yet implemented — requires Adobe Fonts license

### Google Fonts Fallback (for Loretta)

- **Crimson Pro** — same hierarchy, same weights, same role as Loretta
- Use when Adobe Fonts is unavailable (Google Docs, Google Slides, restricted platforms)

### Typography Hierarchy

- Main titles: Mona Sans Narrow, SemiBold
- Secondary titles: Mona Sans or Loretta depending on context
- Body copy: Loretta Regular (Crimson Pro fallback)
- Secondary elements (eyebrows, buttons, captions): Mona Sans Regular width, Regular/Medium/SemiBold depending on context

---

## Color Tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme` block.

### Main Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `edgi-white` | `#FFFFFF` | Pure white — use sparingly |
| `edgi-paper` | `#F9F7F4` | Default page background (Beige-1) |
| `edgi-paper-dark` | `#EEEBE6` | Secondary backgrounds, hover states (Beige-2) |
| `edgi-paper-darker` | `#E2E0DC` | Tertiary backgrounds (Beige-3) |
| `edgi-gray` | `#747270` | Secondary text, metadata (Beige-4) |
| `edgi-ink` | `#092439` | Primary text, headings, EDGI Blue |

### Highlight Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `edgi-green` | `#80E9DB` | Primary highlight — documents, brand layouts, website accents. Background use only, never text. Use sparingly. |
| `edgi-green-data` | `#54CDBC` | Charts and data visualization only. Never in layouts or UI. |
| `edgi-red` | `#E89086` | Secondary highlight — always paired with edgi-green, never alone. Signals removed/before state. |

### Gradient

| Token | Usage |
| --- | --- |
| EDGI Gradient | `#092439` → `#19649F` (dark navy to blue). Background only, never for text. Always within a rounded-corner frame. |

### Data Visualization Palette (charts only — never in UI or layouts)

| Token | Hex |
| --- | --- |
| `edgi-chart-blue` | `#19649F` |
| `edgi-chart-blue-dark` | `#163955` |
| `edgi-chart-blue-light` | `#8AB7DA` |
| `edgi-chart-teal` | `#54CDBC` |
| `edgi-chart-teal-light` | `#B5E8DF` |
| `edgi-chart-terracotta` | `#B85A50` |
| `edgi-chart-terracotta-dark` | `#7A3530` |
| `edgi-chart-terracotta-light` | `#E8B39E` |
| `edgi-chart-mustard` | `#C99A3E` |
| `edgi-chart-mustard-dark` | `#6C511D` |
| `edgi-chart-mustard-light` | `#E8C784` |
| `edgi-chart-olive` | `#7A8450` |
| `edgi-chart-olive-dark` | `#4B532A` |
| `edgi-chart-olive-light` | `#C9D2A0` |
| `edgi-chart-plum` | `#7A5C7D` |
| `edgi-chart-plum-dark` | `#473049` |
| `edgi-chart-plum-light` | `#C6AEC8` |
| `edgi-chart-teal-dark` | `#1F6E63` |

---

## Logo Rules

- Logo (icon + wordmark) may only appear in **dark blue** or **off white**
- Dark blue on: off-white backgrounds, electric green backgrounds, light imagery
- Off white on: dark blue backgrounds, the gradient, dark imagery
- Never render the logo in electric green or the gradient
- At very large sizes: icon alone
- At medium sizes: full logo
- At small sizes: icon alone (wordmark becomes unreadable)
- Minimum clear space: margin equal to the height of the logo on all sides

---

## Visual Language

### Tone

Design decisions should serve the advocacy framing — these tools exist, people depend on them, they are being lost. Avoid generic data portal aesthetics. Editorial, research-artifact feel with a clear point of view. High contrast between large bold type and small supporting copy is central to the brand.

### Key Patterns

- Warm off-white beige backgrounds as default
- Dark navy (`edgi-ink`) for primary text and headings — always
- EDGI Green (`#80E9DB`) as background highlight for key words and elements — sparingly
- Rounded corners for gradient frames and buttons; square corners for photographs
- Condensed vertical typography against long horizontal highlight rectangles
- Generous breathing space between elements — elegant margins, strong visual hierarchy
- Photography: USGS satellite imagery preferred, always inside a rectangular frame with thin margins, horizontal blur effect on left edge

### Patterns to Avoid

- Generic SaaS dashboard aesthetics
- Full-bleed images or rounded photo frames
- EDGI gradient outside of a rounded-corner frame
- EDGI Red used without EDGI Green alongside it
- Logo in green or gradient
- Data visualization colors in UI or layout contexts
- Narrow Mona Sans at small sizes

---

## Status Indicators

| Status | Color Token |
| --- | --- |
| Active | `edgi-green` (`#80E9DB`) |
| Partially Broken | `edgi-red` (muted) |
| Fully Broken | `edgi-red` (`#E89086`) |
| Offline | `edgi-gray` (`#747270`) |
| Archived | `edgi-gray` (`#747270`) |
