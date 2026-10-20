// DKB Figma sync check — run inside Figma with the use_figma tool on the DKB Foundations file.
// Returns one fingerprint per collection (and for text/effect styles). Compare with
// `python3 scripts/sync_check.py`, which computes the same fingerprints from the repo.
// If a fingerprint differs, run again with DETAIL = '<collection name>' to list its lines.
const DETAIL = null;
const fnv = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const hx = n => Math.round(n * 255).toString(16).toUpperCase().padStart(2, '0');
const num = n => String(Math.round(n * 10000) / 10000);
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const vars = await figma.variables.getLocalVariablesAsync();
const byId = Object.fromEntries(vars.map(v => [v.id, v]));
const out = {}; const detail = [];
for (const c of cols) {
  const lines = vars.filter(v => v.variableCollectionId === c.id).map(v => {
    const vals = c.modes.map(m => {
      const x = v.valuesByMode[m.modeId];
      if (x && x.type === 'VARIABLE_ALIAS') return '@' + byId[x.id].name;
      if (v.resolvedType === 'COLOR') return hx(x.r) + hx(x.g) + hx(x.b) + (x.a < 1 ? hx(x.a) : '');
      if (v.resolvedType === 'FLOAT') return num(x);
      return String(x);
    });
    return [c.name, v.name, v.resolvedType, [...v.scopes].sort().join(','), v.hiddenFromPublishing ? 1 : 0, v.description || '', vals.join(';')].join('|');
  }).sort();
  out[c.name] = { modes: c.modes.map(m => m.name).join(','), count: lines.length, fp: fnv(lines.join('\n')) };
  if (DETAIL === c.name) detail.push(...lines);
}
const ts = (await figma.getLocalTextStylesAsync()).map(s => [s.name, s.fontName.family, s.fontName.style,
  ...['fontFamily', 'fontSize', 'lineHeight'].map(k => (s.boundVariables && s.boundVariables[k]) ? byId[s.boundVariables[k].id].name : '-')].join('|')).sort();
const es = (await figma.getLocalEffectStylesAsync()).map(s => [s.name, s.effects.length, s.effects.map(e => [hx(e.color.r) + hx(e.color.g) + hx(e.color.b) + hx(e.color.a), Math.round(e.offset.x), Math.round(e.offset.y), Math.round(e.radius), Math.round(e.spread || 0)].join(',')).join(';')].join('|')).sort();
out.textStyles = { count: ts.length, fp: fnv(ts.join('\n')) };
out.effectStyles = { count: es.length, fp: fnv(es.join('\n')) };
if (DETAIL === 'textStyles') detail.push(...ts);
return DETAIL ? { [DETAIL]: detail } : out;
