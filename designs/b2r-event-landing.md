# B2R · Event landing (Mashhad invitation)

> Status: in review · Owner: design lead · Figma: [DKB · Agent sandbox › B2R · Event landing](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-269) · Code: `implementations/b2r-event-landing/` · Branch: `design/b2r-event-landing` · Inputs: marketing mockup «در مدار بیزینس» (desktop) and its key visual
>
> **Revision 2026-10-31 (design lead):** the hero call to action «تأیید حضور» and the RSVP form are removed. The page is informational: what the event is, what happens there, when and where. The RSVP states, form components and form code were removed with them (see *Change log*).

## Problem
Digikala Business invites selected shops to a regional event in Mashhad («در مدار بیزینس»). Invitees need one page that tells them what the event is, what happens there and when and where it is. Marketing delivered a desktop mockup and a key visual; there was no mobile layout, and the dark campaign look had no DKB tokens (DS-6: light only).
Evidence: the Tabriz event (research › Event Tabriz, Mehr 1404: ~94 attendees, all observed on phones); B2R sales are 77% mobile (B2R foundation › Key numbers); principle 8 «Mobile first, Persian first».

## Users and goal
Invited B2R shop owners and resellers in Mashhad and nearby (B2R foundation › Personas: mobile-shop owner, IT reseller), opening the page from an SMS or messenger invite, mostly on a phone. Goal: understand the event, its programme, date, time and venue in one short read.

## Constraints
- Brand B2R; marketing surface (landing, B2R route map › Promotions: seasonal landings have their own look). New look expressed only through tokens: **DS-48 campaign group** (this task).
- Mobile 360 and desktop 1440. RTL, Persian, polite «شما», Persian digits, Jalali dates (B2E foundation › Content and localization).
- Event data (date, time, venue) is **not known yet**: marked placeholders in Figma, one config object in code (user decision, 2026-10-27). Never fabricate dates, promises or perks (PRODUCT.md › Evidence on hand).
- No call to action and no form (design lead, 2026-10-31). No storefront header or footer; the official logo stays visible for trust.

## UX grounding
Patterns: campaign landing hero, programme list, event details (date, time, venue), dark decorative surface, motion on a decorative visual.

| Guideline | Source | How it applies here |
|---|---|---|
| Product and content rules first: brand name, «شما», Persian digits, no invented facts | PRODUCT.md › Brand commitments, Evidence on hand · B2R D12 | Copy from the approved mockup; date, time, venue and perks are placeholders until marketing confirms them |
| Text contrast ≥ 4.5:1, UI parts ≥ 3:1, focus visible | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) 1.4.3, 1.4.11, 2.4.7 · DS-22 | DS-48 tokens checked in `build/contrast-report.md`; focus ring `campaign.ring` on the logo link |
| Key facts early and repeated where people decide | B2R principle 6 «Trust through facts» · B2E principle 3 «Show the rule before the wall» | Date · time · venue under the hero promise, and again as the closing section «منتظر دیدار شما هستیم» |
| Mobile first | B2R principle 8 · research › Tabriz (all on phones) | Mobile designed first; one column; agenda and details as rows |
| Mobile page sections are full width | DS-45 · layouts.md §3.4 | Sections run edge to edge on mobile; no rounded container touches the screen edge |
| Decorative motion must respect reduced motion | [WCAG 2.3.3 Animation from interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) | Key-visual drift and orbit glow only without `prefers-reduced-motion`; decorative images get empty `alt` |
| Performance is UX | Research › Tabriz and PLP (slow loads cause abandonment) | Key visual as WebP with `srcset` (hero 34/73/158 KB), three font weights preloaded; no client JavaScript beyond the framework |

## Flow
1. Invitee opens the link (SMS / messenger) → hero (event name, short promise, date · time · venue).
2. «در این رویداد چه می‌گذرد؟»: three programme items.
3. «منتظر دیدار شما هستیم»: date, time and venue again.

## Screens
| Screen | Breakpoint | Brand | Figma frame | Notes |
|---|---|---|---|---|
| Landing (hero, agenda, event details, sign-off) | Desktop 1440 | B2R | [`landing/event-mashhad/desktop`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-557) | Started from `template/home` (T1), detached; storefront header, footer and every region removed. Content width `layout.content-max-width`. Details as three centred columns with column rules, like the agenda |
| Landing | Mobile 360 | B2R | [`landing/event-mashhad/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-719) | Same order; the key visual sits in its own full-width band under the event details (never behind text); agenda and details as rows |
| Decor parts | — | B2R | [`proposal/campaign-parts`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=228-454) | Local components: ornament, eyebrow trail, orbit (back/front), dotted ring (3 tones, `icon` swap). All colours are `campaign.accent-*` tokens, gradient stops included |

Web: `implementations/b2r-event-landing/` (Next.js 15 App Router, Tailwind v4 on the DKB build), route `/landing/dar-madar-business`.

## States
| Screen | State | Where |
|---|---|---|
| Whole page | Placeholders left: preview banner in dev and preview builds; production `next build` fails | code only |
| Hero | Long event values wrap; meta stacks on mobile | desktop/mobile frames |
| Hero | Reduced motion: no drift, no glow, no entrance animation | code only |

## Components used
| Component | Variants / properties used | Notes |
|---|---|---|
| `template/home` | `screen=desktop`, `screen=mobile` | Starting frame, grid and modes; all regions and shell parts removed |
| `logo` (Commerce) | `size=md` (header, mobile header), `size=sm` (sign-off) | `logo-mark` fill overridden to `campaign.text` / `campaign.text-muted` (the official white version) → component request |
| Icons | `calendar`, `clock`, `map-pin`, `layout-grid`, `messages-square`, `gift` | Strokes bound to campaign text tokens |
| Text styles | `campaign-display` (new, DS-48), `display`, `heading-1`, `heading-3`, `heading-4`, `body-lg`, `body-sm`, `label` | No raw type |
| Tokens | `campaign.*` (DS-48), `space.*`, `layout.content-max-width`, `layout.page-margin`, `icon.size.*` | 0 unbound solid colours (audit) |

## Component requests
| Request | Why | Proposed API |
|---|---|---|
| `logo` `tone=inverse` | The official white logo exists in *VA - DKB Logos* but not in the library; overriding the fill risks hand recolouring | `tone: primary \| inverse` (inverse = white) on both sizes |
| `campaign-ornament`, `campaign-orbit`, `campaign-ring` (Commerce, `campaign/…`) | Reusable decor for the next event and campaign landings (built here as `proposal/…`) | As in `proposal/campaign-parts`: ring `tone=1\|2\|3` + `icon` swap; orbit `layer=back\|front` |
| `button`, `field` `tone=campaign` | No longer used on this page; keep in mind for the next campaign page with an action or form (DS-48 already has `campaign.cta*`, `border-control`, `text-error`) | `tone: default \| campaign` |
| Text style `body-xl` (20/32 Regular) | The mockup's intro line is between `body-lg` (16) and `heading-3` (20, SemiBold); `body-lg` is used for now | Optional; design lead to decide |

## Decisions
| Decision | Why (evidence) |
|---|---|
| New token group `campaign.*` + `campaign-display` text style (DS-48), approved by the design lead on 2026-10-27 | The mockup is dark navy with an electric-blue CTA; DS-6 is light only. Values sampled from the mockup; WCAG checked in `build/contrast-report.md` (0 failures) |
| No call to action and no form; the closing section repeats date, time and venue | Design lead, 2026-10-31 · B2R principle 6 (facts stated plainly where they matter) |
| Closing details: three centred columns with column rules on desktop (same rhythm as the agenda); rows with the icon at the start on mobile | Consistency between the two sections (NN/g heuristic 4) · DS-45 |
| Event date, time and venue are `[placeholders]`; the production build fails until they are replaced | PRODUCT.md › Evidence on hand (never fabricate) · user decision 2026-10-27 |
| Mobile-first layout with the key visual in its own band under the event details, not behind the copy | Research › Tabriz (all on phones) · B2R principle 8 · WCAG 1.4.3 (text on a busy image) |
| Mobile sections full width with top rules only | DS-45 |
| No storefront header, footer or bottom nav; the logo stays and links to b2b.digikala.com | Focused invite page; trust for a link received by SMS (B2R principle 6) |
| Icons follow the mockup in the hero meta row (after the text) | Mockup fidelity |
| Decorative motion (KV drift, orbit glow, entrance) only without `prefers-reduced-motion` | WCAG 2.3.3 |
| Section key visuals: cut from the brand file, upscaled 2×, background matched to `campaign.bg`, WebP 720/1152 (48/97 KB) | Research › performance is UX (Tabriz, PLP) |
| Desktop hero visual: the design lead's high-resolution image (3125 × 4096), 1168 wide, centre 430 · 547, 28°, with a radial vignette (transparent → `campaign.bg` #071A3E), set in Figma 2026-10-27. Web uses it rendered from Figma, `kv-hero-720/1168/2336.webp` (34/73/158 KB). The gradient stops stay raw hex: binding a variable to a gradient stop forces alpha to 1 in Figma, which would hide the image | Design lead edit; Figma limitation (per-stop alpha can't be token-bound) |
| `noindex` on the page | Invite-only event |

## Open questions
- [ ] Event date, time and venue address (placeholders today). A map link could be added to the venue later if wanted.
- [ ] **Re-publish DKB Foundations**: `campaign-display` line height was tightened to 96/112 · 56/64 after the first publish; the sandbox still shows 128/80 until the library is published and accepted.
- [ ] How invitees confirm attendance now that the page has no form (outside this page, e.g. by phone or SMS)? If the page should say so, the copy needs to come from marketing.
- [ ] Library finding (from the earlier form work): `button` `isLoading` shows the spinner on the left of the label; the spec says right (`iconStart · spinner · label`).

## Audit
`audit-design.js` on page *B2R · Event landing* (2026-10-31): **pass**, 0 errors (285 nodes). Warnings: 3 × `clippedOverhang`, the key visual deliberately bleeding out of the hero, agenda and details sections. Screens checked at 1440 and 360 against the web build; the page is B2R-only (campaign tokens don't change per brand).
Web: `next build` ok; axe-core WCAG 2.2 AA + best practice, 0 violations at 1440 and 360; no horizontal scroll at 360.

## Change log
- 2026-10-31: hero CTA «تأیید حضور» and the RSVP form removed (design lead). Removed with them: the eight RSVP state frames in Figma, the `button`/`field` campaign overrides, `proposal/campaign-result-panel` and `proposal/campaign-alert`; in code `RsvpForm`, `CampaignField`, `CampaignButton`, `JumpToRsvp`, the RSVP API route and mock, `phone.ts`, `ics.ts`. The bottom section became the event-details section.
- 2026-10-27: first version (hero, agenda, RSVP with eight states); hero key visual replaced with the design lead's high-resolution version.
