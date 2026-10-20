# card

> Layer: Core · Status: draft · Figma: [DKB Components › card](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=56-1418) · Code: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` (shadcn `card`)

## Purpose
Groups related content and actions into one block: dashboard widgets, account summaries, order summary, settings sections. Not for a single line of info (use `item`) or for clickable product tiles (product card, later).

## Anatomy
`header` (`titles`: title, description · `action` on the left in RTL) · `content` (slot) · `footer` (buttons from the right).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `md`, `sm` | `md` | sm = shadcn `size="sm"` |
| `title`, `description` | text | | | |
| `showDescription`, `showAction`, `showContent`, `showFooter` | boolean | | on, off, on, on | |
| `content` | instance swap | | `slot` | |
| `action`, `primary`, `secondary` | nested (exposed) | | | |

## Tokens
| Part | Property | Token |
|---|---|---|
| card | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.card` (12; shadcn 14) / `shadow.card` |
| card | padding / gap | md `space.24`, sm `space.16` (top/bottom, sides of each part, gap between parts) |
| title / description | style | `label-lg` `text.default` / `body` `text.muted` |
| footer | gap | `space.8` |

## Behaviour and RTL
Width follows the grid. Whole-card links: make the title the link and stretch its hit area; don't nest buttons inside a link.

## Accessibility
Title is a heading at the right level for the page (`h2`/`h3`).

## Changelog
- 0.6.0 — created (2 variants).
