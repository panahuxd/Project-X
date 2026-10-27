// Review mock for the RSVP outcomes (spec › Flow). Used by app/api/rsvp in development and,
// in the static GitHub Pages preview (NEXT_PUBLIC_RSVP_MOCK=1), directly in the browser.
export type RsvpStatus = 'confirmed' | 'already' | 'not_invited' | 'closed' | 'error';

export const MOCK_NUMBERS: Record<string, { code: number; status: RsvpStatus }> = {
  '09120000001': { code: 200, status: 'already' },
  '09120000002': { code: 404, status: 'not_invited' },
  '09120000003': { code: 500, status: 'error' },
};

export async function mockRsvp(mobile: string): Promise<{ code: number; status: RsvpStatus }> {
  await new Promise(r => setTimeout(r, 900));
  return MOCK_NUMBERS[mobile] ?? { code: 200, status: 'confirmed' };
}
