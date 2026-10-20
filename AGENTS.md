# AGENTS.md — how an AI agent designs for DKB

You are designing for **Digikala Business (DKB)**: B2R (retailers), B2E (company procurement) and Enterprise Portals.
This repo is your context and your output destination. Figma is where you design. Follow this file before anything else.

## 1. Read first (in this order)

| # | What | Where |
|---|---|---|
| 1 | Design system rules, architecture, naming | `design-system/README.md`, `design-system/DECISIONS.md` |
| 2 | Every usable token, its value per brand and its use | `design-system/build/token-reference.md` |
| 3 | Component API: library keys, variants, properties, defaults | `design-system/components.json` |
| 4 | How each component is used (when, states, RTL, copy) | `design-system/components/<name>.md` |
| 5 | The product you design for: users, rules, statuses, flows, principles, glossary, gaps | `knowledge-base/<platform>-foundation-knowledge-base.md` (B2E first: it holds the shared layers) |
| 6 | Evidence: interviews, heuristic evaluation, tests, CSAT | `research/research-insights-drive.md` |

Where the knowledge-base docs describe the **legacy** design system (DS - Shadcn, IRANYekanX, old themes), that is what is live today. **New designs always use the DKB Design System.**

## 2. Hard rules for designs

1. **Library components only.** Place instances of DKB Components, imported by key from `components.json` (`figma.importComponentSetByKeyAsync(key)`; icons: `importComponentByKeyAsync`). Configure them with their properties (`instance.setProperties({ [properties.<name>.id]: value })`) and variants. Never detach, never redraw a component.
2. **Tokens only.** Any frame you draw (layout, sections, cards that aren't components yet) binds fills, strokes, radius, padding and gaps to DKB variables, imported by key from `design-system/figma-library-keys.json`. Text uses DKB text styles. No raw hex, no raw px for colour, spacing or radius.
3. **Missing component?** Don't fake it silently. Build it from tokens in a clearly named frame `proposal/<name>` and list it under *Component requests* in the design spec. The design lead decides whether it joins the library.
4. **Right-to-left and Persian.** Layouts read right to left (start = right). Copy is Persian, polite «شما», Persian digits, toman with `numeric` text styles, Jalali dates, terms from the platform glossary. Real-looking content, never lorem ipsum.
5. **Brand and screen.** Set the `brand` mode (B2R or B2E) on every screen frame explicitly. Portals use the B2R or B2E mode until they have their own (DS-3). Design mobile 360 and desktop 1440 when the feature exists on both; set the `responsive` mode (Mobile / Desktop) on the frame.
6. **States are part of the design.** Empty, loading, error, disabled, long content and permission/verification gates, using the product's status dictionaries.
7. **Evidence over taste.** Tie decisions to the foundation docs' principles and research; log conflicts as open questions, never resolve them silently.

## 3. Workflow for a design task

1. **Brief.** Copy `designs/_template.md` to `designs/<platform>-<feature>.md`. Fill problem, users, constraints and the questions you need answered from the knowledge base. Ask the human only for what the sources can't answer.
2. **Figma file.** One file per feature in the Digikala B2B team, Project X folder, named `<Platform> · <Feature>` (e.g. `B2E · Company admin`). Pages: `Cover`, `Flows`, `Screens`, `States`, `proposals` (only if needed). Both DKB libraries enabled.
3. **Design.** Build screens from library components and tokens, section by section. Start every `use_figma` script with `design-system/scripts/figma/agent-helpers.js` (import by key, `paint`, `bind`, `text`, `instance`, `setModes`). Name frames `<flow>/<screen>/<breakpoint>` (e.g. `checkout/payment/mobile`).
4. **Check.** Run `design-system/scripts/figma/audit-design.js` on the Screens page (with `use_figma`). It must report 0 unbound colours, 0 text without a style and 0 non-library instances outside `proposal/` frames. Screenshot each screen in both brand modes and fix clipping, overlap and contrast.
5. **Spec.** Complete `designs/<platform>-<feature>.md`: screen table with Figma links, components used, component requests, decisions, open questions.
6. **Hand over.** Commit on a branch `design/<platform>-<feature>` and open a pull request with the summary and Figma link. If you have no push access, leave the changes in the working tree and tell the human what to review and push.

## 4. Changing the design system itself

Only with the design lead's approval. The repo is the source of truth (DS-4):

1. Edit `design-system/tokens/*.json` → `python3 design-system/scripts/build.py` (validates, builds CSS, contrast report).
2. Apply the change to Figma *DKB Foundations* (variables / styles), then run the sync check: `python3 design-system/scripts/sync_check.py` must print the same fingerprints as `design-system/scripts/figma/sync-check.js` run in Figma.
3. The human publishes the library. Components files accept the update.
4. Component changes: edit in *DKB Components*, update its spec, run `scripts/figma/export-components.js` and save the result as `design-system/components.json`; its fingerprint must equal the `components` fingerprint from `sync_check.py`.
5. Log the decision in `DECISIONS.md` and the change in `CHANGELOG.md`.

## 5. Figma lessons already learned

- A drop shadow (the focus ring) only renders around a frame with **clip content on**; frames with no fill need the ring as a 3 px outside stroke instead.
- Figma opacity variables are **0–100**; the CSS token is 0–1. The build converts.
- The **top-left variant** of a component set is its default; keep the default (`md`) top-left.
- Nested instances can only be exposed (`isExposedInstance`) after they are inside a component.
- Assets from a library can be imported by key only after the library is **published**.
- Text properties override the text of every variant; variant-specific sample text needs its own text node.
- The `brand` collection is hidden from publishing, but its modes still work in other files: reach it through the alias of any brand-coloured token (`setModes` in agent-helpers does this).
- Library variables, styles and components import by key without enabling the library in the file's UI.
- After a library publish, existing instances keep the old version until updated: `instance.swapComponent(<variant from importComponentSetByKeyAsync>)` moves them to the latest and keeps their overrides.
- To edit a component's nested exposed instances (e.g. the `label` and `control` inside `field`), find them with `instance.findOne(n => n.type === 'INSTANCE' && n.name === 'label')` and call `setProperties` on them.
- When binding a paint to a variable, give the placeholder paint a real colour (not white): a binding to the same variable the node already had can keep showing the placeholder.

## 6. Sandbox

*DKB · Agent sandbox* (Figma, Project X) is for trying things. It holds the dry-run screen `auth/login/mobile` (B2E, Mobile) built by following this file; the audit passed with 0 errors and 0 warnings.
