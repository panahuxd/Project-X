# skeleton

> Layer: Core · Status: draft · Figma: [DKB Components › Skeleton](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=36-368) · Code: `Skeleton` (shadcn `skeleton`)

## Purpose
Placeholder blocks shaped like the content that is loading: product cards, order rows, profile headers. **Don't use it** for actions in progress (`spinner`) or for very short loads (< 300 ms; show nothing).

## Anatomy
One block. Compose several to mimic a layout (circle + two lines = list row).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `shape` | variant | `line`, `circle`, `rect` | `line` | Resize instances to match the real content |

## Tokens
| Part | Property | Token |
|---|---|---|
| all | fill | `bg.muted` |
| line | height / radius | `size.16` / `radius.md` |
| circle | size / radius | `size.40` / `radius.full` |
| rect | radius | `radius.md` |

## States
None. Motion: pulse, opacity 1 → 0.5 → 1, 2s ease-in-out, infinite (`animate-pulse`); no pulse with `prefers-reduced-motion`.

## Behaviour and RTL
Mirror the real layout: in RTL avatars sit on the right and shorter lines align right.

## Accessibility
Skeleton blocks are `aria-hidden`; the loading container gets `aria-busy="true"` and a hidden «در حال بارگذاری».

## Content
No text.

## Changelog
- 0.4.0 — created (3 variants).
