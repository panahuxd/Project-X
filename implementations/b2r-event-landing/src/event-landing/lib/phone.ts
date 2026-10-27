// Mobile numbers: accept Persian, Arabic-Indic and Latin digits, spaces, dashes, brackets and +98 / 0098
// (GOV.UK phone-number pattern; B2E foundation: phone inputs accept both digit sets). No masking:
// the field keeps what the user typed; we normalise only to validate and to send.
const PERSIAN = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC = '٠١٢٣٤٥٦٧٨٩';

export function toLatinDigits(s: string): string {
  return s.replace(/[۰-۹٠-٩]/g, ch => {
    const p = PERSIAN.indexOf(ch);
    return String(p >= 0 ? p : ARABIC.indexOf(ch));
  });
}

export function toPersianDigits(s: string): string {
  return s.replace(/\d/g, d => PERSIAN[Number(d)]);
}

/** Returns 09XXXXXXXXX, or null when it isn't an Iranian mobile number. */
export function normaliseMobile(input: string): string | null {
  let d = toLatinDigits(input).replace(/[\s\-–()‌.]/g, '');
  if (d.startsWith('+98')) d = '0' + d.slice(3);
  else if (d.startsWith('0098')) d = '0' + d.slice(4);
  else if (d.startsWith('98') && d.length === 12) d = '0' + d.slice(2);
  else if (d.startsWith('9') && d.length === 10) d = '0' + d;
  return /^09\d{9}$/.test(d) ? d : null;
}

/** 09121234567 → ۰۹۱۲ ۱۲۳ ۴۵۶۷ (display only, LTR). */
export function formatMobile(n: string): string {
  return toPersianDigits(`${n.slice(0, 4)} ${n.slice(4, 7)} ${n.slice(7)}`);
}
