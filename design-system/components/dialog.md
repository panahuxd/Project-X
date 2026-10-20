# dialog

> Layer: Core · Status: draft · Figma: [DKB Components › dialog](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=44-623) · Code: `Dialog`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription` (shadcn `dialog`)

## Purpose
A modal window for a focused task that needs the user's full attention on desktop: edit an address, add a receiver, review a proforma. **On mobile use `drawer`** (DS-32). For yes/no confirmations use `alert-dialog`.

## Anatomy
`close` (ghost `icon-button`, top-left in RTL) · `header` (`title`, `description`) · `content` (slot) · `footer` (`action`, `cancel` buttons, at the end = left). Shown over an `overlay`.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `title`, `description` | text | | | |
| `showDescription`, `showContent`, `showFooter`, `showClose` | boolean | | all on | |
| `content` | instance swap | | `slot` | |
| `action`, `cancel`, `close` | nested (exposed) | | | Change labels, variants, icon |

## Tokens
| Part | Property | Token |
|---|---|---|
| panel | width | `width.dialog` (512; full width minus `layout.page-margin` on small screens) |
| panel | padding / gap | `space.24` / `space.16` |
| panel | fill / border / radius / shadow | `bg.default` / `border.default` / `radius.dialog` / `shadow.dialog` |
| title / description | style | `heading-4` `text.default` / `body` `text.muted` |
| footer | gap | `space.8` |

## States
None.

## Behaviour and RTL
- Centred; max height 85% of the viewport, content scrolls.
- Focus moves to the first field (or the dialog), is trapped inside, and returns to the trigger on close. Esc, `close` and an overlay click close it.
- Footer order in RTL: action at the far left, cancel to its right.
- Motion: fade + zoom from 95%, `motion.duration.normal`. `z-index.dialog`.

## Accessibility
`role="dialog"`, `aria-modal`, labelled by the title and described by the description.

## Content
Title names the task («ویرایش آدرس تحویل»); primary button repeats the verb («ذخیره»).

## Changelog
- 0.5.0 — created.
