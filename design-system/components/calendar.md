# calendar

> Layer: Core · Status: draft · Figma: [DKB Components › calendar](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=75-2879) · Code: `Calendar` (shadcn `calendar`, react-day-picker with a Jalali calendar)

## Purpose
Month view for picking a date or a range: delivery date, report period, installment due dates. Jalali only (DS-27).

## Anatomy
`header` (previous chevron-right on the right · `caption` month and year · next chevron-left on the left) · `weekdays` (ش ی د س چ پ ج, Saturday on the right) · `week 1…n` rows of `calendar-day`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `mode` | variant | `single`, `range` | `single` | code also supports `multiple` |
| `month` | text | | «مهر ۱۴۰۵» | |
| `calendar-day`: `state` | variant | `default`, `today`, `selected`, `range-start`, `range-middle`, `range-end`, `outside`, `disabled`, `focus` | | Set per day |
| `calendar-day`: `day` | text | | «۱۵» | Persian digits |

## Tokens
| Part | Property | Token |
|---|---|---|
| calendar | padding / gap | `space.12` / `space.8`; week rows gap `space.4` |
| day | size / radius | `size.32` / `radius.md` (range-middle `radius.none`) |
| day text | style | `numeric` |
| today | fill | `bg.muted` |
| selected, range ends | fill / text | `bg.primary` / `text.on-primary` |
| range middle | fill | `bg.hover` |
| outside month | text | `text.disabled` |
| disabled | | `opacity.disabled`, struck through |
| weekdays | style | `caption` `text.muted` |

## Behaviour and RTL
- Jalali months (فروردین…اسفند), year in Persian digits; week starts Saturday; Friday may be shown as a holiday by product decision.
- Arrow keys move by day in visual order (← next day in RTL), Page Up/Down by month.
- Ranges run right to left: the start keeps its right corners rounded.
- Disable past dates and full delivery slots; explain why in a tooltip.

## Accessibility
Grid `role="grid"`; each day labelled with the full date («شنبه ۱۵ مهر ۱۴۰۵»); `aria-selected`, `aria-disabled`.

## Changelog
- 0.8.0 — created (`calendar-day` 9 variants, `calendar` 2).
