# command

> Layer: Core · Status: draft · Figma: [DKB Components › command](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=48-626) · Code: `Command`, `CommandInput`, `CommandList`, `CommandGroup`, `CommandItem`, `CommandEmpty` (shadcn `command`, cmdk)

## Purpose
Search box with a filtered list of actions or options. Used as a command palette (inside `dialog`, Ctrl+K) in admin tools, inside `combobox`, and for any long list that needs typing to find an item.

## Anatomy
`input` (`icon` search on the right · `placeholder`) · `list` (group headings, `menu-item` rows, separators) or `empty`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `results`, `empty` | `results` | |
| `placeholder` | text | | «جستجوی کالا یا دستور…» | |
| rows | nested (exposed) | | | `item 1…5`: any `menu-item` type |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.md` / `shadow.dropdown` (none inside a dialog) |
| input | height / padding / gap | `control.height-md` / `space.12` / `space.8`; bottom border `border.default` |
| input | text | `body`, placeholder `text.muted` |
| list | padding | `space.4` |
| group heading | style / padding | `label-sm` `text.muted` / `space.8` × `space.6` |
| empty | padding / text | `space.24` / `body` `text.muted`, centred |

## States
Highlighted row as `menu-item`.

## Behaviour and RTL
Filters as you type (Persian and Latin, ignores ZWNJ and Arabic/Persian letter variants: ي/ی, ك/ک). Arrows move, Enter runs, Esc clears then closes. List max height 300, scrolls. Width follows its container (320 sample).

## Accessibility
Input `role="combobox"` with `aria-controls` the `listbox`; active row via `aria-activedescendant`.

## Content
Placeholder says what can be searched. Empty: «نتیجه‌ای پیدا نشد.»

## Changelog
- 0.5.0 — created (2 variants).
