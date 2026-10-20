# dropdown-menu

> Layer: Core · Status: draft · Figma: [DKB Components › dropdown-menu](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=40-755) · Code: `DropdownMenu`, `DropdownMenuContent` (shadcn `dropdown-menu`)

## Purpose
A list of actions or options that opens from a button: row actions («⋯»), account menu, view options. Also the option list of `select`. **Don't use it** for navigation between pages (`navigation-menu`) or for long searchable lists (`combobox`).

## Anatomy
Panel with `item 1…n` (nested `menu-item` instances, exposed: change type, text, icon; hide rows you don't need).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `content` | variant | `actions`, `selection` | `actions` | Samples: actions with icons, shortcut, submenu and a destructive row; selection with checkbox and radio rows |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel | fill / border | `bg.surface` / `border.default` (1px) |
| panel | radius / shadow | `radius.md` / `shadow.dropdown` |
| panel | padding | `space.4` |
| rows | | see `menu-item` |

## States
Rows only (see `menu-item`).

## Behaviour and RTL
- Opens below the trigger, **aligned to its right edge** (RTL start); flips above when there is no room. 4px gap to the trigger.
- Min width 128 (shadcn `min-w-32`), sample 224; can match the trigger width.
- Keyboard: arrows move, Enter selects, Esc closes and returns focus to the trigger, typing jumps.
- Stacks on `z-index.popover` (above dialogs, DS-29). Motion: fade + zoom from 95%, `motion.duration.fast`.

## Accessibility
Trigger `aria-haspopup="menu"` and `aria-expanded`; panel `role="menu"`.

## Content
Group related rows under a `label`; put destructive rows last, after a separator.

## Changelog
- 0.5.0 — created (2 variants).
