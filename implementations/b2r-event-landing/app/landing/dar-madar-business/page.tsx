// Route follows the B2R landing convention (/landing/gold-ce, /landing/hot-summer: B2R route map).
import { event } from '@/event-landing/config';
import { EventLanding } from '@/event-landing/components/EventLanding';

export default function Page() {
  return <EventLanding event={event} />;
}
