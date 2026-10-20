# collapsible

> Layer: Core · Status: draft · Figma: [DKB Components › collapsible](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=61-1401) · Code: `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` (shadcn `collapsible`)

## Purpose
Show or hide one block of secondary content: shipment details, more filters, the rest of a list. For several sections use `accordion`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `closed`, `open` | `closed` | |
| `title` | text | | «جزئیات ارسال» | |
| `content` | instance swap | | `slot` | Shown when open |
| `toggle` | nested (exposed) | | | Ghost `icon-button` sm with `chevrons-up-down` |

## Tokens
Header gap `space.16`; gap to content `space.8`; title `label`.

## Accessibility
Toggle has `aria-expanded`, `aria-controls` and an `aria-label` («نمایش جزئیات»).

## Changelog
- 0.6.0 — created (2 variants).
