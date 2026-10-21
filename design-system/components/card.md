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
| `edge` | variant | `inset`, `full` | `inset` | `full` = mobile section block: full screen width, no radius, no side borders, no shadow (DS-45) |
| `title`, `description` | text | | | |
| `showDescription`, `showAction`, `showContent`, `showFooter` | boolean | | on, off, on, on | |
| `content` | instance swap | | `slot` | |
| `action`, `primary`, `secondary` | nested (exposed) | | | |

## Tokens
| Part | Property | Token |
|---|---|---|
| card (`edge=inset`) | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.card` (12; shadcn 14) / `shadow.card` |
| card (`edge=full`) | fill / border / radius / shadow | `bg.surface` / `border.default` top and bottom only / `radius.none` / none |
| card | padding / gap | md `space.24`, sm `space.16` (top/bottom, sides of each part, gap between parts) |
| title / description | style | `label-lg` `text.default` / `body` `text.muted` |
| footer | gap | `space.8` |

## Behaviour and RTL
**Which edge (DS-45):**
- Desktop: always `edge=inset`, on the 12-column grid.
- Mobile (< 1024): page sections are `edge=full` with `size=sm` (16 padding), stacked with `space.8` of `bg.subtle` between them. A card that has rounded corners or side borders must never touch the screen edge.
- An `edge=inset` card is still right on mobile when it sits **inside** something with padding (a selectable option, a card in a drawer or dialog, a card in a horizontal carousel); it then keeps the page margin (`layout.page-margin`) or the container padding on both sides.
- In code: `rounded-none border-x-0 shadow-none` below `lg` (e.g. `max-lg:rounded-none max-lg:border-x-0 max-lg:shadow-none`).

Width follows the grid. Whole-card links: make the title the link and stretch its hit area; don't nest buttons inside a link.

## Accessibility
Title is a heading at the right level for the page (`h2`/`h3`).

## Changelog
- 0.6.0 — created (2 variants).
- 0.12.0 — `edge` variant (`inset`, `full`) for mobile full-width sections (DS-45); 4 variants.
