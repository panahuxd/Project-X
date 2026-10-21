# input

> Layer: Core · Status: draft · Figma: [DKB Components › Input](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=29-443) · Code: `Input` (shadcn `input`)

## Purpose
Single-line text entry. On its own for search boxes and inline edits; inside `field` when it needs a label and helper text. **Don't use it** for long text (`textarea`), choices (`select`, `radio`), codes (`input-otp`) or values with a fixed unit or button (`input-group`).

## Anatomy
RTL, right to left: `iconStart` (optional) · `value` · `iconEnd` (optional, e.g. clear).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `filled`, `error`, `disabled`, `read-only` | `default` | In code: CSS states plus `aria-invalid`, `disabled`, `readOnly` |
| `value` | text | | «متن را وارد کنید» | Placeholder in `text.muted`; typed value in `text.default` |
| `showIconStart` / `iconStart` | boolean / swap | | off / `search` | |
| `showIconEnd` / `iconEnd` | boolean / swap | | off / `x` | |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | height | `control.height-sm/md/lg` |
| root | padding / gap | `space.12` / `space.8` |
| root | radius | `radius.control` |
| root | fill / border | `bg.default` / `border.input` (1px, `border-width.default`) |
| value | style | `body-sm` (sm), `body` (md), `body-lg` (lg) |
| icons | size / colour | `icon.size.sm` (sm, md), `icon.size.md` (lg) / `text.muted` |

## States
| State | What changes |
|---|---|
| hover | Border `border.strong` |
| focus | Border `border.focus` + `shadow.focus-ring` (`ring.default`) — same as shadcn (DS-22) |
| filled | Value colour `text.default` |
| error | Border `border.destructive` + `shadow.focus-ring-destructive` |
| disabled | Whole control at `opacity.disabled` (DS-28) |
| read-only | Fill `bg.muted`, border `border.default`; still focusable and selectable |

## Behaviour and RTL
- Text is right-aligned. Numbers, phone numbers, emails, URLs and IBANs are LTR inside the RTL box (`dir="ltr"` on the input, text still aligned right).
- Use the right `type` / `inputMode` (`tel`, `numeric`, `email`) so mobile keyboards fit.
- Show Persian digits; accept Persian and Latin digits and normalise on input.

## Accessibility
Needs a label (`field`, `label`, or `aria-label` for search). Error: `aria-invalid` + `aria-describedby` to the error text. Placeholder is never the label.
- The `border.input` stroke is 1.48:1, so it must not be the only thing that identifies the field (DS-20, DS-39). Use it inside `field` (visible label) or on a `bg.muted` surface. When the input stands alone with no label or context (header search, inline edit in a table, quantity), override the instance stroke to `border.control` (3:1). The same applies to `textarea`, `select`, `native-select` and `input-group`.

## Content
Placeholder gives an example or format, not the label: «۰۹۱۲۳۴۵۶۷۸۹».

## Changelog
- 0.4.0 — created (21 variants). Atom split out of `input-field` (DS-26).
