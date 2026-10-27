// B2R event landing «در مدار بیزینس» — campaign surface (DS-48), RTL, Persian.
// Layout: content width layout.content-max-width (1312), page margin and gutter from responsive tokens;
// mobile sections are full width (DS-45). Spacing utilities use the DKB space scale values only.
import { Calendar, Clock, Gift, LayoutGrid, MapPin, MessagesSquare } from 'lucide-react';
import type { ReactNode } from 'react';
import { assertNoPlaceholders, type EventConfig } from '../config';
import { EyebrowTrail, Orbit, RingIcon, SectionOrnament } from './Decor';
import { JumpToRsvp } from './JumpToRsvp';
import { KeyVisual } from './KeyVisual';
import { Logo } from './Logo';
import { RsvpForm } from './RsvpForm';

const container = 'relative mx-auto w-full max-w-[calc(var(--layout-content-max-width)+2*var(--layout-page-margin))] px-[var(--layout-page-margin)]';
const AGENDA_ICON = { 'layout-grid': LayoutGrid, 'messages-square': MessagesSquare, gift: Gift } as const;

export function EventLanding({ event }: { event: EventConfig }) {
  const placeholders = assertNoPlaceholders(event);
  const meta = [
    { ...event.date, icon: Calendar },
    { ...event.time, icon: Clock },
    { ...event.venue, icon: MapPin },
  ];

  return (
    <div className="relative isolate overflow-x-clip bg-campaign-bg text-campaign-text">
      {placeholders.length > 0 && <PlaceholderRibbon fields={placeholders} />}

      {/* ---------------- Hero ---------------- */}
      <header className="relative">
        {/* Key visual: bleeds off the end (left) edge on desktop, sits under the copy on mobile */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <KeyVisual priority rotate={-28}
            className="absolute left-[-14%] top-[-26%] hidden w-[64%] max-w-[1100px] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--campaign-bg)] to-transparent" />
        </div>

        <div className={`${container} flex items-center justify-start pt-6 lg:pt-8`}>
          <a href="https://b2b.digikala.com" className="campaign-focus rounded-control" aria-label="دیجی‌کالا بیزینس">
            <Logo decorative className="h-6 w-auto text-campaign-text lg:h-7" />
          </a>
        </div>

        <div className={`${container} flex flex-col items-start pb-0 pt-10 lg:min-h-[min(860px,calc(100svh-80px))] lg:justify-center lg:pb-24 lg:pt-16`}>
          <div className="flex w-full max-w-[600px] flex-col items-start">
            <p className="rise flex items-center gap-3 text-body-lg text-campaign-text-muted">
              <span>{event.eyebrow}</span>
              <span className="hidden sm:inline-flex"><EyebrowTrail /></span>
            </p>

            <h1 className="rise mt-5 text-campaign-display text-campaign-text [animation-delay:80ms]">
              <span className="relative inline-block">
                <Orbit layer="back" />
                <span className="relative">{event.title[0]}</span>
                <Orbit layer="front" />
              </span>
              <br />
              <span>{event.title[1]}</span>
            </h1>

            <p className="rise mt-4 text-heading-1 text-campaign-text [animation-delay:160ms]">{event.subtitle}</p>
            <p className="rise mt-3 max-w-[30rem] text-balance text-body-lg text-campaign-text-muted [animation-delay:200ms]">{event.intro}</p>

            <ul className="rise mt-8 flex w-full flex-col gap-3 text-body-lg text-campaign-text sm:w-auto sm:flex-row sm:flex-wrap sm:gap-0 [animation-delay:240ms]" aria-label="زمان و مکان رویداد">
              {meta.map(({ label, value, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2 sm:border-s sm:border-[var(--campaign-accent-1)] sm:px-4">
                  <span className="sr-only">{label}: </span>
                  <span>{value}</span>
                  <Icon aria-hidden className="size-5 shrink-0 text-campaign-text-subtle" />
                </li>
              ))}
            </ul>

            <JumpToRsvp label="تأیید حضور" className="rise mt-8 w-full sm:w-auto sm:min-w-[13rem] [animation-delay:280ms]" />
          </div>
        </div>
        {/* Mobile: the key visual sits under the call to action, never behind text */}
        <div aria-hidden className="pointer-events-none relative mt-6 h-[300px] overflow-hidden sm:h-[420px] lg:hidden">
          <KeyVisual className="absolute left-1/2 top-[-34%] w-[150%] max-w-[760px] -translate-x-1/2" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--campaign-bg)] to-transparent" />
        </div>
      </header>

      <main>
        {/* ---------------- What happens ---------------- */}
        <section aria-labelledby="agenda-title" className="relative border-t border-campaign-border py-16 lg:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[22%] overflow-hidden lg:block">
            <KeyVisual rotate={62} className="absolute -right-[55%] top-[0%] w-[190%]" />
          </div>
          <div className={container}>
            <SectionOrnament />
            <h2 id="agenda-title" className="mt-5 text-balance text-center text-display text-campaign-text">{event.agendaTitle}</h2>
            <ul className="mt-8 grid grid-cols-1 lg:mt-16 lg:grid-cols-3">
              {event.agenda.map((item, i) => {
                const Icon = AGENDA_ICON[item.icon];
                return (
                  <li key={item.title}
                    className="flex items-center gap-4 border-campaign-border py-6 not-first:border-t lg:flex-col lg:px-6 lg:py-2 lg:text-center lg:not-first:border-s lg:not-first:border-t-0">
                    <RingIcon variant={i as 0 | 1 | 2}><Icon className="size-7" strokeWidth={1.75} /></RingIcon>
                    <div className="flex flex-col gap-1 lg:items-center lg:gap-3">
                      <h3 className="text-heading-3 text-campaign-text">{item.title}</h3>
                      <p className="max-w-[18rem] text-body-lg text-campaign-text-muted">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---------------- RSVP ---------------- */}
        <section id="rsvp" aria-labelledby="rsvp-title" className="relative scroll-mt-6 border-t border-campaign-border py-16 lg:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <KeyVisual rotate={-150} className="absolute -bottom-[40%] -left-[18%] w-[70%] opacity-90 lg:w-[38%]" />
          </div>
          <div className={container}>
            <SectionOrnament />
            <h2 id="rsvp-title" className="mt-5 text-center text-display text-campaign-text">{event.rsvpTitle}</h2>
            <div className="mx-auto mt-12 grid max-w-[1056px] grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-0">
              <div className="lg:border-e lg:border-[var(--campaign-accent-2)]/60 lg:pe-12">
                <RsvpForm event={event} />
              </div>
              <ul aria-label="جزئیات رویداد" className="flex w-full max-w-[22rem] flex-col gap-6 lg:ps-12">
                {meta.map(({ label, value, icon: Icon }) => (
                  <InfoRow key={label} label={label} icon={<Icon aria-hidden className="size-6" strokeWidth={1.75} />}>{value}</InfoRow>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-campaign-border py-6">
        <div className={`${container} flex flex-col items-center justify-between gap-3 text-body-sm text-campaign-text-subtle sm:flex-row`}>
          <Logo className="h-5 w-auto text-campaign-text-muted" />
          <p>رویداد اختصاصی دیجی‌کالا بیزینس برای مهمانان دعوت‌شده</p>
        </div>
      </footer>
    </div>
  );
}

function InfoRow({ label, icon, children }: { label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex min-w-0 flex-1 flex-col gap-1 border-b border-campaign-border pb-3">
        <span className="text-label text-campaign-text-subtle">{label}</span>
        <span className="text-heading-4 text-campaign-text">{children}</span>
      </div>
      <span className="order-first mt-1 text-campaign-text-subtle lg:order-last">{icon}</span>
    </li>
  );
}

function PlaceholderRibbon({ fields }: { fields: string[] }) {
  // Dev and preview only: production builds fail while placeholders remain (config.ts).
  return (
    <aside aria-label="پیش‌نمایش" className="bg-campaign-bg-raised px-4 py-2 text-center text-body-sm text-campaign-text-muted">
      پیش‌نمایش: مقدارهای داخل [ ] جای‌نگهدار هستند ({fields.join('، ')}) و پیش از انتشار باید جایگزین شوند.
    </aside>
  );
}
