import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VantaBackground from '@/components/VantaBackground';
import { ThemeProvider } from '@/lib/theme';
import { LangProvider } from '@/lib/lang';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jairmolina.dev'),
  title: 'Jair Molina Arce — Embedded Systems & Advanced Technology Engineer',
  description:
    'Embedded Systems & Advanced Technology Engineer. Firmware, IoT, Aerospace Instrumentation, Control Systems. IPN · IAC 2024 · ESP32 · STM32 · CO.DE Aerospace.',
  keywords: [
    'Embedded Systems Engineer', 'Firmware Engineer', 'IoT', 'ESP32', 'STM32',
    'Aerospace', 'Instrumentation', 'DAQ', 'PID Control', 'Mechatronics', 'IPN Mexico', 'IAC 2024',
  ],
  authors: [{ name: 'Jair Molina Arce', url: 'https://github.com/smookymolina' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    title: 'Jair Molina Arce — Embedded Systems Engineer',
    description: 'Firmware, IoT, Aerospace Instrumentation & Control Systems. IPN Researcher. IAC 2024 Speaker.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jair Molina Arce — Embedded Systems Engineer',
    description: 'Firmware, IoT, Aerospace Instrumentation & Control Systems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary min-h-screen">
        <ThemeProvider>
          <VantaBackground />
          <LangProvider>
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
