# date-picker

> Layer: Core · Status: draft · Figma: [DKB Components › date-picker](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=75-3138) · Code: `Popover` + `Calendar` (shadcn date picker pattern)

## Purpose
Pick a Jalali date in a form: delivery date, report range, cheque due date. DS-35.

## Anatomy
`trigger` (`input` with a calendar icon, value like «۱۵ مهر ۱۴۰۵») · `state=open`: `popover` with a `calendar` below the trigger, aligned right · `state=mobile`: the same calendar in a `drawer` with confirm and cancel.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `closed`, `open`, `mobile` | `closed` | |
| `trigger`, `calendar`, `drawer` | nested (exposed) | | | Set value, month, selected day |

## Tokens
As `input`, `popover` (`bg.surface`, `border.default`, `radius.md`, `shadow.dropdown`) and `calendar`; gap `space.4`.

## Behaviour and RTL
Typing a date in the input also works (`۱۴۰۵/۰۷/۱۵`, Persian or Latin digits). Range pickers show two months side by side on desktop (current on the right). Birth dates may use three selects (year, month, day) instead.

## Accessibility
Trigger `aria-haspopup="dialog"`; focus moves to the selected day when opened and returns on close.

## Content
Display format «۱۵ مهر ۱۴۰۵»; in tables `۱۴۰۵/۰۷/۱۵`.

## Changelog
- 0.8.0 — created (3 variants).
