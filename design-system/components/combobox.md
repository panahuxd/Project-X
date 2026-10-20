# combobox

> Layer: Core · Status: draft · Figma: [DKB Components › combobox](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=48-722) · Code: `Popover` + `Command` (shadcn combobox pattern)

## Purpose
A select with search, for long lists: provinces and cities, brands, sellers, categories, company users. Use `select` for short lists (under about 10) and `native-select` where the OS picker is better.

## Anatomy
`trigger` (`select` instance) · `list` (`command` instance with checkbox-type `menu-item`s; the chosen one is checked), same width as the trigger.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `closed`, `open` | `closed` | |
| `trigger`, `list` | nested (exposed) | | | Set the value, placeholder and rows |

## Tokens
As `select` and `command`; gap between trigger and list `space.4`.

## States
Closed: the trigger shows the chosen value or the placeholder. Open: trigger in `open` state, list below.

## Behaviour and RTL
Typing filters the list; Enter picks and closes; the trigger shows the chosen label. Multi-select variant shows the count in the trigger («۳ برند»). In a `field` for label and error.

## Accessibility
Trigger `role="combobox"`, `aria-expanded`; list `role="listbox"`, options `aria-selected`.

## Content
Placeholder names the thing: «استان را انتخاب کنید»; search placeholder «جستجوی استان…».

## Changelog
- 0.5.0 — created (2 variants).
