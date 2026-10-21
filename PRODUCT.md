# Product

<!-- impeccable:product-schema 1 -->

Digikala Business (DKB, «دیجی‌کالا بیزینس») runs three B2B commerce platforms on one codebase, one backend and one design system: **B2R** (retailers), **B2E** (company procurement) and **Enterprise Portals** (staff and member stores). This file holds the durable product truth all three share, plus what sets each apart. The detail lives in the foundation docs and is not repeated here:

- `knowledge-base/b2e-foundation-knowledge-base.md` (read first: it holds the layers the three share)
- `knowledge-base/b2r-foundation-knowledge-base.md`
- `knowledge-base/portals-foundation-knowledge-base.md`
- `research/research-insights-drive.md` (evidence)

No platform takes priority. Each task follows its own platform's doc.

## Platform

web

Responsive web: Next.js apps in the `b2b-shop-front` monorepo (`apps/website`, `apps/b2e`, `apps/portal`). Designs cover mobile at 360 and desktop at 1440 whenever a feature exists on both. The 768–1023 range is defined in the B2E foundation's responsive rules.

## Users

Every buyer is a business or acts for an organization. None of them are shopping for fun.

- **B2R (b2b.digikala.com).** Shops, retailers and guilds across Iran buy consumer electronics at trade price («نرخ همکار») to resell. The core user is a **mobile-shop owner** who restocks fast-moving phones every week, mostly from a phone, and compares prices across 2–3 sources each day. Other users: IT and laptop resellers (higher order values, cheque or credit), new registrants in their first two weeks, legal-entity company buyers, and the "market watcher" who visits mainly to check prices. About 97% are individual (حقیقی) accounts. These personas were built from data and still need validation.
- **B2E.** Companies buying for their own needs (office supplies, consumables, IT, gifts). SMEs and startups come first, structured multi-role firms second, complex institutions last. Buying involves several roles: requester, buyer, petty-cash holder, office manager, finance, approver, org admin and SME owner. Today each account has a single user. Roles are **Target**.
- **Enterprise Portals.** People who spend money their organization or a partner gave them, on a curated catalog. The live tenants: Relief Committee beneficiaries (**mehrad**, often low digital confidence), parents of students (**shad**), and Central Bank staff (**cbi / cbint**, a 20M toman Digipay allowance spent during short buying peaks).
- **Internal actors** create many of the states customers see: sales agents and telesales (verify customers, build assisted carts with set prices), field agents (register and activate shops), operations and finance (KYC, cheques, credit), and content and growth admins.

## Product Purpose

DKB gives businesses a digital, controllable way to buy from Digikala's assortment, so they stop depending on WhatsApp price lists, distributors, account managers and manual paperwork.

- **B2R** turns registrations into a first order within the two-week activation window, makes reordering faster (70% of bought items are repeats), and offers credit as working capital.
- **B2E** aims to become companies' purchasing infrastructure. Its North Star is **Recurring Governed Organizational GMV**: repeat purchases by active companies through a company account, roles, credit, official invoices and delivery SLAs.
- **Portals** let an organization fund and control what its people buy (catalog scope, allowance, caps, delivery) without designing a one-off store each time.

Success means activation, repeat purchases and fewer manual operations per order. The KPI lists are in each foundation doc.

## Positioning

- **B2R:** Digikala's stock at trade price, with an official invoice, a delivery promise and credit. A shop gets wholesale terms without negotiating with distributors.
- **B2E:** "Controllable organizational purchasing with Digikala's assortment and digital simplicity." It is a control layer for cost, credit, access, invoices and reports. It is not a shop with a company name on it, and not a discount channel.
- **Portals:** "My organization's store," which Digikala delivers and guarantees. Base price is always Digikala's price. Organization-specific differences (discount, cashback, catalog scope, caps) live in a separate rules layer. The portal does not own or underwrite the money.
- **Shared direction (Target, still a draft hypothesis):** a Federated B2B Platform, with B2R as Retailer Commerce Mode and B2E as Organizational Procurement Mode on one shared core.

## Operating Context

- **Documents are part of the purchase:** proforma (پیش‌فاکتور), official invoice (فاکتور رسمی), VAT, payment proof. The official invoice is the first reason companies buy from Digikala.
- **Money is mixed and limited:** gateway (IPG, capped at 400M toman), wallet, purchase credit, cheques, identified bank transfer (واریز شناسه‌دار), hybrid payment, partner wallets (Mehrad, Digipay). Every method has its own limit and timing.
- **Verification gates buying:** only verified accounts can buy (KYC/KYB, business licence, company letter, e-contract). Legal-account approval takes about 31 hours on average.
- **Price and stock change daily.** Stock can run out between cart and payment. Delivery speed is the second decision factor. Receiving is a team activity, not one person with a national ID at the door.
- **Two drivers per journey:** a shop or a sales agent can build the same cart and order.
- **Tenants are config:** logo, primary colour, support phone and feature flags (`rfq`, `creditPage`, `eContractStep`, …) change per tenant. Portal entry runs through partner SSO or OTP with pre-imported users.
- **Language:** Persian, right to left. Polite «شما», Persian digits, toman, Jalali dates, and the canonical glossary in the B2E foundation's Content section.

## Capabilities and Constraints

- **Design deliverables live in Figma.** Figma screens are built only from the DKB libraries (Foundations, Components, Commerce) and tokens, following `AGENTS.md`. Code lives outside this repo. The repo holds product knowledge, the design system source of truth (`design-system/`) and design specs (`designs/`).
- **Current vs Target vs Gap** tags decide what a design may assume. Conflicts between sources are logged in each doc's Gaps table and never resolved silently.
- **The backend is migrating from Bagisto to Supernova.** Designs must not depend on Bagisto-only behaviour.
- **Never hardcode tenant-dependent items** (logo, colour, phone, flagged entry points). Design every screen with each relevant flag off as well as on.
- **Every screen designs its states:** empty, loading, error, disabled, long content, and verification or permission gates, using the platform's status dictionaries.
- **Undecided:** B2E roles, approvals and company admin; the portal admin console; per-tenant brand modes (DS-3: portals use the B2R or B2E mode until then); the federated platform model; B2R personas (not validated by research).

## Brand Commitments

- Name: **دیجی‌کالا بیزینس**. Never دیجیکالا بیزنس or دیجی کالا بیزینس.
- Voice: formal-polite, short and specific. Say what happens next and who acts. Give limits as numbers. Errors never blame the user. One term per concept.
- Portals carry the partner's identity and Digikala's trust: the tenant's name and look, with Digikala visible as the one who delivers and guarantees.
- The visual system is the DKB Design System in `design-system/` (its README and DECISIONS.md). It is the visual authority, and the legacy setup described in the knowledge bases is not.

## Evidence on Hand

- Three foundation knowledge bases, each source cited (strategy, PRDs, code, Figma, live), last synced 19 Oct 2026.
- `research/research-insights-drive.md`: interview reports (PLP→checkout, B2E company buyers, business check-in, Gold, Tabriz event), a heuristic evaluation and issue inventory, usability and A/B tests, and CSAT.
- `raw-findings/` for details the foundations leave out.
- Hard numbers stated in the sources: B2R activation of 9.64%, 70% repeat items, and the sales mix; B2E 1404 NMV and GM; CBI wallet results. Treat these as direction, not live KPIs.
- **Absent, never fabricate:** formal B2R persona research, testimonials, customer logos or quotes for marketing use, live portal walkthroughs (portals were reviewed from code and PRDs only), and pricing or SLA promises that the sources do not state.

## Product Principles

1. **Paperwork and money are the product.** Proforma, official invoice, VAT and payment proof are as visible and correct as the cart. Every payment view shows the total, what each method covers, what remains and each method's limit.
2. **Show the rule before the wall, and unblock where the user is.** Caps, eligibility, verification, stock changes and allowances are stated before the user hits them, with the next step, and solved inside the step that needs them. No silent redirects, no detours to the profile.
3. **The second order is faster than the first.** Bulk quantities are normal, and reordering is close at hand: last purchases, saved lists, quantity entry in the row.
4. **Every state has an owner and a next step.** Each status says who acts now (you, sales, finance, courier, the partner) and what the user can do.
5. **One system, many tenants.** Look and rules change per platform and tenant through tokens, modes and properties, never through one-off flows. Business users get calm, dense, trustworthy screens: clear hierarchy, aligned figures, restrained colour, no consumer-style noise.

The full principle lists (shared, B2R, Portals) stay in the foundation docs and apply as binding.

## Accessibility & Inclusion

- WCAG 2.2 AA: text contrast of at least 4.5:1 (3:1 for large text), checked for every tenant colour. Focus always visible. Touch targets at least 40 px on mobile. Status never shown by colour alone. Visible labels, with errors under the field that say how to fix them.
- RTL throughout (`lang="fa"`, `dir="rtl"` on `html`). Directional icons mirror; numbers and media controls do not. Latin codes stay LTR inside Persian text.
- Portal users include low-confidence and first-time online buyers. Keep steps few, words plain, targets big, and the delivery and refund promises explicit.
