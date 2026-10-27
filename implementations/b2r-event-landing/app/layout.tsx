import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'در مدار بیزینس · رویداد اختصاصی دیجی‌کالا بیزینس در مشهد',
  description: 'فرصتی برای آشنایی، گفت‌وگو و تجربه مسیری ساده‌تر برای خرید عمده. حضور خود را تأیید کنید.',
  robots: { index: false, follow: false }, // invite-only page
};

export const viewport: Viewport = { themeColor: '#071A3E', width: 'device-width', initialScale: 1 }; // = campaign.bg (meta tags can't read CSS variables)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // DKB: lang/dir on <html> (B2E foundation › Accessibility); brand mode B2R.
    <html lang="fa" dir="rtl" data-brand="b2r">
      <head>
        <link rel="preload" href="/fonts/Digikala-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Digikala-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Digikala-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-svh bg-campaign-bg">{children}</body>
    </html>
  );
}
