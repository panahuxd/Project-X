// The landing at the site root too (stand-alone preview and GitHub Pages). In apps/website only
// app/landing/dar-madar-business/page.tsx is copied.
import { event } from '@/event-landing/config';
import { EventLanding } from '@/event-landing/components/EventLanding';

export default function Home() {
  return <EventLanding event={event} />;
}
