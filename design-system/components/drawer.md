# drawer

> Layer: Core · Status: draft · Figma: [DKB Components › drawer](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=46-606) · Code: `Drawer` (shadcn `drawer`, vaul)

## Purpose
Bottom sheet for mobile: choices, short forms, details and confirmations that would be a `dialog` on desktop (DS-32): delivery slot, address picker, quantity, filters.

## Anatomy
`handle` · `header` (centred `title`, `description`) · `body` with `content` (slot) · `footer` (stacked full-width `action`, `cancel`). Over an `overlay`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `title`, `description` | text | | «انتخاب زمان تحویل», … | |
| `showDescription`, `showFooter`, `showHandle` | boolean | | on | |
| `content` | instance swap | | `slot` | |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel | width | full screen width (360 sample) |
| panel | fill / border / radius / shadow | `bg.default` / `border.default` top only / `radius.dialog` top corners / `shadow.dialog` |
| handle | size / fill / radius | 100×8 fixed / `bg.muted` / `radius.full` |
| header | padding / gap | `space.16` / `space.6` |
| body / footer | padding | `space.16`; footer gap `space.8` |

## States
None.

## Behaviour and RTL
Max height 80% of the screen; content scrolls, footer stays visible above the home indicator (safe area). Swipe down, tap the overlay or Esc to close. Header is centred, body text right-aligned.

## Accessibility
`role="dialog"`, `aria-modal`, labelled by the title. Focus moves into it and back to the trigger.

## Content
As `dialog`.

## Changelog
- 0.5.0 — created.
