# context-menu

> Layer: Core · Status: draft · Figma: [DKB Components › context-menu](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=41-605) · Code: `ContextMenu` (shadcn `context-menu`)

## Purpose
Shortcut menu on right-click (desktop) or long-press (touch) on an item, e.g. a table row or a product in a list. It only adds speed: **every action must also be available another way** (row button or `dropdown-menu`).

## Anatomy
Same panel and `menu-item` rows as `dropdown-menu`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `content` | variant | `row-actions` | `row-actions` | Sample for an order row; rows exposed |

## Tokens
As `dropdown-menu`.

## States
Rows only (see `menu-item`).

## Behaviour and RTL
Opens at the pointer, extending to the left of it in RTL, kept inside the viewport. Keyboard: Shift+F10 or the menu key opens it on the focused item.

## Accessibility
As `dropdown-menu`.

## Content
Same actions, same order and labels as the visible row actions.

## Changelog
- 0.5.0 — created (1 variant).
