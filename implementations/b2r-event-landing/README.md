# B2R · Event landing «در مدار بیزینس» (web)

Invitation page for the Digikala Business event in Mashhad. It is informational: it says what the event is, what happens there, and when and where. There is no call to action and no form (design lead, 2026-10-31). Built from the DKB Design System (B2R brand, **DS-48 campaign surface**), RTL and Persian.

- Design spec: [`designs/b2r-event-landing.md`](../../designs/b2r-event-landing.md)
- Figma: *DKB · Agent sandbox* › page **B2R · Event landing** (`landing/event-mashhad/desktop`, `…/mobile`)
- Route: `/landing/dar-madar-business`, following the B2R landing convention (`/landing/gold-ce`, `/landing/hot-summer`)

## Run

```bash
npm install
npm run dev            # copies the DKB tokens and fonts from ../../design-system, then starts Next.js
```

`npm run dev` and `npm run build` run `scripts/sync-dkb.mjs` first. It copies `design-system/build/{tokens,shadcn-compat,tailwind-theme}.css` into `src/styles/dkb/` and the five Digikala weights the page uses into `public/fonts/`. Both copies are gitignored, and `design-system/` stays the source of truth (DS-4). Set `DKB_DS_DIR` when the design system lives elsewhere.

## Live preview (free hosting)

`npm run build:preview` makes a static site in `out/`, with the placeholder banner on. Any static host can serve it.

| Host | Private repo | Commercial use | Setup |
|---|---|---|---|
| **Cloudflare Pages** (recommended) | yes | yes | Workers & Pages → Create → Pages → connect GitHub `panahuxd/Project-X`. Production branch `design/b2r-event-landing`, root directory `implementations/b2r-event-landing`, build command `npm run build:preview`, output directory `out`. Rebuilds on every push |
| Cloudflare / Netlify drag-and-drop | no repo needed | yes | Unzip `out/` (or the zip from the chat) and drop the folder on Cloudflare Pages *Upload assets* or app.netlify.com/drop. Manual per update |
| GitHub Pages | needs a public repo or a paid plan | — | `.github/workflows/event-landing-preview.yml` (sets `NEXT_PUBLIC_BASE_PATH=/<repo>`) |
| Vercel Hobby | yes | **no** (Hobby is non-commercial) | — |

The preview is public (noindex) and serves the Digikala web fonts; the design lead confirmed permission on 2026-10-27.

## Before launch (the production build fails until this is done)

- **Event details** in `src/event-landing/config.ts`: `date`, `time`, `venue`. Values in `[brackets]` are placeholders. `assertNoPlaceholders` stops `next build` while any remain (`ALLOW_PLACEHOLDERS=1` is for preview builds only).

## Moving it into `b2b-shop-front` (`apps/website`)

- Copy `src/event-landing/` and `app/landing/dar-madar-business/page.tsx`.
- The app already has Tailwind v4. Add the DKB build files (`tokens.css` layered as `base`, `shadcn-compat.css`, `tailwind-theme.css`) once the design-system adoption lands, plus the `campaign-focus` utility and keyframes from `app/globals.css`.
- Keep `<html lang="fa" dir="rtl" data-brand="b2r">`. The page sets `robots: noindex` because it is invite-only.

## What is where

| File | What |
|---|---|
| `src/event-landing/config.ts` | All copy and event data; placeholder guard |
| `components/EventLanding.tsx` | Page: hero, agenda, event details, sign-off |
| `components/Decor.tsx` | Orbit ring, section ornament, eyebrow trail, dotted rings (campaign accent tokens) |
| `components/KeyVisual.tsx` | The swirl: `hero` = the design lead's high-resolution image with its vignette (720 / 1168 / 2336), `swirl` = section decor (720 / 1152) |
| `components/Logo.tsx` | Official DKB logo (exported from DKB Commerce), `currentColor` |
| `design-assets/` | Key-visual masters: opaque JPG (Figma) and transparent PNG |

## Checks run (2026-10-31)

- `next build` (Next 15.5, React 19) passes with `ALLOW_PLACEHOLDERS=1` and fails without it, as intended. `npm run build:preview` served locally: no failed requests, five font weights loaded.
- axe-core 4.10 (WCAG 2.0–2.2 A/AA + best practice) at 1440 and 360: 0 violations. No horizontal scroll at 360.
- Motion runs only without `prefers-reduced-motion`.
