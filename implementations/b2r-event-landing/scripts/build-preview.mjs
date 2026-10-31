// Static preview build for free hosts (Cloudflare Pages, Netlify, GitHub Pages): placeholders allowed. Output: out/. Base path from NEXT_PUBLIC_BASE_PATH
// (empty for a site at the domain root; "/<repo>" for GitHub Pages).
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const env = { ...process.env, STATIC_PREVIEW: '1', ALLOW_PLACEHOLDERS: '1' };
execSync('node scripts/sync-dkb.mjs && next build', { stdio: 'inherit', env });
writeFileSync('out/.nojekyll', '');
console.log('[build:preview] static site in out/');
