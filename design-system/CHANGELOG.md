# Changelog

## 0.13.0 — 2026-10-21 (action placement)

- DS-46: new `foundations/action-placement.md`: one rule for every button group (row: end-aligned, main action far left; stacked: main on top; tertiary at the opposite edge; one main action; mobile layouts)
- DKB Components: `card` footer (4 variants) now end-aligned with `primary` at the far left; `empty` (2 variants) `primary` on the left. Dialog, alert-dialog, drawer, sheet and action-bar checked: already matching. API and fingerprint unchanged
- `audit-design.js`: new error `buttonOrder` (in a group of 2+ non-ghost buttons, the primary/destructive one must be leftmost in a row or topmost in a column)
- Specs updated: card, empty, dialog, alert-dialog, drawer, sheet

## 0.12.1 — 2026-10-21 (card edge=full fix)

- `card` `edge=full` (md, sm): title, description, content slot and the show* toggles are linked to the card properties again (the cloned variants had lost their property references); corners bound to `radius.none` (0) instead of staying at 12. Tested on instances of both sizes, including switching `edge`. Component API and fingerprint unchanged (`c34a653e`)
- AGENTS.md §5: two lessons (cloned variants lose property references; library variables must be imported by key)
- `button`: underline removed from all 90 labels. The 0.11.2 change (underline on link hover) had spread to every variant, because the label is a shared text property. Link hover underline is now code-only (button spec, interaction-states.md); AGENTS.md §5 notes that text styling on a shared label applies to every variant

## 0.12.0 — 2026-10-21 (mobile full-width sections)

- DS-45: `card` variant `edge` = `inset` (default, unchanged) | `full` (no radius, no side borders, no shadow); 4 variants. Components fingerprint `c34a653e`
- `patterns/layouts.md`: mobile sections are `card` `edge=full` `size=sm` with `space.8` between (§3.1, §3.4, T4, decision D5)
- `audit-design.js`: new error `roundedAtScreenEdge` (a rounded or side-bordered container touching both edges of its screen frame)
- Card spec: when to use each edge, code classes

## 0.11.3 — 2026-10-21 (UX grounding)

- DS-44: new `designs/UX-GROUNDING.md` (steps, source priority, reference library incl. Shopify app, checkout and B2B docs); AGENTS.md hard rule 8 and workflow step 1b; *UX grounding* section in `designs/_template.md`; example spec, designs README, root README and llms.txt updated

## 0.11.2 — 2026-10-21 (interaction-state policy)

- DS-43: new `foundations/interaction-states.md`: state names and Figma variant mapping, fill ladders, links, selected/current, focus, disabled/loading/invalid/read-only, precedence, touch, motion, rules for agents
- `bg.primary-subtle` and `bg.muted` descriptions say which one is for user choices and which for position
- `button` spec: pressed per ladder (secondary and destructive reuse hover), link underline on hover
- DKB Components: `button` link variant, hover state (3 sizes) now underlined, as the spec always said

## 0.11.1 — 2026-10-21 (Foundations review fixes)

Follow-up of the DKB Foundations review. Focus ring kept as DS-22.
- DS-39: usage rules for `border.input` vs `border.control` on text fields; `ring.destructive` marked supplementary; `text.disabled` reworded (inactive content only, not "exempt")
- Focus width: `shadow.focus-ring` and `shadow.focus-ring-destructive` take their spread from `{border-width.focus}` in the JSON, and the spread is bound to `border-width/focus` in Figma. `sync_check` fingerprints the binding (effect style lines end in `@border-width/focus`)
- DS-40: `width.*` are max widths (descriptions)
- DS-41: `font.weight.*` described as CSS only
- DS-11 documented where it is used: the `responsive` files, the breakpoint primitives, `token-reference.md` and the Foundations page (Mobile below 1024, Desktop from 1024; Figma 360 = Mobile, 1440 = Desktop)
- DS-42: new effect style `shadow.sticky-bottom` (upward); `action-bar` (DKB Commerce, both variants) and its spec use it, applied after the Foundations publish; `shadow.sticky` / `shadow.dialog` descriptions say why they share a value
- `token-reference.md` now lists the `chart` and `width` groups (they were missing)
- DKB Foundations page: specimens for every semantic group (border.control, rings, opacity, widths, charts, control heights, layout, icon sizes, border widths, sticky-bottom) and a Desktop/Mobile typography comparison

## 0.11.0 — 2026-10-20 (full Lucide icon set)

- DS-38: DKB Components now holds the full Lucide 1.52.0 set — 1,866 icons, 1,867 with `trash-2` (1,829 new), sorted A–Z on the Icons page. Same build as before: 24×24 component `icon/<name>`, one flattened `glyph`, stroke 2 with round caps and joins, stroke bound to `text/default`, scales with the frame; the description carries Lucide's search tags
- The 38 existing icons keep their keys (instances unaffected); `trash-2` stays (Lucide now calls it `trash`, also added); `log-out` stays mirrored for RTL; no other icon is mirrored (`direction.md`)
- `components.json` → `icons`: one line per icon with key, node id, tags and a `common` flag (66 common icons: the first 38 + 28 commerce icons such as `truck`, `receipt`, `store`, `tag`, `percent`, `heart`, `star`, `funnel`)
- New `components/ICONS.md` (generated by `make_index.py`, checked by CI): every icon with its tags; INDEX.md links it
- `agent-helpers.js` embeds only the common icons (size limit of a use_figma script); `addIcons({ name: key })` adds any other icon before `use()`
- `export-components.js` returns the icon count instead of the icon map (a use_figma result is capped at ~48 KB); the fingerprint still covers every icon. New `scripts/figma/export-icons.js` (paged) and `scripts/merge_icons.py` refresh the icon block
- Sync: components fingerprint `0f29d0a4` (70 sets + 1,867 icons) matches Figma; commerce unchanged (`d68da4b6`)

## 0.10.2 — 2026-10-20 (official logo, RTL log-out)

- `logo` (DKB Commerce) now uses the official mark from *VA - DKB Logos*: md = smile + «دیجی‌کالا بیزینس» (28 high), sm = wordmark (20 high); one vector bound to `text.primary`. Every header, footer and template picks it up
- `mobile-header` home: search placeholder shortened to «جستجو» to fit beside the logo
- `icon/log-out` (DKB Components) mirrored for RTL; `direction.md` notes it

## 0.10.1 — 2026-10-20 (Commerce test)

- Sandbox test after publishing: `account/orders/desktop` (B2E) from the Commerce `template/account`, header rows=2, account-menu item set active; audit 0 errors, 0 warnings

## 0.10.0 — 2026-10-20 (DKB Commerce: page shell and templates)

- DS-37: three library files with one-way dependencies (Foundations ← Components ← Commerce) and the rules for platform differences (mode → properties → exposed items/slots → `platform` variant → prefixed component)
- New library *DKB Commerce*: `header` (storefront rows=1|2, focused), `mobile-header` (home, inner), `footer` (desktop, mobile), `bottom-nav` + `bottom-nav-item`, `action-bar` (amount, button), `account-menu`, `logo` (placeholder wordmark until the official SVG is added). Specs in `components/`
- The 10 layout templates moved from DKB Components to DKB Commerce (new keys) and now contain the real shell parts; `template-region` stays in DKB Components (page renamed *Template region*)
- DKB Components: 4 Lucide icons (layout-grid, map-pin, log-out, menu); 38 icons
- `components.json`: `files` + a `file` per component; `export-components.js` runs in either library; `sync_check.py` prints one fingerprint per file (components `ccfe3e00`, commerce `d68da4b6`); audit and index know the Commerce components

## 0.9.2 — 2026-10-20 (separator fix)

- Fix `separator`: variant property `label` renamed to `withLabel`; it clashed with the `label` text property (Figma showed a property conflict, and `setProps(…, { label })` was ambiguous)
- Library scan: no other component set has a property-name clash or a duplicate variant

## 0.9.1 — 2026-10-20 (template test, card fix)

- Sandbox test of the template flow: `checkout/payment/mobile` (B2E) started with `startFromTemplate('template/checkout', …)`, all 5 regions found, filled or removed with `fillRegion`; audit 0 errors, 0 warnings
- Fix `card`: `showContent` now hides the whole content area (it hid only the slot, leaving 96 px of empty space)

## 0.9.0 — 2026-10-20 (page layout standard and templates)

- `patterns/layouts.md` (DS-36): live B2R survey (desktop 1440, mobile 375), shadcn comparison and the standard: 12/8/4-col grid, content width 1312, grey page with white cards, 5 shells, 10 templates, sticky mobile action bar on checkout and forms
- DKB Components, new page *Templates*: `template/home`, `listing`, `detail`, `checkout`, `account`, `form`, `workspace`, `content`, `result`, `auth` (each `screen=desktop|mobile`, grids and widths bound to layout tokens) and the building block `template-region` (`kind=area|bar`, `label`). 80 component sets in total
- `agent-helpers.js`: `startFromTemplate`, `regions`, `fillRegion`; `audit-design.js`: new errors `regionLeftInDesign` and `templateNotDetached`
- AGENTS.md: start every screen from a template; templates are the one thing you detach
- `components.json` regenerated: 80 components, 34 icons, fingerprint `96c6a4e9`
- B2E knowledge base: grey page with white cards replaces the white-surface decision

## 0.8.1 — 2026-10-20 (agent tooling)

- `components/INDEX.md`: every component grouped by job, with what it is for, its variants and a link to its spec (generated by `scripts/make_index.py`)
- `scripts/figma/agent-helpers.js` is now generated by `scripts/make_agent_helpers.py` with every published key built in (116 tokens, 21 styles, 69 components, 34 icons); `use()` imports only what a script names; new `setProps`, `child`, `icon`, and RTL-aware `vstack` / `hrow`; tested in the sandbox
- `llms.txt` (repo index for AI tools), `.github/copilot-instructions.md` (points to AGENTS.md), CI workflow that builds tokens and fails if generated files are stale
- `designs/b2e-address-edit.md`: example of a finished design spec (sandbox dry run)
- README fixes: status v0.8, component pages and layers as they really are, folder tree matches the repo; `.gitignore` ignores `__pycache__`

## 0.8.0 — 2026-10-20 (batch 5: dates and charts — shadcn parity complete)

- Tokens (DS-34): `chart.1–5` = brand 600, teal, orange, pink, lime 600 (validated for colour-blind separation and 3:1 on white); 4 single-step primitives; shadcn `--chart-1…5` and `--sidebar-*` mapped in `shadcn-compat.css` and the Tailwind theme
- Components: `calendar` (Jalali, Saturday first, Persian digits; single and range) with `calendar-day` (9 states); `date-picker` (closed, open in a popover, mobile in a drawer, DS-35); `chart` (bar, line, area) with `chart-legend` and `chart-tooltip`. 69 components in total
- Review board "dates and charts" on the Cover page (B2R/B2E × Desktop/Mobile)
- Binding audit: 0 unbound colours, 0 unstyled text in all 6 new sets
- `components.json` regenerated: 69 components, 34 icons, fingerprint `0fc8a70d`; Foundations fingerprints match (primitives `3651332e`, semantic `450da8a1`, effect styles `c4264b99`)
- `COVERAGE.md`: every non-AI shadcn/ui component now has a DKB equivalent (55 + 3 spec-only; 8 AI deferred)

## 0.7.0 — 2026-10-20 (batch 4: navigation)

- 5 shadcn components in DKB Components: breadcrumb, carousel, navigation-menu, pagination, sidebar — plus building blocks `pagination-link`, `navigation-menu-trigger`, `navigation-menu-link`, `sidebar-menu-button`. 63 components in total. Specs in `components/`
- RTL throughout: breadcrumb separators chevron-left, «قبلی» (chevron-right) on the right and «بعدی» on the left, carousels start at the right, sidebar on the right edge with its border on the left, navigation panels drop aligned to the trigger's right edge
- Sidebar uses the size scale directly (`size.256`, collapsed `size.48`), no new tokens
- 4 Lucide icons added (34): house, credit-card, settings, wallet
- Review board "navigation" on the Cover page (B2R/B2E × Desktop/Mobile)
- Binding audit: 0 unbound colours, 0 unstyled text in all 9 new sets
- `components.json` regenerated: 63 components, 34 icons, fingerprint `e331b5f8`

## 0.6.0 — 2026-10-20 (batch 3: content and display)

- 11 shadcn components in DKB Components: accordion, avatar, card, collapsible, data-table, empty, item, resizable, scroll-area, table, tabs — plus building blocks `tab`, `accordion-item` and `table-cell`. 54 components in total. Specs in `components/`
- Spec-only guides: `aspect-ratio` (DKB media ratios), `direction` (RTL rules, mirroring, LTR islands), `typography` (shadcn examples → DKB text styles)
- Tables are built from `table-cell` rows inside a frame named `table/<what>`; `table` is a ready sample and `data-table` the full pattern (search, columns, selection, pagination)
- 6 Lucide icons added (30): chevrons-up-down, grip-vertical, ellipsis, inbox, arrow-up-down, package
- Review board "content" on the Cover page (B2R/B2E × Desktop/Mobile); mobile shows items instead of tables
- Binding audit: 0 unbound colours, 0 unstyled text in all 14 new sets
- `components.json` regenerated: 54 components, 30 icons, fingerprint `c9e711fb` (matches `sync_check.py`)

## 0.5.0 — 2026-10-20 (batch 2: overlays and menus)

- 13 shadcn overlays and menus in DKB Components: alert-dialog, combobox, command, context-menu, dialog, drawer, dropdown-menu, hover-card, menubar, popover, sheet, toast, tooltip — plus helpers `menu-item` (one row type for every menu, 17 variants), `slot` (content placeholder) and `overlay` (backdrop). 40 components in total. Specs in `components/`
- Overlay content uses the **slot pattern**: build the content as a local `content/…` component and swap it into the overlay's `content` property (see `components/slot.md`, AGENTS.md). The audit now fails a design that still shows a slot
- Review board "overlays" on the Cover page (B2R/B2E × Desktop/Mobile)
- `components.json` regenerated: 40 components, fingerprint `87830bf0`; instance-swap defaults now name the component set (`slot`) instead of the variant
- Sandbox test (`order/address-edit/desktop`, B2E): dialog over overlay with a local `content/address-form` (two `field`s) swapped into its slot; audit passed (0 errors, 0 warnings). Negative test: an unswapped dialog is caught by the slot check
- Tokens for overlays (DS-29–31): `z-index.popover` above `dialog`; `shadow.dialog` = lg; `width.hover-card` / `popover` / `sheet` / `dialog` on new size steps 256 / 288 / 384 / 512
- Sync check now fingerprints effect-style values, not only their names
- DS-32: dialogs become bottom sheets on mobile

## 0.4.0 — 2026-10-20 (batch 1: form primitives)

- 16 new components in DKB Components, matching shadcn/ui (DS-24): label, input, textarea, field, input-group, input-otp, native-select, slider, toggle, toggle-group, button-group, kbd, spinner, progress, separator, skeleton (165 variants). Specs in `components/`
- `input-field` removed; forms use `field` (label + input / textarea / select + helper), with `input`, `textarea` and `label` as atoms (DS-26)
- `select` is now an atom (trigger only); its label and helper moved to `field`
- Disabled = normal look at `opacity.disabled` for every control, including button, icon-button and select (DS-28)
- `components.json` regenerated: 24 components, 24 icons, fingerprint `0cebd762` (matches `sync_check.py`)
- `audit-design.js` and `export-components.js` know the 24 component names; `figma-map.json` lists the new pages and sets
- Review board rebuilt with the new components in B2R/B2E × Desktop/Mobile
- Binding audit: 0 unbound colours and 0 unstyled text across all 24 sets. Fixed-geometry exceptions: slider track 6px, progress 8px, OTP caret, outline toggle-group / button-group overlap −1, checkbox indicator 12px, radio dot 8px, separator 1px
- `COVERAGE.md`: 23 of 66 shadcn entries done
- Sandbox dry run (`auth/login/mobile`, B2E): `input-field` replaced by `field`, button and alert moved to the latest library version; audit passed (0 errors, 0 warnings)

## 0.3.1 — 2026-10-20 (agent-ready)

- `components.json`: machine-readable component API (library keys, variants, properties, defaults) generated by `scripts/figma/export-components.js`; components added to the sync check (fingerprint `69efa2c5`)
- Default variant of button, icon-button, input-field and select is now `md` (top-left in Figma)
- `scripts/figma/audit-design.js`: checks a design page for unbound colours, unstyled text, non-library instances (verified: catches all four error types in a negative test)
- `scripts/figma/agent-helpers.js`: import by key, token-bound paint and spacing, styled text, instance by variant and property name, brand/screen modes
- Dry run in *DKB · Agent sandbox*: B2E mobile login built from library components and tokens only; audit passed
- Repo root: `AGENTS.md` (agent entry point), `CLAUDE.md`, `designs/` with spec template
- Knowledge-base docs (living docs, Project copies, repo copies) now point new designs to the DKB Design System

## 0.3.0 — 2026-10-20 (components batch 1)

- **Focus ring = shadcn/ui** (DS-22): `border.focus` → neutral-400; new `ring.default`, `ring.destructive`, alpha primitives, effect styles `shadow.focus-ring` and `shadow.focus-ring-destructive`. Foundations Figma updated, sync check matches
- New token `border.control` (DS-21)
- New token `opacity.disabled` (0.5); disabled checkbox, radio and switch now keep their checked/unchecked look at 50% (DS-23). The build writes opacity to Figma as 0-100 (50), since Figma opacity variables use percent
- DKB Components file: Lucide icon set (24) and 9 components (278 variants): button, icon-button, input-field, select, checkbox, radio, switch, badge, alert; specs in `components/` (+ `_template.md`)
- All component fills, strokes and text are bound to tokens and text styles (audit: 0 unbound)
- Review board (Cover page): the components in B2R/B2E × Desktop/Mobile
- `figma-library-keys.json` (keys of published Foundations assets)

## 0.2.1 — 2026-10-19 (Figma Foundations)

- Figma file *DKB Foundations* created: 4 collections (153 + 11 + 59 + 17 variables), 15 text styles bound to variables, 4 shadow styles bound to alpha variables, Cover and Foundations documentation pages
- Hidden primitives and brand ramp now have empty Figma scopes (not in any picker); alpha colours keep `EFFECT_COLOR`
- Sync check: `scripts/sync_check.py` + `scripts/figma/sync-check.js` (fingerprints); first run: everything matches
- `figma-map.json` with file, page and collection IDs

## 0.2.0 — 2026-10-19 (structure review)

- **Breaking:** semantic colours renamed by property (`bg.*`, `text.*`, `border.*`); shadcn names move to `build/shadcn-compat.css`
- **Breaking:** brand layer is now an 11-step ramp (`brand.50…950`); main colour at 800 for every brand; navy ramp regenerated
- Figma scopes and visibility stored in the token files; new `build/figma-variables.json` for the sync
- CSS brand switch works on any element, not only `<html>`
- Added icon sizes, motion and z-index tokens; Tailwind v4 theme; token reference
- `make_ramp.py` anchors any colour at a chosen step (default 800)
- Contrast: 31 checks per brand, all pass

## 0.1.0 — 2026-10-19

- Architecture, naming and decisions (README, DECISIONS)
- Digikala font added; typography foundation (font facts, OpenType features)
- Tokens: 4 collections (primitives 160, brand 10 × B2R/B2E, semantic 62, responsive 17 × Desktop/Mobile) and 15 text styles
- Build script: validation, CSS, resolved values, contrast report (all checks pass for B2R and B2E)
