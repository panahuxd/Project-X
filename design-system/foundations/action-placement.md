# Action placement

> Status: rule (DS-46, approved 2026-10-21). Applies to every group of buttons: card footers, dialogs, alert dialogs, drawers, sheets, popovers, empty states, result pages, forms, page headers, toolbars and the mobile action bar.

**One rule: the main action closes the reading line.** In RTL the line ends on the left, so the main action is the last button at the far left. When buttons stack, the main action is on top.

## 1. Side by side (row)

- The group aligns to the **end** of its container (left in RTL).
- Order, reading right → left: secondary, then **main action last (far left)**. Gap `space.8`.
- DOM and focus order follow the reading order: secondary first, main action second (shadcn `DialogFooter`: cancel, then action).
- Code: `flex justify-end gap-2` inside a `dir="rtl"` container, buttons in the order secondary → main. Don't use `flex-row-reverse` to fake RTL.

```
RTL row:   [ main ] [ secondary ]                 ← text and title start here →
           └ end (left)                                       start (right) ┘
```

## 2. Stacked (column)

Used in `drawer` and `sheet`, on mobile when labels don't fit side by side, and whenever there are 3 or more actions.

- Every button is full width (`FILL`), gap `space.8`.
- **Main action on top**, closest to the content; cancel / secondary at the bottom (shadcn `flex-col-reverse` on small screens).

## 3. A third, separate action

A tertiary action that is a different kind of choice (delete inside an edit dialog, reset in filters, «بعداً» on an upsell) goes to the **opposite edge (right, the start)** as `ghost` or `link`, never next to the main action. In a stacked group it goes last, as `ghost`.

## 4. One main action per container

- Exactly one `primary` (or `destructive`) button per card, dialog, sheet, drawer, page section or bar. Everything else is `outline`, `secondary`, `ghost` or `link`.
- A destructive confirmation puts the `destructive` variant in the main slot; focus starts on cancel (`alert-dialog`).
- Label the main action with what it does («ذخیره آدرس», «پرداخت آنلاین»), not «تأیید» when a verb is available.

## 5. Centred contexts

`empty`, result pages (T9) and auth cards: the group is centred, the order stays the same (main on the left of the secondary).

## 6. Mobile (< 1024)

| Situation | Layout |
|---|---|
| Overlays: `drawer`, `sheet`; `alert-dialog` on small screens | Stacked, full width, main on top (§2) |
| In-page footer with **one** button (card section, form) | Full width |
| In-page footer with **two short** buttons | Equal-width row (`FILL` each), main on the left |
| Any label wraps, or 3+ buttons | Stacked, main on top |
| Checkout, forms and tasks | The main action lives in the sticky `action-bar` (amount on the right, button on the left), not in the page |

## 7. Where each component stands

| Component | Placement | Status |
|---|---|---|
| `dialog`, `alert-dialog` | Row, end-aligned, action far left | Matches |
| `drawer`, `sheet` | Stacked, action on top | Matches |
| `card` footer | Row, end-aligned, `primary` far left | Fixed in 0.13.0 (was start-aligned, primary on the right) |
| `empty` actions | Centred row, `primary` on the left | Fixed in 0.13.0 (primary was on the right) |
| `action-bar` | Amount right, button left | Matches |

## 8. Sources

| Guideline | Source | How it applies |
|---|---|---|
| Either order works; consistency across the product is what matters | [NN/g: OK–Cancel or Cancel–OK?](https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/) | One order everywhere instead of the two DKB had |
| Dialog footers end-aligned, action last; stacked reverse on small screens | [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog) | DKB Core follows shadcn, mirrored for RTL |
| Dialog actions sit at the end of the line, confirming action last | [Material 3: dialogs](https://m3.material.io/components/dialogs/guidelines) | Same convention, mirrored for RTL |
| Primary action at the end of the button group | [Shopify Polaris](https://polaris.shopify.com/) | Merchant-admin convention (UX-GROUNDING reference) |
| RTL mirrors the layout, not the meaning | [Material: bidirectionality](https://m2.material.io/design/usability/bidirectionality.html) | End = left in RTL |
