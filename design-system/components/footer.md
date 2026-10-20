# footer

> Layer: Commerce · Status: draft · Figma: [DKB Commerce › footer](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S?node-id=5-122) · Code: site footer

## Purpose
Site footer for storefront pages: about, help and policy links, copyright. Not on checkout, forms, account or workspace pages.

## Anatomy
- `size=desktop`: full width, border on top; content 1312: `about` (logo + one line) and 3 link groups (title + links), separator, copyright.
- `size=mobile`: compact: logo, two rows of links, copyright. Only on home, landing and static pages.

## Properties
| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| `size` | variant | `desktop`, `mobile` | `desktop` | |

Link texts are the default set; change them in your design if the platform's footer differs (they are plain text layers with styles).

## Tokens
| Part | Property | Token |
|---|---|---|
| footer | fill / border | `bg.surface` / `border.default` top |
| desktop | padding / gap | `space.48` top, `space.24` bottom / `space.32`; columns `layout.gutter`; links `space.12` |
| mobile | padding / gap | `layout.page-margin`, `space.24` / `space.16` |
| text | style | titles `label`, links `body-sm` `text.muted`, copyright `caption` `text.muted` |

## Behaviour and RTL
Groups read from the right. On mobile, links wrap into rows from the right.

## Accessibility
`footer` landmark; each group is a `nav` with its title as label.

## Changelog
- 0.10.0 — created (2 variants).
