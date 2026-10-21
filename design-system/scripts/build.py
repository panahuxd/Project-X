"""Build and validate the DKB design tokens.

Reads tokens/manifest.json, then validates every file (types, references,
layer rules, same tokens in every mode) and writes to build/:

  tokens.css             CSS variables, @font-face, brand switch, .text-* classes
  shadcn-compat.css      shadcn / @digikala/ui-kit variable names mapped to DKB tokens
  tailwind-theme.css     Tailwind v4 @theme mapping (use with the two files above)
  tokens.resolved.json   final value of every token for each brand x screen
  figma-variables.json   collections, modes, aliases, scopes for the Figma sync
  token-reference.md     human / agent reference of the usable tokens
  contrast-report.md     WCAG checks for every brand (build fails on a text pair < 4.5:1)

Usage: python3 scripts/build.py
"""
import json, os, re, sys
from colorlib import contrast

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOK, OUT = os.path.join(ROOT, 'tokens'), os.path.join(ROOT, 'build')
REF = re.compile(r'^\{([^{}]+)\}$')
ALLOWED_REFS = {'primitives': {'primitives'}, 'brand': {'primitives'},
                'semantic': {'primitives', 'brand'}, 'responsive': {'primitives'},
                'typography': {'primitives', 'semantic', 'responsive'}}
errors = []

# ---------------------------------------------------------------- load
def flatten(node, path=(), typ=None, ext=None, out=None):
    out = {} if out is None else out
    typ = node.get('$type', typ)
    ext = {**(ext or {}), **node.get('$extensions', {}).get('dkb.figma', {})}
    if '$value' in node:
        if typ is None:
            errors.append(f'{".".join(path)}: no $type')
        out['.'.join(path)] = {'value': node['$value'], 'type': typ, 'figma': ext,
                               'description': node.get('$description', ''),
                               'features': node.get('$extensions', {}).get('dkb.fontFeatures', [])}
        return out
    for k, v in node.items():
        if not k.startswith('$'):
            if '.' in k or '{' in k or '}' in k:
                errors.append(f'{".".join(path + (k,))}: invalid character in name')
            flatten(v, path + (k,), typ, ext, out)
    return out

manifest = json.load(open(os.path.join(TOK, 'manifest.json')))
layers, owner = {}, {}
for col in manifest['collections']:
    layers[col['name']] = {m: flatten(json.load(open(os.path.join(TOK, f)))) for m, f in col['modes'].items()}
    names = [set(t) for t in layers[col['name']].values()]
    if any(n != names[0] for n in names):
        errors.append(f'{col["name"]}: modes do not define the same tokens')
    for n in names[0]:
        if n in owner:
            errors.append(f'{n}: defined in both {owner[n]} and {col["name"]}')
        owner[n] = col['name']
typo = flatten(json.load(open(os.path.join(TOK, manifest['styles']['text']))))
for n in typo:
    owner[n] = 'typography'
BRANDS, SCREENS = list(layers['brand']), list(layers['responsive'])

def refs_in(v):
    if isinstance(v, str):
        m = REF.match(v); return [m.group(1)] if m else []
    if isinstance(v, list): return [r for x in v for r in refs_in(x)]
    if isinstance(v, dict): return [r for x in v.values() for r in refs_in(x)]
    return []

for col, toks in [(c, t) for c, ms in layers.items() for t in ms.values()] + [('typography', typo)]:
    for name, tok in toks.items():
        for r in refs_in(tok['value']):
            if r not in owner:
                errors.append(f'{name}: unknown reference {{{r}}}')
            elif owner[r] not in ALLOWED_REFS[col] | {col}:
                errors.append(f'{name} ({col}) may not reference {r} ({owner[r]})')

def resolver(brand, screen):
    table = {}
    for c, m in (('primitives', 'Default'), ('brand', brand), ('semantic', 'Light'), ('responsive', screen)):
        table.update(layers[c][m])
    table.update(typo)
    def resolve(v, seen=()):
        if isinstance(v, str):
            m = REF.match(v)
            if not m: return v
            r = m.group(1)
            if r in seen or r not in table:
                errors.append(f'cannot resolve {{{r}}}'); return None
            return resolve(table[r]['value'], seen + (r,))
        if isinstance(v, list): return [resolve(x, seen) for x in v]
        if isinstance(v, dict): return {k: resolve(x, seen) for k, x in v.items()}
        return v
    return table, resolve

resolved = {}
for b in BRANDS:
    for s in SCREENS:
        table, res = resolver(b, s)
        resolved[f'{b}/{s}'] = {n: res(t['value']) for n, t in table.items()}

# ---------------------------------------------------------------- contrast
TEXT, UI = 4.5, 3.0
PAIRS = [
    ('text.default', 'bg.default', TEXT, 'Body text'),
    ('text.default', 'bg.subtle', TEXT, 'Body text on section band'),
    ('text.default', 'bg.muted', TEXT, 'Text on muted fill'),
    ('text.default', 'bg.muted-hover', TEXT, 'Text on muted fill (hover)'),
    ('text.muted', 'bg.default', TEXT, 'Secondary text'),
    ('text.muted', 'bg.subtle', TEXT, 'Secondary text on band'),
    ('text.muted', 'bg.muted', TEXT, 'Secondary text on muted fill'),
    ('text.inverse', 'bg.inverse', TEXT, 'Tooltip'),
    ('text.on-primary', 'bg.primary', TEXT, 'Primary button'),
    ('text.on-primary', 'bg.primary-hover', TEXT, 'Primary button (hover)'),
    ('text.on-primary', 'bg.primary-active', TEXT, 'Primary button (pressed)'),
    ('text.primary', 'bg.default', TEXT, 'Brand text (outline button, selected tab)'),
    ('text.primary', 'bg.primary-subtle', TEXT, 'Brand text on brand tint'),
    ('text.primary', 'bg.primary-subtle-hover', TEXT, 'Brand text on brand tint (hover)'),
    ('text.link', 'bg.default', TEXT, 'Link'),
    ('border.primary', 'bg.default', UI, 'Selected outline'),
    ('border.destructive', 'bg.default', UI, 'Field in error'),
    ('border.control', 'bg.default', UI, 'Checkbox, radio, switch boundary'),
    ('chart.1', 'bg.default', UI, 'Chart series 1'),
    ('chart.2', 'bg.default', UI, 'Chart series 2'),
    ('chart.3', 'bg.default', UI, 'Chart series 3'),
    ('chart.4', 'bg.default', UI, 'Chart series 4'),
    ('chart.5', 'bg.default', UI, 'Chart series 5'),
    ('text.on-destructive', 'bg.destructive', TEXT, 'Destructive button'),
    ('text.on-destructive', 'bg.destructive-hover', TEXT, 'Destructive button (hover)'),
    ('text.destructive', 'bg.destructive-subtle', TEXT, 'Error alert'),
    ('text.destructive', 'bg.default', TEXT, 'Error text under a field'),
    ('text.on-success', 'bg.success', TEXT, 'Success badge (solid)'),
    ('text.success', 'bg.success-subtle', TEXT, 'Success alert'),
    ('text.success', 'bg.default', TEXT, 'Success text'),
    ('text.on-warning', 'bg.warning', TEXT, 'Warning badge (solid)'),
    ('text.warning', 'bg.warning-subtle', TEXT, 'Warning alert'),
    ('text.warning', 'bg.default', TEXT, 'Warning text'),
    ('text.on-info', 'bg.info', TEXT, 'Info badge (solid)'),
    ('text.info', 'bg.info-subtle', TEXT, 'Info alert'),
    ('text.info', 'bg.default', TEXT, 'Info text'),
]
INFO = [('border.input', 'bg.default', 'Input border (3:1 recommended if it is the only cue)'),
        ('border.focus', 'bg.default', 'Focus border, shadcn --ring (DS-22: below 3:1 by choice)'),
        ('border.default', 'bg.default', 'Divider (decorative)'),
        ('text.disabled', 'bg.disabled', 'Inactive content (exempt only when the item is inactive)')]
report = ['# Contrast report', '', 'Generated by `scripts/build.py`. WCAG 2.1: text 4.5:1, UI parts 3:1.', '']
fails = 0
for b in BRANDS:
    v = resolved[f'{b}/{SCREENS[0]}']
    report += [f'## {b}', '', '| Check | Foreground | Background | Ratio | Min | Result |', '|---|---|---|---|---|---|']
    for fg, bg, mn, note in PAIRS:
        r = contrast(v[fg], v[bg]); ok = r >= mn; fails += not ok
        report.append(f'| {note} | `{fg}` {v[fg]} | `{bg}` {v[bg]} | {r:.2f} | {mn} | {"pass" if ok else "**FAIL**"} |')
    for fg, bg, note in INFO:
        report.append(f'| {note} | `{fg}` {v[fg]} | `{bg}` {v[bg]} | {contrast(v[fg], v[bg]):.2f} | – | info |')
    report.append('')

# ---------------------------------------------------------------- CSS
def css_name(t): return '--' + t.replace('.', '-')
_, res_any = resolver(BRANDS[0], SCREENS[0])
def css_value(tok):
    v, typ = tok['value'], tok['type']
    if typ == 'shadow':
        return ', '.join(f"{p['offsetX']} {p['offsetY']} {p['blur']} {p['spread']} {p['color']}" for p in res_any(v))
    m = REF.match(v) if isinstance(v, str) else None
    if m: return f'var({css_name(m.group(1))})'
    if typ == 'fontFamily': return f'"{v}", Tahoma, sans-serif'
    if typ == 'cubicBezier': return 'cubic-bezier(' + ', '.join(str(x) for x in v) + ')'
    return str(v)
def block(sel, toks, indent=''):
    return [f'{indent}{sel} {{'] + [f'{indent}  {css_name(n)}: {css_value(t)};' for n, t in toks.items()] + [f'{indent}}}', '']

css = ['/* Generated by design-system/scripts/build.py. Do not edit by hand.',
       '   Set data-brand="b2r" or "b2e" on <html> or on any element; B2R is the default. */', '']
weights = {'Thin': 100, 'ExtraLight': 200, 'Light': 300, 'Regular': 400, 'Medium': 500,
           'SemiBold': 600, 'Bold': 700, 'ExtraBold': 800, 'Black': 900, 'Fat': 1000}
for wn, w in weights.items():
    css += ['@font-face {', '  font-family: "Digikala";', f'  font-weight: {w};', '  font-style: normal;',
            '  font-display: swap;', f'  src: url("../assets/fonts/woff2/Digikala-{wn}.woff2") format("woff2"),',
            f'       url("../assets/fonts/woff/Digikala-{wn}.woff") format("woff");', '}']
css += ['', '/* 1. Primitives */'] + block(':root', layers['primitives']['Default'])
css += ['/* 2. Brand ramps */']
for i, (b, toks) in enumerate(layers['brand'].items()):
    css += block((':root, ' if i == 0 else '') + f'[data-brand="{b.lower()}"]', toks)
css += ['/* 3. Semantic (Light). Declared on [data-brand] too, so a brand set on any element recalculates it. */']
css += block(':root, [data-brand]', layers['semantic']['Light'])
css += ['/* 4. Responsive: Mobile below 1024px, Desktop from 1024px */'] + block(':root', layers['responsive']['Mobile'])
css += ['@media (min-width: 1024px) {'] + block(':root', layers['responsive']['Desktop'], '  ') + ['}', '']
css += ['/* Text styles */']
for n, t in typo.items():
    v = t['value']
    css += [f'.{n.replace("text.", "text-")} {{',
            f'  font-family: {css_value({"value": v["fontFamily"], "type": "x"})};',
            f'  font-size: {css_value({"value": v["fontSize"], "type": "x"})};',
            f'  line-height: {css_value({"value": v["lineHeight"], "type": "x"})};',
            f'  font-weight: {css_value({"value": v["fontWeight"], "type": "x"})};']
    if t['features']:
        css.append('  font-feature-settings: ' + ', '.join(f'"{f}" 1' for f in t['features']) + ';')
    css += ['}', '']

SHADCN = {  # shadcn / ui-kit name -> DKB token
    'background': 'bg.default', 'foreground': 'text.default',
    'card': 'bg.surface', 'card-foreground': 'text.default',
    'popover': 'bg.surface', 'popover-foreground': 'text.default',
    'primary': 'bg.primary', 'primary-foreground': 'text.on-primary',
    'secondary': 'bg.muted', 'secondary-foreground': 'text.default',
    'muted': 'bg.muted', 'muted-foreground': 'text.muted',
    'accent': 'bg.hover', 'accent-foreground': 'text.default',
    'destructive': 'bg.destructive', 'destructive-foreground': 'text.on-destructive',
    'success': 'bg.success', 'success-foreground': 'text.on-success', 'success-background': 'bg.success-subtle',
    'warning': 'bg.warning', 'warning-foreground': 'text.on-warning', 'warning-background': 'bg.warning-subtle',
    'info': 'bg.info', 'info-foreground': 'text.on-info', 'info-background': 'bg.info-subtle',
    'border': 'border.default', 'input': 'border.input', 'ring': 'border.focus',
    'chart-1': 'chart.1', 'chart-2': 'chart.2', 'chart-3': 'chart.3', 'chart-4': 'chart.4', 'chart-5': 'chart.5',
    'sidebar': 'bg.subtle', 'sidebar-foreground': 'text.default', 'sidebar-primary': 'bg.primary', 'sidebar-primary-foreground': 'text.on-primary',
    'sidebar-accent': 'bg.muted', 'sidebar-accent-foreground': 'text.default', 'sidebar-border': 'border.default', 'sidebar-ring': 'border.focus',
    'radius': 'radius.control',
}
for k, t in SHADCN.items():
    if t not in owner: errors.append(f'shadcn map: unknown token {t}')
shadcn = ['/* Generated. shadcn / @digikala/ui-kit variable names -> DKB tokens. Load after tokens.css. */',
          ':root, [data-brand] {'] + [f'  --{k}: var({css_name(t)});' for k, t in SHADCN.items()] + ['}', '']
tw = ['/* Generated. Tailwind v4 theme. Import after tokens.css and shadcn-compat.css. */', '@theme inline {']
tw += [f'  --color-{k}: var(--{k});' for k in SHADCN if k != 'radius']
tw += ['  --font-sans: var(--font-family-sans);', '  --radius-control: var(--radius-control);',
       '  --radius-card: var(--radius-card);', '  --radius-dialog: var(--radius-dialog);',
       '  --shadow-card: var(--shadow-card);', '  --shadow-dropdown: var(--shadow-dropdown);',
       '  --shadow-sticky: var(--shadow-sticky);', '  --shadow-sticky-bottom: var(--shadow-sticky-bottom);',
       '  --shadow-dialog: var(--shadow-dialog);',
       '  --breakpoint-md: 768px;', '  --breakpoint-lg: 1024px;', '  --breakpoint-xl: 1280px;', '}', '']

# ---------------------------------------------------------------- Figma variables
FIGMA_TYPE = {'color': 'COLOR', 'dimension': 'FLOAT', 'fontWeight': 'FLOAT', 'fontFamily': 'STRING', 'number': 'FLOAT'}
def figma_value(v, typ, name=''):
    m = REF.match(v) if isinstance(v, str) else None
    if m: return {'alias': m.group(1).replace('.', '/')}
    if typ == 'dimension': return float(str(v).replace('px', ''))
    if name.startswith('opacity.'): return round(float(v) * 100, 4)  # Figma opacity variables are 0-100
    return v
fig = {'$description': 'Generated. Input for the Figma sync: one entry per collection.', 'collections': []}
for col in manifest['collections']:
    modes = layers[col['name']]
    first = next(iter(modes.values()))
    vars_ = []
    for n, t in first.items():
        if t['figma'].get('skip') or t['figma'].get('as') == 'effect-style' or t['type'] not in FIGMA_TYPE:
            continue
        vars_.append({'name': n.replace('.', '/'), 'type': FIGMA_TYPE[t['type']], 'description': t['description'],
                      'scopes': t['figma'].get('scopes', ['ALL_SCOPES']),
                      'hiddenFromPublishing': t['figma'].get('hidden', False),
                      'values': {m: figma_value(toks[n]['value'], t['type'], n) for m, toks in modes.items()}})
    fig['collections'].append({'name': col['name'], 'modes': list(modes), 'variables': vars_})
fig['textStyles'] = [{'name': n.replace('text.', ''), 'description': t['description'], 'fontFeatures': t['features'],
                      'bind': {k: v.strip('{}').replace('.', '/') for k, v in t['value'].items()
                               if isinstance(v, str) and REF.match(v)}}
                     for n, t in typo.items()]
def shadow_binds(v):  # per layer: which numeric fields are bound to a variable (e.g. focus spread -> border-width/focus)
    if not isinstance(v, list): return []  # alias of a primitive shadow: nothing bound
    return [{k: x[k].strip('{}').replace('.', '/') for k in ('offsetX', 'offsetY', 'blur', 'spread')
             if isinstance(x[k], str) and REF.match(x[k])} for x in v]
fig['effectStyles'] = [{'name': n.replace('.', '/'), 'description': t['description'], 'shadows': res_any(t['value']),
                        'bind': shadow_binds(t['value'])}
                       for n, t in layers['semantic']['Light'].items() if t['type'] == 'shadow']

# ---------------------------------------------------------------- reference
ref = ['# Token reference', '',
       'Generated by `scripts/build.py`. Usable tokens only: hidden primitives and the brand ramp are left out.', '']
sem = layers['semantic']['Light']
for group in ['bg', 'text', 'border', 'ring', 'chart', 'radius', 'border-width', 'width', 'icon', 'opacity', 'shadow', 'motion', 'z-index']:
    rows = [(n, t) for n, t in sem.items() if n.split('.')[0] == group]
    if not rows: continue
    ref += [f'## {group}', '', '| Token | ' + ' | '.join(BRANDS) + ' | Use |', '|---|' + '---|' * len(BRANDS) + '---|']
    for n, t in rows:
        vals = ['(shadow)' if t['type'] == 'shadow' else resolved[f'{b}/{SCREENS[0]}'][n] for b in BRANDS]
        ref.append(f'| `{n}` | ' + ' | '.join(str(x) for x in vals) + f' | {t["description"]} |')
    ref.append('')
ref += ['## responsive', '',
        'Mobile below 1024 px (phones and tablets), Desktop from 1024 px (DS-11). Code switches with a media query in `tokens.css`; '
        'in Figma set the `responsive` mode on every screen frame (360 = Mobile, 1440 = Desktop). There is no tablet mode.', '',
        '| Token | ' + ' | '.join(SCREENS) + ' |', '|---|' + '---|' * len(SCREENS)]
for n in layers['responsive'][SCREENS[0]]:
    ref.append(f'| `{n}` | ' + ' | '.join(str(resolved[f"{BRANDS[0]}/{s}"][n]) for s in SCREENS) + ' |')
ref += ['', '## text styles', '', '| Style | Size / line height (' + ' · '.join(SCREENS) + ') | Weight | Features | Use |',
        '|---|---|---|---|---|']
for n, t in typo.items():
    r0 = resolved[f'{BRANDS[0]}/{SCREENS[0]}'][n]
    sizes = ' · '.join(f"{resolved[f'{BRANDS[0]}/{s}'][n]['fontSize']}/{resolved[f'{BRANDS[0]}/{s}'][n]['lineHeight']}" for s in SCREENS)
    ref.append(f"| `{n}` | {sizes} | {r0['fontWeight']} | {' '.join(t['features']) or '–'} | {t['description']} |")
ref += ['', '## scales (published primitives)', '']
for grp in ['space', 'radius', 'size', 'border-width']:
    ref.append(f'- **{grp}**: ' + ', '.join(f'`{n.split(".", 1)[1]}`' for n in layers['primitives']['Default'] if n.split('.')[0] == grp))

# ---------------------------------------------------------------- write
if errors:
    print('ERRORS:'); [print(' -', e) for e in errors]; sys.exit(1)
os.makedirs(OUT, exist_ok=True)
files = {'tokens.css': css, 'shadcn-compat.css': shadcn, 'tailwind-theme.css': tw,
         'contrast-report.md': report, 'token-reference.md': ref}
for f, lines in files.items():
    open(os.path.join(OUT, f), 'w').write('\n'.join(lines) + '\n')
json.dump(resolved, open(os.path.join(OUT, 'tokens.resolved.json'), 'w'), indent=1, ensure_ascii=False)
json.dump(fig, open(os.path.join(OUT, 'figma-variables.json'), 'w'), indent=1, ensure_ascii=False)
print('tokens per collection:', {c: len(next(iter(m.values()))) for c, m in layers.items()}, '| text styles:', len(typo))
print('figma variables:', {c['name']: len(c['variables']) for c in fig['collections']}, '| effect styles:', len(fig['effectStyles']))
print('contrast failures:', fails)
sys.exit(1 if fails else 0)
