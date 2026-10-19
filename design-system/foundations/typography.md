# Typography

> Status: font facts verified from the files (v2.200). Type scale and text styles come in the token step.

## Font

| Item | Value |
|---|---|
| Family | **Digikala** (version 2.200, ©2026 Digikala) |
| Files | `assets/fonts/{ttf,woff,woff2}/Digikala-{Weight}.*` |
| Weights | Thin 100 · ExtraLight 200 · Light 300 · Regular 400 · Medium 500 · SemiBold 600 · Bold 700 · ExtraBold 800 · Black 900 · Fat 1000 |
| Scripts | Persian/Arabic, Latin, Persian digits (۰–۹), Latin digits, Arabic-Indic digits |
| Units per em | 1000 |
| Vertical metrics | ascender 1182, descender −545 → natural content height ≈ **1.73 em** |
| Licence | Property of Digikala; not for sale or distribution; no copying or sharing without written permission |

**Weights to use in the UI:** Regular 400, Medium 500, SemiBold 600, Bold 700. Thin–Light and Black–Fat are for display and marketing only (banners, campaigns), never for body text or controls.

## OpenType features (checked by shaping with HarfBuzz)

| Feature | What it does | Use it for |
|---|---|---|
| `ss01` | The word «تومان» becomes a single **toman sign** glyph | Prices and totals. Type «تومان» as text; the feature draws the sign. Screen readers still read the word |
| `ss02` | Latin (0–9) and Arabic-Indic digits display as **Persian digits** | Safety net when data arrives with Latin digits. Prefer converting digits in code |
| `ss03` | **Tabular digits**: every digit is the same width (700 units), Persian and Latin | Tables, prices in lists, totals, bill box, countdowns: anywhere numbers line up or change in place |
| `liga`, `dlig` | f-ligatures; optional Arabic ligatures (لد، لل) | `liga` on by default; `dlig` off |

There is no `tnum` feature: **`ss03` is the way to get tabular figures.**

Default digits are **proportional** (each digit has its own width), so numbers in columns won't align without `ss03`.

## Persian text checks

- **Half-space (ZWNJ, U+200C):** works. It breaks the joining correctly («سفارش‌ها») and takes no width.
- **Arabic thousands separator «٬» (U+066C)** and **Arabic comma «،» (U+060C)** are present. The thousands-separator choice is still open (Gap #17 in B2R); the font supports either.
- **Rial sign (U+FDFC)** is present; we display money in toman.

## Line height

The font's natural content height is about 1.73× the font size, taller than Latin fonts. Persian text needs room for dots and descenders, so line heights in the type scale will be set at ≈1.6–1.8× for body text and ≈1.4–1.5× for large headings, then checked in Figma for clipping.
