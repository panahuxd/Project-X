# accordion

> Layer: Core · Status: draft · Figma: [DKB Components › accordion](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=61-1384) · Code: `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` (shadcn `accordion`)

## Purpose
Stack of sections that expand one at a time: FAQ, order details on mobile, filter groups. Not for content everyone needs to see (show it), or for one block (`collapsible`).

## Anatomy
`item 1…n` (exposed `accordion-item`): `trigger` (title on the right, chevron on the left) · `content` (body) · bottom border.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `accordion-item`: `state` | variant | `closed`, `open`, `focus`, `disabled` | `closed` | |
| `accordion-item`: `title`, `body` | text | | | |

## Tokens
| Part | Property | Token |
|---|---|---|
| item | bottom border | `border.default` (none on the last item in code) |
| trigger | padding / gap | `space.16` / `space.16` |
| title / body | style | `label` / `body`, `text.default` |
| chevron | size / colour | `icon.size.sm` / `text.muted`; rotates 180° when open (`motion.duration.normal`) |
| focus | ring | 3px `ring.default` on the trigger |

## Behaviour and RTL
Enter/Space toggles; content animates height. `type="single" collapsible` by default; `multiple` for filters.

## Accessibility
Trigger is a `button` with `aria-expanded` and `aria-controls`; content `role="region"`.

## Changelog
- 0.6.0 — created (`accordion-item` 4 variants, `accordion` 1).
