'use client';
// DKB `field` (label + control + helper/error) on the campaign surface (DS-48, DS-26, DS-39).
// Visible label above the control (NN/g, Baymard: no placeholder-only labels); the mockup's icon stays
// at the start of the input; errors under the field say how to fix it (field spec, WCAG 3.3.1/3.3.3).
import { Check, CircleAlert } from 'lucide-react';
import { forwardRef, type ComponentProps, type ReactNode } from 'react';

type Props = ComponentProps<'input'> & {
  id: string;
  label: string;
  icon: ReactNode;
  error?: string | null;
  hint?: string;
  valid?: boolean;
  ltr?: boolean;
};

export const CampaignField = forwardRef<HTMLInputElement, Props>(function CampaignField(
  { id, label, icon, error, hint, valid, ltr, className = '', ...input }, ref,
) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-label text-campaign-text">
        {label}
      </label>
      <div className="relative">
        <span aria-hidden className="pointer-events-none absolute inset-y-0 start-0 grid w-11 place-items-center text-campaign-text-subtle">
          {icon}
        </span>
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          dir={ltr ? 'ltr' : undefined}
          className={
            'campaign-focus h-[var(--control-height-lg)] w-full rounded-control border bg-transparent ps-11 pe-11 text-body-lg text-campaign-text ' +
            'placeholder:text-campaign-text-subtle transition-colors duration-[var(--motion-duration-fast)] ' +
            (ltr ? 'text-right [unicode-bidi:plaintext] ' : '') +
            (error ? 'border-campaign-border-error' : 'border-campaign-border-control hover:border-campaign-text-subtle')
          }
          {...input}
        />
        {valid && !error && (
          <span className="pointer-events-none absolute inset-y-0 end-0 grid w-11 place-items-center text-campaign-text-success">
            <Check aria-hidden className="size-5" />
            <span className="sr-only">درست است</span>
          </span>
        )}
      </div>
      {error ? (
        <p id={`${id}-error`} className="flex items-start gap-1.5 text-body-sm text-campaign-text-error">
          <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-body-sm text-campaign-text-subtle">{hint}</p>
      ) : null}
    </div>
  );
});
