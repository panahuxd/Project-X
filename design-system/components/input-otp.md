# input-otp

> Layer: Core · Status: draft · Figma: [DKB Components › Input OTP](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=32-394) · Code: `InputOTP`, `InputOTPGroup`, `InputOTPSlot` (shadcn `input-otp`)

## Purpose
One-time codes sent by SMS (login, payment confirmation). **Don't use it** for other numbers (`input` with `inputMode="numeric"`).

## Anatomy
A row of `slot 1…n`, each holding one `digit`; the active slot shows a `caret`. Slots are separate boxes (DKB style), not joined.

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `length` | variant | `6`, `4` | `6` | `maxLength` in code |
| `state` | variant (Figma only) | `default`, `active`, `filled`, `error`, `disabled` | `default` | |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | gap | `space.8` |
| slot | size | `control.height-lg` (square) |
| slot | radius / fill / border | `radius.control` / `bg.default` / `border.input` |
| digit | style / colour | `numeric-lg` / `text.default` |
| caret | colour | `text.default` (1px × 16, fixed) |

## States
| State | What changes |
|---|---|
| active | Current slot: `border.focus` + `shadow.focus-ring`, caret blinks |
| filled | Digits shown |
| error | All slots `border.destructive` + `shadow.focus-ring-destructive`; message in the `field` helper |
| disabled | Whole row at `opacity.disabled` |

## Behaviour and RTL
- Digits run **left to right** even in RTL (codes are read LTR): the row has `dir="ltr"`; slot 1 is on the left.
- Paste fills all slots; `autocomplete="one-time-code"` lets phones fill from SMS.
- Submit automatically when the last digit is entered. Show a resend timer below («ارسال دوباره تا ۰۱:۵۹»).

## Accessibility
One real input behind the slots, labelled «کد تأیید». Errors announced.

## Content
Above: «کد ۶ رقمی ارسال‌شده به ۰۹۱۲***۶۷۸۹ را وارد کنید».

## Changelog
- 0.4.0 — created (10 variants).
