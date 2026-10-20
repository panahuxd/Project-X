# slider

> Layer: Core · Status: draft · Figma: [DKB Components › Slider](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=33-398) · Code: `Slider` (shadcn `slider`)

## Purpose
Choose a value or a range on a continuous scale: price range in filters, quantity tiers. Pair with inputs when exact values matter. **Don't use it** for a few discrete options (`toggle-group`, `radio`).

## Anatomy
`track` · `range` (filled part) · `thumb 1` (and `thumb 2` for range).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `single`, `range` | `single` | In code: one or two values |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `disabled` | `default` | |

## Tokens
| Part | Property | Token |
|---|---|---|
| track | fill / radius | `bg.muted` / `radius.full` (6px tall, fixed geometry) |
| range | fill | `bg.primary` (`bg.primary-hover` on hover) |
| thumb | size | `size.16` |
| thumb | fill / border / shadow | `bg.default` / `border.primary` / `shadow.card` |

## States
| State | What changes |
|---|---|
| hover | Range `bg.primary-hover` |
| focus | Thumb `border.focus` + `shadow.focus-ring` |
| disabled | Whole slider at `opacity.disabled` |

## Behaviour and RTL
- **Minimum is on the right** in RTL (`dir="rtl"`): the range fills from the right.
- Arrow keys move one step; Page Up/Down move 10 steps; Home/End jump to the ends.
- Show the current values next to the slider with Persian digits («از ۱۰۰٬۰۰۰ تا ۵۰۰٬۰۰۰ تومان»).

## Accessibility
Each thumb is `role="slider"` with `aria-valuetext` in Persian; range thumbs labelled «حداقل» / «حداکثر».

## Content
Units in the value text, not on the track.

## Changelog
- 0.4.0 — created (8 variants).
