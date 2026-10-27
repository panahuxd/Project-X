# B2R · Event landing (Mashhad invite and RSVP)

> Status: in review · Owner: design lead · Figma: [DKB · Agent sandbox › B2R · Event landing](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-269) · Code: `implementations/b2r-event-landing/` · Branch: `design/b2r-event-landing` · Inputs: marketing mockup «در مدار بیزینس» (desktop) and its key visual (portrait, 579×1029)

## Problem
Digikala Business invites selected shops to a regional event in Mashhad («در مدار بیزینس»). Invitees need one page that tells them what the event is and lets them confirm attendance («تأیید حضور») with the invited mobile number. Marketing delivered a desktop mockup and a key visual; there is no mobile layout, no states (validation, sending, success, already registered, not on the list, closed) and the dark campaign look has no DKB tokens (DS-6: light only).
Evidence: the Tabriz event (research › Event Tabriz, Mehr 1404: ~94 attendees, all observed on phones); B2R sales are 77% mobile (B2R foundation › Key numbers); principle 8 «Mobile first, Persian first».

## Users and goal
Invited B2R shop owners and resellers in Mashhad and nearby (B2R foundation › Personas: mobile-shop owner, IT reseller), opening the page from an SMS or messenger invite, mostly on a phone. Goal: understand the event in one screen and confirm attendance in under a minute. Outcome: RSVP conversion (page view → confirmed), form error rate, share of «not on the list» errors.

## Constraints
- Brand B2R; marketing surface (landing, B2R route map › Promotions: seasonal landings have their own look). New look expressed only through tokens: **DS-48 campaign group** (this task).
- Mobile 360 and desktop 1440. RTL, Persian, polite «شما», Persian digits, Jalali dates (B2E foundation › Content and localization).
- Phone inputs accept Persian and Latin digits (B2E foundation › Content). Mobile number = 11 digits starting with ۰۹.
- Event data (date, time, venue) and the submit endpoint are **not known yet**: marked placeholders in Figma, one config object in code (user decision, 2026-10-27). Never fabricate dates, promises or perks (PRODUCT.md › Evidence on hand).
- No storefront header or footer: a focused invite page (no navigation away from the one task); the official logo stays visible for trust.

## UX grounding
Patterns: campaign landing hero, single-goal RSVP form (3 fields), phone number entry, inline validation, submit result (confirmation page), dark decorative surface, motion on a decorative visual.

| Guideline | Source | How it applies here |
|---|---|---|
| Product and content rules first: brand name, «شما», Persian digits, no invented facts | PRODUCT.md › Brand commitments, Evidence on hand · B2R D12 | Copy from the approved mockup; date, time, venue and perks are placeholders until marketing confirms them |
| Text contrast ≥ 4.5:1, UI parts ≥ 3:1, focus visible | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) 1.4.3, 1.4.11, 2.4.7 · DS-22 | DS-48 tokens checked in `build/contrast-report.md`; input boundary uses `campaign.border-control` (≥ 3:1); focus ring `campaign.ring` (cyan) because the grey `ring.default` vanishes on navy |
| Keep labels visible; placeholders only for format hints | [NN/g: Placeholders in form fields are harmful](https://www.nngroup.com/articles/form-design-placeholders/) · [Baymard: mobile forms, avoid inline labels](https://baymard.com/research-articles/mobile-forms-avoid-inline-labels) · B2E › Accessibility (visible labels) | The mockup's in-field labels become visible labels above each input (`field`); the icon stays inside the input; the phone field keeps a format hint («مثلاً ۰۹۱۲۳۴۵۶۷۸۹») as placeholder |
| Identify input purpose for autofill | [WCAG 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose) | `autocomplete="name"`, `tel` (`type=tel`, `inputmode=numeric`), `organization` |
| Phone numbers: `tel` type, accept spaces and other digit sets, no masking, specific errors | [GOV.UK: Ask users for phone numbers](https://design-system.service.gov.uk/patterns/phone-numbers/) | Accept Persian/Latin digits, spaces, dashes and +98; normalise silently; error «شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود» |
| Validate on blur (or at full length), clear the error as soon as it is fixed, don't validate empty fields early | [Baymard: Inline form validation](https://baymard.com/blog/inline-form-validation) · `field` spec | Errors appear on blur and on submit; they clear on the keystroke that fixes them; focus moves to the first invalid field on submit |
| One main action per view; the main action names what happens | DS-46 action placement · `button` spec › Content | Hero CTA «تأیید حضور» jumps to the form; the form's CTA «حضورم را تأیید می‌کنم» submits; no competing actions |
| Confirmation page: what happened, what happens next, a record to keep | [GOV.UK: Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages) · B2R pattern «Three-outcome result» | Success replaces the form in place: confirmed name and number, event details, «افزودن به تقویم» and «مسیریابی» (when configured); already-registered and failed outcomes each have one next step |
| Every state has an owner and a next step | B2E principle 6 · B2R principle 3 | «Not on the guest list» says what to do (use the invited number or call support); «registration closed» replaces the form with the reason |
| Mobile first; targets ≥ 40 px | B2R principle 8 · research › Tabriz (all on phones) · B2E › Accessibility | Mobile is designed first; inputs and buttons use `lg` (48 px in Mobile mode); one column |
| Mobile page sections are full width | DS-45 · layouts.md §3.4 | Sections run edge to edge on mobile; no rounded container touches the screen edge |
| Decorative motion must be stoppable or respect reduced motion | [WCAG 2.3.3 Animation from interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) · WCAG 2.2.2 | The key visual's slow rotation runs only without `prefers-reduced-motion`, under 5 s of entrance motion; decorative images get empty `alt` |
| Performance is UX | Research › Tabriz and PLP (slow loads cause abandonment) | Key visual served as WebP 720/1152 (48/97 KB) with `srcset`, three font weights preloaded (Black, Bold, Regular), client JS only for the form and the CTA |

Conflicts → *Open questions*.

## Flow
1. Invitee opens the link (SMS / messenger) → hero (event name, short promise, date · time · venue, «تأیید حضور»).
2. «تأیید حضور» scrolls to the RSVP section and focuses the first field.
3. Fill name, invited mobile, shop name → «حضورم را تأیید می‌کنم».
4. Outcomes: **confirmed** (success panel) · **already registered** (success panel with a note) · **not on the guest list** (error under the phone field + support) · **failed** (alert, retry; values kept) · **closed** (form replaced by a notice).

## Screens
| Screen | Breakpoint | Brand | Figma frame | Notes |
|---|---|---|---|---|
| Landing (hero, agenda, RSVP, sign-off) | Desktop 1440 | B2R | [`landing/event-mashhad/desktop`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-557) | Started from `template/home` (T1), detached; storefront header, footer and every region removed: a focused invite page. Content width `layout.content-max-width` |
| Landing | Mobile 360 | B2R | [`landing/event-mashhad/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=224-719) | Same order; the key visual sits in its own full-width band under the call to action (never behind text); agenda as rows; form before the event details |
| Decor parts | — | B2R | [`proposal/campaign-parts`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=228-454) | Local components: ornament, eyebrow trail, orbit (back/front), dotted ring (3 tones, `icon` swap). All colours are `campaign.accent-*` tokens, gradient stops included |

Web: `implementations/b2r-event-landing/` (Next.js 15 App Router, Tailwind v4 on the DKB build), route `/landing/dar-madar-business`.

## States
| Screen | State | Figma frame |
|---|---|---|
| RSVP | Submitted empty: three errors, focus on the first | [`rsvp-errors/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-702) |
| RSVP | Mobile number invalid; valid fields show a check (positive validation) | [`rsvp-phone-invalid/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-785) |
| RSVP | Sending: button `isLoading`, «در حال ثبت…», values kept | [`rsvp-sending/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-865) |
| RSVP | Not on the guest list (error on the number, says what to do) | [`rsvp-not-invited/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-933) |
| RSVP | Failed (network or server): alert above the button, values kept | [`rsvp-failed/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-1001) |
| RSVP | Confirmed: result panel replaces the form, takes focus | [`rsvp-success/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-1073) |
| RSVP | Already registered | [`rsvp-already/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-1081) |
| RSVP | Registration closed (`registration: 'closed'`) | [`rsvp-closed/mobile`](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=232-1088) |
| Whole page | Placeholders left: preview banner in dev; `next build` fails | code only |
| Hero | Long event values wrap; meta stacks on mobile | desktop/mobile frames |

Desktop uses the same states inside the form column.

## Components used
| Component | Variants / properties used | Notes |
|---|---|---|
| `template/home` | `screen=desktop`, `screen=mobile` | Starting frame, grid and modes; all regions and shell parts removed |
| `logo` (Commerce) | `size=md` (header, mobile header), `size=sm` (sign-off) | `logo-mark` fill overridden to `campaign.text` / `campaign.text-muted` (the official white version) → component request |
| `button` | `variant=primary`, `size=lg`, `showIconEnd` + `iconEnd=icon/arrow-left`, `isLoading` | Fill → `campaign.cta`, label and icon → `campaign.text-on-cta` (overrides) → component request |
| `field` | `control=input`, `state=default/error`, `showHelper`; nested `label` (`text`), nested `control` (`size=lg`, `state=default/filled/error`, `showIconStart` + `user`/`phone`/`store`, `showIconEnd` + `check`) | Label → `campaign.text`; control fill none, stroke `campaign.border-control` / `campaign.border-error`, value `campaign.text` / `campaign.text-subtle`; helper → `campaign.text-error` |
| Icons | `calendar`, `clock`, `map-pin`, `arrow-left`, `user`, `phone`, `store`, `layout-grid`, `messages-square`, `gift`, `check`, `circle-check`, `circle-alert`, `info` | Strokes bound to campaign text tokens |
| Text styles | `campaign-display` (new, DS-48), `display`, `heading-1`, `heading-3`, `heading-4`, `body-lg`, `body`, `body-sm`, `label` | No raw type |
| Tokens | `campaign.*` (DS-48), `space.*`, `layout.content-max-width`, `layout.page-margin`, `radius.card`, `radius.control`, `icon.size.*`, `size.32` | 0 unbound colours (audit) |

## Component requests
| Request | Why | Proposed API |
|---|---|---|
| `button` `tone=campaign` | The primary button is navy on a navy surface; today the campaign look is instance overrides (Figma) and `CampaignButton` (code) | `tone: default \| campaign` on primary and outline; campaign maps fill/hover/pressed to `campaign.cta*`, outline to `campaign.border-control` + `campaign.bg-raised` hover, focus ring `campaign.ring` |
| `field` / `input` `tone=campaign` | Light fields and black labels disappear on the campaign surface | `tone: default \| campaign`: label `campaign.text`, transparent control, `campaign.border-control`, error `campaign.border-error` + `campaign.text-error`, placeholder `campaign.text-subtle` |
| `logo` `tone=inverse` | The official white logo exists in *VA - DKB Logos* but not in the library; overriding the fill risks hand recolouring | `tone: primary \| inverse` (inverse = white) on both sizes |
| `campaign-ornament`, `campaign-orbit`, `campaign-ring` (Commerce, `campaign/…`) | Reusable decor for the next event and campaign landings (built here as `proposal/…`) | As in `proposal/campaign-parts`: ring `tone=1\|2\|3` + `icon` swap; orbit `layer=back\|front` |
| `proposal/campaign-result-panel`, `proposal/campaign-alert` | `card` and `alert` are light-only | Covered by a `tone=campaign` on `card` and `alert` |
| Text style `body-xl` (20/32 Regular) | The mockup's intro line is between `body-lg` (16) and `heading-3` (20, SemiBold); `body-lg` is used for now | Optional; design lead to decide |

## Decisions
| Decision | Why (evidence) |
|---|---|
| New token group `campaign.*` + `campaign-display` text style (DS-48), approved by the design lead on 2026-10-27 | The mockup is dark navy with an electric-blue CTA; DS-6 is light only. Values sampled from the mockup; WCAG checked in `build/contrast-report.md` (0 failures) |
| Visible labels above the inputs; the mockup's in-field labels become icons + a format hint | NN/g placeholders · Baymard inline labels · B2E › Accessibility (visible labels) |
| Hero CTA «تأیید حضور» scrolls to the form and focuses the first field; only the form button submits | DS-46 (one main action per view) · button spec › Content |
| Event date, time and venue are `[placeholders]`; the production build fails until they are replaced | PRODUCT.md › Evidence on hand (never fabricate) · user decision 2026-10-27 |
| Mobile-first layout with the key visual in its own band under the CTA, not behind the copy | Research › Tabriz (all on phones) · B2R principle 8 · WCAG 1.4.3 (text on a busy image) |
| Mobile sections full width with top rules only | DS-45 |
| No storefront header, footer or bottom nav; the logo stays and links to b2b.digikala.com | Single-goal invite page (Hick's law, Laws of UX); trust for an SMS link that asks for a phone number (B2R principle 6) |
| Phone input accepts Persian/Latin digits, spaces and +98, no masking; `type=tel`, `autocomplete` on all fields | GOV.UK phone numbers · WCAG 1.3.5 · B2E › Content |
| Errors on blur and submit, cleared on fix; positive check on valid fields | Baymard inline validation · field spec |
| Result replaces the form in place (`role=status`, focus to the heading); already-registered is a success, not an error | GOV.UK confirmation pages · B2R «three-outcome result» |
| Icons follow the mockup in the meta row and the details list (after the text); in inputs they stay at the start | Mockup fidelity; the input anatomy comes from the library |
| Decorative motion (KV drift, orbit glow, entrance) only without `prefers-reduced-motion` | WCAG 2.3.3 |
| Key visual cut from the brand file, upscaled 2×, background matched to `campaign.bg`, served as WebP 720/1152 (48/97 KB) | Research › performance is UX (Tabriz, PLP) |
| Desktop hero visual: larger (1168 wide, centre 430 · 547, 28°) with a radial vignette, transparent → `campaign.bg` #071A3E, set by the design lead in Figma (2026-10-27). Web bakes the vignette into `kv-hero-*.webp` (27/56 KB) at the same box. The gradient stops stay raw hex: binding a variable to a gradient stop forces alpha to 1 in Figma, which would hide the image | Design lead edit; Figma limitation (per-stop alpha can't be token-bound) |
| `noindex` on the page | Invite-only event |

## Open questions
- [ ] Event date, time, venue address and map link (placeholders today).
- [ ] **Re-publish DKB Foundations**: `campaign-display` line height was tightened to 96/112 · 56/64 after the first publish; the sandbox still shows 128/80 until the library is published and accepted.
- [ ] Library finding: `button` `isLoading` shows the spinner on the left of the label; the spec says right (`iconStart · spinner · label`). The web follows the spec.
- [ ] Submit endpoint and guest-list check: does the backend reject numbers that weren't invited (state designed), and does it send an SMS confirmation (success copy depends on it)?
- [ ] «تأیید» (mockup) vs «تایید» (product copy today): pick one spelling for the glossary.
- [ ] A higher-resolution key visual (≥ 2× the 579×1029 file) for desktop and retina screens.

## Audit
`audit-design.js` on page *B2R · Event landing* (2026-10-27): **pass**, 0 errors (532 nodes). Warnings: 3 × `clippedOverhang`, the key visual deliberately bleeding out of the hero, agenda and RSVP sections. Screens checked at 1440 and 360 against the mockup and the web build; the page is B2R-only (campaign tokens don't change per brand).
Web: `next build` ok; axe-core WCAG 2.2 AA + best practice, 0 violations at 1440 and 360; no horizontal scroll at 360; keyboard order logo → CTA → fields → submit.
