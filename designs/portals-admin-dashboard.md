# Portals · Admin dashboard

> Status: in design · Owner: Panah (design lead) · Figma: [Portals · Admin dashboard](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK) · Branch: `design/portals-admin-dashboard`

A dashboard where an organization's managers and portal admins see how their staff use the portal (allowance, spending, orders) and keep their list of eligible staff up to date. Version 1 is deliberately small: **see, export, and manage the employee list**. Everything else stays with DKB operations until later versions.

## Problem
Organizations that run a portal can't see or change anything themselves.

- No admin panel or platform console exists in code or Figma (Portals foundation › §2 Users & roles, §9 Components, Gap #2).
- DKB teams do the organization's work by hand: user lists are imported by DKB, catalogs are set per channel, Mehrad reconciliation is manual (§2).
- Reporting reaches the organization only through DKB: the CBI figures (2,858 payment attempts, 85.4% success, 1,851 buyers, 33.9B toman, 863 orders with refunds) come from a report DKB wrote (§1 Results so far).
- The Portal Domain proposal makes an organization admin (users, eligible users, allowance, reports) **P0** (§11 Organization space & access).
- The team itself warns that per-tenant one-offs don't scale (Gap #1), so the admin must be one product for every tenant.

## Users and goal
| Role (Portals foundation › §2) | In v1 | Can do |
|---|---|---|
| **Organization decision-maker** → role «مدیر» | Yes | View overview, employees, orders; export |
| **Organization portal admin** (HR, welfare, finance) → role «ادمین» | Yes | Everything «مدیر» can, plus add, import, deactivate and reactivate employees |
| Funding partner, DKB platform admin, DKB operations | No | Later versions (partner view, platform console) |

**Goal:** the pilot organization can answer "how much of the allowance has been used, by whom, and is anything stuck?" and can keep its eligible-staff list current without asking DKB.
**Measurable outcome:** after launch, zero manual user-list imports by DKB operations for the pilot organization.

## Scope
**In v1**

| # | Feature | What's included |
|---|---|---|
| 1 | Admin sign-in | OTP login (proposal default, §3 Rules › Target login); access gate for numbers that aren't admins; two fixed roles «مدیر» / «ادمین»; first admin accounts created by DKB |
| 2 | Overview | 4 KPI cards, 1 spending chart, recent orders, one period filter, "last updated" time |
| 3 | Employee list | Data table with search, filters, status; KPI cards link here pre-filtered |
| 4 | Employee detail | Summary (allowance, spent, remaining, status) and that person's orders |
| 5 | Manage employees («ادمین» only) | Add one; import an Excel/CSV file with a validation preview; deactivate and reactivate (one or many) |
| 6 | Orders | List with 4 status tabs, search, read-only detail (status, amount, shipment, payment, refund status; no items) |
| 7 | Export | Excel of the employee or order list with the current filters |

**Not in v1** (DKB operations keeps doing these; proposal priorities in §11): segments, allocating or topping up allowance, catalog scope and purchase caps, delivery policy and organization hubs, store branding, sub-admins / custom roles / handing over the main admin, activity log, SMS and announcements, order approvals (Gap #6), scheduled reports and API, funding-partner view, support tickets, deleting employees.

## Constraints
- **Pilot tenant: Central Bank (CBI)** — decided by the design lead (2026-10-31). It already has what the dashboard needs: OTP login, imported users with registration off, one allowance per person (20M toman in a Digipay wallet, no expiry), regions (Portals foundation › §1 Live tenants, §3 tenant flags). `cbi` (Tehran) and `cbint` (other regions) are two stores of **one** organization: the dashboard shows both together with a region filter.
- **The portal doesn't own the money** (§1 Boundaries, glossary «حق مصرف»). Allowance sits in the partner's wallet (Digipay for CBI). "Spent" is computed from portal orders; "remaining" comes from Digipay's per-person wallet balance (confirmed available, 2026-10-31). If the balance call fails, the value shows «نامشخص» instead of a wrong number.
- **Identity is the mobile number.** Users are pre-imported; adding an employee makes that number eligible for OTP login to the store (§3 Rules › Access, Identity). Numbers not on the list see «ورود به فروشگاه برای شما امکان‌پذیر نیست».
- **Purchases are personal.** Invoices are issued in the end user's name, not the organization's (§3 Rules › Invoice). Decided (2026-10-31): admins see **totals and statuses only**, never the items an employee bought — not in the order detail, the employee detail or the export.
- **Order statuses:** 12 keys in the portal dictionary (§4 Order). The admin view groups them into 4 tabs (Decisions) and uses the B2R label «لغو شده» for canceled (Gap #7).
- **Refunds:** "refunded" in the system doesn't mean the money is back in the wallet; refunds can be queued (§1 Results, Gap #9). The design must not promise more than the data says.
- **Peaks:** most CBI buying happened in about two days, 52% between 17:00 and 23:00 (§1, principle 8). Admins will watch the dashboard during the window, so data freshness must be visible.
- **Content:** Persian, polite «شما», Persian digits, toman (APIs return rial, always convert), Jalali dates (§10 Content; AGENTS.md hard rule 4).
- **Platforms:** Desktop 1440 is the main target; Mobile 360 shows the overview and read-only lists (no add, import or deactivate). `responsive` mode set per frame.
- **Brand mode:** B2E on every admin screen — decided (2026-10-31), within DS-3 (portals use B2R or B2E until they have their own). The CBI store keeps its own navy; the admin is DKB's organization workspace.

## UX grounding
Patterns in this task: dashboard / KPI overview, resource index (data table with search, filters, bulk actions), record detail, single-record form, file import with validation, destructive-but-reversible action (deactivate), export, OTP sign-in and access gate, empty and loading states. Priority: product rules › accessibility › DKB principles and research › DKB Design System › external practice (UX-GROUNDING.md §2).

| Guideline | Source | How it applies here |
|---|---|---|
| The portal records the allowance but doesn't hold the money; base price and money source rules | Portals foundation › §1 Boundaries, §3 Rules | "Spent" from portal orders; "remaining" from the Digipay wallet balance; «نامشخص» with a tooltip only when that call fails |
| One product, many skins: no per-tenant flows | Portals principle 1, Gap #1 | One admin for every tenant; tenant differences (region for CBI) are filters and columns that appear only when the tenant has them |
| The allowance is the hero | Portals principle 2 | First KPI is allowance usage (spent of allocated, %); employee rows show allowance, spent, remaining |
| Money goes back where it came from; say which wallet and when | Portals principle 7, Gap #9 | Order detail shows refund state and target wallet; "registered" and "paid back" kept apart when data allows |
| Design for peaks | Portals principle 8 | «آخرین به‌روزرسانی» time on the overview and lists; day-by-day chart during the buying window |
| A dashboard has one job: communicate critical information at a glance | [NN/g: dashboards and preattentive processing](https://www.nngroup.com/articles/dashboards-preattentive/) | Overview limited to 4 KPIs, one chart and recent orders; exploration happens in the lists |
| Show quantities with length and position; avoid pies, donuts and radial gauges; linear bullet bars for a value against a target | [NN/g: dashboards and preattentive processing](https://www.nngroup.com/articles/dashboards-preattentive/) | Usage KPI uses a linear `progress` bar, not a gauge or donut; spending over time is a bar chart |
| Colour never carries meaning alone | [WCAG 2.2 · 1.4.1 Use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | Status `badge`s always have text; chart has a title and a table view (chart.md) |
| Tables support find, compare, view one record, act on records; first column is a human-readable identifier; related columns together | [NN/g: data tables](https://www.nngroup.com/articles/data-tables/) | Employee table starts with the name (staff ID beside it); money columns grouped (allowance, spent, remaining) |
| Filters discoverable and quick, active filters clearly shown; batch actions via row checkboxes with actions above the table | [NN/g: data tables](https://www.nngroup.com/articles/data-tables/) | Filter controls in the `data-table` toolbar, active filters as removable chips with «پاک کردن همه»; selecting rows reveals «غیرفعال کردن» / «فعال کردن» |
| Viewing one row: a side panel keeps the table visible; avoid modals for deep work | [NN/g: data tables](https://www.nngroup.com/articles/data-tables/) | Order detail opens in a `sheet`; employee detail is its own page because it holds a second table (its orders) |
| Native table semantics; sortable headers expose `aria-sort`; table has a label; few widgets per row | [WAI-ARIA APG: table](https://www.w3.org/WAI/ARIA/apg/patterns/table/) | `data-table` keeps one checkbox and one row-action menu per row; table labelled by the page title |
| Resource index layout: title = resource type, whole-list actions at the top, then filters and sort, then the list; import and export as secondary page actions; empty state when the list is empty | [Polaris: resource index layout](https://polaris-react.shopify.com/patterns/resource-index-layout) | Employees page: title «کارمندان», main action «افزودن کارمند», secondary «بارگذاری فایل» and «خروجی اکسل»; `empty` for no employees |
| Row actions in the last cell as tertiary or icon buttons or one menu; no primary buttons in tables; content in cards; numeric columns aligned to the end | [Shopify app design: layout](https://shopify.dev/docs/apps/design/layout) | Row action = `icon-button` (more) opening a `dropdown-menu`; amounts `align=end` (AGENTS.md table lesson) |
| Import: a downloadable template, headers on the first row, one encoding; duplicates skipped unless the user opts to overwrite; export scoped to current page, selection or current filters | [Shopify Help: import and export customers](https://help.shopify.com/en/manual/customers/import-export-customers) | Template download in the import dialog; duplicate mobile numbers skipped by default; export uses the current filters and says how many rows |
| File upload errors are specific: wrong type, too large, empty, not the template, couldn't upload — and tied to the input | [GOV.UK: file upload](https://design-system.service.gov.uk/components/file-upload/) · [WCAG 3.3.1 / 3.3.3](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html) | Import errors written per case in Persian (e.g. «فایل انتخاب‌شده باید با قالب نمونه یکسان باشد»); row errors list the row number and the reason |
| Status changes are announced without moving focus | [WCAG 2.2 · 4.1.3 Status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) | Save, import and deactivate results use `toast` (live region) |
| Prevent errors and let users undo | [NN/g heuristics 3 and 5](https://www.nngroup.com/articles/ten-usability-heuristics/) | Deactivate, not delete; confirmation states the effect; reactivate is always one action away |
| Workspace shell for admin and report pages | DS-36 › layouts T7 `template/workspace` | Every inside page starts from `template/workspace` (sidebar right, inset header, KPI row, chart, data table) |
| One y-axis, series colours `chart.1…5` in order, a title saying what and when, a table view | `components/chart.md` (DS-34) | Spending chart: one series (`chart.1`), title like «هزینه خرید روزانه، مهر ۱۴۰۵» |
| Main action last at the far left; one main action per container | DS-46 `foundations/action-placement.md` | Page header, dialogs and the import steps follow it |
| Mobile sections full width; dialogs become drawers on mobile | DS-45, DS-32 | Mobile overview and lists use `card edge=full`; order detail on mobile is a `drawer` |

Conflicts found: none yet. The Shopify import guide has no row-level error preview; the preview is our own addition (GOV.UK error rules applied to rows).

## Flow
1. **Sign in.** Admin opens the dashboard URL → enters mobile → OTP → overview. A number that isn't an admin sees the access gate (T9) with who to contact.
2. **Monitor.** Overview → period filter → a KPI card opens the matching list pre-filtered (e.g. «هنوز خرید نکرده‌اند» → employees, filter "no orders"; «بازگشت وجه در جریان» → orders, refunds).
3. **Find an employee.** Employees → search by name, mobile or staff ID / filter → open the row → employee detail (summary + orders) → order row opens the order `sheet`.
4. **Add one employee** («ادمین»). «افزودن کارمند» → dialog: name, mobile, staff ID, region (CBI) → «افزودن» → `toast`; the row appears. Duplicate or invalid mobile → field error.
5. **Import a file** («ادمین»).
   1. «بارگذاری فایل» → dialog: download the template, choose an .xlsx or .csv.
   2. Validation preview: counts (ready to add, already on the list → skipped, rows with errors) and a table of error rows (row number, column, reason).
   3. «افزودن ۹٬۸۴۲ کارمند» adds the valid rows, or «انتخاب فایل دیگر» to fix and re-upload.
   4. Result `toast` and an `alert` on the list with a link to download the error rows.
6. **Deactivate / reactivate** («ادمین»). Row menu or select rows → «غیرفعال کردن» → `alert-dialog` states the effect (can't sign in to the store; placed orders continue) → confirm → `toast`. Reactivate is the same action in reverse, without a confirmation.
7. **Orders.** Orders → status tab → search by order number or employee → order `sheet` (status, employee, amount, payment, shipments, refund state and wallet; no item list).
8. **Export.** «خروجی اکسل» on employees or orders → exports the current filters ("۱٬۲۳۴ ردیف") → download.

Exits: sign out from the user menu at the bottom of the `sidebar`.

### Admin order-status tabs
| Tab | Status keys (Portals foundation › §4) |
|---|---|
| جاری | pending_payment, order_approval, pending_supernova, pending_supernova_confirmation, pending, processing |
| تحویل شده | completed |
| لغو شده | canceled, delivery_canceled, pending_supernova_cancellation, fraud |
| مرجوع شده | orders with a full or partial return (from refund data, not a status key; Figma tab «مرجوع شده») |

`closed` («بسته شده») is not mapped yet — Open question 6.

## Screens
| Screen | Breakpoint | Brand | Figma frame | Notes |
|---|---|---|---|---|
| Admin sign-in (mobile → OTP) | Desktop, Mobile | B2E | `auth/login/desktop`, `auth/login/mobile` | `template/auth`; `field`, `input-otp`, `button` |
| No access | Desktop, Mobile | B2E | `auth/no-access/desktop`, `…/mobile` | `template/result`; names the organization contact |
| Overview | Desktop, Mobile | B2E | [`overview/home/desktop`](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=1-1683) ✅, `…/mobile` | `template/workspace`: page header + period filter, 4 KPI cards, spending chart, recent orders table |
| Employees list | Desktop, Mobile | B2E | [`employees/list/desktop`](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=6-2033) ✅, `…/mobile` | `data-table`; mobile = `item` rows, no management actions |
| Employee detail | Desktop, Mobile | B2E | [`employees/detail/desktop`](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=11-2264) ✅, `…/mobile` | Name + status `badge`, 3 `proposal/stat-card`s (spent with progress, remaining from the Digipay wallet, orders), orders table with amount and status only and a «جزئیات» link per order; «غیرفعال کردن» (`outline`) for «ادمین» |
| Add employee | Desktop | B2E | `employees/add/desktop` | `overlay` + `dialog`, local `content/employee-form` |
| Import — choose file | Desktop | B2E | [`employees/import-file/desktop`](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=10-1783) ✅ | `overlay` + `dialog` with local `content/import-file` in the slot: template download, `separator`, `proposal/file-upload` (selected), note; footer «بررسی فایل» / «انصراف» |
| Import — validation preview | Desktop | B2E | [`employees/import-preview/desktop`](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=10-2007) ✅ | `dialog` widened to 720 with local `content/import-preview`: 3 `item`s (ready / duplicate / error counts), error rows table (row, column, value, problem), «دریافت فایل خطاها»; footer «افزودن ۴۸۲ کارمند» / «انتخاب فایل دیگر» |
| Deactivate confirmation | Desktop | B2E | `employees/deactivate/desktop` | `alert-dialog`, one or many employees |
| Orders list | Desktop, Mobile | B2E | `orders/list/desktop`, `…/mobile` | 4 `tabs`, `data-table` |
| Order detail | Desktop, Mobile | B2E | `orders/detail/desktop`, `…/mobile` | `sheet` on desktop, `drawer` on mobile |

### Overview content (desktop, right to left)
| KPI card | Value | Secondary line | Opens |
|---|---|---|---|
| مصرف اعتبار | Spent, toman | «از ۲۰۰ میلیارد تومان» + `progress` (%) | Employees, sorted by spent |
| خریداران فعال | Unique buyers | «از ۱۰٬۰۰۰ کارمند» | Employees, filter "has orders" (and a link to «هنوز خرید نکرده‌اند») |
| سفارش‌ها | Paid orders | Average order amount | Orders |
| بازگشت وجه در جریان | Orders with refunds not yet paid back | Total amount | Orders, refunds |

Below: «هزینه خرید هفتگی» bar chart (daily for ranges under 14 days) with «نمایش جدول», then «آخرین سفارش‌ها» (5 rows, «مشاهدهٔ همهٔ سفارش‌ها»).

The overview page header holds the period filter: `select` «همهٔ مناطق», `button-group` «کل دوره / این ماه / این هفته» (selected = `secondary`, others `outline`) and an `outline` button «بازهٔ دلخواه». Mock data follows the CBI report (§1): 10,000 staff × 20M toman, peak in the first week.

### Employee table columns (desktop, right to left)
Checkbox («ادمین» only) · نام و نام خانوادگی · کد پرسنلی · شماره موبایل · منطقه (CBI) · اعتبار (hidden when every employee has the same allowance, as in CBI; the amount is in the page description) · خرج‌شده · مانده · سفارش‌ها · آخرین خرید · وضعیت (`badge`: فعال / غیرفعال / هنوز وارد نشده) · row menu.
Filters: وضعیت, خرید (has orders / none), منطقه (CBI). Search: name, mobile, staff ID.

## States
| Screen | State | Figma frame |
|---|---|---|
| All lists and overview | Loading (`skeleton` in KPI cards, chart and table rows) | `*/loading` |
| All lists and overview | Couldn't load (`alert` with «تلاش دوباره»); one part failed while others loaded | `*/error` |
| Overview | Programme not started / no orders yet (KPIs at zero, chart `empty`) | `overview/home/empty` |
| Overview, employees | Digipay balance call failed → «مانده» shows «نامشخص» with a `tooltip`; other numbers still load | `overview/home/no-balance` |
| Employees | No employees yet (`empty` with «بارگذاری فایل») · no search results · filters with no match | `employees/list/empty`, `…/no-results` |
| Employees | Long content: long names, 10K+ rows with `pagination`, deactivated rows | `employees/list/long` |
| Employees | Role «مدیر»: no checkboxes, no add/import, no deactivate | `employees/list/viewer` |
| Employees | Rows selected (bulk bar with count and actions) | `employees/list/selected` |
| Add employee | Field errors: invalid mobile, number already on the list | `employees/add/error` |
| Import | File errors: wrong type, too large, empty, not the template, upload failed | `employees/import-file/error` |
| Import | Uploading / validating (`progress`) | `employees/import-file/uploading` |
| Import preview | All rows valid · some rows with errors · every row has an error (main action disabled, reason shown) | `employees/import-preview/*` |
| Orders | Each tab empty · refund registered vs paid back · awaiting payment with time left | `orders/list/*`, `orders/detail/*` |
| Sign-in | Wrong or expired OTP · number not an admin (gate) | `auth/login/error`, `auth/no-access/*` |

## Components used
Planned; confirm against `components.json` while designing.

| Component | Variants / properties used | Notes |
|---|---|---|
| `template/workspace`, `template/auth`, `template/result` | screen: desktop/mobile | Start every screen from one (DS-36) |
| `sidebar`, `sidebar-menu-button` | expanded; active item | Items: «نمای کلی», «کارمندان», «سفارش‌ها»; organization name on top, user menu at the bottom |
| `breadcrumb` | | Inset header on detail pages |
| `card` | default; mobile `edge=full size=sm` | KPI cards (until `proposal/stat-card` is decided), summary blocks |
| `progress` | | Allowance usage; import progress |
| `chart`, `chart-legend`, `chart-tooltip` | type=bar | One series, `chart.1` |
| `data-table`, `table`, `table-cell` | header/body; align=end for amounts; state=selected | Employees, orders, import error rows, recent orders |
| `tabs`, `tab` | style=line | Order status tabs |
| `input-group` | search icon | Table search |
| `select`, `combobox`, `checkbox` | | Filters, row selection |
| `button-group`, `date-picker` | | Period presets «امروز / این هفته / این ماه / کل دوره» + custom Jalali range |
| `button`, `icon-button`, `dropdown-menu`, `menu-item` | primary/secondary/outline/ghost; destructive menu item | Page actions, row menu |
| `badge` | tone success/neutral/warning/info/destructive, style subtle | Employee and order status |
| `dialog`, `overlay`, `alert-dialog`, `sheet`, `drawer` | content via slot | Add, import, deactivate, order detail |
| `field`, `label`, `input`, `input-otp` | state default/filled/error | Add employee form, sign-in |
| `alert`, `empty`, `skeleton`, `toast`, `tooltip` | | States |
| `pagination` | default; compact on mobile | Long lists |
| `item` | | Mobile list rows |

## Component requests
1. **`proposal/file-upload`** ([Figma](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=10-929), local component set on the `proposals` page, variants `state=default / selected / error`, text properties `title`, `hint`, `fileName`, `fileMeta`, `error`) — pick or drop one file, show the chosen file with remove, show upload progress and a specific error. No file input exists in DKB Components; import needs one (later also for B2E documents and KYC letters). Proposed API: `state` default / dragover / selected / uploading / error; text properties `title`, `hint` («فایل اکسل یا CSV، حداکثر ۵ مگابایت»), `fileName`, `error`. Behaviour from [GOV.UK file upload](https://design-system.service.gov.uk/components/file-upload/).
2. **`proposal/stat-card`** ([Figma](https://www.figma.com/design/7XQ7yHeGH9gzzQq7tnDnPK?node-id=2-63), local component on the `proposals` page) — a KPI tile: `label`, `value` (`numeric-lg`), `secondary` line, optional `progress`, optional link state (whole card clickable to a filtered list). `chart.md` says one number should be a stat, and the T7 template has four KPI regions but no component to fill them; the same tile will serve the B2E company admin. Built as a local component with properties `label`, `value`, `unit`, `showUnit`, `secondary`, `showProgress`, `icon` (INSTANCE_SWAP); tokens only (`bg.surface`, `border.default`, `radius.card`, `shadow/card`, `space.20` / `space.12`, `numeric-lg`, `label`, `body-sm`), DKB `progress` inside (its indicator resized to the real %, because `progress` only has 0/25/50/75/100 variants — see request 4).
3. **`proposal/bar-chart`** (frame inside `section/spend-chart`) — the library `chart` is a fixed sample: 520 px wide, a fixed 480 px plot, two series of preset bars, and bars can't be moved inside an instance, so it can't show real data or fill a section. Built from tokens to the `chart.md` spec (y values on the left, time left to right, grid `border.default`, baseline `border.strong`, 16 px bars `chart.1` with `radius.sm` tops, `numeric-sm` / `caption` labels in `text.muted`). Request: make `chart` data-driven (bar count, values, width) or document it as an illustration-only component.
4. **`progress` values** — only 0/25/50/75/100 variants; a usage bar needs any percentage. Request a `value` that accepts any number (or document resizing the indicator as an allowed override).

## Decisions
| Decision | Why (evidence) |
|---|---|
| v1 = view, export and employee-list management; everything else stays with DKB ops | Gap #2; proposal P0 "eligible users" (§11); product ask for a simple, light first version |
| Pilot on CBI; `cbi` and `cbint` are one organization with one dashboard and a region filter | Design lead, 2026-10-31. Only live tenant with OTP, imported users and one allowance per person (§1, §3); Mehrad users are beneficiaries via SSO, Shad has no organization admin |
| One admin product, tenant differences only as filters and columns | Portals principle 1; Gap #1 |
| Workspace shell, desktop first; mobile = overview and read-only lists | DS-36 T7; `data-table` is desktop only (data-table.md); management tasks need a wide table |
| Overview = 4 KPIs, one bar chart, recent orders | NN/g dashboards; chart.md |
| Allowance usage as a linear progress bar, no gauges or donuts | NN/g dashboards (bullet bars over radial gauges, avoid pies/donuts) |
| KPI cards open pre-filtered lists | NN/g data tables (find records matching criteria); keeps the overview light |
| Employee table: name first, money columns grouped and end-aligned, visible filters with chips, checkbox bulk actions | NN/g data tables; Shopify layout; AGENTS.md table lesson |
| Page actions: «افزودن کارمند» main; «بارگذاری فایل», «خروجی اکسل» secondary | Polaris resource index layout; DS-46 |
| Import with template, preview before adding, duplicates skipped, row-level errors | Shopify import/export customers; GOV.UK file upload; WCAG 3.3.1 / 3.3.3 |
| Deactivate instead of delete; confirm with the effect; reactivate in one action | NN/g heuristics 3 and 5; proposal lists "remove" separately, left out of v1 |
| Order statuses grouped into 4 tabs; canceled = «لغو شده» | §4 Order; Gap #7 (B2R label) |
| «خرج‌شده» counts paid orders only; an order awaiting payment is shown but not counted (caption under the employee's orders) | Proposed answer to open question 5, so the employee list, the detail and the overview add up; confirm with product |
| Import runs in a dialog over the employee list: choose file → preview with counts and error rows → add the valid rows | Shopify import/export; GOV.UK file upload; NN/g heuristic 3 (the list stays in context, «انتخاب فایل دیگر» goes back) |
| Admins see totals and statuses only, never purchased items (screens and export) | Design lead, 2026-10-31; §3 Rules › Invoice in the end user's name |
| Two fixed roles; «مدیر» doesn't see management controls | Proposal: custom admin roles are P1 (§11) |
| Order detail in a `sheet`, employee detail as a page | NN/g data tables (side panel keeps context); employee detail holds its own table |
| Status always text, never colour alone | WCAG 1.4.1 |
| Show «آخرین به‌روزرسانی» | Portals principle 8 (peaks) |
| Employee table hides «اعتبار» for CBI (everyone has 20M); the amount moves to the page description | Keeps the name column readable at 1440 (NN/g data tables: order columns by importance); column comes back for tenants with different allowances |
| Period presets as `button-group`, selected preset = `secondary` | button-group.md names date presets as its use; DS has no selected state for it yet (open question 14) |
| Brand mode B2E on every admin screen | Design lead, 2026-10-31; DS-3; the admin is an organization workspace like the B2E company admin (layouts, Workspace shell) |
| «مانده» from the Digipay wallet balance per employee | Design lead, 2026-10-31 (Digipay can provide it); Portals principle 2 |

## Open questions
- [x] 1. **Pilot tenant:** CBI; `cbi` + `cbint` are one organization. *(design lead, 2026-10-31)*
- [x] 2. **Remaining balance:** yes, Digipay provides each person's wallet balance; «مانده» is shown. *(design lead, 2026-10-31)* Still to confirm with engineering: refresh rate and whether the allocated amount comes from Digipay too. Mehrad later.
- [x] 3. **Privacy:** totals and statuses only. *(design lead, 2026-10-31)*
- [ ] 4. **Refund states:** can we tell "refund registered" from "money back in the wallet"? (Gap #9)
- [ ] 5. **Definition of "spent":** paid orders minus refunds? Are awaiting-payment orders excluded? Same definition in the export.
- [ ] 6. **`closed` status** and the source of «مرجوع شده»: which tab, and is there a return status in the data?
- [ ] 7. **Deactivation effect:** the employee can't sign in — what happens to open orders and the money left in their wallet?
- [ ] 8. **Employee fields:** what did the CBI import contain (mobile only, or name, staff ID, unit)? This sets the template and the table columns.
- [x] 9. **Brand mode:** B2E. *(design lead, 2026-10-31)*
- [ ] 10. **Admin accounts:** without a platform console, how does DKB create the first admins, and can an «ادمین» add another admin in v1?
- [ ] 11. **Data freshness:** how fresh can orders and balances be during a peak (real time, every few minutes)?
- [ ] 12. **Large exports:** download directly or prepare and notify (Shopify emails exports over 50 rows)?
- [ ] 13. **Later tenants:** Mehrad's "organization" is the Relief Committee and its users are beneficiaries; check the same dashboard fits before v2.
- [ ] 14. **Selected state in `button-group`:** the design uses `secondary` for the selected period; confirm or add a selected state to the component (design lead).

## Audit
2026-10-31, `audit-design.js` on the *Screens* page (5 screens, 1,609 nodes): **pass** — 0 unbound colours, 0 text without a style, 0 non-library instances outside `proposal/` frames, 0 detached-looking frames, 0 slots or template regions left, 0 templates not detached, 0 rounded containers at the screen edge, 0 button-order errors; 0 warnings. All 5 desktop screen frames have `minHeight = 1024` (DS-49, mobile 800; the shorter ones now open at 1024 with the sidebar to the bottom and the dialog overlays resized). Screenshots checked in B2E Desktop. Dialog content lives as local `content/*` components on the `proposals` page and is swapped into the `dialog` slot.

Done (desktop): overview, employees list, employee detail, import (choose file, preview). Not yet designed: mobile screens, add employee, deactivate confirmation, orders list and detail, sign-in and no-access, the States page.
