# Page layouts

> Status: **standard v1** (DS-36, 2026-10-20) — approved by the design lead on 2026-10-20. Built in Figma as 10 layout templates on the *Templates* page of DKB Commerce (§6, DS-37). Source: B2R live site b2b.digikala.com measured on 2026-10-20 at 1440 and 375 wide (logged-in account), compared with shadcn/ui blocks (dashboard-01, sidebar-07, login-01/03, the settings and tasks examples). Decisions: content width 1312 (D1), grey page with white cards (D2), header rows chosen per platform (D3), sticky bottom action bar on mobile checkout and forms (D4).

## 1. What the live B2R site does today

### Desktop (1440)
| Page | Shell | Container | Columns (RTL, right → left) | Sticky | Page bg | Footer |
|---|---|---|---|---|---|---|
| Home `/` | Global header 68 (fixed) | 1336 | Hero row: categories 322 · banner 643 · promo 322, gap 16; then stacked sections, ~40 apart; best sellers grid 4 cols gap 12 | Header | #FAFAFA, white sections (radius 8/16) | Yes |
| PLP `/products/:id`, search, carousel lists | Global header | 1336 | Filters 336 · results 1000, no gap | Sub-header (breadcrumb + brand chips, 114) at 64; filters and sort bar at 178 | transparent / grey | Yes |
| PDP `/pdp/:id` | Global header | 1336 | Gallery 254 · title, variants 618 · buy box 400; specs full width below | Header only | White | Yes |
| Cart, shipping, payment `/checkout/*` | **Own header**: back + title (right), logo (centre); no nav, no footer | **1280** | Main 880 · bill box 400 (payment: 849 · 419, gap 12) | Bill box at 16 | #F5F5F5, white cards radius 12 (payment 8) | No |
| Profile `/profile/*` | Global header | 1336 | Account card + menu 322 (fixed) · content 998, gap 16 | Sidebar | **#F0F1F2** | No |
| RFQ `/rfq` | Global header | **1232** | Form 816 · selected items 400 (sticky), gap 16; intro dialog 460 on load | Aside at 80 | White | Yes |
| Landing `/club` | Global header | full-bleed hero 704, then 1336 | Bands, 4-column steps, FAQ | Header | Mixed | Yes |
| Static `/page/terms` | Global header | 1336 | One column, **line length 1288 px** | Header | White | Yes |

### Mobile (375)
| Page | Top | Bottom | Body |
|---|---|---|---|
| Home | Header 60 = search field | Bottom nav 55 (خانه · دسته‌بندی‌ها · سبد خرید · سفارش‌ها · حساب کاربری) | Full-width white sections, 16 apart |
| PLP | Header 60 = back + category title + search icon; sticky toolbar 108 (sort, filter, brand chips) | Bottom nav | Single-column product rows |
| PDP | Header 60 = search | Sticky buy bar 64 **above** the bottom nav | Single column |
| Checkout | Bar 56 = back + title; no header | **No bottom nav; no sticky pay button** (bill box at the end of the page) | Full-width white sections, 8 apart |
| Profile home | None (the page is the account card + menu) | Bottom nav | Menu list |
| Profile sub-pages | None (title inside the page) | Bottom nav | Content |

### Inconsistencies to fix
1. Four container widths: 1336, 1280 (checkout), 1232 (RFQ), full-width text (static). Design token says 1312.
2. Four page backgrounds: #FAFAFA, #F0F1F2, #F5F5F5, white.
3. Card radius 0, 8, 12 and 16 on the same kinds of cards; card padding 16 and 20.
4. Aside widths 400 / 419 / 400 / 336 / 322 for the same role (summary or side panel).
5. Static text runs 1288 px wide (should be ≤ 720 for reading).
6. Mobile checkout has no sticky pay button; mobile profile sub-pages have no back header.

## 2. What shadcn/ui gives as standard

| shadcn block | Structure | Use in DKB |
|---|---|---|
| Site shell (shadcn docs) | Sticky header h-14 with border-b, centred container, footer | Storefront shell, adapted |
| dashboard-01 / sidebar-07 (inset) | Sidebar 16rem (collapsible to icons) + inset header 48 (sidebar trigger, separator, page title) + content `gap-4 py-4 md:gap-6 md:py-6`, cards grid 1 → 2 → 4 | B2E company workspace, portal admin |
| login-01 / login-03 | Centred card `max-w-sm` (384) on a muted page; or two columns (form · image) | Auth and OTP |
| Settings example | Page header (title, description, separator) + side nav `w-1/5` + content `max-w-2xl` | Account settings forms |
| Tasks example | Page header with actions + data-table | Lists of orders, invoices, users |

shadcn has no e-commerce layouts (listing, product detail, checkout); those come from the live site above.

## 3. Proposed DKB standard

### 3.1 Grid and frame (all templates)
| | Desktop ≥ 1024 | Tablet 768–1023 | Mobile < 768 |
|---|---|---|---|
| Design frame | 1440 | 768 | 360 (test at 375) |
| Content width | `layout.content-max-width` 1312, centred (D1) | full width | full width |
| Page margin | `layout.page-margin` (24, grows to centre) | 24 | 16 |
| Columns / gutter | 12 / `layout.gutter` 24 | 8 / 16 | 4 / 16 |
| Section gap | `layout.section-gap` 48 | 32 | 32 between page sections; 16 inside a section |
| Page background | `bg.subtle`; content sits in white `card`s (D2) | same as mobile | same; sections are full-width white blocks: `card` `edge=full` `size=sm` (no radius, no side borders, no shadow), `space.8` of `bg.subtle` between them (D5, DS-45) |

### 3.2 Shells (header, navigation, footer)
| Shell | Desktop | Mobile | Used by |
|---|---|---|---|
| **Storefront** | Header row 64: logo · search · orders · account · cart; optional second row 44 with the `navigation-menu` (key links); the categories trigger opens the `mega-menu` panel (DS-47). One or two rows is chosen per platform and page (D3); until decided, follow the platform: B2R one row (categories trigger in row 1), B2E two rows. Footer | Header 56 (home: logo + search; inner pages: back + title + search icon); bottom nav 56 (5 items; «دسته‌بندی‌ها» opens the categories page: `mobile-header` + `mega-menu` `screen=mobile` + `bottom-nav`); compact footer only on home, landing and static | Home, landing, PLP, PDP, RFQ, static |
| **Focused (checkout and tasks)** | Header 64: back + page title on the right, logo in the centre, no search or nav; no footer | Bar 56: back + title; **no bottom nav**; sticky bottom action bar: payable amount (right) + main button (left), `bg.surface`, top border, safe-area padding (D4) | Cart, shipping, payment, repayment, KYC / onboarding steps, credit request |
| **Account** | Storefront header + sticky side nav 3 cols (account card + `sidebar-menu-button` list) | Profile home = account card + menu; sub-pages get a back + title header; bottom nav | `/profile/*` |
| **Workspace** (B2E company, portal admin) | shadcn sidebar-07: `sidebar` 256 (collapsible 48) on the right + inset header 48 (trigger, breadcrumb, actions) | Sidebar opens as a `sheet` from the right | B2E company admin, approvals, reports; portal admin |
| **Auth** | No nav; centred card 384 (`size.384`, shadcn `max-w-sm`) on `bg.subtle`, logo above | Full-width form, logo on top | Login, OTP, sign-up |

### 3.3 Templates (body inside a shell)
| # | Template | Desktop (12 cols, RTL) | Mobile |
|---|---|---|---|
| T1 | **Home / Landing** | Optional full-bleed hero; stacked sections; each = section header (title right, «مشاهده همه» link left) + content (carousel, grid 4–6, banner). Home hero row 3 · 6 · 3 | Sections full width, carousels scroll; categories as 4-col icon grid |
| T2 | **Listing** (PLP, search, carousel list) | Sticky sub-header (breadcrumb, chips); filters 3 cols (sticky) · results 9 cols with sticky sort bar; results as rows or grid 3–4 | Sticky toolbar (sort, filter button → full-screen `sheet`, chips); single column; infinite scroll or `pagination` compact |
| T3 | **Detail** (PDP, bundle) | Breadcrumb; gallery 3 · info 5 · buy box 4 (sticky); below: tabs or sections 8 cols + sticky buy box | Single column; sticky buy bar 64 above the bottom nav |
| T4 | **Checkout step** | Page title + optional stepper; steps content 8 cols (cards) · bill box 4 cols (sticky) | Sections as `card` `edge=full`; bill box at the end; sticky bottom bar (amount + main button) |
| T5 | **Account page** | Side nav 3 · content 9: page header (title, description, actions) + cards / table / form | Back header; content full width; tables become items |
| T6 | **Form / task** (RFQ, KYC, credit request) | Form 8 cols (max 720) · optional summary 4 cols sticky; stepper for multi-step | Single column; sticky bottom bar with the main button |
| T7 | **Workspace page** | Inset header; page header + KPI cards grid (1 → 2 → 4) + chart / data-table | Stacked |
| T8 | **Content** (terms, privacy, help, FAQ) | Reading column 720 (6–8 cols) + optional table of contents 3 cols (sticky) | Single column |
| T9 | **Result** (thank-you, payment result, 404, access gate) | Centred `empty`-style block 480 with icon, title, one line, 1–2 actions | Same, full width |
| T10 | **Auth** | Centred card 384 | Full-width form |

### 3.4 Surfaces and rhythm
- Cards: `card` component (`bg.surface`, `border.default`, `radius.card`, `shadow.card`), padding `space.24` desktop / `space.16` mobile. One radius everywhere (`radius.card` = 12).
- **Mobile sections are full width (D5, DS-45).** Below 1024 a page section is `card` `edge=full` (`size=sm`): edge to edge, top and bottom `border.default` only, no radius, no shadow, separated by `space.8`. Inside a section, content keeps `space.16` side padding and selectable options keep their rounded border (a rounded border = something you can choose). **A rounded or side-bordered container never touches the screen edge**: either it is full-width without radius and side borders, or it is inset by `layout.page-margin` on both sides (the audit fails it otherwise). Inset cards on mobile are only for cards inside a container (drawer, dialog, carousel).
- Asides span columns, never a fixed pixel width: filters and account side nav 3 cols (310 at 1312: 3 × 87.3 + 2 × 24; live 322–336); bill box, buy box and summaries 4 cols (≈ 421, live 400).
- Sticky offsets: header height + `space.16`.
- Z-order: header and bottom nav `z-index.sticky`; drawers/sheets `z-index.dialog`.

## 4. Figma setup for a screen

| | Desktop | Mobile |
|---|---|---|
| Frame | 1440 wide, `<flow>/<screen>/desktop` | 360 wide, `<flow>/<screen>/mobile` |
| Layout grid | 12 columns, gutter 24, margin 64 (centres 1312) | 4 columns, gutter 16, margin 16 |
| Modes | `brand` B2R/B2E, `responsive` Desktop | `brand`, `responsive` Mobile |
| Height | **min 1024** (`minHeight`), hugs the content above that (DS-49) | **min 800** (`minHeight`), hugs the content above that (DS-49) |
| Fill | `bg.subtle` | `bg.subtle` |
| Shell parts | Header, footer (storefront); focused header (checkout); side nav (account); `sidebar` (workspace) | Header or back bar, bottom nav or sticky action bar |

Don't set this up by hand: start from a template (§6), which already has the frame size, grid, fill, responsive mode and regions; the minimum height comes with the template too.

**Minimum height (DS-49).** Every screen frame has a minimum height: **1024 px on desktop, 800 px on mobile** (a common phone viewport). Set it as `minHeight` on the auto-layout frame, never as a fixed height: a long page keeps growing, a short one (an empty list, a result page, a page behind a dialog) is shown at a realistic viewport height instead of collapsing to its content. In every template the `body` region is FILL (workspace: `workspace` and `inset`), so the extra height goes to the body: the footer, `bottom-nav` and `action-bar` stay at the bottom and the workspace `sidebar` reaches it. The audit fails a screen frame below its minimum (`belowMinHeight`; frames narrower than 768 count as mobile).

Shell parts are DKB Commerce components and come placed in every template: `header` (storefront rows=1|2, focused), `mobile-header` (home, inner), `footer` (desktop, mobile), `bottom-nav`, `action-bar` (amount, button), `account-menu`. Configure them (title, rows, active item, amount); don't redraw them.

## 5. Decisions

| # | Decision |
|---|---|
| D1 | Content width 1312 (`layout.content-max-width`) on every page type, including checkout and forms |
| D2 | Page background `bg.subtle` with content in white cards, for B2R and B2E (revises the B2E "white surface" decision of 2026-10-19) |
| D3 | Desktop storefront header has one or two rows, decided per platform and page later |
| D4 | Mobile checkout and multi-step forms get a sticky bottom action bar with the amount and the main button |
| D5 | Mobile page sections are full-width blocks (`card` `edge=full`), never rounded cards touching the screen edge (DS-45, 2026-10-21) |

## 6. Templates in Figma

DKB Commerce → page *Templates*. One component set per template, variants `screen=desktop` (1440, 12-col grid, `responsive` Desktop) and `screen=mobile` (360, 4-col grid, `responsive` Mobile). Every grid gutter and the mobile margin are bound to `layout.gutter` and `layout.page-margin`; the desktop body width is bound to `layout.content-max-width`. Keys are in `components.json`.

Shell parts are real Commerce instances (layer names `header`, `footer`, `bottom-nav`, `action-bar`, `side-nav`); set their properties, e.g. `header` rows=2 for B2E or `title` on a focused header. Workspace uses the Core `sidebar`; its inset header is still a region. Each content area is a **`template-region`** instance (from DKB Components): its layer name says what it is (`filters`, `bill-box` …) and its label says what goes there, how many columns and whether it is sticky. `kind=area` is a card-sized region (`radius.card`), `kind=bar` a full-width bar (header, footer, bottom nav, action bar, mobile sections).

| Set | Template | Shell | Desktop regions (reading order) | Mobile regions |
|---|---|---|---|---|
| `template/home` | T1 | Storefront | header, hero (optional), hero-row: banner-start · slider · banner-end, section-1…3, footer | header, slider, categories, section-1, section-2, footer, bottom-nav |
| `template/listing` | T2 | Storefront | header, sub-header, filters · results-column (sort-bar, results), footer | header, toolbar, results, bottom-nav |
| `template/detail` | T3 | Storefront | header, breadcrumb, gallery · info · buy-box, details (8 cols), footer | header, gallery, info, details, buy-bar, bottom-nav |
| `template/checkout` | T4 | Focused | header, page-title, steps (step-card-1, step-card-2) · bill-box | header, step-card-1, step-card-2, bill-box, action-bar |
| `template/account` | T5 | Account | header, side-nav · content (page-header, content) | header, content, bottom-nav |
| `template/form` | T6 | Focused | header, page-title, form · summary | header, stepper, form, action-bar |
| `template/workspace` | T7 | Workspace | sidebar · inset (inset-header, page-header, kpi-1…4, chart, data-table) | header, page-header, kpi-1…4, chart, list |
| `template/content` | T8 | Storefront | header, breadcrumb, toc · article (720), footer | header, article, footer, bottom-nav |
| `template/result` | T9 | Storefront | header, result (480, centred), footer | header, result, bottom-nav |
| `template/auth` | T10 | Auth | logo, card (384, centred) | logo, form |

**How to use (agents):** with `agent-helpers.js`,

```js
const f = await startFromTemplate('template/checkout', 'mobile', 'B2E', 'checkout/payment/mobile'); // instance → detach → name → modes
const r = await regions(f);                       // { header, 'step-card-1', 'bill-box', 'action-bar', … }
fillRegion(r['step-card-1'], myAddressCard);      // same place and width behaviour; the region is removed
r['step-card-2'].remove();                        // a region you don't need
```

Templates are the one library item you detach: a template only gives the starting frame, grid and regions. Every region must be replaced or removed; the audit fails on a visible `template-region` (`regionLeftInDesign`) and on a template placed without detaching (`templateNotDetached`). Add, drop or resize regions as the content needs, but keep the columns: asides 3 or 4 columns, main column FILL.

**Designers:** drag the template from the Assets panel, right-click → *Detach instance*, rename to `<flow>/<screen>/<breakpoint>`, set the `brand` mode, then replace the regions.

