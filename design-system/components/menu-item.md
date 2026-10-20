# menu-item

> Layer: Core · Status: draft · Figma: [DKB Components › menu-item](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=40-672) · Code: `DropdownMenuItem`, `…CheckboxItem`, `…RadioItem`, `…SubTrigger`, `…Label`, `…Separator` (shadcn)

## Purpose
One row of a menu. Shared by `dropdown-menu`, `context-menu`, `menubar`, `command` and `combobox`, so every menu looks and behaves the same. Not used on its own on a page.

## Anatomy
RTL, right to left: `indicator` (checkbox / radio only) · `icon` (optional) · `label` · `shortcut` or submenu `chevron-left` (left end).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `type` | variant | `default`, `checkbox`, `radio`, `submenu`, `destructive`, `label`, `separator` | `default` | `label` = group heading, `separator` = divider |
| `state` | variant | `default`, `highlighted`, `disabled` | `default` | highlighted = hover or keyboard focus |
| `label` | text | | «گزینه منو» | |
| `showIcon` / `icon` | boolean / swap | | off / `user` | |
| `showShortcut` / `shortcut` | boolean / text | | off / «Ctrl+P» | Shortcut stays LTR |
| `checked` | boolean | | on | checkbox / radio rows only |

## Tokens
| Part | Property | Token |
|---|---|---|
| row | padding / gap | `space.8` × `space.6` / `space.8` |
| row | radius | `radius.sm` |
| row (highlighted) | fill | `bg.hover`; destructive `bg.destructive-subtle` |
| label | style / colour | `body` / `text.default`; destructive `text.destructive`; group label `label` |
| icon | size / colour | `icon.size.sm` / `text.muted` (destructive `text.destructive`) |
| shortcut | style / colour | `caption` / `text.muted` |
| indicator | size | `size.16`; check icon or 8px dot |
| separator | line | 1px `border.default`, `space.4` above and below |

## States
| State | What changes |
|---|---|
| highlighted | Fill `bg.hover` (`bg.destructive-subtle` for destructive) |
| disabled | `opacity.disabled`; skipped by the keyboard |

## Behaviour and RTL
Rows are 216 wide in a 224 menu (fixed). The submenu chevron points left and the submenu opens to the left. Typing a letter jumps to the next matching row.

## Accessibility
`role="menuitem"`, `menuitemcheckbox` (`aria-checked`) or `menuitemradio`; disabled rows `aria-disabled`.

## Content
Verb or noun phrase, no full stop. Destructive rows say what they destroy: «حذف سفارش».

## Changelog
- 0.5.0 — created (17 variants).
