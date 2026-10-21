// DKB icon export — run with use_figma on DKB Components (read-only), one page at a time.
// A use_figma result is capped at ~48 KB, so the 1,867 icons come out in pages of 600.
// Set PAGE = 0, run, save `lines` to design-system/build/icon-export-0.txt; then PAGE = 1, 2 … until `done` is true.
// Then: python3 design-system/scripts/merge_icons.py  (rewrites the "icons" block of components.json; keeps "common").
const PAGE = 0, SIZE = 600;
const iconsPage = figma.root.children.find(p => p.name === 'Icons');
await iconsPage.loadAsync();
const all = iconsPage.findAllWithCriteria({ types: ['COMPONENT'] }).filter(c => c.name.startsWith('icon/'))
  .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
const tags = d => { const m = /— (.*?)\. Stroke/.exec(d || ''); return m ? m[1] : ''; };
const part = all.slice(PAGE * SIZE, (PAGE + 1) * SIZE);
return { page: PAGE, total: all.length, done: (PAGE + 1) * SIZE >= all.length,
  lines: part.map(c => [c.name.slice(5), c.key, c.id, tags(c.description)].join('|')).join('\n') };
