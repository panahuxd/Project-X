# data-table

> Layer: Core · Status: draft · Figma: [DKB Components › data-table](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=63-2340) · Code: shadcn Data Table pattern (`@tanstack/react-table` + `Table`)

## Purpose
A full-featured table for admin and finance work: search, column visibility, sorting, row selection and pagination. Desktop and wide tablet only.

## Anatomy
`toolbar` (search `input` on the right, `columns` button with a `dropdown-menu` on the left) · bordered `table-frame` with a `table` · `pagination` (selection count on the right, `previous` / `next` on the left).

## Tokens
Gap `space.16`; table frame `border.default`, `radius.md`, clipped; selection text `body-sm` `text.muted`; pager gap `space.8`.

## Behaviour and RTL
- Sorting: click a header to sort; show `arrow-up-down` next to sortable header text.
- Filters: a toolbar `dropdown-menu` or `combobox` per column (status, date range).
- Pagination: «قبلی» on the right, «بعدی» on the left; disabled at the ends. Page size select optional.
- Empty result: an `empty` inside the table frame.

## Changelog
- 0.6.0 — created (pattern component).
