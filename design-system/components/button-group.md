# button-group

> Layer: Core · Status: draft · Figma: [DKB Components › Button group](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=34-851) · Code: `ButtonGroup`, `ButtonGroupSeparator`, `ButtonGroupText` (shadcn `button-group`)

## Purpose
Related actions joined into one control: date presets («امروز / این هفته / این ماه»), split buttons, pagination steps. **Don't use it** for a choice that stays selected (`toggle-group`) or for unrelated actions (separate buttons with a gap).

## Anatomy
`button 1…n` (nested outline `button` instances, exposed), joined with overlapping borders.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `orientation` | variant | `horizontal`, `vertical` | `horizontal` | |
| `size` | variant | `sm`, `md`, `lg` | `md` | Passed to every button |
| buttons | nested | | | Set label, icons, variant and state on each button; hide extras |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | gap | −1 (borders overlap, fixed geometry) |
| first / last button | outer corners | `radius.control` |
| inner corners | | `radius.none` |
| buttons | | as `button` outline |

## States
Per button, as `button`. The focused button sits above its neighbours so its ring isn't covered.

## Behaviour and RTL
In RTL the first button is on the right and gets the right-hand rounded corners. Tab moves through buttons in order.

## Accessibility
`role="group"` with `aria-label` («بازه زمانی»).

## Content
Labels of the same kind and similar length.

## Changelog
- 0.4.0 — created (6 variants).
