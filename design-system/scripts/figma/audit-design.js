// DKB design audit — run with use_figma on a design file (read-only).
// Checks the current page (or PAGE below) against AGENTS.md rules and returns a report.
// Pass when every count under `errors` is 0. `warnings` are for review.
const PAGE = null; // e.g. 'Screens'; null = first page
const DKB_COMPONENTS = ['accordion', 'accordion-item', 'alert', 'alert-dialog', 'avatar', 'badge', 'breadcrumb', 'button', 'button-group', 'calendar', 'calendar-day', 'card', 'carousel', 'chart', 'chart-legend', 'chart-tooltip', 'checkbox', 'collapsible', 'combobox', 'command', 'context-menu', 'data-table', 'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'empty', 'field', 'hover-card', 'icon-button', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'menu-item', 'menubar', 'native-select', 'navigation-menu', 'navigation-menu-link', 'navigation-menu-trigger', 'overlay', 'pagination', 'pagination-link', 'popover', 'progress', 'radio', 'resizable', 'scroll-area', 'select', 'separator', 'sheet', 'sidebar', 'sidebar-menu-button', 'skeleton', 'slider', 'slot', 'spinner', 'switch', 'tab', 'table', 'table-cell', 'tabs', 'textarea', 'toast', 'toggle', 'toggle-group', 'tooltip', 'template-region', 'template/home', 'template/listing', 'template/detail', 'template/checkout', 'template/account', 'template/form', 'template/workspace', 'template/content', 'template/result', 'template/auth', 'logo', 'header', 'mobile-header', 'footer', 'action-bar', 'bottom-nav', 'bottom-nav-item', 'account-menu'];
// ^ keep in sync with design-system/components.json (component set names, DKB Components + DKB Commerce). Icons: names starting with "icon/".
const page = PAGE ? figma.root.children.find(p => p.name === PAGE) : figma.root.children[0];
await figma.setCurrentPageAsync(page);
const inProposal = n => { for (let p = n; p && p.type !== 'PAGE'; p = p.parent) if (p.name && p.name.startsWith('proposal/')) return true; return false; };
const insideInstance = n => { for (let p = n.parent; p && p.type !== 'PAGE'; p = p.parent) if (p.type === 'INSTANCE') return true; return false; };
const errors = { unboundColour: [], textWithoutStyle: [], nonLibraryInstance: [], detachedLooking: [], slotLeftInDesign: [], regionLeftInDesign: [], templateNotDetached: [], roundedAtScreenEdge: [], buttonOrder: [] };
const warnings = { unboundSpacing: [], effectWithoutStyle: [], noBrandMode: [], clippedOverhang: [] };
const nodes = page.findAll(() => true);
for (const n of nodes) {
  if (inProposal(n)) continue;
  const inInst = insideInstance(n);
  for (const pr of ['fills', 'strokes']) {
    const a = n[pr]; if (!Array.isArray(a)) continue;
    for (const p of a) if (p.type === 'SOLID' && p.visible !== false && !(p.boundVariables && p.boundVariables.color)) errors.unboundColour.push(`${n.name} (${n.id}) ${pr}`);
  }
  if (n.type === 'TEXT' && !n.textStyleId) errors.textWithoutStyle.push(`${n.name} (${n.id})`);
  if (n.type === 'INSTANCE' && !inInst) {
    const mc = await n.getMainComponentAsync();
    const setName = mc && mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent.name : mc && mc.name;
    const ok = mc && mc.remote && (DKB_COMPONENTS.includes(setName) || (setName || '').startsWith('icon/'));
    if (ok && (setName || '').startsWith('template/')) errors.templateNotDetached.push(`${n.name} (${n.id})`);
    if (!ok) errors.nonLibraryInstance.push(`${n.name} (${n.id}) → ${setName}${mc && !mc.remote ? ' [local]' : ''}`);
  }
  if (n.type === 'INSTANCE' && n.visible) { // an overlay's `content` still showing the library placeholder
    const m = await n.getMainComponentAsync();
    if (m && m.remote && m.parent && m.parent.type === 'COMPONENT_SET' && m.parent.name === 'slot') errors.slotLeftInDesign.push(`${n.name} (${n.id})`);
    if (m && m.remote && m.parent && m.parent.type === 'COMPONENT_SET' && m.parent.name === 'template-region') errors.regionLeftInDesign.push(`${n.name} (${n.id})`); // a layout-template region not yet replaced
  }
  if (n.type === 'FRAME' && !inInst && DKB_COMPONENTS.some(c => n.name === c || n.name.startsWith(c + ' '))) errors.detachedLooking.push(`${n.name} (${n.id})`);
  if (n.type === 'FRAME' && !inInst && n.layoutMode && n.layoutMode !== 'NONE') {
    const b = n.boundVariables || {};
    for (const k of ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'itemSpacing']) if (n[k] > 0 && !b[k]) { warnings.unboundSpacing.push(`${n.name} (${n.id}) ${k}=${n[k]}`); break; }
  }
  if ('effects' in n && n.effects.length && !n.effectStyleId && !inInst) warnings.effectWithoutStyle.push(`${n.name} (${n.id})`);
}
// DS-45: a container with rounded corners or side borders must not touch both side edges of its screen frame
for (const scr of page.children.filter(c => c.type === 'FRAME')) {
  const L = scr.absoluteBoundingBox.x, R = L + scr.width;
  for (const n of scr.findAll(n => (n.type === 'FRAME' || n.type === 'INSTANCE') && n.visible && !insideInstance(n))) {
    const b = n.absoluteBoundingBox; if (!b || b.x > L + 0.5 || b.x + b.width < R - 0.5) continue;
    const r = typeof n.cornerRadius === 'number' ? n.cornerRadius : Math.max(n.topLeftRadius || 0, n.topRightRadius || 0);
    const sides = (n.strokes || []).some(p => p.visible !== false) && ((n.strokeLeftWeight ?? n.strokeWeight) > 0 || (n.strokeRightWeight ?? n.strokeWeight) > 0);
    if (r > 0 || sides) errors.roundedAtScreenEdge.push(`${scr.name} › ${n.name} (${n.id})`);
  }
}
// an absolutely positioned node (badge, counter) that sticks out of a clipping ancestor gets cut
for (const n of page.findAll(n => n.layoutPositioning === 'ABSOLUTE' && n.visible && !insideInstance(n))) {
  const b = n.absoluteBoundingBox; if (!b) continue;
  for (let p = n.parent; p && p.type !== 'PAGE'; p = p.parent) {
    if (!p.clipsContent || !p.absoluteBoundingBox) continue; const q = p.absoluteBoundingBox;
    if (b.x < q.x - 0.5 || b.y < q.y - 0.5 || b.x + b.width > q.x + q.width + 0.5 || b.y + b.height > q.y + q.height + 0.5) { warnings.clippedOverhang.push(`${n.name} (${n.id}) cut by ${p.name}`); break; }
  }
}
// DS-46: in a button group (2+ non-ghost/link buttons in one auto-layout frame), the main action is leftmost (row) or topmost (column)
for (const g of page.findAll(n => n.type === 'FRAME' && n.layoutMode && n.layoutMode !== 'NONE' && !insideInstance(n) && !inProposal(n))) {
  const btns = [];
  for (const c of g.children) {
    if (c.type !== 'INSTANCE' || !c.visible) continue;
    const m = await c.getMainComponentAsync();
    if (!m || !m.parent || m.parent.type !== 'COMPONENT_SET' || m.parent.name !== 'button') continue;
    const v = (m.name.match(/variant=([a-z]+)/) || [])[1];
    if (v === 'ghost' || v === 'link') continue;
    btns.push({ c, main: v === 'primary' || v === 'destructive' });
  }
  if (btns.length < 2 || !btns.some(b => b.main)) continue;
  const key = g.layoutMode === 'HORIZONTAL' ? b => b.c.absoluteBoundingBox.x : b => b.c.absoluteBoundingBox.y;
  const first = btns.slice().sort((a, b) => key(a) - key(b))[0];
  if (!first.main) errors.buttonOrder.push(`${g.name} (${g.id}) ${g.layoutMode === 'HORIZONTAL' ? 'main action must be leftmost' : 'main action must be on top'}`);
}
for (const f of page.children.filter(c => c.type === 'FRAME' || c.type === 'SECTION')) {
  const modes = f.explicitVariableModes || {};
  if (!Object.keys(modes).length) warnings.noBrandMode.push(`${f.name} (${f.id})`);
}
const count = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, v.length]));
return { page: page.name, nodes: nodes.length, pass: Object.values(errors).every(v => !v.length),
  errors: count(errors), warnings: count(warnings),
  details: { errors: Object.fromEntries(Object.entries(errors).map(([k, v]) => [k, v.slice(0, 15)])), warnings: Object.fromEntries(Object.entries(warnings).map(([k, v]) => [k, v.slice(0, 15)])) } };
