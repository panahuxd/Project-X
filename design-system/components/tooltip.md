# tooltip

> Layer: Core · Status: draft · Figma: [DKB Components › tooltip](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=41-701) · Code: `Tooltip` (shadcn `tooltip`)

## Purpose
A short label shown on hover or keyboard focus, mainly to name icon-only buttons. **Never** the only place for important information, and not for touch-only controls (no hover on phones).

## Anatomy
`bubble` (text) + `arrow` pointing at the trigger.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `side` | variant | `top`, `bottom`, `right`, `left` | `top` | Where the tooltip sits relative to the trigger |
| `text` | text | | «افزودن به سبد خرید» | |

## Tokens
| Part | Property | Token |
|---|---|---|
| bubble | fill / text | `bg.inverse` / `text.inverse` |
| bubble | padding | `space.12` × `space.6` |
| bubble | radius | `radius.md` |
| text | style | `caption` |
| arrow | fill | `bg.inverse` (12×6, fixed geometry) |

## States
None. Shows after 700 ms hover (0 ms when moving between tooltips), hides on leave or Esc.

## Behaviour and RTL
Default `side=top`; flips when there is no room. 4px from the trigger. Stacks on `z-index.tooltip`.

## Accessibility
Trigger gets `aria-describedby` (or the tooltip text is its `aria-label` for icon buttons). Contrast `text.inverse` on `bg.inverse` passes.

## Content
A few words, no full stop; the action or the name: «ویرایش», «کپی شناسه».

## Changelog
- 0.5.0 — created (4 variants).
