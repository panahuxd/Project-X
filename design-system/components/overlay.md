# overlay

> Layer: Core · Status: draft · Figma: [DKB Components › overlay](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=44-589) · Code: `DialogOverlay` / `SheetOverlay` / `DrawerOverlay` (shadcn)

## Purpose
The dim backdrop behind `dialog`, `alert-dialog`, `sheet` and `drawer`.

## Usage
Place it above the screen and below the overlay panel; resize it to the frame it covers (1440×900 sample).

## Tokens
Fill `bg.overlay` (black at 50%, shadcn `bg-black/50`). `z-index.overlay`. Motion: fade, `motion.duration.normal`.

## Behaviour
Clicking it closes `dialog`, `sheet` and `drawer`, but **not** `alert-dialog`.

## Changelog
- 0.5.0 — created.
