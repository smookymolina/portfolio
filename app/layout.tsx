import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jairmolina.dev'),
  title: 'Jair Molina Arce — Embedded Systems & Advanced Technology Engineer',
  description:
    'Embedded Systems & Advanced Technology Engineer. Firmware, IoT, Aerospace Instrumentation, Control Systems. IPN · IAC 2024 · ESP32 · STM32 · CO.DE Aerospace.',
  keywords: [
    'Embedded Systems Engineer',
    'Firmware Engineer',
    'IoT',
    'ESP32',
    'STM32',
    'Aerospace',
    'Instrumentation',
    'DAQ',
    'PID Control',
    'Mechatronics',
    'IPN Mexico',
    'IAC 2024',
  ],
  authors: [{ name: 'Jair Molina Arce', url: 'https://github.com/smookymolina' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jair Molina Arce — Embedded Systems Engineer',
    description:
      'Firmware, IoT, Aerospace Instrumentation & Control Systems. IPN Researcher. IAC 2024 Speaker.',
    images: [{ url: '/images/og/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jair Molina Arce — Embedded Systems Engineer',
    description: 'Firmware, IoT, Aerospace Instrumentation & Control Systems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
