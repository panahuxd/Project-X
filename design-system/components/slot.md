# slot

> Layer: Core · Status: draft · Figma: [DKB Components › slot](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=43-578) · Code: none (Figma only)

## Purpose
Placeholder for custom content inside overlays: `popover`, `hover-card`, `dialog`, `alert-dialog`, `sheet`, `drawer`. Figma instances can't take new children, so overlays expose a `content` instance-swap property that starts as this slot.

## How to fill a slot
1. In your design file, build the content as a **local component** (e.g. `content/address-form`) from DKB components and tokens only. Name it with the `content/` prefix.
2. Select the overlay instance and set its `content` property to that component.
3. Never ship a visible slot: the audit treats a design with a slot left in it as unfinished.

## Tokens
Dashed `border.strong` 1px, `radius.md`, padding `space.16`, hint in `caption` / `text.muted`. 240×96, stretches to the overlay width.

## Changelog
- 0.5.0 — created.
