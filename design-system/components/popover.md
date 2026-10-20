# popover

> Layer: Core · Status: draft · Figma: [DKB Components › popover](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=43-587) · Code: `Popover`, `PopoverTrigger`, `PopoverContent` (shadcn `popover`)

## Purpose
A floating panel anchored to a trigger for a short task or extra detail: set a quantity range, edit one value, explain a fee. **Don't use it** for lists of actions (`dropdown-menu`), for hover-only previews (`hover-card`) or for long forms (`dialog`, `sheet`). On mobile prefer `drawer`.

## Anatomy
`header` (`title`, `description`) · `content` (slot).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `title`, `description` | text | | «ابعاد بسته», … | |
| `showHeader`, `showDescription` | boolean | | on, on | |
| `content` | instance swap | | `slot` | See `slot` |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel | width | `width.popover` (288) |
| panel | padding / gap | `space.16` / `space.16` |
| panel | fill / border / radius / shadow | `bg.surface` / `border.default` / `radius.md` / `shadow.dropdown` |
| title / description | style | `label` `text.default` / `body` `text.muted` |

## States
None.

## Behaviour and RTL
Opens below the trigger aligned to its right edge; flips when needed; 4px offset. Closes on outside click or Esc; focus moves into it and back to the trigger on close. `z-index.popover`.

## Accessibility
Trigger `aria-expanded`, `aria-controls`; panel `role="dialog"` labelled by its title.

## Content
Title says what is being set; keep content to one small task.

## Changelog
- 0.5.0 — created.
