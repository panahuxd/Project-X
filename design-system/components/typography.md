# typography

> Layer: Core · Status: draft · Spec only · Code: Tailwind classes from `build/tailwind-theme.css` (shadcn `typography` is a set of example classes, not a component)

## Purpose
Maps shadcn's typography examples to the 15 DKB text styles (font Digikala; values in `build/token-reference.md`, details in `foundations/typography.md`).

| shadcn example | DKB text style | Notes |
|---|---|---|
| h1 | `heading-1` (`display` for marketing heroes) | One per page |
| h2 | `heading-2` | Section titles |
| h3 | `heading-3` | |
| h4 | `heading-4` | Dialog and sheet titles |
| p | `body` | Default UI text |
| lead | `body-lg` `text.muted` | Intro under a page title |
| large | `label-lg` | Card titles |
| small | `label-sm` | |
| muted | `body-sm` `text.muted` | Helper text |
| blockquote | `body` with a 2px `border.default` start border, `space.16` start padding | |
| list | `body`, bullets on the right, `space.8` between items | |
| inline code | `caption` on `bg.muted`, `radius.sm`, LTR | |
| table | see `table` | |

Numbers: `numeric-lg`, `numeric`, `numeric-sm` (stylistic sets ss01 + ss03: tabular Persian digits) for prices, totals, quantities and table amounts.

## Rules
- Line lengths 45–75 characters for reading text.
- Don't fake bold or italic; Persian has no italics.
- Headings use sentence case; no full stop.

## Changelog
- 0.6.0 — created.
