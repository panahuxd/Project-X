// The event key visual (swirl), cut from the brand file and colour-matched to campaign.bg (DS-48).
// Decorative: empty alt. Source: 579×1029 JPG upscaled 2× — ask for a higher-resolution master
// (spec, Open questions). The hero copy is the LCP; the visual loads with fetchPriority only in the hero.
import { BASE } from '../lib/base';

const SRC = `${BASE}/landing/dar-madar-business`;

// variant "hero": the desktop hero version with the design lead's radial vignette baked in
// (Figma: hero › kv-swirl, radial gradient transparent → campaign.bg over the image, 2026-10-27).
const VARIANTS = {
  swirl: { file: 'kv-swirl', sizes: [720, 1152], w: 1158, h: 1518 },
  hero: { file: 'kv-hero', sizes: [720, 1168], w: 1168, h: 1532 },
} as const;

export function KeyVisual({ className = '', priority = false, rotate = 0, variant = 'swirl' }: { className?: string; priority?: boolean; rotate?: number; variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${SRC}/${v.file}-${v.sizes[1]}.webp`}
      srcSet={`${SRC}/${v.file}-${v.sizes[0]}.webp ${v.sizes[0]}w, ${SRC}/${v.file}-${v.sizes[1]}.webp ${v.sizes[1]}w`}
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
