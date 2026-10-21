// DKB component export — run with use_figma on a DKB library file (read-only): DKB Components AND DKB Commerce.
// Returns that file's part of the manifest. Merge it into design-system/components.json: replace the entries whose
// `file` equals the returned `file` (the agent does this after any component change), then run
// `python3 scripts/sync_check.py` — it prints the expected component fingerprint,
// and the `fingerprint` field returned here must match it.
// Icons: only their count is returned (1,867 keys would pass the ~48 KB use_figma result limit). The fingerprint still
// covers every icon key. If icons changed, refresh components.json "icons" with export-icons.js + merge_icons.py.
const LAYER = { 'accordion': 'core', 'accordion-item': 'core', 'alert': 'core', 'alert-dialog': 'core', 'avatar': 'core', 'badge': 'core', 'breadcrumb': 'core', 'button': 'core', 'button-group': 'core', 'calendar': 'core', 'calendar-day': 'core', 'card': 'core', 'carousel': 'core', 'chart': 'core', 'chart-legend': 'core', 'chart-tooltip': 'core', 'checkbox': 'core', 'collapsible': 'core', 'combobox': 'core', 'command': 'core', 'context-menu': 'core', 'data-table': 'core', 'date-picker': 'core', 'dialog': 'core', 'drawer': 'core', 'dropdown-menu': 'core', 'empty': 'core', 'field': 'core', 'hover-card': 'core', 'icon-button': 'core', 'input': 'core', 'input-group': 'core', 'input-otp': 'core', 'item': 'core', 'kbd': 'core', 'label': 'core', 'menu-item': 'core', 'menubar': 'core', 'native-select': 'core', 'navigation-menu': 'core', 'navigation-menu-link': 'core', 'navigation-menu-trigger': 'core', 'overlay': 'core', 'pagination': 'core', 'pagination-link': 'core', 'popover': 'core', 'progress': 'core', 'radio': 'core', 'resizable': 'core', 'scroll-area': 'core', 'select': 'core', 'separator': 'core', 'sheet': 'core', 'sidebar': 'core', 'sidebar-menu-button': 'core', 'skeleton': 'core', 'slider': 'core', 'slot': 'core', 'spinner': 'core', 'switch': 'core', 'tab': 'core', 'table': 'core', 'table-cell': 'core', 'tabs': 'core', 'textarea': 'core', 'toast': 'core', 'toggle': 'core', 'toggle-group': 'core', 'tooltip': 'core', 'template-region': 'core', 'template/home': 'template', 'template/listing': 'template', 'template/detail': 'template', 'template/checkout': 'template', 'template/account': 'template', 'template/form': 'template', 'template/workspace': 'template', 'template/content': 'template', 'template/result': 'template', 'template/auth': 'template', 'logo': 'commerce', 'header': 'commerce', 'mobile-header': 'commerce', 'footer': 'commerce', 'action-bar': 'commerce', 'bottom-nav': 'commerce', 'bottom-nav-item': 'commerce', 'account-menu': 'commerce', 'mega-menu': 'commerce', 'mega-menu-category': 'commerce', 'mega-menu-group': 'commerce', 'mega-menu-link': 'commerce' };
const fnv = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const FILE = figma.root.children.some(p => p.name === 'Icons') ? 'components' : 'commerce';
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
        if (d.type === 'INSTANCE_SWAP') { const n = await figma.getNodeByIdAsync(def); def = n ? (n.parent && n.parent.type === 'COMPONENT_SET' ? n.parent.name : n.name) : def; }
        properties[id.split('#')[0]] = { type: d.type, id, default: def };
      }
    }
    const dv = set.defaultVariant ? Object.fromEntries(set.defaultVariant.name.split(', ').map(s => s.split('='))) : {};
    components[set.name] = { file: FILE, layer: LAYER[set.name] || 'unknown', page: page.name, nodeId: set.id, key: set.key, variantCount: set.children.length,
      variants, defaultVariant: dv, properties, spec: set.name.startsWith('template/') ? 'patterns/layouts.md' : set.name === 'template-region' ? 'patterns/layouts.md' : set.name === 'bottom-nav-item' ? 'components/bottom-nav.md' : set.name.startsWith('mega-menu-') ? 'components/mega-menu.md' : `components/${set.name}.md` };
    lines.push([set.name, set.key, set.children.length,
      Object.entries(variants).map(([k, v]) => `${k}=${v.join('/')}`).sort().join(';'),
      Object.entries(properties).map(([k, v]) => `${k}:${v.type}:${v.default}`).sort().join(';')].join('|'));
  }
}
let icons = null;
if (FILE === 'components') { // icons live in DKB Components
  const iconsPage = figma.root.children.find(p => p.name === 'Icons');
  await iconsPage.loadAsync();
  icons = Object.fromEntries(iconsPage.findAllWithCriteria({ types: ['COMPONENT'] }).map(c => [c.name.replace('icon/', ''), { key: c.key, nodeId: c.id }]));
  lines.push('icons|' + Object.entries(icons).map(([k, v]) => `${k}:${v.key}`).sort().join(';'));
}
return { file: FILE, components, iconCount: icons ? Object.keys(icons).length : 0, fingerprint: fnv(lines.sort().join('\n')) }; // compare with sync_check.py → components (file components) or commerce
