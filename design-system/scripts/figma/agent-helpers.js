// DKB agent helpers — paste at the top of a use_figma script in a design file.
// Fill TOKENS / STYLES / COMPONENTS with the keys you need from
// design-system/figma-library-keys.json and design-system/components.json.
// Tested in the "DKB · Agent sandbox" file (B2E mobile login, audit passed).
const TOKENS = { /* 'bg/default': '<key>', 'space/16': '<key>', ... */ };
const STYLES = { /* 'heading-2': '<key>', 'body': '<key>', ... */ };
const COMPONENTS = { /* 'button': '<component set key>', ... */ };

const V = {}, S = {}, C = {};
for (const [n, k] of Object.entries(TOKENS)) V[n] = await figma.variables.importVariableByKeyAsync(k);
for (const [n, k] of Object.entries(STYLES)) S[n] = await figma.importStyleByKeyAsync(k);
for (const [n, k] of Object.entries(COMPONENTS)) C[n] = await figma.importComponentSetByKeyAsync(k);
for (const st of ['Regular', 'Medium', 'SemiBold', 'Bold']) await figma.loadFontAsync({ family: 'Digikala', style: st });

// Paint bound to a token: node.fills = paint('bg/default')
const paint = n => [figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }, 'color', V[n])];

// Bind padding / gap / radius: bind(frame, { paddingLeft: 'layout/page-margin', itemSpacing: 'space/16' })
const bind = (node, map) => { for (const [prop, tok] of Object.entries(map)) node.setBoundVariable(prop, V[tok]); };

// Text with a DKB style: await text(parent, 'متن', 'body', 'text/default')
async function text(parent, chars, style, color = 'text/default') {
  const t = figma.createText(); await t.setTextStyleIdAsync(S[style].id); t.characters = chars; t.fills = paint(color);
  t.textAlignHorizontal = 'RIGHT'; parent.appendChild(t); return t;
}

// Instance by variant values + properties by name:
// const b = instance('button', { variant: 'primary', size: 'md', state: 'default' }, { label: 'ثبت سفارش' })
function instance(name, variant, props = {}) {
  const v = C[name].children.find(c => Object.entries(variant).every(([k, val]) => c.name.split(', ').includes(`${k}=${val}`)));
  if (!v) throw new Error(`No ${name} variant ${JSON.stringify(variant)}`);
  const i = v.createInstance();
  const map = {}; for (const [k, val] of Object.entries(props)) { const id = Object.keys(i.componentProperties).find(x => x.startsWith(k + '#')); if (!id) throw new Error(`${name} has no property ${k}`); map[id] = val; }
  if (Object.keys(map).length) i.setProperties(map);
  return i;
}

// Brand and screen modes on a frame: await setModes(frame, 'B2E', 'Mobile')
// Needs TOKENS to include one brand-aliased token (e.g. 'bg/primary') and one responsive token (e.g. 'control/height-md').
async function setModes(frame, brand, screen) {
  const brandVar = await figma.variables.getVariableByIdAsync(Object.values(V['bg/primary'].valuesByMode)[0].id);
  const brandCol = await figma.variables.getVariableCollectionByIdAsync(brandVar.variableCollectionId);
  const respCol = await figma.variables.getVariableCollectionByIdAsync(V['control/height-md'].variableCollectionId);
  frame.setExplicitVariableModeForCollection(brandCol, brandCol.modes.find(m => m.name === brand).modeId);
  frame.setExplicitVariableModeForCollection(respCol, respCol.modes.find(m => m.name === screen).modeId);
}
