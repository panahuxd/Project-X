# toggle

> Layer: Core · Status: draft · Figma: [DKB Components › Toggle](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=34-421) · Code: `Toggle` (shadcn `toggle`)

## Purpose
A two-state button: bold/italic, show favourites only, grid/list view. **Don't use it** for settings that take effect immediately in a list of settings (`switch`) or for form choices (`checkbox`).

## Anatomy
RTL, right to left: `icon` · `label` (hidden by default; icon-only is the common case).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `variant` | variant | `default`, `outline` | `default` | |
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant | `off`, `hover`, `on`, `focus`, `disabled` | `off` | In code: `pressed` + CSS states |
| `showIcon` / `icon` | boolean / swap | | on / `check` | |
| `showLabel` / `label` | boolean / text | | off / «برچسب» | |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | height / min width | `control.height-sm/md/lg` |
| root | padding / gap | `space.6` (sm), `space.8` (md), `space.12` (lg) / `space.6` |
| root | radius | `radius.control` |
| root | fill | none (default) · `bg.default` + `border.input` (outline) |
| label | style | `label-sm` / `label` / `label-lg` |
| icon | size | `icon.size.sm` (sm, md), `icon.size.md` (lg) |

## States
| State | What changes |
|---|---|
| hover | Fill `bg.hover`, label `text.muted` |
| on | Fill `bg.muted` |
| focus | Default: 3px outside stroke `ring.default` (no fill to hold a shadow); outline: `border.focus` + `shadow.focus-ring` |
| disabled | `opacity.disabled` |

## Behaviour and RTL
Space/Enter toggles. Icons that point (e.g. align-right) mirror in RTL; symmetric icons don't.

## Accessibility
`aria-pressed`. Icon-only toggles need `aria-label`.

## Content
Label (if shown) names the thing that gets switched on: «فقط موجود».

## Changelog
- 0.4.0 — created (30 variants).
