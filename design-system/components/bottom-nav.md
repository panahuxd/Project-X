# bottom-nav

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › bottom-nav](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=7-206), [bottom-nav-item](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=7-154) · Code: mobile tab bar

## Purpose
Mobile navigation between the 5 main destinations on storefront and account pages. Not on checkout and forms (they use `action-bar`) or the workspace (sidebar sheet).

## Anatomy
Full width, 56 high, white, border on top; 5 `bottom-nav-item`s that share the width. Each item: icon (20) with an optional count `badge`, label below.
Default set (reading order): خانه (house) · دسته‌بندی‌ها (layout-grid) · سبد خرید (shopping-cart, badge) · سفارش‌ها (package) · حساب من (user).

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `bottom-nav` · `type` | variant | `default` | | Items are exposed: `item-1…5` |
| item · `state` | variant | `default`, `active` | `default` | Exactly one active |
| item · `label` | text | | «خانه» | One or two words |
| item · `icon` | swap | Lucide icons | `icon/house` | |
| item · `showBadge` | boolean | | false | Count; edit the number on the exposed `badge` |

## Tokens
| Part | Property | Token |
|---|---|---|
| bar | fill / border | `bg.surface` / `border.default` top |
| item | padding / gap | `space.8` / `space.2` |
| item | colour | default `text.muted`, active `text.primary` |
| label | style | `label-sm` |
| badge | | `badge` tone destructive, solid, sm |

## Behaviour and RTL
Sticky at the bottom. Items read from the right. Platforms choose their 5 (e.g. B2E may replace «دسته‌بندی‌ها» with «درخواست‌ها»); keep 5 or fewer.

## Accessibility
`nav` with `aria-label`; active item `aria-current="page"`; badge count in the item's accessible name.

## Changelog
- 0.10.0 — created (bottom-nav 1 variant, item 2 variants).
