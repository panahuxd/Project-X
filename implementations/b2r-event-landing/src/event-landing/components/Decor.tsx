// Decorative graphics for the campaign surface (DS-48). Colours come only from campaign tokens
// (CSS variables); all of them are aria-hidden.

/** Line · dot · line above section titles (mockup ornament). */
export function SectionOrnament() {
  return (
    <div aria-hidden className="flex items-center justify-center gap-2">
      <span className="h-px w-20 bg-gradient-to-l from-[var(--campaign-accent-1)] to-transparent lg:w-24" />
      <span className="size-1.5 rounded-full bg-[var(--campaign-accent-1)] shadow-[0_0_12px_var(--campaign-accent-1)]" />
      <span className="h-px w-20 bg-gradient-to-r from-[var(--campaign-accent-1)] to-transparent lg:w-24" />
    </div>
  );
}

/** Dot + short line after the hero eyebrow (reads right to left: text, dot, line). */
export function EyebrowTrail() {
  return (
    <span aria-hidden className="inline-flex items-center gap-2">
      <span className="size-1.5 rounded-full bg-[var(--campaign-accent-1)] shadow-[0_0_10px_var(--campaign-accent-1)]" />
      <span className="h-px w-8 bg-gradient-to-l from-[var(--campaign-accent-2)] to-transparent" />
    </span>
  );
}

const ORBIT_GRADIENT = (
  <linearGradient id="orbit-stroke" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
    <stop offset="0" style={{ stopColor: 'var(--campaign-accent-2)' }} />
    <stop offset="0.45" style={{ stopColor: 'var(--campaign-accent-3)' }} />
    <stop offset="1" style={{ stopColor: 'var(--campaign-accent-1)' }} />
  </linearGradient>
);

/**
 * The orbit ring around the first title line («در مدار»). Drawn in two halves so the title sits
 * inside it: the back half (upper arc) goes behind the text, the front half (lower arc) in front.
 */
export function Orbit({ layer }: { layer: 'back' | 'front' }) {
  const back = layer === 'back';
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -inset-x-[7%] -top-[14%] h-[128%] w-[114%] lg:-inset-x-[16%] lg:w-[132%] overflow-visible ${back ? 'opacity-70' : 'drop-shadow-[0_0_6px_var(--campaign-accent-1)]'}`}
    >
      <defs>{ORBIT_GRADIENT}</defs>
      <g transform="rotate(-12 200 80)">
        <path
          d={back ? 'M 10 80 A 190 46 0 0 1 390 80' : 'M 390 80 A 190 46 0 0 1 10 80'}
          fill="none"
          stroke="url(#orbit-stroke)"
          strokeWidth={back ? 1.5 : 2.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {back ? (
          <>
            <circle className="orbit-dot" cx="28" cy="61" r="3.5" style={{ fill: 'var(--campaign-accent-3)' }} />
            <circle className="orbit-dot" cx="388" cy="73" r="4.5" style={{ fill: 'var(--campaign-accent-1)' }} />
          </>
        ) : (
          <circle className="orbit-dot" cx="35" cy="103" r="6" style={{ fill: 'var(--campaign-accent-2)' }} />
        )}
      </g>
    </svg>
  );
}

function arc(r: number, start: number, end: number) {
  const p = (a: number) => [48 + r * Math.cos(((a - 90) * Math.PI) / 180), 48 + r * Math.sin(((a - 90) * Math.PI) / 180)];
  const [x1, y1] = p(start), [x2, y2] = p(end);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${end - start > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

const RINGS: Record<number, { r: number; from: number; to: number; tone: 1 | 2 | 3 | 4; dot: number }[]> = {
  0: [ { r: 42, from: 20, to: 250, tone: 4, dot: 4 }, { r: 42, from: 262, to: 340, tone: 1, dot: 4 }, { r: 33, from: 150, to: 400, tone: 3, dot: 5 } ],
  1: [ { r: 42, from: -40, to: 200, tone: 1, dot: 4 }, { r: 42, from: 212, to: 300, tone: 2, dot: 4 }, { r: 33, from: 60, to: 300, tone: 3, dot: 5 } ],
  2: [ { r: 42, from: 90, to: 330, tone: 3, dot: 4 }, { r: 42, from: 342, to: 420, tone: 4, dot: 4 }, { r: 33, from: -30, to: 200, tone: 1, dot: 5 } ],
};

/** Dotted ring behind each agenda icon (mockup «ring» illustrations), three colour variants. */
export function RingIcon({ variant, children }: { variant: 0 | 1 | 2; children: React.ReactNode }) {
  return (
    <div className="relative grid size-24 place-items-center">
      <svg aria-hidden viewBox="0 0 96 96" className="absolute inset-0 size-full">
        {RINGS[variant].map((a, i) => (
          <path
            key={i}
            d={arc(a.r, a.from, a.to)}
            fill="none"
            style={{ stroke: `var(--campaign-accent-${a.tone})` }}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray={`0.1 ${a.dot}`}
          />
        ))}
      </svg>
      <span className="relative text-[var(--campaign-text-muted)]">{children}</span>
    </div>
  );
}
