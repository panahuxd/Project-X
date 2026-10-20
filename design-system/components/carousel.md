# carousel

> Layer: Core · Status: draft · Figma: [DKB Components › carousel](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=68-2199) · Code: `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` (shadcn `carousel`, Embla)

## Purpose
A horizontally scrolling set: product and bundle strips on home, «last purchases», promotional banners.

## Anatomy
`type=cards`: `next` · `viewport` with `item 1…4` (slots, first on the right) · `previous`. `type=banner`: one `item 1` slot filling the frame, arrows inside, `dots`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `cards`, `banner` | `cards` | |
| `item` | instance swap | | `slot` | Swap in product cards or a banner image component |
| `previous`, `next` | nested (exposed) | | | outline `icon-button` sm |

## Tokens
Cards: gap `space.16`, arrows `space.12` from the viewport. Banner: `radius.lg`, `bg.muted` while loading; dots 8×8 `bg.default`, active 20×8 `bg.primary`, gap `space.6`, `radius.full`.

## Behaviour and RTL
**Starts at the right and scrolls left** (Embla `direction: "rtl"`). «previous» (chevron-right) on the right, «next» (chevron-left) on the left; hide arrows at the ends and on touch devices (swipe instead). Show a partial last item so people know there is more. Banners auto-advance only if paused on hover and focus, every 5s.

## Accessibility
Region `aria-roledescription="carousel"`, slides `aria-roledescription="slide"` with «۱ از ۵»; arrows named «قبلی» / «بعدی».

## Changelog
- 0.7.0 — created (2 variants).
