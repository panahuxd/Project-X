# resizable

> Layer: Core · Status: draft · Figma: [DKB Components › resizable](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=63-2369) · Code: `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle` (shadcn `resizable`)

## Purpose
Panels the user can resize by dragging a handle: list + detail views in admin tools. Desktop only.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `orientation` | variant | `horizontal` (side-by-side panels), `vertical` (stacked) | `horizontal` | |
| `withHandle` | variant | `false`, `true` | `false` | Grip tile in the middle |

## Tokens
Line 1px `border.default`; grip tile `border.default` fill, `radius.xs`, 12×16; grip icon 10px `text.default`.

## Behaviour and RTL
The first panel is on the right. Keyboard: focus the handle, arrows resize by 10%. Remember sizes per user.

## Accessibility
Handle `role="separator"` with `aria-valuenow` and `aria-orientation`.

## Changelog
- 0.6.0 — created (4 variants).
