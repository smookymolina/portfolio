import type { Metadata, Viewport } from 'next';
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
  title: 'Jair Molina Arce — Mechanical Engineer · Embedded Systems & Instrumentation',
  description:
    'Mechanical Engineer (IPN) specialized in embedded systems and instrumentation: rocket propulsion test benches, DAQ, C/C++ firmware on ESP32/STM32, FEA/thermal simulation. IAC 2024 speaker · 3 peer-reviewed publications.',
  keywords: [
    'Mechanical Engineer', 'Embedded Systems Engineer', 'Mechatronics', 'Instrumentation', 'DAQ',
    'Firmware Engineer', 'ESP32', 'STM32', 'C/C++', 'FEA', 'Thermal Simulation', 'ANSYS',
    'Aerospace', 'Rocket Propulsion Test Bench', 'PID Control', 'IPN Mexico', 'IAC 2024',
  ],
  authors: [{ name: 'Jair Molina Arce', url: 'https://github.com/smookymolina' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    title: 'Jair Molina Arce — Mechanical Engineer · Embedded Systems & Instrumentation',
    description: 'From sensor to dashboard: complete systems — CAD and FEA to C/C++ firmware. IAC 2024 speaker · IPN.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jair Molina Arce — Mechanical Engineer · Embedded Systems & Instrumentation',
    description: 'From sensor to dashboard: complete systems — CAD and FEA to C/C++ firmware.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#F2F0EC' },
  ],
};

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jair Molina Arce',
  url: 'https://jairmolina.dev',
  email: 'mailto:ingjarimolina@gmail.com',
  jobTitle: 'Mechanical Engineer — Embedded Systems & Instrumentation',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Instituto Politécnico Nacional',
  },
  knowsAbout: [
    'Embedded Systems', 'Instrumentation', 'Data Acquisition', 'Firmware (C/C++)',
    'Mechanical Engineering', 'FEA', 'Thermal Simulation', 'Control Systems', 'Aerospace',
  ],
  sameAs: [
    'https://github.com/smookymolina',
    'https://linkedin.com/in/jair-molina-arce-4909622b2',
    'https://orcid.org/0009-0009-6732-8100',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
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
