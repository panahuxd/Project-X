import type { EventConfig } from '../config';

const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const esc = (s: string) => s.replace(/[\\,;]/g, m => '\\' + m).replace(/\n/g, '\\n');

/** An .ics file for «افزودن به تقویم». Only offered when startsAt and endsAt are set in the config. */
export function eventIcs(e: EventConfig): string | null {
  if (!e.startsAt || !e.endsAt) return null;
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Digikala Business//Event landing//FA', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${e.slug}@b2b.digikala.com`,
    `DTSTAMP:${stamp(new Date().toISOString())}`,
    `DTSTART:${stamp(e.startsAt)}`,
    `DTEND:${stamp(e.endsAt)}`,
    `SUMMARY:${esc(`${e.title.join(' ')} · دیجی‌کالا بیزینس`)}`,
    `LOCATION:${esc(e.venue.value)}`,
    `DESCRIPTION:${esc(e.intro)}`,
    'END:VEVENT', 'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}
