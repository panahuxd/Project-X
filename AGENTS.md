# AGENTS.md — how an AI agent designs for DKB

You are designing for **Digikala Business (DKB)**: B2R (retailers), B2E (company procurement) and Enterprise Portals.
This repo is your context and your output destination. Figma is where you design. Follow this file before anything else.

## 1. Read first (in this order)

| # | What | Where |
|---|---|---|
| 1 | Design system rules, architecture, naming | `design-system/README.md`, `design-system/DECISIONS.md` |
| 1b | Interaction states: which state looks how, fill ladders, selected vs current | `design-system/foundations/interaction-states.md` |
| 1c | Action placement: where the main and secondary buttons go in every footer, dialog, sheet and bar | `design-system/foundations/action-placement.md` |
| 2 | Every usable token, its value per brand and its use | `design-system/build/token-reference.md` |
| 3 | Which component to use for what (all 69, grouped) and the 10 layout templates | `design-system/components/INDEX.md` |
| 4 | Component API: library keys, variants, properties, defaults | `design-system/components.json` |
| 5 | How each component is used (when, states, RTL, copy) and the RTL rules | `design-system/components/<name>.md`, `design-system/components/direction.md` |
| 5b | Page layout standard: grid, shells, templates T1–T10 (DS-36) | `design-system/patterns/layouts.md` |
| 6 | The product you design for: users, rules, statuses, flows, principles, glossary, gaps | `knowledge-base/<platform>-foundation-knowledge-base.md` (B2E first: it holds the shared layers) |
| 7 | Evidence: interviews, heuristic evaluation, tests, CSAT | `research/research-insights-drive.md` |
| 8 | **UX grounding**: how to find and apply the UX principles, standards and best practices for the task (WCAG, NN/g, Baymard, Shopify, platform guidelines…) and the priority when they disagree | `designs/UX-GROUNDING.md` |

Where the knowledge-base docs describe the **legacy** design system (DS - Shadcn, IRANYekanX, old themes), that is what is live today. **New designs always use the DKB Design System.**

## 2. Hard rules for designs

1. **Library components only.** Place instances of DKB Components (Core) and DKB Commerce (shell, product, checkout parts, templates), imported by key from `components.json` (`figma.importComponentSetByKeyAsync(key)`; icons: `importComponentByKeyAsync`). Configure them with their properties (`instance.setProperties({ [properties.<name>.id]: value })`) and variants. Never detach, never redraw a component. The one exception is a **layout template** (`template/*`): place it and detach it at once (`startFromTemplate`).
2. **Tokens only.** Any frame you draw (layout, sections, cards that aren't components yet) binds fills, strokes, radius, padding and gaps to DKB variables, imported by key (all keys are built into `agent-helpers.js`; the source is `design-system/figma-library-keys.json`). Text uses DKB text styles. No raw hex, no raw px for colour, spacing or radius.
3. **Missing component?** Don't fake it silently. Build it from tokens in a clearly named frame `proposal/<name>` and list it under *Component requests* in the design spec. The design lead decides whether it joins the library.
4. **Right-to-left and Persian.** Layouts read right to left (start = right). Copy is Persian, polite «شما», Persian digits, toman with `numeric` text styles, Jalali dates, terms from the platform glossary. Real-looking content, never lorem ipsum.
5. **Brand and screen.** Set the `brand` mode (B2R or B2E) on every screen frame explicitly. Portals use the B2R or B2E mode until they have their own (DS-3). Design mobile 360 and desktop 1440 when the feature exists on both; set the `responsive` mode (Mobile / Desktop) on the frame.
6. **States are part of the design.** Empty, loading, error, disabled, long content and permission/verification gates, using the product's status dictionaries. Interaction states follow `foundations/interaction-states.md` (DS-43): never invent a hover or pressed colour. Button groups follow `foundations/action-placement.md` (DS-46): main action last at the far left in a row, on top when stacked, one per container.
7. **Evidence over taste.** Tie decisions to the foundation docs' principles and research; log conflicts as open questions, never resolve them silently.
8. **UX grounding first (DS-44).** Before designing anything, collect the UX principles, guidelines, standards and best practices that apply to the task's context (`designs/UX-GROUNDING.md`: accessibility, usability heuristics, e-commerce and B2B research such as Baymard and Shopify, platform guidelines, real-app patterns) and apply them in line with the product's users, rules and constraints. Every decision cites a source; product rules and accessibility outrank external practice.

## 3. Workflow for a design task

1. **Brief.** Copy `designs/_template.md` to `designs/<platform>-<feature>.md`. Fill problem, users, constraints and the questions you need answered from the knowledge base. Ask the human only for what the sources can't answer.
1b. **UX grounding.** Name the patterns in the task, collect the applicable guidance from `designs/UX-GROUNDING.md` (in its priority order), translate each item to DKB (which rule, user or component it meets) and fill the spec's *UX grounding* table before any Figma work.
2. **Figma file.** One file per feature in the Digikala B2B team, Project X folder, named `<Platform> · <Feature>` (e.g. `B2E · Company admin`). Pages: `Cover`, `Flows`, `Screens`, `States`, `proposals` (only if needed). The DKB libraries enabled (Foundations, Components, Commerce).
3. **Design.** Start every screen from its layout template (`design-system/patterns/layouts.md` §6): `startFromTemplate(name, screen, brand, frameName)`, then replace each region with `fillRegion` or remove it. Build the content from library components and tokens, section by section. Paste `design-system/scripts/figma/agent-helpers.js` (generated, every library key built in) at the top of every `use_figma` script, then `await use({ tokens, styles, components, icons })` with the names you need (icons: the common ones are built in; for any other Lucide icon find it in `design-system/components/ICONS.md`, copy its key from `components.json` → `icons` and call `addIcons({ name: key })` first) and build with `paint`, `bind`, `text`, `instance`, `setProps`, `child`, `icon`, `vstack`, `hrow` (RTL-aware) and `setModes`. Name frames `<flow>/<screen>/<breakpoint>` (e.g. `checkout/payment/mobile`).
4. **Check.** Run `design-system/scripts/figma/audit-design.js` on the Screens page (with `use_figma`). It must report 0 unbound colours, 0 text without a style, 0 non-library instances outside `proposal/` frames, no slot or template region left visible, no rounded container at the screen edge and no button group with the main action out of place. Screenshot each screen in both brand modes and fix clipping, overlap and contrast.
5. **Spec.** Complete `designs/<platform>-<feature>.md`: UX grounding, screen table with Figma links, components used, component requests, decisions (each citing a source), open questions.
6. **Hand over.** Commit on a branch `design/<platform>-<feature>` and open a pull request with the summary and Figma link. If you have no push access, leave the changes in the working tree and tell the human what to review and push.

## 4. Changing the design system itself

Only with the design lead's approval. The repo is the source of truth (DS-4):

1. Edit `design-system/tokens/*.json` → `python3 design-system/scripts/build.py` (validates, builds CSS, contrast report).
2. Apply the change to Figma *DKB Foundations* (variables / styles), then run the sync check: `python3 design-system/scripts/sync_check.py` must print the same fingerprints as `design-system/scripts/figma/sync-check.js` run in Figma.
3. The human publishes the library. Components files accept the update.
4. Component changes: edit in *DKB Components* (Core) or *DKB Commerce* (composite parts, templates; DS-37 says which), update its spec, run `scripts/figma/export-components.js` in that file and merge the result into `design-system/components.json` (the entries with the same `file`; icons: `export-icons.js` + `merge_icons.py`); its fingerprint must equal the `components` or `commerce` fingerprint from `sync_check.py`. Then run `scripts/make_index.py` and `scripts/make_agent_helpers.py` (CI fails if their output is stale).
5. Log the decision in `DECISIONS.md` and the change in `CHANGELOG.md`.

## 5. Figma lessons already learned

- A drop shadow (the focus ring) only renders around a frame with **clip content on**; frames with no fill need the ring as a 3 px outside stroke instead.
- Figma opacity variables are **0–100**; the CSS token is 0–1. The build converts.
- The **top-left variant** of a component set is its default; keep the default (`md`) top-left.
- Nested instances can only be exposed (`isExposedInstance`) after they are inside a component.
- Assets from a library can be imported by key only after the library is **published**.
- Text properties override the text of every variant; variant-specific sample text needs its own text node. The same goes for text formatting: changing `textDecoration` (or other text styling) on a text node bound to a component TEXT property changes it in **every** variant. Per-variant text styling isn't possible on a shared label.
- The `brand` collection is hidden from publishing, but its modes still work in other files: reach it through the alias of any brand-coloured token (`setModes` in agent-helpers does this).
- Library variables, styles and components import by key without enabling the library in the file's UI.
- After a library publish, existing instances keep the old version until updated: `instance.swapComponent(<variant from importComponentSetByKeyAsync>)` moves them to the latest and keeps their overrides.
- To edit a component's nested exposed instances (e.g. the `label` and `control` inside `field`), find them with `instance.findOne(n => n.type === 'INSTANCE' && n.name === 'label')` and call `setProperties` on them.
- **Overlays (dialog, sheet, drawer, popover, hover-card, alert-dialog) take custom content through a slot**: build the content as a local component named `content/<what>` from DKB components and tokens, then set the overlay instance's `content` property (INSTANCE_SWAP) to it. Put an `overlay` instance behind modal panels. On mobile, use `drawer` instead of `dialog` (DS-32). The audit fails if a `slot` placeholder is still visible.
- **Tables**: build them from `table-cell` instances, one horizontal auto-layout frame per row, inside a vertical frame named `table/<what>` (never just `table`). First column on the right; amounts `align=end`. On mobile, show the rows as `item`s or cards instead.
- Mockups with entered values: set the control's `state` to `filled` (input, textarea, select). The `default` state shows the value in the placeholder colour.
- Paint opacity on a variable-bound fill: set it after binding by reassigning (`node.fills = [Object.assign({}, node.fills[0], { opacity: 0.15 })]`); spreading the bound paint before assigning loses it.
- **Charts**: series colours are `chart.1…5` in that order; text stays in text tokens; one y-axis; time left to right. See `components/chart.md`.
- When binding a paint to a variable, give the placeholder paint a real colour (not white): a binding to the same variable the node already had can keep showing the placeholder.
- **Commerce parts that differ per platform** (DS-37): set the `brand` mode for colour; change content through properties and exposed items (e.g. `account-menu` items, `bottom-nav` items, `header` links); use a `platform` variant only where one exists. Never detach a shell part to change it.
- **Adding a variant by cloning** an existing one inside a component set loses its `componentPropertyReferences` (text, boolean and instance-swap links). Copy them from the source variant node by node, then test an instance with `setProperties` before publishing.
- In DKB Components and Commerce, Foundations variables are **library** variables: `getLocalVariablesAsync()` doesn't return them, so binding by local name silently binds nothing. Import them by key (`figma-library-keys.json`) and check the bound value afterwards.
- **Mobile sections are full width (DS-45)**: on a Mobile screen every page section is a `card` with `edge=full` and `size=sm`, stacked with `space.8` between. Never leave a rounded or side-bordered container touching the screen edges (the audit fails `roundedAtScreenEdge`). Selectable options inside a section keep their rounded border.
- **Layout templates**: detaching keeps the grid, the bound widths and gaps and the `template-region` instances (they become direct library instances). Asides are fixed widths (3 cols = 310, 4 cols = 421 at 1312); the main column is FILL. Set the `brand` mode after detaching; the `responsive` mode comes with the template.

## 6. Sandbox and example

*DKB · Agent sandbox* (Figma, Project X) is for trying things. It holds four screens built by following this file, all passing the audit with 0 errors and 0 warnings:
- `auth/login/mobile` (B2E, Mobile): `field`, `alert`, `button`.
- `order/address-edit/desktop` (B2E, Desktop): `overlay` + `dialog` with a local `content/address-form` swapped into its slot.
- `checkout/payment/mobile` (B2E, Mobile): started from `template/checkout`; regions replaced by `card`s, a `proposal/mobile-header` and a `proposal/action-bar` (amount + `button`), one region removed (built before the Commerce shell existed; today's templates already contain `mobile-header` and `action-bar`).
- `account/orders/desktop` (B2E, Desktop): started from the Commerce `template/account`; `header` set to rows=2, `account-menu` relabelled with «سفارش‌ها» active, regions replaced by a token-built page header and a `card`.

[`designs/b2e-address-edit.md`](designs/b2e-address-edit.md) is the matching example of a finished design spec.
