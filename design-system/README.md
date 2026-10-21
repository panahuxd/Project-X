# DKB Design System — Foundation

One design system for all three DKB platforms: **B2R**, **B2E** and **Enterprise Portals**.
This folder is the **source of truth for token values and component specs**. The Figma libraries mirror it 1:1.

> Status: v0.14 — tokens for B2R and B2E, 69 Core components covering every non-AI shadcn/ui component, the full Lucide icon set, Commerce page shell (8 components) and the category mega menu (4) and 10 layout templates (DS-36, DS-37). Next: Commerce product and checkout parts (price, quantity, product card and row, bill box, status badge). Owner and approver of every token or library change: the design lead.

## Principles of the system

1. **One library, many brands.** Platforms differ by brand and by features, not by components. A brand is a small set of tokens; a feature is a slot or boolean prop. There are no per-platform copies of a component.
2. **Components use semantic tokens, text styles and the published scales.** Colours always come from semantic tokens (`bg.*`, `text.*`, `border.*`), never from primitives or hex. Spacing, radius and sizes come from the published scales (`space`, `radius`, `size`).
3. **Repo first.** Token values change here (JSON), then get pushed to Figma. Edits made directly in Figma are drift and get reported by the sync check.
4. **RTL and Persian by default.** Every component is designed RTL first, with Persian digits, Jalali dates and toman formatting.
5. **Light now, dark-ready.** Only light values are filled in; the structure supports a dark mode later.

## Token architecture

Format: [W3C Design Tokens (DTCG)](https://www.designtokens.org/) JSON. Each layer = one Figma variable collection. Figma scopes and visibility are stored in each file under `$extensions.dkb.figma`, so the sync sets them automatically.

| # | Layer (Figma collection) | Modes | Holds | In Figma |
|---|---|---|---|---|
| 1 | `primitives` | Default | Colour ramps and alpha, font sizes, line heights, weights, family, shadows · **scales:** space, radius, size, border-width | Colours and font values **hidden**; scales **published** |
| 2 | `brand` | B2R · B2E | An 11-step ramp `brand.50…950` aliasing the brand's primitive ramp. **The main colour is always step 800** | Hidden |
| 3 | `semantic` | Light (Dark later) | `bg.*`, `text.*`, `border.*` (grouped by the property they paint), radius, border-width, icon sizes, shadows; code-only motion and z-index | **Published**: what designers pick |
| 4 | `responsive` | Desktop · Mobile | Heading sizes, control heights, page margin, gutter, section gap | Control and layout values published; type values used via text styles |

- **Adding a tenant = one hex value.** Run `scripts/make_ramp.py "#hex"` (puts the colour at step 800), add the ramp to primitives, add one mode to `brand`. Nothing else changes.
- **Dark mode** will be a second mode of `semantic` that picks other brand steps (for example `bg.primary = brand.300`). No token is renamed.
- **Text styles** live in `tokens/typography.json` (15 roles: display, heading-1…4, body, label, caption, numeric). Headings take their size from `responsive`.
- **Domain statuses** (order, payment, cheque, RFQ…) are **not** tokens. They map to a `badge` tone (`success`, `warning`, `info`, `destructive`, `neutral`, `primary`); the agreed mapping will live in the status-badge spec (Commerce, next).
- **Extension groups** are added to `semantic` as named groups when their components are built: `chart.1–5` exists (DS-34); B2R loyalty tiers come with their components.

## Component architecture

| Layer | What goes here | Status | Rule |
|---|---|---|---|
| Core (*DKB Components*) | shadcn-based primitives: button, input, select, badge, dialog, sheet, table, tabs, toast… + the full Lucide icon set (1,867) + `template-region` | 70 components, done | Platform-agnostic |
| Commerce (*DKB Commerce*) | Shared composite parts: page shell (header, mobile-header, footer, bottom-nav, action-bar, account-menu, logo), layout templates; next: price, quantity, product card and row, bill box, payment method item, status badge, stepper, order timeline, filters | Shell + 10 templates done | Built only from Core and tokens; platform differences per DS-37 |
| Platform | Only what one platform really owns (loyalty, approvals, company admin, tenant gate, allowance) | Later | Prefixed components inside DKB Commerce (`b2e/…`, `b2r/…`) until a platform owns many (DS-37) |

**Platform differences (DS-37), lightest tool first:** brand look → `brand` mode, never a variant · content (text, icon, on/off parts) → component properties · which items and how many → exposed nested Core instances or a slot · a stable layout difference → variant `platform=b2r|b2e|portal` · mostly different → a separate prefixed component.

In Figma each Core component has its own page in *DKB Components*, named after it and sorted A–Z (Commerce: pages by area in *DKB Commerce*: *Shell*, *Templates*, later *Catalog*, *Checkout*, *Status*); building blocks share their parent's page (e.g. `menu-item` on *Dropdown menu*, `table-cell` on *Table*). Exact pages and node ids are in `figma-map.json`. The library file and layer are recorded per component in `components.json` (`file`, `layer`). Find a component by what it is for in [`components/INDEX.md`](components/INDEX.md).

## Coverage

Every shadcn/ui component gets a DKB equivalent (DS-24). Status and batch per component: [`COVERAGE.md`](COVERAGE.md).

## Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Token (JSON path) | dot path, lowercase, kebab-case segments | `bg.primary-subtle` |
| Token (Figma variable) | same path with `/` | `bg/primary-subtle` |
| Token (CSS) | `--` + path with `-` | `--bg-primary-subtle` |
| Semantic colours | `{property}.{role}[-{state}]`, property = `bg`, `text`, `border` | `bg.primary-hover`, `text.muted`, `border.focus` |
| Text on a solid fill | `text.on-{fill}` | `text.on-primary`, `text.on-warning` |
| Status colours | `bg.{status}`, `bg.{status}-subtle`, `text.{status}`, `text.on-{status}`, `border.{status}-subtle` for `destructive`, `success`, `warning`, `info` | `bg.success-subtle` |
| Scales | the pixel value | `space.16`, `size.40` |
| Component | kebab-case, same name in Figma, repo spec and code | `product-card` |
| Component props | camelCase; variant values lowercase | `size=sm`, `isLoading=true` |
| Brand mode | platform code | `B2R`, `B2E` |

**Developers** keep shadcn names: `build/shadcn-compat.css` maps `--primary`, `--muted-foreground`, `--ring`… to the DKB tokens, so `@digikala/ui-kit` and Tailwind classes like `bg-primary` keep working.

## Folder structure

```
design-system/
├── README.md            this file
├── DECISIONS.md         decision log
├── CHANGELOG.md         versions
├── COVERAGE.md          shadcn/ui → DKB component mapping and status
├── tokens/              DTCG JSON, one file per layer (source of truth)
├── build/               generated: CSS, Tailwind theme, shadcn mapping, token reference, contrast report, Figma variables (never edit by hand)
├── foundations/         typography.md, interaction-states.md (DS-43), action-placement.md (DS-46)
├── components/          INDEX.md (generated) + one spec per component + written guides (aspect-ratio, direction, typography)
├── patterns/            layouts.md: page layout standard (grid, shells, templates T1–T10)
├── components.json      component API for agents: library keys, variants, properties, defaults (generated from Figma)
├── figma-map.json       file, page and node IDs in the Figma files
├── figma-library-keys.json  library keys of published Foundations variables and styles
├── assets/fonts/        Digikala font files (licensed; repo is private)
└── scripts/             build.py, sync_check.py, make_index.py, make_agent_helpers.py, make_ramp.py; figma/ scripts run with use_figma
```

## Build

```bash
python3 design-system/scripts/build.py
```

It validates the tokens (types, references, layer rules, same tokens in every mode) and writes to `build/`:

| File | What it is |
|---|---|
| `tokens.css` | CSS variables, `@font-face`, `.text-*` classes. Brand switch: `data-brand="b2r|b2e"` on `<html>` or any element. Mobile values below 1024 px, desktop from 1024 px |
| `shadcn-compat.css` | shadcn / ui-kit variable names mapped to DKB tokens |
| `tailwind-theme.css` | Tailwind v4 `@theme` mapping |
| `tokens.resolved.json` | Final value of every token for each brand × screen |
| `figma-variables.json` | Collections, modes, aliases, scopes and visibility, text and effect styles: the input for the Figma sync |
| `token-reference.md` | Every usable token with its values and use. **Read this first when designing** |
| `contrast-report.md` | WCAG checks for every brand. The build fails if a text pair is below 4.5:1 (3:1 for UI and chart colours) |

After a component change also run `python3 design-system/scripts/make_index.py` (component index) and `python3 design-system/scripts/make_agent_helpers.py` (agent helpers with every library key). CI (`.github/workflows/design-system.yml`) fails if generated files are out of date.

## How Figma and the repo stay in sync

1. A token change is made in `tokens/*.json` and approved.
2. It is pushed to the Figma *DKB Foundations* library (variables) and the library is published.
3. The sync check compares Figma with the repo using fingerprints:
   - `python3 scripts/sync_check.py` prints the expected fingerprint of each collection and style group.
   - `scripts/figma/sync-check.js` is run in Figma (with the `use_figma` tool on DKB Foundations) and returns the actual ones.
   - Same fingerprint = in sync. If one differs, set `DETAIL` in the JS (and pass the same name to the Python script) to list and diff that collection's lines.
   - Components: `scripts/figma/export-components.js` (run on DKB Components and on DKB Commerce) returns that file's manifest and a fingerprint; merge it into `components.json` (entries with the same `file`); the fingerprint must equal the `components` or `commerce` line of `sync_check.py`. Icons are too many for one result: when they change, run `scripts/figma/export-icons.js` page by page and `scripts/merge_icons.py`.
4. Every component exists in Figma and as a spec in `components/`, with the same name, props and token bindings. `figma-map.json` links them (instead of Code Connect, which needs a Figma Organization plan).
5. The design agent reads the specs here, designs in Figma with the library components, and writes new or changed specs back here.

## Figma libraries

| Library | Contents | Link |
|---|---|---|
| DKB Foundations | Variables (4 collections, 264 variables), 15 text styles, 7 effect styles, Cover and Foundations pages | [Figma](https://www.figma.com/design/JRKA3w0gGzh2mDsItotKS3) |
| DKB Components | Full Lucide 1.52.0 icon set, 1,867 icons (index: `components/ICONS.md`); 69 Core components covering every non-AI shadcn/ui component (batches 1–5) + `template-region`. API in `components.json`, specs in `components/`, status in `COVERAGE.md` | [Figma](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp) |
| DKB Commerce | Page shell: `header`, `mobile-header`, `footer`, `bottom-nav` (+ `bottom-nav-item`), `action-bar`, `account-menu`, `logo` (official mark); 10 layout templates `template/*`. Uses DKB Components and Foundations (DS-37) | [Figma](https://www.figma.com/design/0xda5d6a7EF5fo2Yiqh91S) |

The old libraries (*DS - Shadcn*, *DS - Components*) stay as reference until screens are migrated.
