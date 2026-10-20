# toggle-group

> Layer: Core · Status: draft · Figma: [DKB Components › Toggle group](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=34-519) · Code: `ToggleGroup`, `ToggleGroupItem` (shadcn `toggle-group`)

## Purpose
A set of `toggle`s where one (`type="single"`) or several (`type="multiple"`) can be on: view switcher, text alignment, quick filters. **Don't use it** for page navigation (`tabs`).

## Anatomy
A row of `item 1…n` (nested `toggle` instances, exposed). The sample has three items, the middle one `on`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `variant` | variant | `default`, `outline` | `default` | Passed to every item |
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| items | nested | | | Set each item's `state`, icon and label on the instance; hide items you don't need |

## Tokens
| Part | Property | Token |
|---|---|---|
| root (default) | gap | `space.4` |
| root (outline) | gap | −1 (borders overlap, fixed geometry); outer corners `radius.control`, inner `radius.none` |
| items | | as `toggle` |

## States
Per item, as `toggle`. Disable the whole group by setting every item to `disabled`.

## Behaviour and RTL
Items run right to left; arrow keys move between items (roving focus) in visual order.

## Accessibility
`role="group"` with a label (single type: `radiogroup` semantics). Each item `aria-pressed` / `aria-checked`.

## Content
Short labels or icons; all items the same kind.

## Changelog
- 0.4.0 — created (6 variants).
