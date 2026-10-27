import { redirect } from 'next/navigation';

// Stand-alone preview only: in apps/website the page lives at /landing/dar-madar-business.
export default function Home() {
  redirect('/landing/dar-madar-business');
}
