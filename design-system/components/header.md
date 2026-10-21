# header

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › header](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=2-1183) · Code: site header (no shadcn equivalent; built from `input`, `button`, `icon-button`, `badge`, `navigation-menu-trigger`, `logo`)

## Purpose
The desktop page header of every storefront, account and checkout page: brand, search, the user's orders, account and cart, and (when the platform needs it) a category navigation row.

## Anatomy
Full width, white, border at the bottom; content 1312 centred (`layout.content-max-width`).
- `type=storefront` row 1 (64), reading order: `logo` · `categories` (rows=1 only) · `search` (fills) · `actions`: `orders`, `account`, divider, `cart` with `cart-count` badge.
- `rows=2` adds row 2 (44): `categories` (with chevron) and up to 4 `link-*` triggers.
- `categories` opens the `mega-menu` (`screen=desktop`) below the header, aligned to the right edge of the content width (DS-47).
- `type=focused` (checkout and task flows): `back` + `title` on the right, `logo` centred, nothing on the left.

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `storefront`, `focused` | `storefront` | |
| `rows` | variant | `1`, `2` | `1` | Storefront only. B2R: 1, B2E: 2 until the platforms decide (DS-36 D3) |
| `title` | text | | «سبد خرید» | Focused only: the page or step name |
| exposed | instances | `search`, `orders`, `account`, `cart`, `cart-count`, `categories`, `link-1…4`, `back` | | Edit labels, hide an action, set the cart count |

## Tokens
| Part | Property | Token |
|---|---|---|
| header | fill / border | `bg.surface` / `border.default` bottom, `border-width.default` |
| rows | width / gap | `layout.content-max-width` / `layout.gutter` (row 2: `space.4`) |
| actions | gap | `space.8` |

## Behaviour and RTL
Sticky at the top (`z-index.sticky`). Search fills the free space. Cart count uses Persian digits; hide the badge at 0. The back arrow points right (start). Mobile uses `mobile-header` instead.

## Accessibility
`header` landmark; search has a label; the cart button's name includes the count («سبد خرید، ۳ کالا»).

## Changelog
- 0.10.0 — created (3 variants).
