// The event key visual (swirl), cut from the brand file and colour-matched to campaign.bg (DS-48).
// Decorative: empty alt. Source: 579×1029 JPG upscaled 2× — ask for a higher-resolution master
// (spec, Open questions). The hero copy is the LCP; the visual loads with fetchPriority only in the hero.
import { BASE } from '../lib/base';

const SRC = `${BASE}/landing/dar-madar-business`;

export function KeyVisual({ className = '', priority = false, rotate = 0 }: { className?: string; priority?: boolean; rotate?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${SRC}/kv-swirl-1152.webp`}
      srcSet={`${SRC}/kv-swirl-720.webp 720w, ${SRC}/kv-swirl-1152.webp 1152w`}
      sizes="(min-width: 1024px) 60vw, 100vw"
      width={1158}
      height={1518}
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
