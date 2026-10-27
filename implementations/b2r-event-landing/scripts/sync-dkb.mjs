// Copies the DKB Design System build (tokens, shadcn mapping, Tailwind theme) and the Digikala
// web fonts from the Project-X repo into this app. Run automatically before dev and build.
// The repo's design-system/ is the source of truth (DS-4): never edit the copies by hand.
// DKB_DS_DIR overrides the location (default: ../../design-system, the repo layout).
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const app = join(here, '..');
const ds = process.env.DKB_DS_DIR || join(app, '..', '..', 'design-system');
const out = join(app, 'src', 'styles', 'dkb');
const fonts = join(app, 'public', 'fonts');
// Only the weights this page uses (text styles: Regular, Medium, SemiBold, Bold; campaign-display: Black).
const WEIGHTS = ['Regular', 'Medium', 'SemiBold', 'Bold', 'Black'];

if (!existsSync(join(ds, 'build', 'tokens.css'))) {
  if (existsSync(join(out, 'tokens.css'))) { console.log('[sync-dkb] design-system not found, keeping existing copies'); process.exit(0); }
  console.error(`[sync-dkb] ${ds}/build/tokens.css not found. Set DKB_DS_DIR to the Project-X design-system folder.`); process.exit(1);
}
mkdirSync(out, { recursive: true }); mkdirSync(fonts, { recursive: true });

let tokens = readFileSync(join(ds, 'build', 'tokens.css'), 'utf8');
// Keep only the @font-face blocks of the weights we ship, pointing at /fonts (woff2 only).
tokens = tokens.replace(/@font-face \{[\s\S]*?\}\n?/g, block => {
  const w = WEIGHTS.find(n => block.includes(`Digikala-${n}.woff2`));
  if (!w) return '';
  return block.replace(/src: [\s\S]*?;/, `src: url("/fonts/Digikala-${w}.woff2") format("woff2");`);
});
writeFileSync(join(out, 'tokens.css'), tokens);
for (const f of ['shadcn-compat.css', 'tailwind-theme.css']) copyFileSync(join(ds, 'build', f), join(out, f));
for (const w of WEIGHTS) copyFileSync(join(ds, 'assets', 'fonts', 'woff2', `Digikala-${w}.woff2`), join(fonts, `Digikala-${w}.woff2`));
console.log(`[sync-dkb] tokens + ${WEIGHTS.length} font weights copied from ${ds}`);
