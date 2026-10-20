# separator

> Layer: Core · Status: draft · Figma: [DKB Components › Separator](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=36-364) · Code: `Separator` (shadcn `separator`)

## Purpose
A thin line between groups of content: list sections, menu groups, toolbar items, «یا» between login options. **Don't use it** where spacing alone separates things well enough.

## Anatomy
`horizontal` / `vertical`: the component is the line. `label=true`: `line` · `label` · `line`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `orientation` | variant | `horizontal`, `vertical` | `horizontal` | |
| `label` | variant | `false`, `true` | `false` | Labelled version is horizontal only |
| `label` (text) | text | | «یا» | |

## Tokens
| Part | Property | Token |
|---|---|---|
| line | fill / thickness | `border.default` / 1px (`border-width.default`) |
| labelled | gap | `space.12` |
| label | style / colour | `caption` / `text.muted` |

## States
None.

## Behaviour and RTL
Horizontal stretches to the parent width; vertical stretches to the parent height (stretch it in auto layout).

## Accessibility
Decorative by default (`decorative`, no role). Use `role="separator"` only when it separates real content groups.

## Content
Label is one short word: «یا».

## Changelog
- 0.4.0 — created (3 variants).
