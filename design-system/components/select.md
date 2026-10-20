# select

> Layer: Core · Status: draft · Figma: [DKB Components › Select](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=6-200) · Code: `Select`, `SelectTrigger`, `SelectContent`, `SelectItem` (shadcn `select`)

## Purpose
Picks one option from a list of 5 or more. **Don't use it** for 2–4 options that fit on screen (`radio`), for multiple choices (checkbox group or multi-select, later), for long searchable lists (`combobox`, batch 2) or where the OS picker is better (`native-select`).
This is the trigger atom (DS-26). For a labelled select with helper text use `field` with `control=select`.

## Anatomy
RTL, right to left: `iconStart` (optional) · `value` · `chevron` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant (Figma only) | `default`, `hover`, `open`, `filled`, `error`, `disabled` | `default` | `open` = list is showing (list is `select` content / `dropdown-menu`, batch 2) |
| `value` | text | | «انتخاب کنید» | Placeholder in `text.muted` until something is chosen |
| `showIconStart` / `iconStart` | boolean / swap | | off / `circle` | |

## Tokens
Same box as `input`: `control.height-*`, `space.12` / `space.8`, `radius.control`, `bg.default`, `border.input`; value `body` (`body-sm` / `body-lg`). Chevron: `icon.size.*`, `text.muted`.

## States
| State | What changes |
|---|---|
| hover | Border `border.strong` |
| open | Border `border.focus` + `shadow.focus-ring` (as focus) |
| filled | Value colour `text.default` |
| error | Border `border.destructive` + `shadow.focus-ring-destructive` |
| disabled | Whole control at `opacity.disabled` (DS-28) |

## Behaviour and RTL
- The list opens below the trigger, aligned to its right edge, same width or wider.
- Long lists (more than about 10 options, e.g. provinces and cities) use `combobox` instead.
- Keyboard: Enter / Space opens, arrows move, typing jumps to a match, Esc closes.

## Accessibility
`role="combobox"`, `aria-expanded`, linked label (`field` or `aria-label`); error as in `input`.

## Content
Placeholder «انتخاب کنید» or a specific one: «استان را انتخاب کنید». Options sorted in a meaningful order (alphabetical for places).

## Changelog
- 0.4.0 — now an atom: label and helper removed (use `field`); disabled uses `opacity.disabled`.
- 0.3.0 — created (18 variants).
