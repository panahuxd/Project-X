"""Compute the expected Figma fingerprints from build/figma-variables.json.

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
es = sorted(f"{e['name']}|{len(e['shadows'])}" for e in fig['effectStyles'])
out['textStyles'] = {'count': len(ts), 'fp': fnv('\n'.join(ts))}
out['effectStyles'] = {'count': len(es), 'fp': fnv('\n'.join(es))}
detail['textStyles'] = ts
if len(sys.argv) > 1:
    print('\n'.join(detail[sys.argv[1]]))
else:
    print(json.dumps(out, indent=1))
