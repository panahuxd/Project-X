# action-bar

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › action-bar](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=5-147) · Code: sticky bottom bar

## Purpose
The sticky bottom bar on mobile checkout steps and multi-step forms (DS-36 D4): keeps the payable amount and the main action in reach. It replaces the bottom nav on those pages.

## Anatomy
Full width, white, border and `shadow.sticky-bottom` (cast upward, DS-42) on top. Padding `space.12` top and bottom, `layout.page-margin` (16 on Mobile) at the sides; the component is set to the `responsive` **Mobile** mode, so it shows its real mobile values.
- `type=amount` (77 high): amount group (label + amount, right-aligned, hugs its content) pinned at the right edge; `action` button (`lg`, 48 on Mobile) **fills the rest** on the left, gap `space.16` (DS-46: main action closes the line).
- `type=button` (73 high): one full-width `action` button.
- Code: add `padding-bottom: calc(12px + env(safe-area-inset-bottom))` so the bar clears the home indicator.

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `amount`, `button` | `amount` | |
| `amountLabel` | text | | «مبلغ قابل پرداخت» | |
| `amount` | text | | «۱۲٬۴۵۰٬۰۰۰ تومان» | `numeric-lg` |
| exposed | instance | `action` (button, lg) | | Label, loading, disabled |

## Tokens
| Part | Property | Token |
|---|---|---|
| bar | fill / border / effect | `bg.surface` / `border.default` top / `shadow.sticky-bottom` |
| bar | padding / gap | sides `layout.page-margin`, top/bottom `space.12` (+ safe area in code) / `space.16` |
| action | size / width | `button` `lg` (`control.height-lg`) / fill (amount) or full width (button) |
| amount | style | label `body-sm` `text.muted`, value `numeric-lg` |

## Behaviour and RTL
Sticky at the bottom above the safe area; content scrolls behind it (add bottom padding equal to its height). Disable the button until the step is valid and explain why above the bar, not in a tooltip.

## Accessibility
The amount is read before the button; the button names the action («پرداخت», «ادامه»).

## Changelog
- 0.10.0 — created (2 variants).
- 0.13.2 — Mobile mode on the component (margin 16, button 48); in `type=amount` the button fills the space next to the amount, which is pinned right.
