# Project X — DKB Product & Design Knowledge Base

Markdown knowledge base for the Digikala Business (DKB) product domain, used as context for a UI/UX design agent and skill. Hosted here so other LLMs, agents and tools can reference the same files.

The source of truth for the three foundation docs is the living docs on claude.ai (linked inside each file). The files here are exported knowledge-base copies and must be kept in sync with them.

## Structure

| Folder | File | What it is |
| --- | --- | --- |
| `knowledge-base/` | `b2e-foundation-knowledge-base.md` | B2E (company procurement) foundation: context, roles, rules, statuses, IA, flows, design system, components, gaps, decisions. Also covers layers shared with B2R and Portals. |
| `knowledge-base/` | `b2r-foundation-knowledge-base.md` | B2R (retailers, b2b.digikala.com) foundation: B2R-specific rules, statuses, flows, components, gaps and decisions D1–D13. |
| `knowledge-base/` | `portals-foundation-knowledge-base.md` | Enterprise Portals foundation: tenant model (mehrad, shad, cbi, cbint), rules, statuses, theming, gaps. |
| `research/` | `research-insights-drive.md` | Digest of the Drive research folder: interviews, heuristic evaluation, usability and A/B tests, CSAT, research plans. |
| `raw-findings/` | `b2e-phase1-raw-findings.md` | Raw notes behind the B2E foundation (Figma, live, code, Confluence). |
| `raw-findings/` | `b2r-phase1-raw-findings.md` | Raw notes behind the B2R foundation. |
| `raw-findings/` | `portals-phase1-raw-findings.md` | Raw notes behind the Portals foundation. |

## Reading order for an agent

1. `knowledge-base/b2e-foundation-knowledge-base.md` — shared layers (design system, tokens, components, conflict process).
2. The platform doc you are designing for (B2R or Portals).
3. `research/research-insights-drive.md` for evidence.
4. `raw-findings/` only when a detail is missing from the foundation docs.

## Conventions

- **Current** = in code or live today · **Target** = in strategy, PRD or Figma, not built yet · **Gap** = known inconsistency.
- Conflicts between sources are logged in each doc's Gaps table, never resolved silently.
- Personal data from the sources is not included.

Last synced: 19 Oct 2026.
