# Project X — DKB Product Knowledge & Design System

The repo AI agents and designers work from to design Digikala Business (DKB) products (B2R, B2E, Enterprise Portals) in Figma:

- **Product knowledge:** foundation docs, research and raw findings.
- **DKB Design System:** tokens, component specs and the component API, kept in sync with the Figma libraries *DKB Foundations* and *DKB Components*.
- **Designs:** one spec per design task, linked to its Figma file.

**Agents: start with [`AGENTS.md`](AGENTS.md).**

The source of truth for the three foundation docs is the living docs on claude.ai (linked inside each file). The files here are exported knowledge-base copies and must be kept in sync with them.

## Structure

| Folder | File | What it is |
| --- | --- | --- |
| — | `AGENTS.md` | Entry point for agents: what to read, hard rules for designs, the design-task workflow, how to change the design system |
| — | `llms.txt` | Index of the repo for AI tools (llmstxt.org format) |
| `.github/` | `workflows/design-system.yml`, `copilot-instructions.md` | CI: builds the tokens and fails if generated files are stale · pointer to AGENTS.md for Copilot |
| `design-system/` | `README.md` and folders | DKB Design System: tokens (source of truth), build, component specs, `components.json` API, Figma sync check. See its README |
| `designs/` | `<platform>-<feature>.md`, `UX-GROUNDING.md` | Design-task specs (from `_template.md`), each linked to its Figma file · the UX-grounding rule and reference library every task starts with (DS-44) |
| `implementations/` | `<platform>-<feature>/` | Reference web builds of a design, on the DKB build files (e.g. `b2r-event-landing`, Next.js). Production code still lives in `b2b-shop-front` |
| `knowledge-base/` | `b2e-foundation-knowledge-base.md` | B2E (company procurement) foundation: context, roles, rules, statuses, IA, flows, design system, components, gaps, decisions. Also covers layers shared with B2R and Portals. |
| `knowledge-base/` | `b2r-foundation-knowledge-base.md` | B2R (retailers, b2b.digikala.com) foundation: B2R-specific rules, statuses, flows, components, gaps and decisions D1–D13. |
| `knowledge-base/` | `portals-foundation-knowledge-base.md` | Enterprise Portals foundation: tenant model (mehrad, shad, cbi, cbint), rules, statuses, theming, gaps. |
| `research/` | `research-insights-drive.md` | Digest of the Drive research folder: interviews, heuristic evaluation, usability and A/B tests, CSAT, research plans. |
| `raw-findings/` | `b2e-phase1-raw-findings.md` | Raw notes behind the B2E foundation (Figma, live, code, Confluence). |
| `raw-findings/` | `b2r-phase1-raw-findings.md` | Raw notes behind the B2R foundation. |
| `raw-findings/` | `portals-phase1-raw-findings.md` | Raw notes behind the Portals foundation. |

## Reading order for an agent

The full order and rules are in [`AGENTS.md`](AGENTS.md). In short:

1. `design-system/` — README, `build/token-reference.md`, `components/INDEX.md`, `components.json`, `components/*.md`.
2. `knowledge-base/b2e-foundation-knowledge-base.md` — shared product layers (its design-system sections describe the legacy setup still live).
3. The platform doc you are designing for (B2R or Portals).
4. `research/research-insights-drive.md` for evidence.
5. `raw-findings/` only when a detail is missing from the foundation docs.
6. `designs/UX-GROUNDING.md` before designing: the UX principles, standards and best practices for the task's context, applied to the product (DS-44).

## Conventions

- **Current** = in code or live today · **Target** = in strategy, PRD or Figma, not built yet · **Gap** = known inconsistency.
- Conflicts between sources are logged in each doc's Gaps table, never resolved silently.
- Personal data from the sources is not included.

Last synced: 19 Oct 2026.
