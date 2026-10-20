# spinner

> Layer: Core · Status: draft · Figma: [DKB Components › Spinner](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=36-343) · Code: `Spinner` (shadcn `spinner`)

## Purpose
Shows that something is loading when the wait is short or its shape is unknown: inside buttons (`button` `isLoading`), next to a refreshing list, a full-area loader. **Don't use it** for page content whose layout is known (`skeleton`) or for long tasks with known progress (`progress`).

## Anatomy
`icon` — Lucide `loader-circle`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm`, `md`, `lg` | `md` | |
| `tone` | variant | `default`, `muted`, `primary`, `on-primary` | `default` | In code: inherits `currentColor`; tone sets it |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | size | `icon.size.sm/md/lg` |
| icon | stroke | `text.default`, `text.muted`, `text.primary`, `text.on-primary` |

## States
None. Motion: rotates 360° every 1s, linear, infinite (`animate-spin`). With `prefers-reduced-motion`, slow it down rather than stop it, so it still reads as loading.

## Behaviour and RTL
Not mirrored. Show it only after about 300 ms, so fast responses don't flash a spinner.

## Accessibility
`role="status"` and `aria-label` «در حال بارگذاری». Inside a button, the button gets `aria-busy` and keeps its label for screen readers.

## Content
If a text goes with it: «در حال بارگذاری…», or what is happening: «در حال ثبت سفارش…».

## Changelog
- 0.4.0 — created (12 variants).
