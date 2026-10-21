"""Compute the expected Figma fingerprints from build/figma-variables.json and components.json.

Compare the output with what scripts/figma/sync-check.js returns from Figma.
Same fingerprint = Figma matches the repo. Usage:
  python3 scripts/sync_check.py            fingerprints
  python3 scripts/sync_check.py semantic   lines of one collection (to diff by hand)
"""
import json, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fig = json.load(open(os.path.join(ROOT, 'build', 'figma-variables.json')))
W = {'bold': 'Bold', 'semibold': 'SemiBold', 'medium': 'Medium', 'regular': 'Regular'}

def fnv(s):
    h = 0x811c9dc5
    for ch in s:
        h ^= ord(ch); h = (h * 0x01000193) & 0xffffffff
    return f'{h:08x}'

def val(x, typ):
    if isinstance(x, dict): return '@' + x['alias']
    if typ == 'COLOR': return x.lstrip('#').upper()
    if typ == 'FLOAT':
        r = round(float(x), 4); return str(int(r)) if r == int(r) else str(r)
    return str(x)

out, detail = {}, {}
for c in fig['collections']:
    lines = sorted('|'.join([c['name'], v['name'], v['type'], ','.join(sorted(v['scopes'])),
                             str(1 if v['hiddenFromPublishing'] else 0), v['description'],
                             ';'.join(val(v['values'][m], v['type']) for m in c['modes'])]) for v in c['variables'])
    out[c['name']] = {'modes': ','.join(c['modes']), 'count': len(lines), 'fp': fnv('\n'.join(lines))}
    detail[c['name']] = lines
ts = sorted('|'.join([t['name'], 'Digikala', W[t['bind']['fontWeight'].split('/')[-1]],
                      t['bind']['fontFamily'], t['bind']['fontSize'], t['bind']['lineHeight']]) for t in fig['textStyles'])
def shadow_str(x, b):
    c = x['color'].lstrip('#').upper(); c = c + 'FF' if len(c) == 6 else c
    n = lambda v: str(int(round(float(str(v).replace('px', '')))))
    sp = n(x['spread']) + ('@' + b['spread'] if 'spread' in b else '')  # bound spread
    return ','.join([c, n(x['offsetX']), n(x['offsetY']), n(x['blur']), sp])
es = sorted(f"{e['name']}|{len(e['shadows'])}|" + ';'.join(shadow_str(x, b) for x, b in zip(e['shadows'], e.get('bind') or [{}] * len(e['shadows'])))
            for e in fig['effectStyles'])
out['textStyles'] = {'count': len(ts), 'fp': fnv('\n'.join(ts))}
out['effectStyles'] = {'count': len(es), 'fp': fnv('\n'.join(es))}
detail['textStyles'] = ts
detail['effectStyles'] = es
# components (compare with the fingerprint returned by scripts/figma/export-components.js)
cm = os.path.join(ROOT, 'components.json')
if os.path.exists(cm):
    man = json.load(open(cm))
    js = lambda v: ('true' if v else 'false') if isinstance(v, bool) else str(v)
    per = {}
    for name, c in man['components'].items():
        cl = per.setdefault(c.get('file', 'components'), [])
        cl.append('|'.join([name, c['key'], str(c['variantCount']),
            ';'.join(sorted(f"{k}={'/'.join(v)}" for k, v in c['variants'].items())),
            ';'.join(sorted(f"{k}:{v['type']}:{js(v['default'])}" for k, v in c['properties'].items()))]))
    per['components'].append('icons|' + ';'.join(sorted(f"{k}:{v['key']}" for k, v in man['icons'].items())))
    for f, cl in per.items():  # one fingerprint per library file; export-components.js returns the same per file
        out[f] = {'count': sum(1 for c in man['components'].values() if c.get('file', 'components') == f), 'fp': fnv('\n'.join(sorted(cl)))}
        if f == 'components': out[f]['icons'] = len(man['icons'])
        detail[f] = sorted(cl)
if len(sys.argv) > 1:
    print('\n'.join(detail[sys.argv[1]]))
else:
    print(json.dumps(out, indent=1))
