/**
 * Event content: the only file to edit per event.
 *
 * PLACEHOLDERS: date, time and venue are not confirmed yet (spec: designs/b2r-event-landing.md,
 * Open questions). Values in [brackets] are placeholders. `assertNoPlaceholders` fails the production
 * build while any remain, so a page with invented or missing event details can't ship.
 * The page is informational only: no call to action and no form (design lead, 2026-10-31).
 */

export interface EventConfig {
  slug: string;
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  intro: string;
  date: { label: string; value: string };
  time: { label: string; value: string };
  venue: { label: string; value: string };
  agendaTitle: string;
  agenda: { icon: 'layout-grid' | 'messages-square' | 'gift'; title: string; body: string }[];
  closingTitle: string;
}

export const event: EventConfig = {
  slug: 'dar-madar-business',
  eyebrow: 'رویداد اختصاصی دیجی‌کالا بیزینس در مشهد',
  title: ['در مدار', 'بیزینس'],
  subtitle: 'شما به یک مسیر روشن‌تر دعوتید',
  intro: 'فرصتی برای آشنایی، گفت‌وگو و تجربه مسیری ساده‌تر برای خرید عمده',
  date: { label: 'تاریخ رویداد', value: '[روز و تاریخ]' }, // PLACEHOLDER
  time: { label: 'ساعت برگزاری', value: '[ساعت شروع تا پایان]' }, // PLACEHOLDER
  venue: { label: 'محل برگزاری', value: 'مشهد، [نام و نشانی محل]' }, // PLACEHOLDER
  agendaTitle: 'در این رویداد چه می‌گذرد؟',
  agenda: [
    { icon: 'layout-grid', title: 'آشنایی با امکانات پلتفرم', body: 'مروری کاربردی بر قابلیت‌ها و مزایای خرید عمده' },
    { icon: 'messages-square', title: 'گفت‌وگوی مستقیم با تیم ما', body: 'پاسخ به پرسش‌ها و بررسی نیازهای کسب‌وکار شما' },
    { icon: 'gift', title: 'پیشنهاد اختصاصی رویداد', body: 'دسترسی به فرصت‌های ویژه و شرایط اختصاصی' },
  ],
  closingTitle: 'منتظر دیدار شما هستیم',
};

const PLACEHOLDER = /\[[^\]]+\]/;
export function placeholdersIn(e: EventConfig): string[] {
  const fields: [string, string][] = [
    ['date', e.date.value], ['time', e.time.value], ['venue', e.venue.value],
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
