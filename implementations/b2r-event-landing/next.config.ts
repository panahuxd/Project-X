import type { NextConfig } from 'next';

// STATIC_PREVIEW=1: static export for the GitHub Pages preview (see .github/workflows/event-landing-preview.yml).
const preview = process.env.STATIC_PREVIEW === '1';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: { formats: ['image/avif', 'image/webp'], unoptimized: preview },
  ...(preview ? { output: 'export', basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', trailingSlash: true } : {}),
};

export default nextConfig;
