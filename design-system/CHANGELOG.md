# Changelog

## 0.2.0 — 2026-10-19 (structure review)

- **Breaking:** semantic colours renamed by property (`bg.*`, `text.*`, `border.*`); shadcn names move to `build/shadcn-compat.css`
- **Breaking:** brand layer is now an 11-step ramp (`brand.50…950`); main colour at 800 for every brand; navy ramp regenerated
- Figma scopes and visibility stored in the token files; new `build/figma-variables.json` for the sync
- CSS brand switch works on any element, not only `<html>`
- Added icon sizes, motion and z-index tokens; Tailwind v4 theme; token reference
- `make_ramp.py` anchors any colour at a chosen step (default 800)
- Contrast: 31 checks per brand, all pass

## 0.1.0 — 2026-10-19

- Architecture, naming and decisions (README, DECISIONS)
- Digikala font added; typography foundation (font facts, OpenType features)
- Tokens: 4 collections (primitives 160, brand 10 × B2R/B2E, semantic 62, responsive 17 × Desktop/Mobile) and 15 text styles
- Build script: validation, CSS, resolved values, contrast report (all checks pass for B2R and B2E)
