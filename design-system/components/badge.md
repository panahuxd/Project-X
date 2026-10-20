# badge

> Layer: Core · Status: draft · Figma: [DKB Components › Badge](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=7-191) · Code: `Badge` in `@digikala/ui-kit`

## Purpose
A short, non-interactive label for a status or attribute: «ارسال امروز», «پیش‌فاکتور», «در حال پردازش». **Don't use it** as a button or filter chip (chip, later), or for long text.

## Anatomy
`icon` (optional, right) · `label`, in a pill.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `tone` | variant | `neutral`, `primary`, `success`, `warning`, `info`, `destructive` | `neutral` | Meaning, not decoration |
| `style` | variant | `subtle`, `solid`, `outline` | `subtle` | Use `solid` sparingly (one per card) |
| `size` | variant | `sm`, `md` | `sm` | 20 / 24 px |
| `label` | text | | «برچسب» | |
| `showIcon` / `icon` | boolean / swap | | off | |

## Tokens
| Part | Token |
|---|---|
| height | `size.20` (sm) · `size.24` (md) |
| padding inline · gap · radius | `space.6` (sm) / `space.8` (md) · `space.4` · `radius.badge` |
| text style | `label-sm` (sm) · `label` (md) |
| subtle | `bg.{tone}-subtle` + `text.{tone}` (neutral: `bg.muted` + `text.default`; primary: `bg.primary-subtle` + `text.primary`) |
| solid | `bg.{tone}` + `text.on-{tone}` (neutral: `bg.inverse` + `text.inverse`) |
| outline | `bg.default` + `border.{tone}-subtle` + `text.{tone}` (neutral: `border.default`) |
| icon | `icon.size.sm`, same colour as the text |

## Behaviour and RTL
Doesn't wrap; truncate only in tables with a tooltip showing the full text.

## Accessibility
Never colour alone: the text names the status. All tone/style pairs pass 4.5:1 (contrast report).

## Content
One to three words. Domain statuses (order, payment, cheque, RFQ, KYC) are mapped to tones once, in `status-badge` (Commerce batch), so every screen shows the same colour for the same status.

## Changelog
- 0.3.0 — created (36 variants).
