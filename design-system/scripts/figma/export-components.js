// DKB component export — run with use_figma on the DKB Components file (read-only).
// Returns the component manifest. Save the result as design-system/components.json
// (the agent does this after any component change), then run
// `python3 scripts/sync_check.py` — it prints the expected component fingerprint,
// and the `fingerprint` field returned here must match it.
const LAYER = { 'alert': 'core', 'badge': 'core', 'button': 'core', 'button-group': 'core', 'checkbox': 'core', 'field': 'core', 'icon-button': 'core', 'input': 'core', 'input-group': 'core', 'input-otp': 'core', 'kbd': 'core', 'label': 'core', 'native-select': 'core', 'progress': 'core', 'radio': 'core', 'select': 'core', 'separator': 'core', 'skeleton': 'core', 'slider': 'core', 'spinner': 'core', 'switch': 'core', 'textarea': 'core', 'toggle': 'core', 'toggle-group': 'core' };
const fnv = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const components = {};
const lines = [];
for (const page of figma.root.children) {
  await page.loadAsync();
  for (const set of page.findAllWithCriteria({ types: ['COMPONENT_SET'] })) {
    const defs = set.componentPropertyDefinitions;
    const variants = {}, properties = {};
    for (const [id, d] of Object.entries(defs)) {
      if (d.type === 'VARIANT') variants[id] = d.variantOptions;
      else {
        let def = d.defaultValue;
        if (d.type === 'INSTANCE_SWAP') { const n = await figma.getNodeByIdAsync(def); def = n ? n.name : def; }
        properties[id.split('#')[0]] = { type: d.type, id, default: def };
      }
    }
    const dv = set.defaultVariant ? Object.fromEntries(set.defaultVariant.name.split(', ').map(s => s.split('='))) : {};
    components[set.name] = { layer: LAYER[set.name] || 'unknown', page: page.name, nodeId: set.id, key: set.key, variantCount: set.children.length,
      variants, defaultVariant: dv, properties, spec: `components/${set.name}.md` };
    lines.push([set.name, set.key, set.children.length,
      Object.entries(variants).map(([k, v]) => `${k}=${v.join('/')}`).sort().join(';'),
      Object.entries(properties).map(([k, v]) => `${k}:${v.type}:${v.default}`).sort().join(';')].join('|'));
  }
}
const iconsPage = figma.root.children.find(p => p.name === 'Icons');
await iconsPage.loadAsync();
const icons = Object.fromEntries(iconsPage.findAllWithCriteria({ types: ['COMPONENT'] }).map(c => [c.name.replace('icon/', ''), { key: c.key, nodeId: c.id }]));
lines.push('icons|' + Object.entries(icons).map(([k, v]) => `${k}:${v.key}`).sort().join(';'));
return { file: { name: 'DKB Components', key: '12ErQ1NZV5xHhVCXpvH5Bp', url: 'https://www.figma.com/design/12ErQ1NZV5xHhVCXpvH5Bp' }, components, icons, fingerprint: fnv(lines.sort().join('\n')) };
