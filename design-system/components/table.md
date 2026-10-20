# table

> Layer: Core · Status: draft · Figma: [DKB Components › table](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=63-1671) · Code: `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption` (shadcn `table`)

## Purpose
Rows and columns of data to compare and scan on desktop: orders, invoices, installments, users. **On mobile show the same data as `item`s or cards** (B2E pattern).

## How to build one
1. Make an auto-layout frame named `table/<what>` (vertical, no gap). Not `table` itself, or the audit thinks it is detached.
2. Each row is a horizontal auto-layout frame of `table-cell` instances, first column on the right.
3. Header row: `type=header`; body rows: `type=body`; total row: `type=footer`. Set the same `state` on every cell of a row (hover, selected).
4. Set each column's width on its cells (same width down the column). Text columns `align=start`; numbers and amounts `align=end` (left, `numeric` digits).
5. Row selection: `showCheckbox` on the first cell of each row and the header.
The `table` component is a ready sample (orders) to copy rows from.

## table-cell properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `header`, `body`, `footer` | `header` | |
| `state` | variant | `default`, `hover`, `selected` | `default` | hover/selected for body |
| `align` | variant | `start`, `end` | `start` | `end` = numbers |
| `text` | text | | «متن سلول» | |
| `showCheckbox` | boolean | | off | Exposed `checkbox` |

## Tokens
| Part | Property | Token |
|---|---|---|
| cell | padding / gap | `space.8` |
| cell | border | 1px `border.default` bottom (footer: top) |
| header / footer text | style | `label` |
| body text | style | `body`; `numeric` when `align=end` |
| hover / selected / footer | fill | `bg.hover` / `bg.muted` / `bg.hover` |

## Behaviour and RTL
Wrap in a bordered `radius.md` frame when it stands alone (see `data-table`). Long tables: sticky header, horizontal scroll inside the frame starting from the right. Amounts: thousands separator «٬», unit in the header («مبلغ (تومان)»).

## Accessibility
Real `<table>` markup; header cells `scope="col"`; caption or `aria-label` names the table.

## Changelog
- 0.6.0 — created (`table-cell` 10 variants, `table` sample).
