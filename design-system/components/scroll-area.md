# scroll-area

> Layer: Core · Status: draft · Figma: [DKB Components › scroll-area](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=63-2353) · Code: `ScrollArea`, `ScrollBar` (shadcn `scroll-area`)

## Purpose
A region that scrolls with a thin, consistent scrollbar: long lists inside a card or popover, tag rows, horizontal product strips.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `orientation` | variant | `vertical`, `horizontal` | `vertical` | |
| `content` | instance swap | | `slot` | Resize the instance to the visible area |

## Tokens
Frame `bg.surface`, `border.default`, `radius.md`; content padding `space.16`; track 10px; thumb `border.default`, `radius.full`.

## Behaviour and RTL
**Vertical scrollbar on the left** in RTL; horizontal scrolling starts at the right end. Scrollbar shows on hover and while scrolling.

## Accessibility
Scrollable region is focusable (`tabindex="0"`) with an `aria-label` when it holds important content.

## Changelog
- 0.6.0 — created (2 variants).
