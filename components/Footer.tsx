'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLang } from '@/lib/lang';

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

export default function Footer() {
  const { t } = useLang();

  const NAV_LINKS = [
    { href: '/about',      label: t.nav.about,       external: false },
    { href: '/highlights', label: t.nav.highlights,  external: false },
    { href: '/projects',   label: t.nav.projects,    external: false },
    { href: '/research',   label: t.nav.research,    external: false },
    { href: '/contact',    label: t.nav.contact,     external: false },
    { href: CV,            label: t.nav.resume_pdf,  external: true  },
  ];

  return (
    <footer className="border-t border-border-subtle mt-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-mono text-xs text-text-muted mb-1">// engineer</div>
            <p className="font-semibold text-text-primary mb-1">Jair Molina Arce</p>
            <p className="text-sm text-text-secondary">
              Embedded Systems & Advanced Technology Engineer
            </p>
            <p className="text-xs text-text-muted font-mono mt-3">
              IPN · Mexico City · ORCID: 0009-0009-6732-8100
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-text-muted mb-4">{t.nav.navigate}</div>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div>
            <div className="font-mono text-xs text-text-muted mb-4">{t.nav.connect}</div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ingjarimolina@gmail.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded"
              >
                <Mail size={14} /> ingjarimolina@gmail.com
              </a>
              <a
                href="https://github.com/smookymolina"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Github size={14} /> github.com/smookymolina
              </a>
              <a
                href="https://linkedin.com/in/jair-molina-arce-4909622b2"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin size={14} /> linkedin.com/in/jair-molina-arce
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            © {new Date().getFullYear()} Jair Molina Arce · Next.js 14 + Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted font-mono">CO.DE Aerospace Co-Founder</span>
            <span className="text-border">·</span>
            <span className="text-xs text-text-muted font-mono">CVU CONACYT: 1340773</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
