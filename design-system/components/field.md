# field

> Layer: Core · Status: draft · Figma: [DKB Components › Field](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=30-553) · Code: `Field`, `FieldLabel`, `FieldDescription`, `FieldError` (shadcn `field`)

## Purpose
The standard form row: `label` + control + helper or error text. Use it for every labelled input, textarea and select in forms. Replaces the old `input-field` (DS-26).

## Anatomy
Top to bottom: `label` (nested `label` instance) · `control` (nested `input`, `textarea` or `select` instance) · `helper`.
Both nested instances are exposed, so their own properties (label text, `isRequired`, value, icons, size) are set on the field instance.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `control` | variant | `input`, `textarea`, `select` | `input` | In code: any control as a child |
| `state` | variant | `default`, `error`, `disabled` | `default` | Hover/focus/filled live on the nested control |
| `helperText` | text | | «متن راهنما» | Becomes the error message in `error` |
| `showHelper` | boolean | | on | |
| `showLabel` | boolean | | on | Hide only when the context names the field (then set `aria-label`) |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | gap | `space.6` |
| helper | style / colour | `body-sm` / `text.muted`; `text.destructive` in error |

## States
| State | What changes |
|---|---|
| error | Control in its `error` state; helper in `text.destructive` with the error message |
| disabled | Whole field at `opacity.disabled` (DS-28) |

## Behaviour and RTL
Validate on blur and on submit, not on every keystroke. Keep the helper slot when switching to error, so the layout doesn't jump. For a horizontal layout (label beside control, admin forms on desktop) place `label` and the control in a row; this is a layout, not a variant.

## Accessibility
`label` linked to the control; helper and error linked with `aria-describedby`; error control gets `aria-invalid`. Errors are announced (`role="alert"` on the error text on submit).

## Content
Helper: one short sentence about format or why it's needed. Error: what's wrong and how to fix it: «شماره موبایل باید ۱۱ رقم باشد».

## Changelog
- 0.4.0 — created (9 variants); replaces `input-field`.
