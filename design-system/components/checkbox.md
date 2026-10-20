# checkbox

> Layer: Core · Status: draft · Figma: [DKB Components › Checkbox](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=15-354) · Code: `Checkbox` in `@digikala/ui-kit`

## Purpose
Turns an option on or off when the choice is applied with a form (submit, continue), or picks several options from a list. **Don't use it** for a setting that takes effect immediately (switch) or for one choice out of several (radio).

## Anatomy
RTL: `control` › `box` (right) · `content` › `label`, `description` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `checked` | variant | `false`, `true`, `indeterminate` | `false` | `indeterminate`: some items of a group are chosen ("select all") |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `disabled`, `error` | `default` | |
| `label` / `showLabel` | text / boolean | | «گزینه» / on | Hide the label only inside tables where the column header labels it |
| `description` / `showDescription` | text / boolean | | off | One line under the label |

## Tokens
| Part | Token |
|---|---|
| box | `size.16`, radius `radius.sm`, inside a `size.24`-high wrapper so it centres on the first text line |
| unchecked | fill `bg.default` (hover `bg.hover`), border `border.control` 1 px |
| checked / indeterminate | fill `bg.primary` (hover `bg.primary-hover`), icon `check` / `minus` 12 px in `text.on-primary` |
| focus | `border.focus` (unchecked) + `shadow.focus-ring` |
| error | `border.destructive` + `shadow.focus-ring-destructive` |
| disabled | same look as the enabled state (checked or not), whole control and label at `opacity.disabled` (50%, DS-23) |
| gap · label · description | `space.8` · `body`, `text.default` · `body-sm`, `text.muted` |

## Behaviour and RTL
- The whole row (box and label) is clickable.
- Groups stack vertically with `space.12` between items and a group label above (`label` style).
- Required consent («شرایط را می‌پذیرم») shows `error` if the form is submitted without it.

## Accessibility
Native checkbox semantics; `aria-checked="mixed"` for indeterminate. The box outline is `border.control` (4.74:1, DS-21) because the shape is the only state cue.

## Content
Label states the choice positively: «ارسال فاکتور رسمی», not «عدم ارسال …».

## Changelog
- 0.3.0 — created (15 variants).
