// DKB `button` on the campaign surface (DS-48). Same anatomy and sizes as the Core button
// (control.height-*, radius.control, label styles, icon at the end for "next"); colours from campaign.*.
// Component request: button tone=campaign (designs/b2r-event-landing.md).
import { LoaderCircle } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'outline';
const base =
  'campaign-focus inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control text-label-lg ' +
  'h-[var(--control-height-lg)] px-5 transition-colors duration-[var(--motion-duration-normal)] ease-[var(--motion-easing-standard)] ' +
  'disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress';
const variants: Record<Variant, string> = {
  primary: 'bg-campaign-cta text-campaign-text-on-cta hover:bg-campaign-cta-hover active:bg-campaign-cta-active',
  outline: 'border border-campaign-border-control text-campaign-text hover:bg-campaign-bg-raised active:bg-campaign-bg-raised',
};

export function buttonClass(variant: Variant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`;
}

export function CampaignButton({
  variant = 'primary', iconEnd, isLoading, className = '', children, ...props
}: ComponentProps<'button'> & { variant?: Variant; iconEnd?: ReactNode; isLoading?: boolean }) {
  return (
    <button {...props} aria-busy={isLoading || undefined} className={buttonClass(variant, className)}>
      {isLoading && <LoaderCircle aria-hidden className="size-5 animate-spin" />}
      <span>{children}</span>
      {!isLoading && iconEnd}
    </button>
  );
}
