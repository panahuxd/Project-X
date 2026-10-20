# label

> Layer: Core · Status: draft · Figma: [DKB Components › Label](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp?node-id=28-444) · Code: `Label` (shadcn `label`)

## Purpose
The visible name of a form control. Used on its own next to custom controls and inside `field`. **Don't use it** for headings or helper text (use the text styles and `field` helper).

## Anatomy
RTL, right to left: `text` · `required` (`*`, hidden by default) · `optional` («اختیاری», hidden by default).

## Properties
| Property (Figma = code) | Type | Values | Default | Notes |
|---|---|---|---|---|
| `state` | variant | `default`, `disabled` | `default` | In code: follows the control's `disabled` (`peer-disabled`) |
| `text` | text | | «عنوان فیلد» | |
| `isRequired` | boolean | | off | Shows `*` in `text.destructive` |
| `showOptional` | boolean | | off | Use either required marks or optional marks in one form, not both |

## Tokens
| Part | Property | Token |
|---|---|---|
| root | gap | `space.4` |
| text | style / colour | `label` / `text.default` |
| required | style / colour | `label` / `text.destructive` |
| optional | style / colour | `body-sm` / `text.muted` |

## States
| State | What changes |
|---|---|
| disabled | Whole label at `opacity.disabled` (DS-28) |

## Behaviour and RTL
Clicking the label focuses or toggles its control (`htmlFor`). Text is right-aligned.

## Accessibility
Always linked to its control (`htmlFor` / `id`). The `*` is decorative; the control carries `aria-required`.

## Content
Short noun phrase, no colon: «شماره موبایل», «نام شرکت».

## Changelog
- 0.4.0 — created (2 variants).
