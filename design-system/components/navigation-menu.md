# navigation-menu

> Layer: Core · Status: draft · Figma: [DKB Components › navigation-menu](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=69-2232) · Code: `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink` (shadcn `navigation-menu`)

## Purpose
Desktop site navigation with dropdown panels: the second header row «دسته‌بندی کالاها / پرفروش‌ترین‌ها / درخواست خرید» and the category mega menu. The category mega menu itself is the Commerce component `mega-menu` (DS-47); mobile opens the categories page (`mega-menu` `screen=mobile`) from the bottom nav.

## Anatomy
Row of `item 1…n` (`navigation-menu-trigger`, first on the right); when open, a `panel` below the trigger, aligned to its right edge, with a grid of `navigation-menu-link`s (filled right to left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `closed`, `open` | `closed` | |
| trigger: `state` | variant | `default`, `hover`, `open`, `focus` | | |
| trigger: `label`, `showChevron` | text / boolean | | | No chevron = plain link |
| link: `state` | variant | `default`, `highlighted` | | |
| link: `title`, `description`, `showDescription` | text / boolean | | | |

## Tokens
| Part | Property | Token |
|---|---|---|
| trigger | height / padding / gap / radius | `control.height-md` / `space.16` / `space.4` / `radius.md` |
| trigger | hover, open | `bg.hover`; chevron `text.muted` rotates when open |
| panel | fill / border / radius / shadow / padding | `bg.surface` / `border.default` / `radius.md` / `shadow.dropdown` / `space.8` |
| link | padding / radius / gap | `space.8` / `radius.sm` / `space.4`; highlighted `bg.hover` |
| link text | style | title `label`, description `body` `text.muted` |

## Behaviour and RTL
Opens on hover (with a short delay) and on click; arrow keys move between triggers in visual order; Esc closes. Panel width follows its content (two columns of 240 in the sample). `z-index.popover`.

## Accessibility
`nav` landmark; triggers `aria-expanded`; links are real links.

## Changelog
- 0.7.0 — created (trigger 4, link 2, menu 2 variants).
