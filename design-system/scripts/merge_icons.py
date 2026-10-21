"""Merge icon exports into components.json.

Input: design-system/build/icon-export-*.txt, the `lines` of each scripts/figma/export-icons.js page
(name|key|nodeId|tags, tags comma-separated). Rewrites the "icons" block of components.json, one icon per line,
and keeps each icon's "common" flag (common icons are embedded in agent-helpers.js). Icons missing from the
export are dropped, so export every page first. Then run make_index.py, make_agent_helpers.py and sync_check.py.
Usage: python3 design-system/scripts/merge_icons.py
"""
import glob, json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CM = os.path.join(ROOT, 'components.json')

def write_manifest(man):
    """components.json format: 2-space JSON, except "icons" (last key): one icon per line, easy to grep."""
    man = dict(man); icons = man.pop('icons')
    head = json.dumps(man, indent=2, ensure_ascii=False)[:-2]
    body = ',\n'.join(f'    {json.dumps(n)}: {json.dumps(v, ensure_ascii=False)}' for n, v in sorted(icons.items()))
    open(CM, 'w').write(head + ',\n  "icons": {\n' + body + '\n  }\n}\n')

if __name__ == '__main__':
    man = json.load(open(CM)); old = man['icons']; new = {}
    files = sorted(glob.glob(os.path.join(ROOT, 'build', 'icon-export-*.txt')))
    if not files: raise SystemExit('No build/icon-export-*.txt files: run scripts/figma/export-icons.js first')
    for f in files:
        for line in open(f):
            parts = line.rstrip('\n').split('|')
            if len(parts) < 3: continue
            name, key, node = parts[:3]
            tags = [t.strip() for t in parts[3].split(',')] if len(parts) > 3 and parts[3] else []
            e = {'key': key, 'nodeId': node, 'tags': tags}
            if old.get(name, {}).get('common'): e['common'] = True
            new[name] = e
    man['icons'] = new
    write_manifest(man)
    print(f'icons: {len(new)} ({len(set(new) - set(old))} new, {len(set(old) - set(new))} removed), common {sum(1 for e in new.values() if e.get("common"))}')
