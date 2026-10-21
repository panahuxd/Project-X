# alert-dialog

> Layer: Core · Status: draft · Figma: [DKB Components › alert-dialog](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=44-673) · Code: `AlertDialog` (shadcn `alert-dialog`)

## Purpose
Asks the user to confirm an important or irreversible action before it happens: delete an order, cancel a payment, submit for approval. The user must choose; there is no close button and clicking outside does nothing.

## Anatomy
`header` (`title`, `description`) · optional `content` (slot) · `footer` (`action`, `cancel`).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `tone` | variant | `default`, `destructive` | `default` | Action button primary or destructive |
| `title`, `description` | text | | «آیا مطمئن هستید؟», «این کار قابل بازگشت نیست.» | Replace with the specific question |
| `showContent` / `content` | boolean / swap | | off / `slot` | e.g. a summary of what will be deleted |
| `action`, `cancel` | nested (exposed) | | «تأیید» / «حذف», «انصراف» | |

## Tokens
As `dialog` (`width.dialog`, `space.24`, `space.16`, `bg.default`, `border.default`, `radius.dialog`, `shadow.dialog`).

## States
None.

## Behaviour and RTL
Centred on desktop **and mobile** (DS-32), full width minus page margins on small screens. Focus starts on **cancel** for destructive actions. Esc = cancel. Footer: action at the far left, cancel to its right (DS-46, `foundations/action-placement.md`).

## Accessibility
`role="alertdialog"`, labelled by the title, described by the description.

## Content
Title is the specific question: «این سفارش حذف شود؟». Action names the result: «حذف سفارش», not «بله».

## Changelog
- 0.5.0 — created (2 variants).
