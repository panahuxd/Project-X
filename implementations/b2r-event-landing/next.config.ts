import type { NextConfig } from 'next';

// STATIC_PREVIEW=1: static export for the GitHub Pages preview (see .github/workflows/event-landing-preview.yml).
const preview = process.env.STATIC_PREVIEW === '1';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: { formats: ['image/avif', 'image/webp'], unoptimized: preview },
  // The RSVP API route is app/api/rsvp/route.api.ts: a route only while 'api.ts' is a page extension,
  // so the static preview (no server) leaves it out without deleting files.
  pageExtensions: preview ? ['tsx', 'ts'] : ['api.ts', 'tsx', 'ts'],
  ...(preview ? { output: 'export', basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', trailingSlash: true } : {}),
};

export default nextConfig;
