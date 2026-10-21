# sheet

> Layer: Core · Status: draft · Figma: [DKB Components › sheet](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=45-695) · Code: `Sheet` (shadcn `sheet`)

## Purpose
A panel sliding in from a screen edge for secondary content without leaving the page: filters, cart preview, order details, help. **Don't use it** for short confirmations (`alert-dialog`). On mobile, bottom panels are `drawer`.

## Anatomy
`close` (top-left) · `header` (`title`, `description`) · `body` with `content` (slot, fills the height) · `footer` (stacked full-width: `action` on top, `cancel` below; DS-46).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `side` | variant | `right`, `left`, `top`, `bottom` | `right` | `right` is the start edge in RTL and the default |
| `title`, `description` | text | | «فیلترها», … | |
| `showDescription`, `showFooter`, `showClose` | boolean | | on | |
| `content` | instance swap | | `slot` | |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel (right/left) | width | `width.sheet` (384), full height (720 sample, fixed) |
| panel (top/bottom) | width | full width (720 sample) |
| panel | fill / border / shadow | `bg.default` / `border.default` on the inner edge only / `shadow.dialog` |
| header | padding / gap | `space.16` (`space.24` on the close-button side) / `space.6` |
| body / footer | padding | `space.16`; footer gap `space.8` |

## States
None.

## Behaviour and RTL
Slides in from its edge (`motion.duration.slow` in, `normal` out), over an `overlay`; Esc, `close` or overlay click closes. Focus trapped while open. `z-index.dialog`.

## Accessibility
`role="dialog"`, `aria-modal`, labelled by the title.

## Content
Title names the panel; footer buttons apply or reset.

## Changelog
- 0.5.0 — created (4 variants).
