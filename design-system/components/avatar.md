# avatar

> Layer: Core · Status: draft · Figma: [DKB Components › avatar](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=55-1363) · Code: `Avatar`, `AvatarImage`, `AvatarFallback` (shadcn `avatar`)

## Purpose
Picture of a person or company: account menu, sellers, company users, comments. Shows initials or a user icon when there is no photo.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `sm` 24, `md` 32, `lg` 40, `xl` 48 | `md` | shadcn default is 32 |
| `type` | variant | `initials`, `icon` | `initials` | For a photo, add an image fill to the instance |
| `initials` | text | | «ع‌ر» | 1–2 letters; ZWNJ between Persian letters |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | size | `size.24` / `32` / `40` / `48` |
| root | fill / radius | `bg.muted` / `radius.full` |
| initials | style / colour | `label-sm` (sm, md), `label` (lg), `label-lg` (xl) / `text.default` |
| icon | size / colour | `icon.size.sm` (sm, md), `md` (lg), `lg` (xl) / `text.muted` |

## Behaviour and RTL
Image loads → photo; fails → fallback after 600 ms. Group: overlap −8px, each with a 2px `bg.default` ring, first avatar on the right.

## Accessibility
Image `alt` = the person's name; decorative when the name is next to it (`alt=""`).

## Changelog
- 0.6.0 — created (8 variants).
