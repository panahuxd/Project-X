# breadcrumb

> Layer: Core · Status: draft · Figma: [DKB Components › breadcrumb](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=66-2222) · Code: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis` (shadcn `breadcrumb`)

## Purpose
Shows where a page sits and lets people go up a level: category path on PLP and PDP, profile sub-pages («پروفایل › سفارش‌ها › سفارش ۱۲۳۴۵۶»).

## Anatomy
RTL, right to left: `crumb 1` (home) · `crumb 2` · `crumb 3` · `current`. Each crumb = link + `chevron-left` separator. `type=collapsed` replaces crumb 2 with an ellipsis button.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `default`, `collapsed` | `default` | collapsed on mobile and for deep paths |
| `item1`, `item2`, `item3`, `current` | text | | «خانه», «کالای دیجیتال», «لپ‌تاپ», «لپ‌تاپ ایسوس» | |
| `showItem2`, `showItem3` | boolean | | on | Hide levels you don't need |

## Tokens
Gap `space.8`; text `body`; links `text.muted` (hover `text.default`), current page `text.default`; separator `chevron-left` `icon.size.sm` `text.muted`; ellipsis box `control.height-md`.

## Behaviour and RTL
The ellipsis opens a `dropdown-menu` with the hidden levels. Long current titles truncate with «…» at the left end. On mobile keep home and the parent only.

## Accessibility
`nav` with `aria-label="مسیر صفحه"`; current page `aria-current="page"`; separators `aria-hidden`.

## Changelog
- 0.7.0 — created (2 variants).
