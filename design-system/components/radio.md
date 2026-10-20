# radio

> Layer: Core · Status: draft · Figma: [DKB Components › Radio](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=16-306) · Code: `RadioGroup` / `RadioGroupItem` in `@digikala/ui-kit`

## Purpose
Picks exactly one option from a small visible group (2–4 options), e.g. «حقیقی / حقوقی», delivery type. **Don't use it** for 5+ options (select) or for on/off (switch, checkbox).

## Anatomy
RTL: `control` › `circle` › `dot` (right) · `content` › `label`, `description` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `checked` | variant | `false`, `true` | `false` | |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `disabled`, `error` | `default` | `error`: the group is required and nothing is chosen |
| `label` | text | | «گزینه» | |
| `description` / `showDescription` | text / boolean | | off | |

## Tokens
| Part | Token |
|---|---|
| circle | `size.16`, `radius.full`, in a `size.24` wrapper |
| unchecked | fill `bg.default` (hover `bg.hover`), border `border.control` |
| checked | border `border.primary`, dot 8 px `bg.primary` (hover `bg.primary-hover`) |
| focus · error | `border.focus` + `shadow.focus-ring` · `border.destructive` + `shadow.focus-ring-destructive` |
| disabled | same look as the enabled state, whole control and label at `opacity.disabled` (50%, DS-23) |
| text | `body` `text.default`; description `body-sm` `text.muted`; gap `space.8` |

## Behaviour and RTL
- Always in a group with a visible group label. Arrow keys move the choice inside the group.
- Pre-select a sensible default when one exists; otherwise nothing is selected and the group can show `error` on submit.
- For rich options (cards with price, delivery promise), use a selectable card (later batch) with the same radio inside.

## Accessibility
`role="radiogroup"` with a label; boundary `border.control` (DS-21).

## Content
Options are short, parallel and mutually exclusive.

## Changelog
- 0.3.0 — created (10 variants).
