# toast

> Layer: Core · Status: draft · Figma: [DKB Components › toast](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=49-662) · Code: `Toaster` + `toast()` (shadcn `sonner`)

## Purpose
A short, non-blocking message about something that just happened: added to cart, saved, copied, payment failed. **Don't use it** for messages that must stay (use `alert`) or need a decision (`alert-dialog`).

## Anatomy
RTL, right to left: `icon` (by tone) · `text` (`title`, `description`) · `action` (optional small button, left end).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `tone` | variant | `default`, `success`, `info`, `warning`, `destructive`, `loading` | `default` | `default` has no icon; `loading` spins |
| `title`, `description` | text | | | |
| `showDescription`, `showAction` | boolean | | on, off | Action is an exposed `button` (sm) |

## Tokens
| Part | Property | Token |
|---|---|---|
| toast | width | 356 (fixed, sonner default) |
| toast | padding / gap | `space.16` / `space.12` |
| toast | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.md` / `shadow.dialog` |
| icon | size / colour | `icon.size.md` / `text.success`, `text.info`, `text.warning`, `text.destructive`, `text.muted` |
| title / description | style | `label` / `body` `text.muted` |

## States
None. Enters from the bottom; stacks up to 3, older ones scale behind.

## Behaviour and RTL
Desktop: bottom-left (RTL mirror of bottom-right). Mobile: bottom-centre, above the bottom navigation. Auto-hides after 4s (8s with an action), pauses while hovered or focused; swipe to dismiss. `z-index.toast`.

## Accessibility
Region `aria-live="polite"` (`assertive` for destructive). Action reachable by keyboard (F8 focuses the toasts).

## Content
Past tense, what happened: «کالا به سبد خرید اضافه شد». Errors say what to do next.

## Changelog
- 0.5.0 — created (6 variants).
