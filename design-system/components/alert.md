# alert

> Layer: Core · Status: draft · Figma: [DKB Components › Alert](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=9-98) · Code: `Alert` in `@digikala/ui-kit`

## Purpose
A persistent message about a condition on the page: a rule, a limit, a problem, a confirmation that stays. Implements the principle "show the rule before the wall". **Don't use it** for a transient result of an action (use toast) or for field errors (use the input's error text).

## Anatomy
RTL: `icon` (right) · `content` (`title`, `description`, `action`) · `close` (left).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `tone` | variant | `info`, `success`, `warning`, `destructive`, `neutral` | `info` | Icon follows the tone |
| `title` | text | | «عنوان پیام» | |
| `description` | text | | | One or two sentences |
| `showTitle` | boolean | | on | |
| `showAction` | boolean | | off | Nested `button` (link, sm): edit its label |
| `showClose` | boolean | | off | Nested `icon-button` (ghost, sm, `icon/x`) |
| width | layout | Fill container | 480 | Full width of its section |

## Tokens
| Part | Token |
|---|---|
| container | fill `bg.{tone}-subtle` (neutral `bg.muted`), border `border.{tone}-subtle` (neutral `border.default`), radius `radius.card`, padding `space.16`, gap `space.12` |
| icon | `icon.size.md`, colour `text.{tone}` (neutral `text.default`) |
| title | `label`, `text.{tone}` |
| description | `body`, `text.default` |
| content gap | `space.4` |

Icons: info → `info`, success → `circle-check`, warning → `triangle-alert`, destructive → `circle-alert`, neutral → `info`.

## Behaviour and RTL
- Place it next to the thing it limits (above a form, beside a payment method), not only at the top of the page.
- Closable only if the information is not needed again.

## Accessibility
`role="alert"` only for urgent destructive messages that appear after an action; otherwise `role="status"` or plain region. Icon is decorative (text carries the meaning).

## Content
Say the rule with its number and the way out: «سقف پرداخت آنلاین ۴۰۰ میلیون تومان است. برای مبلغ بیشتر، روش پرداخت دیگری اضافه کنید.»

## Changelog
- 0.3.0 — created (5 variants).
