# B2R · Hybrid payment (checkout payment step)

> Status: in review · Owner: design lead · PRD: [Hybrid Payment Journey Enhancement v2](https://docs.digikala.com/spaces/B2BTP/pages/180762490/Hybrid+Payment+Journey+Enhancement+v2) · Base design: [Cart, Checkout & Order History › Hybrid payment B2B](https://www.figma.com/design/0WGNUxcG6vsHYja8MXsbhp/Cart--Checkout---Order-History?node-id=3424-15727) · Figma: [DKB · Agent sandbox › B2R · Hybrid payment](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=38-1788) · Branch: `design/b2r-hybrid-payment`

## Problem
Hybrid payment is 5% of paid orders but 10.7% of GMV (AOV 2.16× single payment); 47% of orders above the IPG cap are paid hybrid, and 86% of hybrid orders come from repeat hybrid users (PRD §2). 14.2% of hybrid attempts fail (182 orders, 44.3B toman checkout value). The current page shows every method as an independent card built for *one* choice, with no running ledger of «what each source covers and what is left» (PRD §2.6). On mobile the methods, wallet, coupon, summary and CTA are spread down one long scroll (PRD §2.7).
Evidence in the foundation: B2R Gap #30 (usability test, n=5: nobody saw methods can be combined; the pay button showed the full total, not the gateway part), Gap #26 (payment page has no order summary; ~73% go back to check the order), Gap #16 (wallet top-up detour), principle 4 «Money is always clear».

## Users and goal
Mobile shop owner and IT/laptop reseller (B2R foundation › Personas): large orders, part paid from the wallet or by cheque/credit, the rest online. Goal: build a valid payment plan in one pass and understand, at every moment, what each source pays and what is left. Outcome metrics: payment step completion, hybrid-eligible checkout completion, disabled-CTA rate by cause, recalculation error rate (PRD §18, §20).

## Constraints (PRD v2)
- **Component priority (§5):** EN loan › DKB credit › cheque › Digipay › wallet › gift card. IPG is **not** a component; it sits behind the CTA (AC-02).
- **Hybrid rules (§7):** credit methods (EN loan, DKB credit/7-day, cheque) are mutually exclusive; each combines with wallet and gift card. Digipay is single-method: selecting it deallocates everything else (AC-05, AC-06).
- **Visibility (§6):** active + balance > 0 → enabled; active + 0 → disabled; suspended → disabled with «سقف اعتبار شما غیرفعال است»; closed / not defined → hidden. Cheque active + 0 → disabled with «سقف اعتباری شما برای ادامه سفارش کافی نیست».
- **Allocation (§10):** in the user's selection order; no optimisation; over-allocation is taken off the last selected method; removing a method rebuilds the allocation.
- **Discount (§8):** applied automatically by priority Digipay › IPG › wallet › 7-day credit › EN loan › cheque; the user does not choose where. Gift card and discount are mutually exclusive.
- **IPG cap and CTA (§9):** cap **400,000,000 toman** (user decision 2026-10-21; foundation said 200M → update). CTA and grey-box labels per §9.2.
- **Recalculation (§13, §15):** every action reruns the engine; while it runs the CTA is disabled and no stale value is shown as final; values appear atomically.
- **Final validation (§11):** all balances re-checked before submit; if anything changed, the plan is rebuilt and the user confirms again.
- Brand B2R. Mobile 360 and desktop 1440. RTL, Persian digits, toman.

## UX grounding
Patterns: checkout payment step, multi-source (split) payment ledger, mutually exclusive choices + additive toggles, promo/gift code entry, blocked primary action, live recalculation, inline status messages.

| Guideline | Source | How it applies here |
|---|---|---|
| Product rules decide order, exclusivity, allocation and labels | PRD v2 §5–§11 (priority 1) | Section order follows §5; exclusivity is expressed by control type (radio for credit methods, switch for additive wallet/gift card); grey-box and CTA labels copied from §9.2 |
| Money is always clear: total → each method → remaining, each method's limit | B2R principle 4 · Gap #30 · PRD §2.6 | A ledger (`proposal/payment-ledger`) lists the order total, every allocated source **in allocation order** and the remainder; each method row also shows its own share and limit |
| Keep the order summary on the payment page | B2R Gap #26 (heuristic CHK-01) · [Baymard: payment UX](https://baymard.com/blog/payment-ux) (full total before asking for payment) | Desktop: sticky bill box beside the methods (T4). Mobile: a 3-number plan strip at the top + full bill box at the end + sticky action bar with the remaining amount |
| Group methods logically, common/priority first; radios over drop-downs | [Baymard: payment method selection](https://baymard.com/research-articles/payment-method-selection) | Three labelled groups («اعتبار، وام یا چک» · «دیجی‌پی» · «کیف پول و کارت هدیه»), each with a one-line rule of how it combines |
| The primary button names what happens next | Baymard payment-method selection (button changes with the method) · PRD §9.2 | CTA label switches: «پرداخت آنلاین» / «پرداخت با دیجی‌پی» / «ثبت سفارش» / «پرداخت» (disabled) |
| A disabled action says why and how to fix it, next to it | `action-bar` spec (explain above the bar) · [NN/g heuristic 9: help users recover from errors](https://www.nngroup.com/articles/ten-usability-heuristics/) | Over-cap: warning alert above the CTA quantifies the gap («دست‌کم ۲۰۰٬۰۰۰٬۰۰۰ تومان دیگر…») and names the fixing methods |
| No silent changes; undo for system-made changes | B2R principle 4 · NN/g heuristic 1 (visibility of system status) and 3 (user control) | Over-allocation trim, Digipay deallocation and changed balances each show an `alert` saying what changed and why; Digipay deallocation offers «بازگرداندن» |
| Status changes are announced without moving focus | [WCAG 2.2 SC 4.1.3 Status messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) | Ledger and alerts are live regions (`role=status`; error alert `role=alert`) |
| Don't show stale values as final during recalculation | PRD §15, AC-17…19 · NN/g heuristic 1 | Ledger amounts become `skeleton` lines, CTA `isLoading` + disabled, the touched row shows a `spinner` |
| Switch = immediate effect; radio = one of a small visible group | `switch.md`, `radio.md` (DS) · [WAI-ARIA APG radio group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) | Wallet and gift card are `switch`es (apply instantly, recalc); credit methods and Digipay sub-options are `radio`s |
| Collapse promo-code entry by default | Baymard payment UX (visible promo fields send users hunting) | Discount and gift card start closed (switch / collapsed input); mutual exclusion stated inline |
| Keep the main action in thumb reach on mobile | DS-36 D4 (`action-bar`) · [Material 3 bottom app bars](https://m3.material.io/components/bottom-app-bar/overview) | Mobile uses `action-bar type=amount` with the §9.2 grey-box label as `amountLabel` |
| Unblock where the user is | B2R principle 3 · Gap #16 | «افزایش موجودی» on the wallet row opens top-up and returns to this step (metric: top-up return rate) |

## Flow
1. Enter payment (from shipping). Engine runs → nothing selected; if total ≤ cap, CTA «پرداخت آنلاین»; if > cap, CTA «پرداخت» disabled + warning (S1, S2).
2. User adds sources in any order: a credit method (radio; cheque opens its list → tick cheques), wallet / gift card (switch), discount code. Each action reruns the engine (recalculating state) and updates rows, ledger and CTA.
3. Over-allocation → the last selected method is trimmed + info alert (S6). Remaining 0 → «ثبت سفارش» (S12).
4. Digipay selected → other methods deallocated + info alert with «بازگرداندن»; CTA «پرداخت با دیجی‌پی» (S10).
5. Submit → final validation. Changed balance → plan rebuilt, warning alert, CTA re-enabled for a fresh confirm (S11). Engine error → destructive alert with «تلاش دوباره», CTA disabled (AC-23).
6. Exit to IPG / Digipay / order result (out of scope here).

## Screens
| Screen | Breakpoint | Brand | Figma frame | Notes |
|---|---|---|---|---|
| Payment — hybrid, remaining ≤ cap (S4) | Desktop 1440 | B2R | `checkout/payment/desktop` [38:1788](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=38-1788) | Methods 8 cols + sticky ledger 4 cols; CTA «پرداخت آنلاین» |
| Payment — hybrid, remaining ≤ cap (S4) | Mobile 360 | B2R | `checkout/payment/mobile` [38:1512](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=38-1512) | Plan strip on top, ledger at the end, `action-bar` with «مبلغ پرداخت آنلاین» |

Scenario data: order 700M; cheque 123456 (150M) → cheque 789012 (120M, under review) → wallet (100M); online 330M.

## States
| Screen | State (PRD scenario / AC) | Figma frame |
|---|---|---|
| Payment | Over the IPG cap, nothing selected → «پرداخت» disabled + warning that quantifies the gap (S2, AC-11) | desktop [38:2029](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=38-2029) · mobile [38:2228](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=38-2228) |
| Payment | Remaining = 0 after over-allocation; last cheque trimmed + info alert; «ثبت سفارش» (S6/S12, AC-12, AC-14) | mobile [39:1738](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=39-1738) |
| Payment | Digipay selected after other methods → others deallocated, info alert with «بازگرداندن», discount applied, «پرداخت با دیجی‌پی» (S10, AC-05/06/07) | mobile [39:2010](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=39-2010) |
| Payment | Recalculating → ledger, strip and amount as `skeleton`, touched row `spinner`, CTA loading (AC-16…19) | mobile [39:2251](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=39-2251) |
| Payment | Final validation changed the wallet balance → plan rebuilt, warning alert, user confirms again (S11, AC-20/21) | mobile [39:2499](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=39-2499) |
| Payment | Recalculation error → destructive alert «تلاش دوباره», amounts «—», CTA disabled (AC-23) | mobile [39:2750](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=39-2750) |
| Payment | Method visibility: EN loan active, DKB credit suspended (disabled + «سقف اعتبار شما غیرفعال است»), cheque active (§6) | every frame |

Not designed in this pass: add-cheque flow, cheque-delivery sheet, gift-card entry, wallet top-up return, payment result screens, desktop versions of the five mobile-only states (same content in the 8 + 4 layout).

## Components used
| Component | Variants / properties used | Notes |
|---|---|---|
| `template/checkout` | desktop, mobile | Detached; regions replaced (`page-title`, `step-card-1`, `bill-box`), `step-card-2` removed |
| `header` | `type=focused`, `title` | Desktop |
| `mobile-header` | `type=inner`, `title` «پرداخت» | Mobile |
| `action-bar` | `type=amount`; `amountLabel` = PRD §9.2 grey-box label; nested `action` label/state/`isLoading` | Mobile CTA |
| `radio` | `checked`, `state=default/disabled`, `label`, `description` | Credit methods (exclusive), Digipay and its 4 options |
| `switch` | `checked`, `state`, `label`, `description` | Wallet, gift card, discount (immediate effect) |
| `checkbox` | `checked`, `label`, `description` | Cheques (several can be picked) |
| `badge` | `tone=success/warning`, `style=subtle`, `size=sm` | Cheque status «تایید شده» / «در حال بررسی» |
| `alert` | `tone=info/warning/destructive`, `title`, `description`, `showAction` + nested `action` | Over-allocation, Digipay deallocation, over-cap, balance changed, error |
| `button` | primary lg (desktop CTA), outline sm «افزودن چک», link sm «افزایش موجودی», ghost sm «حذف کد» | |
| `separator`, `skeleton` (line), `spinner` (sm, primary) | | |
| Icons | landmark, smartphone, wallet, ticket-percent, plus, x | Section headers and buttons |

Sections are token-built frames (`bg.surface`, `border.default`, `radius.card`, `shadow.card`, `space.16/24`), as in `layouts.md` §3.4: the `card` component's fixed header/content-slot/footer doesn't fit a list of selectable rows.

## Component requests
| Proposal | What it is | Why the library doesn't cover it | Proposed API |
|---|---|---|---|
| `proposal/payment-method` | One payment source: control (radio/switch) with name and balance/limit, its share of this order, optional children (cheque list, Digipay options, top-up link) | `item` has no control slot or share line; `radio`/`switch` alone can't hold children | `control: radio/switch/none`, `selected`, `disabled`, `title`, `description`, `share` (text, or loading), slot `children`; DKB Commerce |
| `proposal/payment-ledger` | Bill box for checkout payment: totals, ordered payment plan, grey remaining box with the §9.2 label, CTA, notes | No commerce bill-box component yet (the template only reserves the region) | `totals[]`, `plan[]` (label, amount, loading), `remaining` (label, amount, note), `cta`, `alert`, `notes[]`; desktop/mobile |
| `proposal/plan-strip` | Mobile 3-number summary: payable · from your sources · remaining/online | New pattern to keep the plan in view on a long mobile scroll (PRD §2.7) | `items[3]` (label, value, loading) |

## Decisions
| Decision | Why (evidence) |
|---|---|
| Methods grouped in PRD §5 order into 4 sections, each stating how it combines | PRD §5, §7 · Baymard grouping · Gap #30 |
| Exclusivity shown by control type: radio for credit methods and Digipay, switch for wallet/gift card/discount, checkbox for cheques | PRD §4, §7 · `radio.md`, `switch.md` |
| IPG is not a row; it appears only as the ledger's remaining box and the CTA | PRD AC-02 |
| Ledger lists sources in allocation (selection) order, numbered | PRD §10 · B2R principle 4 |
| Every allocated row shows «سهم این سفارش»; cheques show their used share | Principle 4 · PRD §2.5 (balance checks before choosing wallet) |
| Mobile: plan strip on top + ledger at end + `action-bar` with the §9.2 label | PRD §2.7 · Gap #26 · DS-36 D4 |
| Disabled CTA explained right above it with the exact missing amount | `action-bar` spec · NN/g H9 |
| System-made changes (trim, deallocation, changed balance) announced with an alert; Digipay deallocation offers undo | Principle 4 · NN/g H1, H3 · PRD §10, §11 |
| During recalculation amounts become skeletons and the CTA shows loading | PRD §15, AC-17…19 |
| IPG cap 400M toman | User decision 2026-10-21 (PRD v2 data); foundation updated from 200M |
| Discount shown as an applied row with «حذف کد»; gift card disabled while it's on | PRD §8, constraint 7–9 |
| Mobile sections are full-width blocks (no radius, no side borders, no shadow, `space.8` apart); alerts inset by `layout.page-margin` | DS-45 (layouts.md D5): rounded containers must not touch the screen edge; matches the live Digikala mobile pattern and keeps rounded borders for selectable options only |

## Open questions
- [ ] IPG cap: confirm 400M with Payment/FinTech and whether it can vary per gateway (IPG vs IPG-TOP).
- [ ] Undo after Digipay deallocation («بازگرداندن»): PRD doesn't define it. Needs engine support to restore the previous allocation.
- [ ] Wallet top-up from checkout: inline drawer vs. separate page with return (metric «Wallet Top-up Return Rate»). Not designed yet.
- [ ] Should an over-cap order pre-select the wallet when its balance alone brings the remainder under the cap? PRD says no automatic optimisation (§10); keep manual unless product decides otherwise.
- [ ] The CTA during recalculation: `button` `isLoading` (non-interactive) vs. `state=disabled`. PRD asks for disabled; the DS loading state is used here.
- [ ] Bank transfer (sheba/deposit ID) exists in the foundation's method list but not in PRD v2. Out of scope or removed?
- [ ] Credit (7-day) vs. «اعتبار دیجی‌کالا بیزنس» naming: PRD uses both; glossary should settle one label.

## Audit
`audit-design.js` (PAGE = «B2R · Hybrid payment», 1,570 nodes): **pass**, 0 unbound colours, 0 unstyled text, 0 non-library instances, 0 detached-looking frames, 0 slots/regions left, 0 templates not detached; warnings 0. Checked in B2R mode (Mobile and Desktop); the feature is B2R-only, so B2E mode wasn't reviewed. Note: the scripts used `agent-helpers.js` with `KEYS` trimmed to the names they import (functions unchanged).

Re-audit 2026-10-21 after DS-45: 0 errors including the new `roundedAtScreenEdge` check (5 full-width alerts inset by the page margin, 42 section frames made full width), 0 warnings.
