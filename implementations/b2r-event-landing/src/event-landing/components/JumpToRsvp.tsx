'use client';
// Hero CTA: an in-page link to the RSVP form that also puts the cursor in the first field
// (one main action per view, DS-46; the form's own button submits).
import { ArrowLeft } from 'lucide-react';
import { buttonClass } from './CampaignButton';

export function JumpToRsvp({ label, className = '' }: { label: string; className?: string }) {
  return (
    <a
      href="#rsvp"
      className={buttonClass('primary', className)}
      onClick={() => {
        // Focus after the scroll starts; preventScroll keeps the smooth scroll.
        window.setTimeout(() => document.getElementById('rsvp-name')?.focus({ preventScroll: true }), 450);
      }}
    >
      <span>{label}</span>
      <ArrowLeft aria-hidden className="size-5" />
    </a>
  );
}
