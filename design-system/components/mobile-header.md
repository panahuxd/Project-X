# mobile-header

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › mobile-header](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=5-87) · Code: mobile app bar

## Purpose
The 56 high top bar of every mobile page: logo and search on home, back + page title on inner pages, checkout steps and forms.

## Anatomy
Full width, white, border at the bottom, padding `layout.page-margin`.
- `type=home`: `logo` (sm) · `search` field (fills).
- `type=inner`: `back` · `title` (fills) · `search` icon button (optional).

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `home`, `inner` | `home` | |
| `title` | text | | «سفارش‌ها» | Inner only |
| `showSearch` | boolean | | true | Off in checkout, forms, results and the workspace |
| exposed | instances | `back`, `search` | | Workspace: swap the `back` icon to `menu` (opens the sidebar sheet) |

## Tokens
| Part | Property | Token |
|---|---|---|
| bar | fill / border / padding | `bg.surface` / `border.default` bottom / `layout.page-margin` |
| gaps | | home `space.12`, inner `space.8` |
| title | style | `heading-4` |

## Behaviour and RTL
Sticky. Back arrow points right. Long titles truncate with an ellipsis. Profile pages: back + title (no logo).

## Accessibility
The back button is labelled «بازگشت»; the title is the page `h1`.

## Changelog
- 0.10.0 — created (2 variants).
