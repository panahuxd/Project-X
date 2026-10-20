# input-group

> Layer: Core · Status: draft · Figma: [DKB Components › Input group](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=31-421) · Code: `InputGroup`, `InputGroupAddon`, `InputGroupInput`, `InputGroupButton` (shadcn `input-group`)

## Purpose
An input with text addons, an icon, or an inline button inside one border: amounts with «تومان», URLs with a prefix, search with a button, password with show/hide. **Don't use it** when a plain `input` with an icon is enough.

## Anatomy
RTL, right to left: `addonStart` (text) · `iconStart` · `value` · `button` (ghost `icon-button` sm) · `addonEnd` (text).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant (Figma only) | `default`, `focus`, `error`, `disabled` | `default` | Focus is on the whole group (`:has(:focus-visible)`) |
| `value` | text | | «۲۵٬۰۰۰٬۰۰۰» | |
| `addonStart` / `showAddonStart` | text / boolean | | «مبلغ» / off | |
| `addonEnd` / `showAddonEnd` | text / boolean | | «تومان» / on | |
| `showIconStart` / `iconStart` | boolean / swap | | off / `search` | |
| `showButton` | boolean | | off | Nested `icon-button` is exposed (swap its icon) |

## Tokens
Box as `input` (`control.height-*`, `space.12`, `space.8`, `radius.control`, `bg.default`, `border.input`). Addons: `body` (`body-sm` / `body-lg` by size), `text.muted`. Button: `icon-button` ghost sm.

## States
Same as `input`: focus `border.focus` + `shadow.focus-ring`; error `border.destructive` + `shadow.focus-ring-destructive`; disabled `opacity.disabled`.

## Behaviour and RTL
Amounts: digits grouped with «٬», Persian digits, unit after the number (on the left in RTL). The inline button doesn't take focus styling of its own; the group shows the ring.

## Accessibility
Addon text is part of the accessible description (`aria-describedby`) or visually hidden label; the button has an `aria-label` («نمایش رمز»).

## Content
Units in Persian: «تومان», «عدد», «کیلوگرم».

## Changelog
- 0.4.0 — created (12 variants).
