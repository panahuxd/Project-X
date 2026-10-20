# switch

> Layer: Core · Status: draft · Figma: [DKB Components › Switch](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=17-298) · Code: `Switch` in `@digikala/ui-kit`

## Purpose
Turns a setting on or off **with immediate effect** (no save button): notifications, "show prices with VAT". **Don't use it** inside a form that is submitted later (checkbox).

## Anatomy
RTL: `control` › `track` › `thumb` (right) · `content` › `label`, `description` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `checked` | variant | `false`, `true` | `false` | |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `disabled` | `default` | |
| `label` / `showLabel` | text / boolean | | «گزینه» / on | |
| `description` / `showDescription` | text / boolean | | off | |

## Tokens
| Part | Token |
|---|---|
| track | `size.36` × `size.20`, `radius.full`, padding `space.2` |
| off | fill `bg.muted-hover`, border `border.control` (focus: `border.focus`) |
| on | fill `bg.primary` (hover `bg.primary-hover`), no border |
| thumb | `size.16`, `bg.default`, `shadow.card` |
| focus | `shadow.focus-ring` on the track |
| disabled | same look as the enabled state (on stays `bg.primary`), whole control and label at `opacity.disabled` (50%, DS-23) |

## Behaviour and RTL
- **RTL direction:** off = thumb on the right; on = thumb moves to the left.
- The change applies at once; if it can fail (network), revert the switch and show a toast.
- In settings lists, the row label sits at the start (right) and the switch at the end (left): use a list row (later batch) with `showLabel` off here.

## Accessibility
`role="switch"` with `aria-checked`. The off track has a `border.control` outline (DS-21) so its shape passes 3:1.

## Content
Label names the setting, not the action: «اعلان پیامکی», not «فعال کردن اعلان».

## Changelog
- 0.3.0 — created (8 variants).
