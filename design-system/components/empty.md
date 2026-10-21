# empty

> Layer: Core · Status: draft · Figma: [DKB Components › empty](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=58-1398) · Code: `Empty`, `EmptyHeader`, `EmptyMedia`, `EmptyTitle`, `EmptyDescription`, `EmptyContent` (shadcn `empty`)

## Purpose
Empty state: nothing here yet, no search results, no access. Says why it is empty and what to do next. Replaces the legacy Digikala illustrations (Gaps #14).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `outline` | variant | `true`, `false` | `true` | Dashed border for an empty area inside a page |
| `title`, `description` | text | | | |
| `showMedia` / `icon` | boolean / swap | | on / `inbox` | |
| `showActions` | boolean | | on | `primary` (left), `secondary` (right) exposed; centred group (DS-46) |

## Tokens
Padding `space.48` (use `space.24` on mobile), gap `space.24`, header gap `space.8`; media 40 tile `bg.muted`, `radius.lg`, icon `icon.size.lg`; title `heading-4`, description `body` `text.muted`, centred; border dashed `border.default`, `radius.lg`.

## Content
Title says what is missing («هنوز سفارشی ثبت نکرده‌اید»); description says what to do; the primary action does it. Empty search offers RFQ: «ثبت درخواست خرید».

## Changelog
- 0.6.0 — created (2 variants).
