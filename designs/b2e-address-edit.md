# B2E · Address edit (example)

> Status: example (agent dry run, not a product decision) · Owner: design lead · Figma: [DKB · Agent sandbox › order/address-edit/desktop](https://www.figma.com/design/p3EPUXwCXQpxjriYd1etGW?node-id=15-97) · Branch: none

This spec shows what a finished design spec looks like. It documents the sandbox screen an agent built by following `AGENTS.md`.

## Problem
Buyers need to correct a delivery address without leaving the order flow. Today address changes live only in the profile (B2E foundation › Information architecture, «آدرس‌ها»).

## Users and goal
Buyer «مسئول خرید» (B2E foundation › Users and roles). Goal: change the address of future orders in one short step.

## Constraints
- Changing an address does not change orders already placed (B2E foundation › Delivery).
- Province is required; the full address must include street, alley, number and unit.
- Platforms: B2E desktop (this screen); on mobile the same content goes in a `drawer` (DS-32).
- Brand mode B2E, screen mode Desktop.

## UX grounding
Patterns: edit a detail inside a task (modal edit), address form. Added after the dry run to show the section (DS-44).

| Guideline | Source | How it applies here |
|---|---|---|
| Let users fix a detail without leaving the task, with a clear way out | [NN/g heuristic 3: user control and freedom](https://www.nngroup.com/articles/ten-usability-heuristics/) | Dialog over the shipping step; «انصراف» and Esc close without saving |
| Modal dialogs trap focus and return it to the trigger | [WAI-ARIA APG: dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | `dialog` component behaviour; focus returns to «ویرایش آدرس» |
| Address forms: only the fields needed, labelled, with errors next to the field | [GOV.UK addresses pattern](https://design-system.service.gov.uk/patterns/addresses/) · [Baymard checkout research](https://baymard.com/research/checkout-usability) | `field` per part (province, city, street, alley, number, unit), required marked, error under the field |
| One-handed reach on mobile | [Material 3 bottom sheets](https://m3.material.io/components/bottom-sheets/overview) | Mobile uses `drawer` (DS-32) |

## Flow
1. Buyer opens «ویرایش آدرس» from the shipping step.
2. Dialog opens with the current address filled in.
3. «ذخیره» saves and closes; «انصراف» or Esc closes without saving.

## Screens
| Screen | Breakpoint | Brand | Figma frame | Notes |
|---|---|---|---|---|
| Edit address | Desktop | B2E | `order/address-edit/desktop` (15:97) | `overlay` + `dialog`; content swapped in via the slot |

## States
| Screen | State | Figma frame |
|---|---|---|
| Edit address | Filled (default) | 15:97 |
| Edit address | Field error, saving, mobile drawer | not designed in the dry run |

## Components used
| Component | Variants / properties used | Notes |
|---|---|---|
| `overlay` | default | Resized to the screen |
| `dialog` | `title`, `description`, `content` = `content/address-form` | Footer and close button kept |
| `field` | `control=select` (province), `control=textarea` (address); nested `label` with `isRequired`; nested control `state=filled` | Values shown in `text.default` because the control is `filled` |

## Component requests
None.

## Decisions
| Decision | Why (evidence) |
|---|---|
| Dialog on desktop, drawer on mobile | DS-32 |
| Address content built as a local `content/address-form` component and swapped into the dialog slot | DS-33 slot pattern |

## Open questions
- [ ] Should saving also offer to update open orders that are not yet shipped?

## Audit
`audit-design.js` on the sandbox page: 0 unbound colours, 0 unstyled text, 0 non-library instances, 0 slots left, 0 warnings. Checked in B2E Desktop.
