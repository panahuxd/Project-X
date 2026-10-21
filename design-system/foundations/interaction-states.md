# Interaction states

> Status: policy (DS-43). Applies to every DKB component and to anything built from tokens in a `proposal/` frame. No new tokens: every state below uses an existing one.

## 1. The states

| State | Trigger (code) | Who has it | Figma variant name |
|---|---|---|---|
| default | — | everything interactive | `default` (toggle: `off`) |
| hover | `:hover`, pointer devices only | buttons, links, rows, triggers, selection controls | `hover`; menus: `highlighted` |
| pressed | `:active` while pressed | buttons, icon buttons | `pressed` |
| focus | `:focus-visible` (keyboard only) | everything focusable | `focus`; menus: `highlighted` |
| selected / current | `aria-selected`, `aria-current`, `aria-pressed`, `data-state=on|open` | tabs, nav items, rows, toggles, days, options | `active` (tab, nav, pagination, sidebar), `selected` (table, calendar), `on` (toggle), `open` (trigger), `checked` (checkbox, radio, switch) |
| disabled | `disabled`, `aria-disabled` | every control | `disabled` |
| loading | `aria-busy` | buttons, async sections | `isLoading` property |
| invalid | `aria-invalid` | form controls | `error` (checkbox) or the `field` error state |
| read-only | `readonly` | text fields | spec note, no variant |

The variant names stay as they are (renaming would change library keys); the column above is the mapping. New components use these names: `default`, `hover`, `pressed`, `focus`, `disabled`, plus **`active`** for selected/current navigation and **`selected`** for selected data (rows, options, days).

**Not used:** visited links (no separate colour in a product UI), drag states (define per component when one is built).

## 2. Fills: the ladder rule

Each interactive fill has a ladder. **Hover = one step up. Pressed = the next step if the ladder has one; otherwise pressed reuses hover.** Only the primary action has its own pressed step, because it is the most used and needs the clearest feedback.

| Ladder | rest → hover → pressed | Used by |
|---|---|---|
| Primary | `bg.primary` → `bg.primary-hover` → `bg.primary-active` | primary button, primary icon button |
| Destructive | `bg.destructive` → `bg.destructive-hover` → (`bg.destructive-hover`) | destructive button |
| Muted | `bg.muted` → `bg.muted-hover` → (`bg.muted-hover`) | secondary button |
| Neutral | none / `bg.default` → `bg.hover` → `bg.muted-hover` | outline and ghost buttons, icon buttons, toggles, triggers, pagination |
| Primary tint | `bg.primary-subtle` → `bg.primary-subtle-hover` → (same) | selectable cards and options |
| Rows | none → `bg.hover` (no pressed) | menu items, list items, table rows, nav links, sidebar items |

Text and icons don't change colour on hover, with two exceptions: links (§3) and inactive tabs / nav items (`text.muted` → `text.default`, code only; the tab set has no hover variant).

Never invent a step (for example `bg.destructive` darkened by hand, or an opacity overlay). If a component needs a step that doesn't exist, raise it as a token request.

## 3. Links

| State | Look |
|---|---|
| default | `text.link` |
| hover | `text.link` + underline |
| pressed | `text.primary` |
| focus | focus ring (§5) |

Links inside body text are always underlined (colour alone fails WCAG 1.4.1); standalone links (button `link` variant, "show all") underline on hover only.

## 4. Selected, current, on, open

| What | Look |
|---|---|
| Navigation, current page (sidebar, account-menu) | `bg.muted` + `label` text style; `aria-current="page"` |
| Bottom-nav item | `text.primary` icon and label (no fill) |
| Tab | `default` style: `bg.default` + `shadow.card`; `line` style: `text.default` + 2 px `border.primary` |
| Pagination page | outline look: `bg.default` + `border.input` + `shadow.card` |
| Table / list row selected | `bg.muted` (shadcn `data-[state=selected]:bg-muted`) |
| Selectable card or option (address, payment method, shipping) | `bg.primary-subtle` + `border.primary`; hover on unselected: `bg.hover` |
| Toggle on | `bg.muted` |
| Trigger open (navigation menu, select, combobox) | keeps the hover fill while open; chevron rotates |
| Checkbox, radio, switch on | `bg.primary` (DS-21 for the boundary) |
| Calendar day selected | `bg.primary` + `text.on-primary` (also range ends); range middle `bg.hover` |

Brand tint (`bg.primary-subtle`) is for **choices the user makes** (cards, options); neutral `bg.muted` is for **position** (current page, selected rows). Never use both on one element.

## 5. Focus

- Keyboard only (`:focus-visible`); a mouse click never shows the ring.
- Controls with a fill: `border.focus` (where the control has a border) + effect style `shadow.focus-ring` (DS-22). Controls without a fill (ghost, link): 3 px outside stroke in `ring.default` (Figma can't draw the shadow around a transparent frame).
- Rows in menus, command lists and listboxes: focus = `highlighted` (`bg.hover`), no ring; the list itself holds DOM focus.
- Cards and rows that are links: ring on the whole card or row.
- Focus combines with any other state (hover + focus, selected + focus) and is never removed without a visible replacement.

## 6. Disabled, loading, invalid, read-only

| State | Look | Behaviour |
|---|---|---|
| disabled | the normal look at `opacity.disabled` (DS-28) | no hover, pressed or focus; prefer telling why (helper text or tooltip on a wrapper) |
| loading | spinner replaces the leading icon, label stays, width unchanged | taps ignored, `aria-busy="true"`; not greyed out |
| invalid | `border.destructive`; when focused `shadow.focus-ring-destructive` is added; error text `text.destructive` under the field (DS-39) | the border carries the error, never the ring alone |
| read-only | `bg.muted` fill, `text.default`, normal border | focusable and selectable; no hover |
| inactive content (unavailable product, past date) | `text.disabled` (DS-39) | not a control state |

## 7. Precedence

When states combine, the visual priority is: **disabled › loading › invalid › pressed › selected › hover › default**. Focus is drawn on top of whichever wins. Example: a selected row under the pointer stays `bg.muted`; a hovered invalid field keeps `border.destructive`.

## 8. Touch and mobile

- No hover on touch: anything shown only on hover (tooltip, hover-card, actions revealed on row hover) needs a tap or always-visible alternative on Mobile.
- Pressed is the touch feedback: buttons show their pressed fill while touched; rows show `bg.hover` while touched.
- Hit area at least 40 × 40 on Mobile (`control.height-md`), also for icon buttons and nav items.

## 9. Motion

Colour and fill changes use `motion.duration.fast` (100 ms) with `motion.easing.standard`. Focus rings and pressed fills appear instantly. Respect `prefers-reduced-motion` for anything that moves (not for colour).

## 10. In designs (for agents)

- Screens show the **default** look and the states the task is about (selected, error, disabled, loading, empty). Don't add hover or pressed to screens unless the flow is about them; those live in the component sets.
- Selected / current must be set on every list, nav, tab and stepper in a screen (exactly one current item).
- A `proposal/` component lists its states in its spec using this file's names and ladders.
