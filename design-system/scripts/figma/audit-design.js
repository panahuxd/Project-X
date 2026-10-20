// DKB design audit — run with use_figma on a design file (read-only).
// Checks the current page (or PAGE below) against AGENTS.md rules and returns a report.
// Pass when every count under `errors` is 0. `warnings` are for review.
const PAGE = null; // e.g. 'Screens'; null = first page
const DKB_COMPONENTS = ['alert', 'badge', 'button', 'button-group', 'checkbox', 'field', 'icon-button', 'input', 'input-group', 'input-otp', 'kbd', 'label', 'native-select', 'progress', 'radio', 'select', 'separator', 'skeleton', 'slider', 'spinner', 'switch', 'textarea', 'toggle', 'toggle-group'];
// ^ keep in sync with design-system/components.json (component set names). Icons: names starting with "icon/".
const page = PAGE ? figma.root.children.find(p => p.name === PAGE) : figma.root.children[0];
await figma.setCurrentPageAsync(page);
const inProposal = n => { for (let p = n; p && p.type !== 'PAGE'; p = p.parent) if (p.name && p.name.startsWith('proposal/')) return true; return false; };
const insideInstance = n => { for (let p = n.parent; p && p.type !== 'PAGE'; p = p.parent) if (p.type === 'INSTANCE') return true; return false; };
const errors = { unboundColour: [], textWithoutStyle: [], nonLibraryInstance: [], detachedLooking: [] };
const warnings = { unboundSpacing: [], effectWithoutStyle: [], noBrandMode: [] };
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
    if (!ok) errors.nonLibraryInstance.push(`${n.name} (${n.id}) → ${setName}${mc && !mc.remote ? ' [local]' : ''}`);
  }
  if (n.type === 'FRAME' && !inInst && DKB_COMPONENTS.some(c => n.name === c || n.name.startsWith(c + ' '))) errors.detachedLooking.push(`${n.name} (${n.id})`);
  if (n.type === 'FRAME' && !inInst && n.layoutMode && n.layoutMode !== 'NONE') {
    const b = n.boundVariables || {};
    for (const k of ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'itemSpacing']) if (n[k] > 0 && !b[k]) { warnings.unboundSpacing.push(`${n.name} (${n.id}) ${k}=${n[k]}`); break; }
  }
  if ('effects' in n && n.effects.length && !n.effectStyleId && !inInst) warnings.effectWithoutStyle.push(`${n.name} (${n.id})`);
}
for (const f of page.children.filter(c => c.type === 'FRAME' || c.type === 'SECTION')) {
  const modes = f.explicitVariableModes || {};
  if (!Object.keys(modes).length) warnings.noBrandMode.push(`${f.name} (${f.id})`);
}
const count = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, v.length]));
return { page: page.name, nodes: nodes.length, pass: Object.values(errors).every(v => !v.length),
  errors: count(errors), warnings: count(warnings),
  details: { errors: Object.fromEntries(Object.entries(errors).map(([k, v]) => [k, v.slice(0, 15)])), warnings: Object.fromEntries(Object.entries(warnings).map(([k, v]) => [k, v.slice(0, 15)])) } };
