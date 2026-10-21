# direction

> Layer: Core · Status: draft · Spec only · Code: `DirectionProvider` (shadcn `direction`, Radix)

## Purpose
How right-to-left works across DKB. Every product is Persian and RTL; this page is the rule set components and designs follow.

## Rules
1. `<html lang="fa" dir="rtl">` on every app; wrap the app in `DirectionProvider dir="rtl"` so Radix menus, sliders and tabs use RTL keyboard order.
2. Use logical CSS (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`), never `left`/`right`, so components flip without overrides.
3. **Mirror** anything that points along the reading direction: back/forward arrows, chevrons in breadcrumbs, pagination and submenus, progress and slider fill, carousels, drawers that open from the start edge. Lucide icons keep their original drawing and their names describe what you see, so pick by on-screen direction: in RTL, "back" is `arrow-right` / `chevron-right`, "next" is `arrow-left` / `chevron-left`. One exception is stored already mirrored: `log-out` points left (out, toward the end). For other icons whose meaning follows the reading direction (`log-in`, `reply`, `undo`/`redo`, `list-indent-*`, `text-align-*`, `send`), flip the instance horizontally.
4. **Don't mirror**: media controls, clocks, checkmarks, logos, charts' time axis (stays left-to-right unless the chart says otherwise), phone numbers, codes.
5. **LTR islands** inside RTL text: phone numbers, IBAN, emails, URLs, DKP codes, OTP digits, keyboard shortcuts (`kbd`), Latin product names. Wrap them in `dir="ltr"` (or `<bdi>`), keep alignment right.
6. Digits: Persian digits in UI; accept Persian and Latin input and normalise; amounts grouped with «٬».
7. In Figma, horizontal auto layout runs left to right, so RTL rows put the *first* item last (rightmost). Every DKB component already does this.

## Changelog
- 0.11.0 — full Lucide set: pick directional icons by on-screen direction; only `log-out` is pre-mirrored.
- 0.6.0 — created.
