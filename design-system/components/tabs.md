# tabs

> Layer: Core · Status: draft · Figma: [DKB Components › tabs](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=60-1415) · Code: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` (shadcn `tabs`)

## Purpose
Switch between views of the same thing without leaving the page: order status filters, product details sections, account settings groups. Not for navigation between pages (`navigation-menu`) or for steps (stepper, later).

## Anatomy
`tabs` = list of `tab 1…n` (exposed `tab` instances). First tab on the right. The panel below is your content.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `style` | variant | `default` (segmented), `line` (underline) | `default` | `line` suits status filters on list pages |
| `tab`: `state` | variant | `default`, `active`, `focus`, `disabled` | | Set exactly one active |
| `tab`: `label`, `showIcon`, `icon` | text / boolean / swap | | | |

## Tokens
| Part | Property | Token |
|---|---|---|
| list (default) | fill / radius / height / padding | `bg.muted` / `radius.lg` / `control.height-md` / `space.2` |
| list (line) | bottom border | `border.default` |
| tab (default) | padding / radius | `space.8` × `space.4` / `radius.md`; active: `bg.default` + `shadow.card` |
| tab (line) | padding | `space.12` × `space.8`; inactive `text.muted`; active `text.default` + 2px `border.primary` bottom |
| tab | label / icon | `label` / `icon.size.sm`, gap `space.6` |
| tab focus | ring | 3px `ring.default` outside |

## Behaviour and RTL
Arrow keys move between tabs in visual order (right to left); Home/End jump. On mobile the line list scrolls horizontally from the right; never wrap tabs.

## Accessibility
`role="tablist"`, `tab` with `aria-selected`, `tabpanel` labelled by its tab.

## Content
Short nouns; counts in Persian digits if useful: «در حال پردازش (۳)».

## Changelog
- 0.6.0 — created (`tab` 8 variants, `tabs` 2 variants).
