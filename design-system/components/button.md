# button

> Layer: Core · Status: draft · Figma: [DKB Components › Button](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=3-794) · Code: `Button` in `@digikala/ui-kit`

## Purpose
Starts an action. **One `primary` per view** (the main next step). **Don't use it for** navigation to another page inside running text (use a link) or for toggling a setting (use switch).

## Anatomy
RTL order, right to left: `iconStart` · `spinner` · `label` · `iconEnd`. In Figma the children are stored in reverse (left-to-right) order so that `iconStart` sits on the right.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `variant` | variant | `primary`, `secondary`, `outline`, `ghost`, `destructive`, `link` | `primary` | |
| `size` | variant | `sm`, `md`, `lg` | `md` | Height follows `control.height-*` (responsive: taller on mobile) |
| `state` | variant (Figma only) | `default`, `hover`, `pressed`, `focus`, `disabled` | `default` | In code these are CSS states, `disabled` is a prop |
| `label` | text | | «ادامه» | |
| `showIconStart` / `iconStart` | boolean / icon swap | any `icon/*` | off / `icon/circle` | Leading icon (right side in RTL) |
| `showIconEnd` / `iconEnd` | boolean / icon swap | any `icon/*` | off / `icon/circle` | Trailing icon (left side), e.g. `chevron-left` for "next" |
| `isLoading` | boolean | | off | Shows the spinner; button stays the same width and ignores taps |
| full width | layout | Fill container | Hug | Use on mobile for the main CTA in sheets and sticky bars |

## Tokens
| Part | Property | Token |
|---|---|---|
| container | height | `control.height-sm / -md / -lg` |
| container | padding inline | `space.12` (sm) · `space.16` (md) · `space.20` (lg) |
| container | gap | `space.6` (sm) · `space.8` (md, lg) |
| container | radius | `radius.control` |
| label | text style | `label-sm` (sm) · `label` (md) · `label-lg` (lg) |
| icons | size | `icon.size.sm` (sm, md) · `icon.size.md` (lg) |
| primary | fill / text | `bg.primary` → hover `bg.primary-hover` → pressed `bg.primary-active` / `text.on-primary` |
| secondary | fill / text | `bg.muted` → `bg.muted-hover` / `text.default` |
| outline | fill / border / text | `bg.default` → `bg.hover` → `bg.muted-hover` / `border.input` / `text.default` |
| ghost | fill / text | none → `bg.hover` → `bg.muted-hover` / `text.default` |
| destructive | fill / text | `bg.destructive` → `bg.destructive-hover` / `text.on-destructive` |
| link | text | `text.link` (underline on hover) → pressed `text.primary` |
| focus | ring | effect style `shadow.focus-ring`: 3 px spread of `ring.default` (neutral-400 at 50%), as shadcn `focus-visible:ring-[3px] ring-ring/50`. Outline variant also turns its border to `border.focus` (shadcn `border-ring`). Figma note: ghost and link have no fill, and Figma can't draw a shadow around a transparent shape, so their ring is drawn as a 3 px outside stroke in `ring.default` (same look) |
| disabled | opacity | Normal look of the variant at `opacity.disabled` (shadcn `disabled:opacity-50`, DS-28) |

## States
| State | What changes |
|---|---|
| hover | Fill one step up its ladder (see tokens and `foundations/interaction-states.md`); link: underline (code only: `hover:underline`; the Figma `link` hover variant shows no underline, because the label is a shared text property) |
| pressed | Next ladder step: primary `bg.primary-active`; outline and ghost `bg.muted-hover`; secondary and destructive reuse their hover fill (DS-43); link `text.primary` |
| focus | 3 px translucent grey ring around the button (`shadow.focus-ring`); outline border becomes `border.focus`. Keyboard focus only (`:focus-visible`) |
| disabled | Whole button at `opacity.disabled`; not focusable. Prefer explaining why (helper text or tooltip) over a silent disabled button |
| loading | `isLoading`: spinner on the right, label stays, taps ignored, `aria-busy="true"` |

## Behaviour and RTL
- Direction icons mirror: "next" uses `chevron-left` / `arrow-left` in RTL, "back" uses `chevron-right` / `arrow-right`.
- Long labels never wrap; keep labels short. On mobile the main CTA is full width.
- Destructive actions ask for confirmation (alert-dialog) unless they can be undone.

## Accessibility
- Contrast: all variant text passes 4.5:1 in B2R and B2E (see `build/contrast-report.md`).
- Touch target ≥ 40 px on mobile: `md` is 40 px in the Mobile mode.
- Icon-only? Use `icon-button`, not a button without a label.

## Content
- Verb first, says what happens: «ثبت سفارش», «افزودن به سبد», «پرداخت ۱۲٬۴۵۰٬۰۰۰ تومان». Avoid «تایید» / «باشه» when a precise verb exists.
- No promotional or warning text inside the button (heuristic CRT-11); put notices outside.

## Changelog
- 0.4.0 — disabled state uses `opacity.disabled` over the normal look (DS-28).
- 0.3.0 — created (90 variants).
