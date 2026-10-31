// The event key visual (swirl), cut from the brand file and colour-matched to campaign.bg (DS-48).
// Decorative: empty alt. Source: 579×1029 JPG upscaled 2× — ask for a higher-resolution master
// (spec, Open questions). The hero copy is the LCP; the visual loads with fetchPriority only in the hero.
import { BASE } from '../lib/base';

const SRC = `${BASE}/landing/dar-madar-business`;

// variant "hero": the desktop hero visual exactly as in Figma (hero › kv-swirl): the design lead's
// high-resolution master (3125×4096) with its radial vignette (transparent → campaign.bg), rendered
// from Figma at 1× and 2× of its 1168×1532 box (2026-10-27).
const VARIANTS = {
  swirl: { file: 'kv-swirl', sizes: [720, 1152], w: 1158, h: 1518 },
  hero: { file: 'kv-hero', sizes: [720, 1168, 2336], w: 1168, h: 1532 },
} as const;

export function KeyVisual({ className = '', priority = false, rotate = 0, variant = 'swirl' }: { className?: string; priority?: boolean; rotate?: number; variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${SRC}/${v.file}-${v.sizes[1]}.webp`}
      srcSet={v.sizes.map(w => `${SRC}/${v.file}-${w}.webp ${w}w`).join(', ')}
      sizes="(min-width: 1024px) 80vw, 100vw"
      width={v.w}
      height={v.h}
      alt=""
      aria-hidden
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      loading={priority ? 'eager' : 'lazy'}
      draggable={false}
      style={{ ['--kv-rotate' as string]: `${rotate}deg` }}
      className={`kv pointer-events-none select-none ${className}`}
    />
  );
}
