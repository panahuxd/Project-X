# mega-menu

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › mega-menu](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=40-540) · parts: [mega-menu-category](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=37-168), [mega-menu-group](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=40-1362), [mega-menu-link](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=37-143) · Code: category navigation (no shadcn equivalent; desktop panel = `NavigationMenuContent` content) · Decision: DS-47

## Purpose
Browse the whole catalogue by category. **Desktop:** the dropdown panel that opens from the header's «دسته‌بندی کالاها» trigger (`header` `categories`). **Mobile:** the body of the categories page that the bottom-nav item «دسته‌بندی‌ها» opens. Same content and the same parts on both. Not for search results or filters (PLP sidebar).

Baseline: *B2E Platform - Phase 2 › Mega menu & Categories* (Figma `XWgwct0LovI8Nu48ALSJp2`, node 8116:2640), rebuilt in DKB (see *What changed from the baseline*).

## Anatomy
`screen=desktop` (936 wide, 640 high in the sample): panel with `rail` on the right (240, `bg.muted`, 16 `mega-menu-category` rows) and `content` on the left: `all-link` «همه محصولات <دسته>» + `columns` (3 equal columns, groups stacked in each, filled right to left).
`screen=mobile` (360 × 640 sample, fills the space between `mobile-header` and `bottom-nav`): `rail` on the right (112, `bg.muted`, category tiles) and `content` (`all-link` «همه محصولات», groups stacked). Both columns scroll on their own.

Parts:
- `mega-menu-category`: `screen=desktop` row 40 (icon 16 on the right, label) · `screen=mobile` tile (icon 20 above a label of up to 2 lines); `state=default|hover|active`.
- `mega-menu-group`: `title` with a 2 px `border.primary` bar at the start + `link-1…6` (exposed `mega-menu-link`s; 4 shown by default).
- `mega-menu-link`: one link, `state=default|hover`.

## Properties
| Part | Property | Type | Values | Default | Notes |
|---|---|---|---|---|---|
| `mega-menu` | `screen` | variant | `desktop`, `mobile` | `desktop` | Responsive mode is set on each variant (Desktop / Mobile) |
| `mega-menu-category` | `screen`, `state` | variant | `desktop`, `mobile` · `default`, `hover`, `active` | `desktop`, `default` | Exactly one `active`: the category whose groups are shown |
| | `label` | text | | «مانیتور و تجهیزات ذخیره‌سازی» | Full category name, never truncated on desktop |
| | `icon` | instance swap | Lucide icons | `icon/monitor` | One icon per top category (table below) |
| `mega-menu-group` | `title` | text | | «مانیتور» | Subcategory name |
| | `link-1…6` | nested (exposed) | | 4 visible | Set each `label`; hide or show links on the instance (layer visibility). More than 6: link to the subcategory page instead |
| `mega-menu-link` | `state` | variant | `default`, `hover` | `default` | |
| | `label` | text | | | |

Editing in a design: change rail labels/icons and group content on the instance (nested overrides); set `state=active` on the selected category and `default` on the others; update the `all-link` text to «همه محصولات» + the active category on desktop.

## Tokens
| Part | Property | Token |
|---|---|---|
| panel (desktop) | fill / border / radius / shadow | `bg.surface` / `border.default` 1 px / `radius.md` / `shadow.dropdown` (as `popover`, `navigation-menu`) |
| rail | fill | `bg.muted` |
| category desktop | padding / gap / text / icon | `space.16` × `space.8` / `space.8` / `label` / `icon.size.sm` |
| category mobile | padding / gap / text / icon | `space.8` × `space.12` / `space.4` / `label-sm`, centred / `icon.size.md` |
| category states | fill / colour | default none (rail shows), hover `bg.muted-hover` (muted ladder), active `bg.surface` + `text.primary` (label and icon) |
| content | padding / gap | desktop `space.24` / `space.24`; mobile `space.16` / `space.24` |
| columns / groups | gap | `space.24` between columns and between groups |
| all-link | text / icon / gap | `label` `text.link` / `chevron-left` `icon.size.sm` `text.link` / `space.4` |
| group | title / bar / gap | `label` `text.default` / `border-width.2` `border.primary` on the right, `space.8` padding / `space.8` |
| link | text / padding | `body` `text.muted`, hover `text.default` / `space.4` vertical |

## Top categories (B2E, from the baseline) and icons
| Category | Icon | Category | Icon |
|---|---|---|---|
| کتاب، لوازم تحریر و هنر | `pencil-ruler` | موبایل | `smartphone` |
| مانیتور و تجهیزات ذخیره‌سازی | `monitor` | لپ‌تاپ و تبلت | `laptop` |
| شوینده و نظافت خانه | `spray-can` | زیورآلات طلا | `gem` |
| ابزار، نور و روشنایی | `lightbulb` | کارت هدیه دیجی‌کالا | `gift` |
| لوازم جانبی کالای دیجیتال | `headphones` | اتومبیل و ساختمان | `car` |
| لوازم خانگی غیربرقی | `cooking-pot` | ماشین‌های اداری | `printer` |
| خوردنی و آشامیدنی | `coffee` | سکه و شمش | `coins` |
| لوازم خانگی برقی (سایز کوچک) | `microwave` | لوازم خانگی برقی (سایز بزرگ) | `refrigerator` |

The list is per platform and tenant (B2R and portals have their own categories): change labels and icons, keep the structure.

## Behaviour and RTL
- **Desktop:** opens on click of «دسته‌بندی کالاها» and on hover after ~300 ms (and closes ~300 ms after the pointer leaves), below the header, aligned to the right edge of the content width. Hovering or focusing a rail row makes it `active` and swaps the content (no click needed); keep a small hover delay so a diagonal move from the rail to a column doesn't switch category. Esc closes and returns focus to the trigger. `z-index.popover`. The trigger shows its `open` state while the panel is open.
- **Mobile:** a page, not an overlay: `mobile-header` (home, with search) · `mega-menu` `screen=mobile` · `bottom-nav` with «دسته‌بندی‌ها» active. Tapping a tile makes it `active` and replaces the content; the content scrolls back to the top.
- «همه محصولات …» always comes first and goes to the category's listing page; group titles are links to the subcategory page too.
- Reading order is right to left: rail first, then content; columns fill from the right. `chevron-left` points forward in RTL.

## Accessibility
- Desktop: `nav` landmark; the trigger is a button with `aria-expanded` and `aria-controls`; rail rows are buttons (or links to the category page) that reveal their panel; links are real links ([WAI-ARIA disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)). Arrow keys move within the rail; Tab moves into the content.
- Mobile: the rail is a vertical tab list (`role="tablist"`, `aria-orientation="vertical"`, `aria-selected` on the active tile) controlling the content panel ([WAI-ARIA tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)). Tiles keep a 40 px minimum height.
- The active category is shown by fill **and** colour (not colour alone).

## UX grounding
| Guideline | Source | How it applies |
|---|---|---|
| Mega menus suit large catalogues: show the second level grouped, with clear headings, no scrolling inside on desktop | [NN/g: Mega menus gone wrong](https://www.nngroup.com/articles/mega-menus-gone-wrong/) | Groups with headed lists in 3 columns; a group shows at most 6 links |
| Use short delays when opening and closing on hover so menus don't flicker or switch by accident | [NN/g: timing exposing content](https://www.nngroup.com/articles/timing-exposing-content/) | ~300 ms open/close delay; category switch tolerates diagonal moves |
| Offer «view all» for each category, first in the list | [Baymard: mobile main nav “view all”](https://baymard.com/blog/mobile-main-nav-view-all) · [Baymard: drop-down menu benchmark](https://baymard.com/homepage-and-category-usability/benchmark/page-types/drop-down-menu) | `all-link` at the top of both variants |
| Disclosure navigation and tabs keyboard models | [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | Desktop = disclosure nav, mobile rail = vertical tabs |
| Selected = brand text on a surface fill, hover one step up the ladder | DKB `foundations/interaction-states.md` (DS-43) | Rail works like vertical tabs; hover `bg.muted-hover` because the rail is `bg.muted` |
| Mobile sections are full width, no rounded box at the edges | DS-45 | Mobile variant has no radius or border; desktop panel keeps `radius.md` |

## What changed from the baseline
| Baseline | DKB | Why |
|---|---|---|
| IRANYekanX 12 px everywhere | Digikala, `label` (rail, titles, all-link) and `body` (links) on desktop, `label-sm` in mobile tiles | DS-1; 12 px links were too small for scanning a large catalogue |
| Iconly icons | Lucide (table above) | DS-38 |
| Hard-coded colours (#5B21B6, #737373, #F5F5F5) | Tokens; brand colour from the `brand` mode (navy in B2R, violet in B2E) | One component for every platform (DS-37) |
| Groups placed by absolute position | Auto layout: 3 equal columns, groups stacked | Agents and designers can add or remove groups without re-placing them |
| Placeholder groups («شبکه و تجهیزات نظارتی» repeated) | Real subcategories of the active category | Hard rule 4 (real-looking content) |
| 1 px bar beside group titles | 2 px `border.primary` | Visible at 1x, still decorative |
| Separate mobile and desktop drawings | One `mega-menu` with `screen=desktop|mobile` from the same parts | DS-37 (layout difference → variant) |

## Changelog
- 0.14.0 — created: `mega-menu` (2), `mega-menu-category` (6), `mega-menu-group` (1), `mega-menu-link` (2) in DKB Commerce (DS-47).
