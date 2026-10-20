# input-field

> Layer: Core · Status: draft · Figma: [DKB Components › Input field](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=5-243) · Code: `Field` + `Input` in `@digikala/ui-kit`

## Purpose
Single-line text entry with its label, optional icons and helper or error text. **Don't use it for** long text (textarea, later batch) or picking from a fixed list (select, radio).

## Anatomy
Vertical stack, right-aligned:
1. `labelRow`: `label` and the `required` marker «*» (marker sits to the left of the label).
2. `field`: `iconStart` (right) · `value` · `iconEnd` (left).
3. `helper`: helper text, or the error message in the error state.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | Field height `control.height-*` |
| `state` | variant (Figma only) | `default`, `hover`, `focus`, `filled`, `error`, `disabled`, `read-only` | `default` | `error` comes from validation in code |
| `label` | text | | «عنوان فیلد» | Always visible |
| `value` | text | | «متن را وارد کنید» | Placeholder in empty states, value in filled states |
| `helperText` | text | | «متن راهنما» | Replaced by the error message in `error` |
| `showLabel` | boolean | | on | Turn off only when a visible heading labels the field (and set `aria-label`) |
| `isRequired` | boolean | | off | Shows «*» |
| `showHelper` | boolean | | on | |
| `showIconStart` / `iconStart` | boolean / swap | | off / `icon/search` | Right side |
| `showIconEnd` / `iconEnd` | boolean / swap | | off / `icon/x` | Left side: clear, show password |

## Tokens
| Part | Property | Token |
|---|---|---|
| stack | gap | `space.6` |
| labelRow | gap · text | `space.4` · `label`, `text.default`; marker `text.destructive` |
| field | height · padding · gap · radius | `control.height-*` · `space.12` · `space.8` · `radius.control` |
| field | fill | `bg.default`; disabled `bg.disabled`; read-only `bg.muted` |
| field | border | `border.input`; hover `border.strong`; focus `border.focus`; error `border.destructive`; disabled, read-only `border.default`. Always 1 px (`border-width.default`) |
| field | ring | focus: `shadow.focus-ring`; error: `shadow.focus-ring-destructive` (shown in error even without focus, like shadcn `aria-invalid`) |
| value | text | style `body-sm` / `body` / `body-lg`; placeholder `text.muted`, value `text.default`, disabled `text.disabled` |
| icons | size · colour | `icon.size.sm` (sm, md) / `icon.size.md` (lg) · `text.muted` |
| helper | text | `body-sm`, `text.muted`; error `text.destructive` |

## States
| State | What changes |
|---|---|
| hover | Border `border.strong` |
| focus | Border `border.focus` + 3 px `ring.default` ring (`shadow.focus-ring`) |
| filled | Value in `text.default` |
| error | Border `border.destructive` + 3 px `ring.destructive` ring; helper shows the error message in `text.destructive` |
| disabled | Greyed fill, text and label; not focusable |
| read-only | `bg.muted` fill; value can be selected and copied |

## Behaviour and RTL
- Text aligns right. Latin values (codes, emails, IBAN, card numbers) are LTR inside the field (`dir="ltr"` on those inputs), still right-aligned in the layout.
- Phone, national ID, numbers: accept Persian **and** Latin digits; display Persian digits.
- Validate on blur or submit, never before the user has typed (heuristic PAY-03).

## Accessibility
- The label is a real `<label>`. Placeholder is never the only label.
- Error text is linked with `aria-describedby` and `aria-invalid="true"`.
- The light input border (DS-20) is not the only cue: label and helper always present.
- Focus follows shadcn: grey border plus a translucent 3 px ring (DS-22). It is subtle (below 3:1), so never remove it and never replace it with a colour change only.

## Content
- Label: noun phrase, no colon: «شماره موبایل».
- Placeholder: an example, not an instruction: «مثلاً ۰۹۱۲۱۲۳۴۵۶۷».
- Error: what to fix, not blame: «شماره موبایل باید ۱۱ رقم باشد».

## Changelog
- 0.3.0 — created (21 variants).
