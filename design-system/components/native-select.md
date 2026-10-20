# native-select

> Layer: Core · Status: draft · Figma: [DKB Components › Native select](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=33-361) · Code: `NativeSelect` (shadcn `native-select`)

## Purpose
The browser's own `<select>`, styled. Use on mobile web and in simple admin filters where the OS picker is better than a custom list. **Don't use it** when options need icons, search or descriptions (`select`, `combobox`).

## Anatomy
RTL, right to left: `value` · `chevron` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `error`, `disabled` | `default` | |
| `value` | text | | «تهران» | |

## Tokens
As `input`: `control.height-*`, `space.12` / `space.8`, `radius.control`, `bg.default`, `border.input`; value `body` (`body-sm` / `body-lg`), `text.default`; chevron `icon.size.sm` (`icon.size.md` for lg), `text.muted`.

## States
hover `border.strong`; focus `border.focus` + `shadow.focus-ring`; error `border.destructive` + `shadow.focus-ring-destructive`; disabled `opacity.disabled`.

## Behaviour and RTL
The option list is drawn by the OS, so it can't be styled. The chevron sits on the left in RTL.

## Accessibility
Native semantics; label it with `field` or `label`.

## Content
First option as a prompt when nothing is chosen: «انتخاب کنید».

## Changelog
- 0.4.0 — created (15 variants).
