# shadcn/ui coverage

Goal: every component in the [shadcn/ui component list](https://ui.shadcn.com/docs/components) has a DKB equivalent (DS-24). List checked on 2026-10-20: 66 entries.
Status: **done** · **planned** (batch) · **deferred** · **spec only** (code helper with no visual of its own).

| shadcn/ui | DKB component | Batch | Status | Notes |
|---|---|---|---|---|
| Accordion | accordion | 3 | planned | |
| Alert | alert | – | done | |
| Alert Dialog | alert-dialog | 2 | planned | |
| Aspect Ratio | aspect-ratio | 3 | spec only | Media frame ratios as a spec + sample |
| Attachment | – | 6 | deferred | AI / conversation (DS-25) |
| Avatar | avatar | 3 | planned | |
| Badge | badge | – | done | |
| Breadcrumb | breadcrumb | 4 | planned | Separator mirrors in RTL |
| Bubble | – | 6 | deferred | AI / conversation |
| Button | button | – | done | |
| Button Group | button-group | 1 | done |  |
| Calendar | calendar | 5 | planned | Jalali only, Persian digits, week starts Saturday (DS-27) |
| Card | card | 3 | planned | |
| Carousel | carousel | 4 | planned | Scrolls right to left |
| Chart | chart | 5 | planned | Needs `chart.1–5` tokens |
| Checkbox | checkbox | – | done | |
| Code Block | – | 6 | deferred | AI / conversation |
| Collapsible | collapsible | 3 | planned | |
| Combobox | combobox | 2 | planned | popover + command |
| Command | command | 2 | planned | |
| Context Menu | context-menu | 2 | planned | |
| Data Table | data-table | 3 | planned | Pattern on top of table |
| Date Picker | date-picker | 5 | planned | popover + Jalali calendar |
| Dialog | dialog | 2 | planned | |
| Direction | direction | 3 | spec only | RTL is the default everywhere; spec documents `dir="rtl"` and LTR islands |
| Drawer | drawer | 2 | planned | Bottom sheet on mobile |
| Dropdown Menu | dropdown-menu | 2 | planned | Also the option list of select |
| Empty | empty | 3 | planned | |
| Field | field | 1 | done | Replaced `input-field` (label + control + helper/error) (DS-26) |
| Hover Card | hover-card | 2 | planned | |
| Input | input | 1 | done | Atom (DS-26) |
| Input Group | input-group | 1 | done | Addons, icons, inline buttons |
| Input OTP | input-otp | 1 | done | Digits run left to right inside RTL |
| Item | item | 3 | planned | |
| Kbd | kbd | 1 | done |  |
| Label | label | 1 | done | Atom (DS-26) |
| Marker | – | 6 | deferred | AI / conversation |
| Menubar | menubar | 2 | planned | |
| Message | – | 6 | deferred | AI / conversation |
| Message Scroller | – | 6 | deferred | AI / conversation |
| Native Select | native-select | 1 | done |  |
| Navigation Menu | navigation-menu | 4 | planned | |
| Pagination | pagination | 4 | planned | Arrows mirror in RTL |
| Popover | popover | 2 | planned | |
| Progress | progress | 1 | done | Fills from the right |
| Questionnaire | – | 6 | deferred | AI / conversation |
| Radio Group | radio | – | done | |
| Resizable | resizable | 3 | planned | Handle component + spec |
| Scroll Area | scroll-area | 3 | planned | Scrollbar on the left in RTL |
| Select | select | – | done (trigger) | Option list comes with dropdown-menu (batch 2) |
| Separator | separator | 1 | done |  |
| Sheet | sheet | 2 | planned | Opens from the right (start) |
| Sidebar | sidebar | 4 | planned | On the right in RTL |
| Skeleton | skeleton | 1 | done |  |
| Slider | slider | 1 | done | Fills from the right |
| Spinner | spinner | 1 | done |  |
| Switch | switch | – | done | |
| Table | table | 3 | planned | Numbers use `numeric` styles |
| Tabs | tabs | 3 | planned | |
| Textarea | textarea | 1 | done |  |
| Toast | toast | 2 | planned | |
| Toggle | toggle | 1 | done |  |
| Toggle Group | toggle-group | 1 | done |  |
| Tooltip | tooltip | 2 | planned | `bg.inverse` |
| Trace | – | 6 | deferred | AI / conversation |
| Typography | typography | 3 | spec only | The 15 DKB text styles; spec maps shadcn typography to them |

**Totals:** 23 done (batch 1 finished 2026-10-20; select done as trigger only) · 32 planned (batches 2–5) · 3 spec only · 8 deferred. DKB also has `icon-button` (shadcn: `Button size="icon"`).

## Batches

| Batch | Scope | Count |
|---|---|---|
| 1 | Form primitives | 16 — done (0.4.0) |
| 2 | Overlays and menus | 13 |
| 3 | Content and display | 14 (3 spec only) |
| 4 | Navigation | 5 |
| 5 | Dates and charts (+ chart tokens) | 3 |
| 6 | AI and conversation | 8 — deferred until DKB plans a chat or assistant feature |

Every component: RTL, tokens only, shadcn focus ring, disabled at `opacity.disabled`, sizes on `control.height-*`, a spec in `components/`, an entry in `components.json`, the sync check, the review board in both brands and both screens, and the design audit. After each batch: publish DKB Components, push, re-run the agent sandbox.
