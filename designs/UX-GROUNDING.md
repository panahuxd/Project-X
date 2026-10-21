# UX grounding — required before every design task

> Status: process rule (DS-44). Applies to every task: a new feature, flow, page, screen, component proposal or change. Step 1b of the workflow in `../AGENTS.md`.

Before designing, find the UX principles, guidelines, standards and best practices that apply to the **context of the task**, and apply them **in line with the product's details and context** (users, rules, statuses, platform, brand, RTL/Persian). Write what you used in the spec's *UX grounding* section. No design decision without a source.

## 1. Steps

1. **Name the context.** What kind of task is it, and which patterns does it contain? (e.g. checkout, address form, data table, approvals, search and filters, onboarding/verification, order tracking, dashboard, empty state, notification.) Which platform, users and devices?
2. **Collect the sources** for those patterns from the reference library below, in priority order (§2). Read the actual guidance; don't rely on memory.
3. **Translate to DKB.** For each guideline, say how it applies to this product: which rule, user, status or constraint from the foundation doc it meets, and which DKB component or token implements it. Drop guidance that doesn't fit and say why.
4. **Look at real patterns** when layout or flow is open: how comparable products solve the same screen (Mobbin, Shopify, Amazon Business and Staples Advantage are the B2B benchmarks named in the B2E foundation).
5. **Record it** in the spec (*UX grounding*): guideline → source link → how it shaped the design. Every row in *Decisions* cites either this table, a foundation/research section or a DS decision.
6. **Conflicts go to Open questions.** When two sources disagree, the higher one in §2 wins for now and the conflict is logged, never resolved silently.

Scale to the task: a small change cites the two or three guidelines it touches; a new flow gets a full pass.

## 2. Priority when sources disagree

1. **Product rules and constraints**: business rules, statuses, permissions, legal and tax (official invoice, VAT), from `knowledge-base/<platform>-foundation-knowledge-base.md`.
2. **Accessibility**: WCAG 2.2 AA; WAI-ARIA Authoring Practices for widget behaviour. Already built into the DKB tokens and components.
3. **DKB product principles and research evidence**: the platform's design principles (B2E: shared principles; B2R and Portals: their own on top) and `research/research-insights-drive.md`.
4. **DKB Design System**: decisions DS-1…, component specs, `design-system/foundations/interaction-states.md`, `patterns/layouts.md`.
5. **External best practice** for the pattern (library below).
6. Taste. Never a reason on its own.

## 3. Reference library

Cite the page you used, not just the site. Add a source here when a task finds a useful one.

### General usability and accessibility
| Source | Use for |
|---|---|
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) | Contrast, focus, target size, errors, labels, reflow |
| [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) | Keyboard and screen-reader behaviour of dialogs, menus, tabs, comboboxes, grids |
| [Nielsen Norman Group: 10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) and [NN/g articles](https://www.nngroup.com/articles/) | Heuristic check of any screen; forms, tables, navigation, error messages |
| [Laws of UX](https://lawsofux.com/) | Named principles (Hick, Fitts, Jakob, proximity…) to justify layout choices |
| [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) | Form questions, error messages, addresses, dates, check-answers pages |

### E-commerce and B2B commerce
| Source | Use for |
|---|---|
| [Baymard Institute research](https://baymard.com/research) · [checkout usability](https://baymard.com/research/checkout-usability) | Product lists and pages, cart, checkout, account, search and filters, mobile commerce |
| [Shopify app design guidelines](https://shopify.dev/docs/apps/design) | Admin and app patterns: layout, navigation, forms, feedback, empty states, visual design |
| [Shopify checkout best practices](https://shopify.dev/docs/apps/checkout/best-practices) · [UX for checkout fields and banners](https://shopify.dev/docs/apps/build/checkout/fields-banners/ux-for-fields) | Fields, messages and banners inside checkout |
| [Shopify B2B overview](https://help.shopify.com/en/manual/b2b/getting-started/features) · [companies](https://help.shopify.com/en/manual/b2b/companies/creating-companies) · [payment terms](https://help.shopify.com/manual/b2b/payment-terms) | B2B models to compare with DKB: companies and locations (B2E company, branches), catalogs and price lists (portal catalog scope, volume prices), payment terms (credit, cheque, invoice payment), draft orders and quotes (RFQ, proforma) |
| [Shopify Polaris](https://polaris.shopify.com/) | Merchant-admin component and content patterns (index tables, filters, bulk actions, resource pages) |
| Amazon Business, Staples Advantage (live products) | B2B benchmarks named in the B2E foundation: approvals, reorder, business invoices |

### Platforms, components and real patterns
| Source | Use for |
|---|---|
| [shadcn/ui docs](https://ui.shadcn.com/docs) | Behaviour of the components DKB Core is built on |
| [Material Design 3](https://m3.material.io/) · [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) | Mobile conventions: touch targets, bottom sheets, navigation bars, gestures |
| [Material: bidirectionality](https://m2.material.io/design/usability/bidirectionality.html) | RTL mirroring rules (with `design-system/components/direction.md`) |
| Mobbin (skill `mobbin:search`) | How real apps lay out the same screen or flow |

## 4. What a good *UX grounding* section looks like

| Guideline | Source | How it applies here |
|---|---|---|
| Keep the user in context when editing a detail of a task | NN/g heuristic 3 (user control and freedom) | Address edit opens over the shipping step; Esc and «انصراف» return without changes |
| Show the rule before the wall | B2E principle 3 | Online-payment cap shown next to the total before the user taps «پرداخت» |
| Error messages say what happened and how to fix it, next to the field | GOV.UK error messages · WCAG 3.3.1 / 3.3.3 | `field` error text under the control, `border.destructive` (DS-39) |
