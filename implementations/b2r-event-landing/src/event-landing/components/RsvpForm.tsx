'use client';
// RSVP form: name, invited mobile, shop name → «حضورم را تأیید می‌کنم».
// Outcomes (spec › Flow): confirmed · already registered · not on the guest list · failed · closed.
// Validation: on blur and on submit, errors clear on the keystroke that fixes them (Baymard),
// focus moves to the first invalid field on submit; the result panel takes focus (WCAG 4.1.3 via role=status).
import { CalendarPlus, CircleAlert, CircleCheck, Info, Navigation, Phone, Store, User } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { EventConfig } from '../config';
import { eventIcs } from '../lib/ics';
import { formatMobile, normaliseMobile, toPersianDigits } from '../lib/phone';
import { buttonClass, CampaignButton } from './CampaignButton';
import { CampaignField } from './CampaignField';

type Field = 'name' | 'mobile' | 'shop';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Result = { kind: 'confirmed' | 'already'; name: string; mobile: string };

const MSG = {
  nameEmpty: 'نام و نام خانوادگی خود را بنویسید',
  nameShort: 'نام و نام خانوادگی باید دست‌کم ۳ حرف باشد',
  mobileEmpty: 'شماره موبایلی را که دعوت‌نامه با آن فرستاده شده است وارد کنید',
  mobileInvalid: 'شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود',
  notInvited: 'این شماره در فهرست مهمانان این رویداد نیست. شماره‌ای را وارد کنید که دعوت‌نامه را با آن دریافت کرده‌اید.',
  shopEmpty: 'نام مجموعه یا فروشگاه خود را بنویسید',
  failed: 'ثبت حضور انجام نشد. اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید؛ اطلاعات واردشده حفظ شده است.',
};

function validate(f: Field, v: string): string | undefined {
  const t = v.trim();
  if (f === 'name') return !t ? MSG.nameEmpty : t.length < 3 ? MSG.nameShort : undefined;
  if (f === 'shop') return !t ? MSG.shopEmpty : undefined;
  return !t ? MSG.mobileEmpty : normaliseMobile(t) ? undefined : MSG.mobileInvalid;
}

export function RsvpForm({ event }: { event: EventConfig }) {
  const [values, setValues] = useState<Values>({ name: '', mobile: '', shop: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const refs = { name: useRef<HTMLInputElement>(null), mobile: useRef<HTMLInputElement>(null), shop: useRef<HTMLInputElement>(null) };
  const resultRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => { if (result) resultRef.current?.focus(); }, [result]);

  const change = (f: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValues(s => ({ ...s, [f]: v }));
    // Clear an error as soon as the value is fixed; don't raise new ones while typing.
    if (errors[f] && !validate(f, v)) setErrors(s => ({ ...s, [f]: undefined }));
  };
  const blur = (f: Field) => () => {
    if (!values[f].trim() && !touched[f]) return; // don't flag an empty field the user only passed through
    setTouched(s => ({ ...s, [f]: true }));
    setErrors(s => ({ ...s, [f]: validate(f, values[f]) }));
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (sending) return;
    const next: Errors = { name: validate('name', values.name), mobile: validate('mobile', values.mobile), shop: validate('shop', values.shop) };
    setErrors(next); setTouched({ name: true, mobile: true, shop: true });
    const first = (['name', 'mobile', 'shop'] as Field[]).find(f => next[f]);
    if (first) { refs[first].current?.focus(); return; }
    const mobile = normaliseMobile(values.mobile)!;
    setSending(true); setFailed(false);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: event.slug, name: values.name.trim(), mobile, shop: values.shop.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.status === 'confirmed' || data.status === 'already')) {
        setResult({ kind: data.status, name: values.name.trim(), mobile });
      } else if (data.status === 'not_invited') {
        setErrors({ mobile: MSG.notInvited }); refs.mobile.current?.focus();
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (event.registration === 'closed') {
    return (
      <Panel tone="info" title="ثبت حضور برای این رویداد به پایان رسیده است" headingRef={resultRef}>
        <p>اگر دعوت‌نامه دارید و هنوز حضورتان را تأیید نکرده‌اید، با پشتیبانی دیجی‌کالا بیزینس تماس بگیرید.</p>
        <Support phone={event.supportPhone} />
      </Panel>
    );
  }

  if (result) {
    const ics = eventIcs(event);
    return (
      <Panel tone="success" title={result.kind === 'already' ? 'حضور شما پیش‌تر ثبت شده است' : 'حضور شما ثبت شد'} headingRef={resultRef}>
        <p>{result.name} عزیز، منتظر دیدار شما در رویداد «{event.title.join(' ')}» هستیم.</p>
        <p className="text-campaign-text-subtle">
          شماره ثبت‌شده: <span dir="ltr" className="text-numeric">{formatMobile(result.mobile)}</span>
        </p>
        <p>{event.confirmationNote}</p>
        {(ics || event.venue.mapUrl) && (
          <div className="mt-2 flex flex-wrap justify-end gap-3">
            {event.venue.mapUrl && (
              <a className={buttonClass('outline')} href={event.venue.mapUrl} target="_blank" rel="noopener noreferrer">
                <span>مسیریابی</span><Navigation aria-hidden className="size-5" />
              </a>
            )}
            {ics && (
              <a className={buttonClass('outline')} download={`${event.slug}.ics`} href={`data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`}>
                <span>افزودن به تقویم</span><CalendarPlus aria-hidden className="size-5" />
              </a>
            )}
          </div>
        )}
      </Panel>
    );
  }

  return (
    <form noValidate onSubmit={submit} aria-label="تأیید حضور در رویداد" className="flex flex-col gap-5">
      <CampaignField
        ref={refs.name} id="rsvp-name" name="name" label="نام و نام خانوادگی" autoComplete="name"
        icon={<User className="size-5" />} value={values.name} onChange={change('name')} onBlur={blur('name')}
        error={errors.name} valid={touched.name && !validate('name', values.name)} readOnly={sending} required
      />
      <CampaignField
        ref={refs.mobile} id="rsvp-mobile" name="mobile" label="شماره موبایل دعوت‌شده" type="tel" inputMode="tel" autoComplete="tel"
        placeholder={`مثلاً ${toPersianDigits('09123456789')}`} ltr
        icon={<Phone className="size-5" />} value={values.mobile} onChange={change('mobile')} onBlur={blur('mobile')}
        error={errors.mobile} valid={touched.mobile && !validate('mobile', values.mobile)} readOnly={sending} required
      />
      <CampaignField
        ref={refs.shop} id="rsvp-shop" name="shop" label="نام مجموعه یا فروشگاه" autoComplete="organization"
        icon={<Store className="size-5" />} value={values.shop} onChange={change('shop')} onBlur={blur('shop')}
        error={errors.shop} valid={touched.shop && !validate('shop', values.shop)} readOnly={sending} required
      />
      {failed && (
        <div role="alert" className="flex items-start gap-2 rounded-control border border-campaign-border-error p-3 text-body text-campaign-text-error">
          <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0" />
          <p>{MSG.failed}</p>
        </div>
      )}
      <CampaignButton type="submit" isLoading={sending} className="mt-1 w-full" iconEnd={<ArrowLeftIcon />}>
        {sending ? 'در حال ثبت…' : 'حضورم را تأیید می‌کنم'}
      </CampaignButton>
    </form>
  );
}

function ArrowLeftIcon() {
  // "Next" in RTL points left (button spec › Behaviour and RTL).
  return <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>;
}

function Panel({ tone, title, headingRef, children }: { tone: 'success' | 'info'; title: string; headingRef: React.Ref<HTMLHeadingElement>; children: React.ReactNode }) {
  const Icon = tone === 'success' ? CircleCheck : Info;
  return (
    <div role="status" className="rise flex flex-col gap-3 rounded-card border border-campaign-border bg-campaign-bg-raised p-6 text-body-lg text-campaign-text-muted">
      <Icon aria-hidden className={`size-8 ${tone === 'success' ? 'text-campaign-text-success' : 'text-campaign-text-subtle'}`} />
      <h3 ref={headingRef} tabIndex={-1} className="text-heading-3 text-campaign-text outline-none">{title}</h3>
      {children}
    </div>
  );
}

function Support({ phone }: { phone?: string }) {
  if (!phone) return null;
  return (
    <a href={`tel:${phone}`} className="campaign-focus inline-flex items-center gap-2 self-start rounded-control text-campaign-text underline-offset-4 hover:underline">
      <Phone aria-hidden className="size-4" />
      <span dir="ltr" className="text-numeric">{toPersianDigits(phone)}</span>
    </a>
  );
}
