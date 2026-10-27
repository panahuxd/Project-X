/**
 * Event content and settings: the only file to edit per event.
 *
 * PLACEHOLDERS: date, time, venue and the map link are not confirmed yet (spec: designs/b2r-event-landing.md,
 * Open questions). Values in [brackets] are placeholders. `assertNoPlaceholders` fails the production
 * build while any remain, so a page with invented or missing event details can't ship.
 */
export type RegistrationState = 'open' | 'closed';

export interface EventConfig {
  slug: string;
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  intro: string;
  date: { label: string; value: string };
  time: { label: string; value: string };
  venue: { label: string; value: string; mapUrl?: string };
  /** ISO 8601 start and end (with +03:30) for «افزودن به تقویم»; leave empty until confirmed. */
  startsAt?: string;
  endsAt?: string;
  agendaTitle: string;
  agenda: { icon: 'layout-grid' | 'messages-square' | 'gift'; title: string; body: string }[];
  rsvpTitle: string;
  registration: RegistrationState;
  /** Shown in the success panel: what happens next. Must match what the backend really does. */
  confirmationNote: string;
  supportPhone?: string;
}

export const event: EventConfig = {
  slug: 'dar-madar-business',
  eyebrow: 'رویداد اختصاصی دیجی‌کالا بیزینس در مشهد',
  title: ['در مدار', 'بیزینس'],
  subtitle: 'شما به یک مسیر روشن‌تر دعوتید',
  intro: 'فرصتی برای آشنایی، گفت‌وگو و تجربه مسیری ساده‌تر برای خرید عمده',
  date: { label: 'تاریخ رویداد', value: '[روز و تاریخ]' }, // PLACEHOLDER
  time: { label: 'ساعت برگزاری', value: '[ساعت شروع تا پایان]' }, // PLACEHOLDER
  venue: { label: 'محل برگزاری', value: 'مشهد، [نام و نشانی محل]' }, // PLACEHOLDER (+ mapUrl)
  agendaTitle: 'در این رویداد چه می‌گذرد؟',
  agenda: [
    { icon: 'layout-grid', title: 'آشنایی با امکانات پلتفرم', body: 'مروری کاربردی بر قابلیت‌ها و مزایای خرید عمده' },
    { icon: 'messages-square', title: 'گفت‌وگوی مستقیم با تیم ما', body: 'پاسخ به پرسش‌ها و بررسی نیازهای کسب‌وکار شما' },
    { icon: 'gift', title: 'پیشنهاد اختصاصی رویداد', body: 'دسترسی به فرصت‌های ویژه و شرایط اختصاصی' },
  ],
  rsvpTitle: 'منتظر دیدار شما هستیم',
  registration: 'open',
  confirmationNote: '[آنچه پس از ثبت رخ می‌دهد، مثلاً پیامک تأیید]', // PLACEHOLDER: depends on the backend
};

const PLACEHOLDER = /\[[^\]]+\]/;
export function placeholdersIn(e: EventConfig): string[] {
  const fields: [string, string][] = [
    ['date', e.date.value], ['time', e.time.value], ['venue', e.venue.value], ['confirmationNote', e.confirmationNote],
  ];
  return fields.filter(([, v]) => PLACEHOLDER.test(v)).map(([k]) => k);
}
export function assertNoPlaceholders(e: EventConfig) {
  const left = placeholdersIn(e);
  if (left.length && process.env.NODE_ENV === 'production' && process.env.ALLOW_PLACEHOLDERS !== '1') {
    throw new Error(`[event-landing] Replace the placeholders before a production build: ${left.join(', ')} (src/event-landing/config.ts). Preview builds: ALLOW_PLACEHOLDERS=1.`);
  }
  return left;
}
