# pagination

> Layer: Core · Status: draft · Figma: [DKB Components › pagination](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=67-2227) · Code: `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis` (shadcn `pagination`)

## Purpose
Moves through pages of a long list: orders, invoices, search results (when not infinite-scrolling).

## Anatomy
RTL, right to left: `previous` («قبلی» + chevron-right) · page numbers (`pagination-link`) with an ellipsis · `next` («بعدی» + chevron-left). `type=compact` shows «صفحه ۲ از ۱۰» between the buttons.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `default`, `compact` | `default` | compact on mobile |
| `pagination-link`: `state` | variant | `default`, `hover`, `active`, `focus`, `disabled` | `default` | active = current page |
| `pagination-link`: `label` | text | | «۲» | Persian digits |
| `previous`, `next` | nested (exposed) | | | ghost `button`; disable at the ends |

## Tokens
| Part | Property | Token |
|---|---|---|
| list | gap | `space.4` |
| page link | size / radius | `control.height-md` square / `radius.control` |
| page link | text | `numeric`, `text.default` |
| hover | fill | `bg.hover` |
| active | fill / border / shadow | `bg.default` / `border.input` / `shadow.card` (shadcn outline) |
| focus | | `border.focus` + `shadow.focus-ring` |

## Behaviour and RTL
Show first, last, current ±1 and ellipses. Keep the page in the URL (`?page=2`) and scroll to the top of the list on change.

## Accessibility
`nav aria-label="صفحه‌بندی"`; current link `aria-current="page"`; links named «صفحه ۲».

## Changelog
- 0.7.0 — created (`pagination-link` 5 variants, `pagination` 2).
