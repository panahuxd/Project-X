# select

> Layer: Core · Status: draft · Figma: [DKB Components › Select](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=6-200) · Code: `Select` in `@digikala/ui-kit`

## Purpose
Picks one option from a list of 5 or more. **Don't use it** for 2–4 options that fit on screen (use radio) or for multiple choices (checkbox group or multi-select, later).

## Anatomy
Same stack as `input-field`: `labelRow`, `trigger`, `helper`. Trigger in RTL: `iconStart` (right, optional) · `value` · `chevron` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant (Figma only) | `default`, `hover`, `open`, `filled`, `error`, `disabled` | `default` | `open` = list is showing (list is `dropdown-menu`, batch 2) |
| `label`, `value`, `helperText` | text | | | `value` shows «انتخاب کنید» until something is chosen |
| `showLabel`, `isRequired`, `showHelper` | boolean | | on, off, off | |
| `showIconStart` / `iconStart` | boolean / swap | | off | |

## Tokens
Same as `input-field`: `open` = focus (`border.focus` + `shadow.focus-ring`), `error` = `border.destructive` + `shadow.focus-ring-destructive`. Chevron: `icon.size.*`, `text.muted`.

## States
As `input-field`; `open` uses the focus border.

## Behaviour and RTL
- The list opens below the trigger, aligned to its right edge, same width or wider.
- Long lists (more than about 10 options, e.g. provinces and cities) get a search box in the list.
- Keyboard: Enter / Space opens, arrows move, typing jumps to a match, Esc closes.

## Accessibility
Native-select semantics (`role="combobox"`, `aria-expanded`), label linked; error as in input-field.

## Content
Placeholder «انتخاب کنید» or a specific one: «استان را انتخاب کنید». Options sorted in a meaningful order (alphabetical for places).

## Changelog
- 0.3.0 — created (18 variants).
