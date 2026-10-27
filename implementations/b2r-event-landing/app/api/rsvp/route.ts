// RSVP endpoint.
// - RSVP_UPSTREAM set: forwards the request to the real service (contract below) and maps its answer.
// - Not set: a local MOCK so every designed state can be reviewed. Never deploy the mock.
//
// Contract (proposal; spec › Open questions):
//   POST { event, name, mobile (09XXXXXXXXX), shop }
//   200 { status: 'confirmed' | 'already' } · 404 { status: 'not_invited' } · 410 { status: 'closed' } · 5xx → failed
import { NextResponse } from 'next/server';

const MOCK = {
  '09120000001': { code: 200, status: 'already' },
  '09120000002': { code: 404, status: 'not_invited' },
  '09120000003': { code: 500, status: 'error' },
} as Record<string, { code: number; status: string }>;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !/^09\d{9}$/.test(body.mobile ?? '') || !body.name || !body.shop) {
    return NextResponse.json({ status: 'invalid' }, { status: 400 });
  }
  const upstream = process.env.RSVP_UPSTREAM;
  if (upstream) {
    try {
      const r = await fetch(upstream, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await r.json().catch(() => ({}));
      return NextResponse.json({ status: data.status ?? (r.ok ? 'confirmed' : 'error') }, { status: r.status });
    } catch {
      return NextResponse.json({ status: 'error' }, { status: 502 });
    }
  }
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_RSVP_MOCK !== '1') {
    return NextResponse.json({ status: 'error', reason: 'RSVP_UPSTREAM is not configured' }, { status: 503 });
  }
  await new Promise(r => setTimeout(r, 900));
  const m = MOCK[body.mobile] ?? { code: 200, status: 'confirmed' };
  return NextResponse.json({ status: m.status }, { status: m.code });
}
