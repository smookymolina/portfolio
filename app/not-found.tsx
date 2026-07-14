'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/lang';

export default function NotFound() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen flex items-center justify-center grid-bg pt-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          {lang === 'en' ? '// signal lost' : '// señal perdida'}
        </p>
        <h1 className="font-mono text-7xl md:text-8xl font-semibold text-text-primary mb-4">404</h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          {lang === 'en'
            ? 'This page does not exist or was moved. The rest of the portfolio is still transmitting.'
            : 'Esta página no existe o fue movida. El resto del portafolio sigue transmitiendo.'}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <ArrowLeft size={15} /> {lang === 'en' ? 'Back to home' : 'Volver al inicio'}
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {lang === 'en' ? 'View projects' : 'Ver proyectos'} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
