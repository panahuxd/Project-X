# chart

> Layer: Core · Status: draft · Figma: [DKB Components › chart](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=77-2797) · Code: `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent` (shadcn `chart`, Recharts)

## Purpose
Trends and comparisons in dashboards and reports: spend by month (B2E finance), orders by status, credit usage. If the answer is one number, use a stat (label + `numeric-lg`) instead of a chart.

## Anatomy
`chart-legend` (top, right) · `plot` (grid lines, marks) · y values on the left · period labels below · `chart-tooltip` on hover.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `bar`, `line`, `area` | `bar` | Bars for comparing periods or categories, lines for trends, area for one or two cumulative series |
| `chart-legend`: `series1…5`, `showSeries3…5` | text / boolean | | 2 series | |
| `chart-tooltip`: `title`, `series1…5`, `value1…5`, `showSeries3…5` | text / boolean | | | |

## Colour (DS-34)
Series use `chart.1` … `chart.5` **in this order, never cycled**; a series keeps its colour when others are filtered out. `chart.1` is the brand colour (navy in B2R, violet in B2E). More than 5 series: group the rest as «سایر» or split into small multiples. Status colours (red, green, amber, blue) are only for status, never for series. Text is never in a series colour.

## Tokens and marks
| Part | Spec |
|---|---|
| grid | 1px `border.default` horizontal lines; baseline `border.strong`; no vertical grid |
| axis labels | y: `numeric-sm` `text.muted`; x: `caption` `text.muted` |
| bars | 16px wide, 2px gap between bars in a group, 4px rounded top (`radius.sm`), anchored to the baseline |
| lines | 2px, round joins; points 8px with a 2px `bg.surface` ring |
| area | the line plus a 15% fill of the series colour |
| hover | 1px `border.strong` crosshair + `chart-tooltip` (`bg.surface`, `border.default`, `radius.md`, `shadow.dropdown`) |
| legend | 8px swatch (`radius.xs`) + `caption` `text.default`, gap `space.16` |

## Behaviour and RTL
- Time runs left to right (see `direction.md`); Jalali month names; Persian digits on axes and in the tooltip.
- **One y-axis only**; two measures with different units = two charts.
- Every chart has a table view (or the numbers nearby) and a title saying what and when («هزینه خرید ماهانه، ۱۴۰۵»).
- Bar and point hit targets are larger than the marks; the tooltip follows the hovered period.

## Accessibility
Chart has `role="img"` and an `aria-label` summary; legend present for 2+ series so colour is never the only key; colours validated for colour-blind separation and 3:1 on white.

## Changelog
- 0.8.0 — created (`chart` 3 variants, `chart-legend`, `chart-tooltip`).
