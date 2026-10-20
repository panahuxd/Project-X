# kbd

> Layer: Core · Status: draft · Figma: [DKB Components › Kbd](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=36-305) · Code: `Kbd`, `KbdGroup` (shadcn `kbd`)

## Purpose
Shows a keyboard key or shortcut in help text, tooltips, menus and the command palette (portal admin tools, desktop). **Don't use it** on mobile-only screens.

## Anatomy
One `label` in a muted chip. A shortcut is several `kbd`s in a row with `space.4` gap (`KbdGroup`).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `md`, `lg` | `md` | md = shadcn 20px |
| `label` | text | | «Ctrl» | |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | height / min width | `size.20` (md), `size.24` (lg) |
| root | padding / gap | `space.4` |
| root | radius / fill | `radius.sm` / `bg.muted` |
| label | style / colour | `label-sm` / `text.muted` |

## States
None (not interactive).

## Behaviour and RTL
Key names stay in English and in LTR order inside RTL text («Ctrl + K»), wrapped in `dir="ltr"`. Show ⌘ on macOS and Ctrl elsewhere.

## Accessibility
`<kbd>` element. Not focusable.

## Content
Standard key names: Ctrl, Shift, Alt, Enter, Esc, ⌘.

## Changelog
- 0.4.0 — created (2 variants).
