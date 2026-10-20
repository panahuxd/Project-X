# DKB Design System — Foundation

One design system for all three DKB platforms: **B2R**, **B2E** and **Enterprise Portals**.
This folder is the **source of truth for token values and component specs**. The Figma libraries mirror it 1:1.

> Status: v0.8 — tokens for B2R and B2E, 69 Core components covering every non-AI shadcn/ui component. Next: Commerce components. Owner and approver of every token or library change: the design lead.

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
| Core | shadcn-based primitives: button, input, select, badge, dialog, sheet, table, tabs, toast… | 69 components, done | Platform-agnostic |
| Commerce | Shared buying blocks: price, quantity, product card and row, bill box, payment method item, status badge, stepper, order timeline, filters, header and bottom nav | Next | Built from Core; platform differences via props and slots |
| Platform | Only what one platform really owns (loyalty, approvals, company admin, tenant gate, allowance) | Later | Thin; built from Core and Commerce |

In Figma each component has its own page in *DKB Components*, named after it and sorted A–Z; building blocks share their parent's page (e.g. `menu-item` on *Dropdown menu*, `table-cell` on *Table*). Exact pages and node ids are in `figma-map.json`. The layer is recorded per component in `components.json` (`layer`). Find a component by what it is for in [`components/INDEX.md`](components/INDEX.md).

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
├── foundations/         typography.md (more foundation notes as needed)
├── components/          INDEX.md (generated) + one spec per component + written guides (aspect-ratio, direction, typography)
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
   - Components: `scripts/figma/export-components.js` (run on DKB Components) returns the component manifest and a fingerprint; save the manifest as `components.json`; its fingerprint must equal the `components` line of `sync_check.py`.
4. Every component exists in Figma and as a spec in `components/`, with the same name, props and token bindings. `figma-map.json` links them (instead of Code Connect, which needs a Figma Organization plan).
5. The design agent reads the specs here, designs in Figma with the library components, and writes new or changed specs back here.

## Figma libraries

| Library | Contents | Link |
|---|---|---|
| DKB Foundations | Variables (4 collections, 264 variables), 15 text styles, 6 effect styles, Cover and Foundations pages | [Figma](https://www.figma.com/design/JRKA3w0gGzh2mDsItotKS3) |
| DKB Components | 34 Lucide icons; 69 Core components covering every non-AI shadcn/ui component (batches 1–5). API in `components.json`, specs in `components/`, status in `COVERAGE.md` | [Figma](https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp) |

The old libraries (*DS - Shadcn*, *DS - Components*) stay as reference until screens are migrated.
