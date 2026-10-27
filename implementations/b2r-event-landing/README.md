# B2R · Event landing «در مدار بیزینس» (web)

Invite and RSVP page for the Digikala Business event in Mashhad. Built from the DKB Design System (B2R brand, **DS-48 campaign surface**), RTL and Persian.

- Design spec: [`designs/b2r-event-landing.md`](../../designs/b2r-event-landing.md)
- Figma: *DKB · Agent sandbox* › page **B2R · Event landing** (`landing/event-mashhad/desktop`, `…/mobile`, `…/rsvp-*/mobile`)
- Route: `/landing/dar-madar-business`, following the B2R landing convention (`/landing/gold-ce`, `/landing/hot-summer`)

## Run

```bash
npm install
npm run dev            # copies the DKB tokens and fonts from ../../design-system, then starts Next.js
```

`npm run dev` and `npm run build` run `scripts/sync-dkb.mjs` first. It copies `design-system/build/{tokens,shadcn-compat,tailwind-theme}.css` into `src/styles/dkb/` and the five Digikala weights the page uses into `public/fonts/`. Both copies are gitignored, and `design-system/` stays the source of truth (DS-4). Set `DKB_DS_DIR` when the design system lives elsewhere.

The mock RSVP API answers by number, so every state can be reviewed:

| Mobile number | Result |
|---|---|
| `09120000001` | already registered |
| `09120000002` | not on the guest list |
| `09120000003` | server error (retry) |
| any other valid number | confirmed |

## Live preview (GitHub Pages)

`.github/workflows/event-landing-preview.yml` builds a static export on every push to `design/b2r-event-landing` or `main` that touches this folder or the design-system build, and publishes it to the `gh-pages` branch: **https://panahuxd.github.io/Project-X/**. In the preview the RSVP form answers in the browser with the same mock as above (no server), and the placeholder banner stays on. It is public (noindex) and serves the Digikala web fonts; the design lead confirmed permission on 2026-10-27.

One-time setup: *Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / (root)*. Run locally: `STATIC_PREVIEW=1 NEXT_PUBLIC_BASE_PATH=/Project-X NEXT_PUBLIC_RSVP_MOCK=1 ALLOW_PLACEHOLDERS=1 npm run build` (with `app/api` moved aside; static export has no route handlers).

## Before launch (the production build fails until these are done)

1. **Event details** in `src/event-landing/config.ts`: `date`, `time`, `venue` (+ `mapUrl`), `startsAt` / `endsAt` (these turn on «افزودن به تقویم»), `confirmationNote` (only what the backend really does, e.g. an SMS). Values in `[brackets]` are placeholders. `assertNoPlaceholders` stops `next build` while any remain (`ALLOW_PLACEHOLDERS=1` is for preview builds only).
2. **RSVP backend**: set `RSVP_UPSTREAM` to the real endpoint. Contract (proposal):
   `POST { event, name, mobile: "09XXXXXXXXX", shop }` → `200 {status:"confirmed"|"already"}` · `404 {status:"not_invited"}` · `410 {status:"closed"}` · `5xx` = failed.
   In production the mock refuses to run (`503`) unless `ALLOW_RSVP_MOCK=1`.
3. Optional: `supportPhone` (shown when registration is closed), `registration: 'closed'` after the deadline.
4. Ask for a higher-resolution key visual. The current one is upscaled 2× from a 579 × 1029 JPG.

## Moving it into `b2b-shop-front` (`apps/website`)

- Copy `src/event-landing/` and `app/landing/dar-madar-business/page.tsx`. Replace `/api/rsvp` with the app's API client.
- The app already has Tailwind v4. Add the DKB build files (`tokens.css` layered as `base`, `shadcn-compat.css`, `tailwind-theme.css`) once the design-system adoption lands, plus the `campaign-focus` utility and keyframes from `app/globals.css`.
- Keep `<html lang="fa" dir="rtl" data-brand="b2r">`. The page sets `robots: noindex` because it is invite-only.

## What is where

| File | What |
|---|---|
| `src/event-landing/config.ts` | All copy and event data; placeholder guard |
| `components/EventLanding.tsx` | Page: hero, agenda, RSVP, sign-off |
| `components/RsvpForm.tsx` | Form, validation (blur + submit, clears on fix), the five outcomes, focus handling |
| `components/CampaignField.tsx`, `CampaignButton.tsx` | DKB `field` and `button` with campaign colours (component requests: `tone=campaign`) |
| `components/Decor.tsx` | Orbit ring, section ornament, eyebrow trail, dotted rings (campaign accent tokens) |
| `components/KeyVisual.tsx` | The swirl; WebP 720 / 1152, colour-matched to `campaign.bg` |
| `lib/phone.ts` | Persian/Arabic/Latin digits, +98/0098, spaces; no input masking |
| `lib/ics.ts` | Calendar file for «افزودن به تقویم» |
| `design-assets/` | Key-visual masters: opaque JPG (Figma) and transparent PNG |

## Checks run (2026-10-27)

- `next build` (Next 15.5, React 19) passes with `ALLOW_PLACEHOLDERS=1` and fails without it, as intended.
- axe-core 4.10 (WCAG 2.0–2.2 A/AA + best practice) at 1440 and 360, including the error state: 0 violations. No horizontal scroll at 360. Tab order: logo → «تأیید حضور» → name → mobile → shop → submit.
- All seven form states were exercised in a browser; focus moves to the first invalid field and to the result heading.
- Motion runs only without `prefers-reduced-motion`.
