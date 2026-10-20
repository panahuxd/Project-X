# item

> Layer: Core · Status: draft · Figma: [DKB Components › item](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=57-1436) · Code: `Item`, `ItemMedia`, `ItemContent`, `ItemTitle`, `ItemDescription`, `ItemActions` (shadcn `item`)

## Purpose
A row for one thing with media, text and actions: an order, an address, an invoice, a seller, a notification, a saved list. Lists on mobile use items instead of tables.

## Anatomy
RTL, right to left: `media` (32 tile with icon) · `content` (title, description) · `action` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `variant` | variant | `default`, `outline`, `muted` | `default` | |
| `size` | variant | `md`, `sm` | `md` | |
| `title`, `description` | text | | | Description max 2 lines |
| `showDescription`, `showMedia`, `showActions` | boolean | | on | |
| `icon` | instance swap | | `package` | Swap media for an `avatar` in your design if needed |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | padding / gap | md `space.16`; sm `space.12` vertical and gap, `space.16` sides |
| root | radius | `radius.md` |
| root | fill / border | default none · outline `border.default` · muted `bg.muted` |
| media | size / fill / radius | `size.32` / `bg.muted` (`bg.surface` on muted) / `radius.sm` |
| title / description | style | `label` / `body` `text.muted` |

## Behaviour and RTL
Clickable items: the whole row is the link (hover `bg.hover`), with at most one secondary action. Lists: `space.8` between items, or separators.

## Changelog
- 0.6.0 — created (6 variants).
