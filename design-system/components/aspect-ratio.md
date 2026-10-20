# aspect-ratio

> Layer: Core · Status: draft · Spec only (no Figma component) · Code: `AspectRatio` (shadcn `aspect-ratio`)

## Purpose
Keeps media at a fixed shape while its width changes: product images, banners, video, maps.

## DKB ratios
| Ratio | Use |
|---|---|
| 1 / 1 | Product images (cards, rows, cart), brand logos, category tiles |
| 4 / 3 | Product gallery on PDP when photos are not square |
| 16 / 9 | Video, hero and campaign banners on desktop |
| 3 / 1 | Wide promotional strips (desktop) |
| 2 / 1 | Promotional banners on mobile |

## In Figma
Draw a frame at the ratio (e.g. 160×160, 640×360), set its width to fill and lock the ratio (Constrain proportions); image fill `Fill`, `radius.md` (cards) or none (full-bleed banners).

## Behaviour
Images cover the frame (`object-fit: cover`), except product photos on white, which use `contain` on `bg.default`. Always reserve the space so the page doesn't jump; show `skeleton` (rect) while loading.

## Changelog
- 0.6.0 — created.
