# textarea

> Layer: Core · Status: draft · Figma: [DKB Components › Textarea](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=30-332) · Code: `Textarea` (shadcn `textarea`)

## Purpose
Multi-line text: notes on an order, addresses, RFQ descriptions, feedback. **Don't use it** for one-line values (`input`).

## Anatomy
`value` inside a box that grows with content (min height 80).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `filled`, `error`, `disabled`, `read-only` | `default` | |
| `value` | text | | «توضیحات خود را بنویسید» | |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | min height | `space.80` |
| root | padding | `space.12` × `space.8` |
| root | radius / fill / border | `radius.control` / `bg.default` / `border.input` |
| value | style | `body` |

## States
Same as `input`: hover `border.strong`; focus `border.focus` + `shadow.focus-ring`; error `border.destructive` + `shadow.focus-ring-destructive`; disabled `opacity.disabled`; read-only `bg.muted` + `border.default`.

## Behaviour and RTL
Grows with content up to about 8 lines, then scrolls (`field-sizing: content` + `max-height`). Text right-aligned; mixed Persian/Latin text uses `dir="auto"`. If there is a limit, show a counter in the `field` helper: «۱۲۰ / ۵۰۰».

## Accessibility
As `input`.

## Content
Placeholder suggests what to write: «مثلاً زمان مناسب برای تحویل».

## Changelog
- 0.4.0 — created (7 variants).
