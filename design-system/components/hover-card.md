# hover-card

> Layer: Core · Status: draft · Figma: [DKB Components › hover-card](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=43-596) · Code: `HoverCard` (shadcn `hover-card`)

## Purpose
Preview shown when a pointer rests on a link: seller, brand, product or user details. Desktop pointer only. The same information must be reachable by clicking the link.

## Anatomy
`header` (`title`, `description`) · optional `content` (slot).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `title`, `description` | text | | «فروشگاه نمونه», … | |
| `showContent` / `content` | boolean / instance swap | | off / `slot` | e.g. a rating row |

## Tokens
`width.hover-card` (256), padding and gap `space.16`, header gap `space.4`; `bg.surface`, `border.default`, `radius.md`, `shadow.dropdown`; title `label`, description `body` `text.muted`.

## States
None. Opens after 700 ms, closes 300 ms after the pointer leaves.

## Behaviour and RTL
Below the link, right-aligned. Not shown on touch devices. `z-index.popover`.

## Accessibility
Decorative preview; nothing in it may be needed to complete a task.

## Content
Summary facts only.

## Changelog
- 0.5.0 — created.
