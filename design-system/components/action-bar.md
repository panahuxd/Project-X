# action-bar

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › action-bar](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=5-147) · Code: sticky bottom bar

## Purpose
The sticky bottom bar on mobile checkout steps and multi-step forms (DS-36 D4): keeps the payable amount and the main action in reach. It replaces the bottom nav on those pages.

## Anatomy
Full width, white, border and `shadow.sticky` on top, padding `layout.page-margin` × `space.12`.
- `type=amount`: amount group (label + amount) on the right, `action` button on the left.
- `type=button`: one full-width `action` button.

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
| bar | fill / border / effect | `bg.surface` / `border.default` top / `shadow.sticky` |
| bar | padding / gap | `layout.page-margin`, `space.12` / `space.16` |
| amount | style | label `body-sm` `text.muted`, value `numeric-lg` |

## Behaviour and RTL
Sticky at the bottom above the safe area; content scrolls behind it (add bottom padding equal to its height). Disable the button until the step is valid and explain why above the bar, not in a tooltip.

## Accessibility
The amount is read before the button; the button names the action («پرداخت», «ادامه»).

## Changelog
- 0.10.0 — created (2 variants).
