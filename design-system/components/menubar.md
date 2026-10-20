# menubar

> Layer: Core · Status: draft · Figma: [DKB Components › menubar](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=41-680) · Code: `Menubar` (shadcn `menubar`)

## Purpose
An app-style row of menus («فایل، ویرایش، نمایش…») for dense desktop tools such as portal admin and back-office screens. **Don't use it** for site navigation (`navigation-menu`) or on mobile.

## Anatomy
Bordered bar with `trigger 1…4` (text); `state=open` shows the first trigger highlighted and its `menu` (a `dropdown-menu`, exposed) below it.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `closed`, `open` | `closed` | |
| `menu1` … `menu4` | text | | «فایل», «ویرایش», «نمایش», «راهنما» | Hide triggers you don't need |

## Tokens
| Part | Property | Token |
|---|---|---|
| bar | height | `control.height-md` |
| bar | padding / gap | `space.4` |
| bar | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.md` / `shadow.card` |
| trigger | padding / radius | `space.8` × `space.4` / `radius.sm` |
| trigger | style | `label`, `text.default`; open: fill `bg.hover` |

## States
| State | What changes |
|---|---|
| open | Trigger fill `bg.hover`; its menu opens below, aligned to the trigger's right edge |

## Behaviour and RTL
First menu on the right. Left/right arrows move between menus (in visual order) while one is open.

## Accessibility
`role="menubar"`, triggers `role="menuitem"` with `aria-haspopup`.

## Content
One-word menu names.

## Changelog
- 0.5.0 — created (2 variants).
