# progress

> Layer: Core · Status: draft · Figma: [DKB Components › Progress](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=36-354) · Code: `Progress` (shadcn `progress`)

## Purpose
Shows how far a task has got when the amount is known: file upload, multi-step onboarding, credit or allowance used (B2E), loyalty-tier progress (B2R). **Don't use it** for unknown durations (`spinner`).

## Anatomy
`track` (the component) · `indicator`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `value` | variant | `0`, `25`, `50`, `75`, `100` | `50` | Mockups pick the nearest; code takes any 0–100 |

## Tokens
| Part | Property | Token |
|---|---|---|
| track | fill / radius | `bg.primary-subtle` / `radius.full` |
| track | height | 8px (fixed geometry, shadcn `h-2`) |
| indicator | fill | `bg.primary` |

## States
None. In code the indicator animates its width when the value changes (200 ms ease-out).

## Behaviour and RTL
**Fills from the right** in RTL. Width follows the parent. Show the value as text next to it when it matters: «۶۰٪» or «۳ از ۵».

## Accessibility
`role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` in Persian; labelled by its heading or text.

## Content
Say what is progressing: «آپلود فاکتور», «سقف اعتبار مصرف‌شده».

## Changelog
- 0.4.0 — created (5 variants).
