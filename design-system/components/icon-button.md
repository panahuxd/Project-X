# icon-button

> Layer: Core · Status: draft · Figma: [DKB Components › Icon button](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=4-227) · Code: `Button size="icon"` in `@digikala/ui-kit`

## Purpose
A square button with only an icon, for compact, well-known actions: close, remove, more, quantity +/−. **Don't use it** when the action isn't obvious from the icon; use a button with a label.

## Anatomy
`icon` centred in a square container.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `variant` | variant | `primary`, `secondary`, `outline`, `ghost`, `destructive` | `primary` | No `link` |
| `size` | variant | `sm`, `md`, `lg` | `md` | Width = height = `control.height-*` |
| `state` | variant (Figma only) | `default`, `hover`, `pressed`, `focus`, `disabled` | `default` | |
| `icon` | icon swap | any `icon/*` | `icon/plus` | |
| `aria-label` | code only | text | — | **Required.** Persian name of the action, e.g. «بستن» |

## Tokens
Same as `button` for fills, text (icon stroke), border, focus and disabled. Size: `control.height-*` for width and height; icon `icon.size.sm` (sm, md) / `icon.size.md` (lg); radius `radius.control`.

## States
As `button` (no loading state).

## Behaviour and RTL
Direction icons mirror in RTL (see button). Show a tooltip with the action name on desktop hover.

## Accessibility
Must have `aria-label`. Mobile size `md` = 40 px touch target.

## Content
Tooltip and `aria-label` use the verb: «حذف از سبد», «بستن».

## Changelog
- 0.3.0 — created (75 variants).
