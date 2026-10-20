# shadcn/ui coverage

Goal: every component in the [shadcn/ui component list](https://ui.shadcn.com/docs/components) has a DKB equivalent (DS-24). List checked on 2026-10-20: 66 entries.
Status: **done** · **planned** (batch) · **deferred** · **spec only** (code helper with no visual of its own).

| shadcn/ui | DKB component | Batch | Status | Notes |
|---|---|---|---|---|
| Accordion | accordion | 3 | done |  |
| Alert | alert | – | done | |
| Alert Dialog | alert-dialog | 2 | done |  |
| Aspect Ratio | aspect-ratio | 3 | done (spec only) | Media frame ratios as a spec + sample |
| Attachment | – | 6 | deferred | AI / conversation (DS-25) |
| Avatar | avatar | 3 | done |  |
| Badge | badge | – | done | |
| Breadcrumb | breadcrumb | 4 | done | Separator mirrors in RTL |
| Bubble | – | 6 | deferred | AI / conversation |
| Button | button | – | done | |
| Button Group | button-group | 1 | done |  |
| Calendar | calendar | 5 | done | Jalali only, Persian digits, week starts Saturday (DS-27) |
| Card | card | 3 | done |  |
| Carousel | carousel | 4 | done | Scrolls right to left |
| Chart | chart | 5 | done | Needs `chart.1–5` tokens |
| Checkbox | checkbox | – | done | |
| Code Block | – | 6 | deferred | AI / conversation |
| Collapsible | collapsible | 3 | done |  |
| Combobox | combobox | 2 | done | select trigger + command list |
| Command | command | 2 | done |  |
| Context Menu | context-menu | 2 | done |  |
| Data Table | data-table | 3 | done | Pattern on top of table |
| Date Picker | date-picker | 5 | done | popover + Jalali calendar |
| Dialog | dialog | 2 | done |  |
| Direction | direction | 3 | done (spec only) | RTL is the default everywhere; spec documents `dir="rtl"` and LTR islands |
| Drawer | drawer | 2 | done | Bottom sheet on mobile; replaces dialog there (DS-32) |
| Dropdown Menu | dropdown-menu | 2 | done | Rows are `menu-item`; also the option list of select |
| Empty | empty | 3 | done |  |
| Field | field | 1 | done | Replaced `input-field` (label + control + helper/error) (DS-26) |
| Hover Card | hover-card | 2 | done |  |
| Input | input | 1 | done | Atom (DS-26) |
| Input Group | input-group | 1 | done | Addons, icons, inline buttons |
| Input OTP | input-otp | 1 | done | Digits run left to right inside RTL |
| Item | item | 3 | done |  |
| Kbd | kbd | 1 | done |  |
| Label | label | 1 | done | Atom (DS-26) |
| Marker | – | 6 | deferred | AI / conversation |
| Menubar | menubar | 2 | done |  |
| Message | – | 6 | deferred | AI / conversation |
| Message Scroller | – | 6 | deferred | AI / conversation |
| Native Select | native-select | 1 | done |  |
| Navigation Menu | navigation-menu | 4 | done |  |
| Pagination | pagination | 4 | done | Arrows mirror in RTL |
| Popover | popover | 2 | done |  |
| Progress | progress | 1 | done | Fills from the right |
| Questionnaire | – | 6 | deferred | AI / conversation |
| Radio Group | radio | – | done | |
| Resizable | resizable | 3 | done | Handle component + spec |
| Scroll Area | scroll-area | 3 | done | Scrollbar on the left in RTL |
| Select | select | – | done (trigger) | Option list comes with dropdown-menu (batch 2) |
| Separator | separator | 1 | done |  |
| Sheet | sheet | 2 | done | Opens from the right (start) |
| Sidebar | sidebar | 4 | done | On the right in RTL |
| Skeleton | skeleton | 1 | done |  |
| Slider | slider | 1 | done | Fills from the right |
| Spinner | spinner | 1 | done |  |
| Switch | switch | – | done | |
| Table | table | 3 | done | Numbers use `numeric` styles |
| Tabs | tabs | 3 | done |  |
| Textarea | textarea | 1 | done |  |
| Toast | toast | 2 | done | shadcn Sonner; bottom-left on desktop (RTL) |
| Toggle | toggle | 1 | done |  |
| Toggle Group | toggle-group | 1 | done |  |
| Tooltip | tooltip | 2 | done | `bg.inverse` |
| Trace | – | 6 | deferred | AI / conversation |
| Typography | typography | 3 | done (spec only) | The 15 DKB text styles; spec maps shadcn typography to them |

**Totals:** 55 done + 3 spec-only guides (all of batches 1–5; select done as trigger, its list is dropdown-menu) · 8 deferred (AI, DS-25). Every non-AI shadcn/ui component has a DKB equivalent. DKB also has `icon-button` (shadcn: `Button size="icon"`) and helpers: `menu-item`, `slot`, `overlay`, `tab`, `accordion-item`, `table-cell`, `pagination-link`, `navigation-menu-trigger`, `navigation-menu-link`, `sidebar-menu-button`, `calendar-day`, `chart-legend`, `chart-tooltip`.

## Batches

| Batch | Scope | Count |
|---|---|---|
| 1 | Form primitives | 16 — done (0.4.0) |
| 2 | Overlays and menus | 13 — done (0.5.0) |
| 3 | Content and display | 14 (3 spec only) — done (0.6.0) |
| 4 | Navigation | 5 — done (0.7.0) |
| 5 | Dates and charts (+ chart tokens) | 3 — done (0.8.0) |
| 6 | AI and conversation | 8 — deferred until DKB plans a chat or assistant feature |

Every component: RTL, tokens only, shadcn focus ring, disabled at `opacity.disabled`, sizes on `control.height-*`, a spec in `components/`, an entry in `components.json`, the sync check, the review board in both brands and both screens, and the design audit. After each batch: publish DKB Components, push, re-run the agent sandbox.
