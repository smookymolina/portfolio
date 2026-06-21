'use client';

import { Mail, Github, Linkedin, ExternalLink, MapPin, Download } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';
import { useLang } from '@/lib/lang';

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

const POSITIONS = [
  'Embedded Systems Engineer',
  'Firmware Engineer',
  'Instrumentation / DAQ Engineer',
  'Robotics / Mechatronics Engineer',
  'R&D Engineer — Aerospace / Defense',
  'Electronics Design Engineer',
  'IoT Systems Engineer',
  'AI / Automation Engineer',
  'Technical Co-Founder',
];

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;

  const LINKS = [
    { icon: Mail,         label: 'Email',    sub: 'speedysmoking@gmail.com',             href: 'mailto:speedysmoking@gmail.com' },
    { icon: Linkedin,     label: 'LinkedIn', sub: 'jair-molina-arce-4909622b2',           href: 'https://linkedin.com/in/jair-molina-arce-4909622b2' },
    { icon: Github,       label: 'GitHub',   sub: 'github.com/smookymolina',              href: 'https://github.com/smookymolina' },
    { icon: ExternalLink, label: 'ORCID',    sub: '0009-0009-6732-8100',                  href: 'https://orcid.org/0009-0009-6732-8100' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader label={c.label} title={c.title} subtitle={c.subtitle} />

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Contact channels */}
          <div>
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">{c.channels}</h2>
            <div className="space-y-3">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 bg-surface-alt border border-border-subtle rounded-lg hover:border-accent/40 hover:bg-accent/[0.03] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    <div className="w-9 h-9 rounded border border-border bg-surface flex items-center justify-center group-hover:border-accent/40 flex-shrink-0 transition-colors">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{link.label}</p>
                      <p className="text-xs text-text-secondary break-all">{link.sub}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability & positions */}
          <div>
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">{c.availability}</h2>

            <div className="bg-surface-alt border border-border-subtle rounded-lg p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="font-mono text-xs text-accent-green">{c.available}</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">{c.available_desc}</p>
              <div className="flex items-start gap-2 text-xs text-text-muted">
                <MapPin size={11} className="mt-0.5 flex-shrink-0" />
                <span>{c.location}</span>
              </div>
            </div>

            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">{c.positions}</h3>
            <div className="flex flex-wrap gap-2">
              {POSITIONS.map((pos) => (
                <TechBadge key={pos} label={pos} variant="muted" />
              ))}
            </div>
          </div>
        </div>

        {/* CV download */}
        <div className="bg-surface-alt border border-border-subtle rounded-lg p-8 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{c.resume_label}</p>
          <h2 className="text-2xl font-semibold text-text-primary mb-3">{c.resume_title}</h2>
          <p className="text-text-secondary mb-6 text-sm max-w-md mx-auto">{c.resume_desc}</p>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <Download size={15} /> {t.common.download_cv}
          </a>
          <p className="font-mono text-xs text-text-muted mt-4">{c.updated}</p>
        </div>

        <div className="mt-6 border border-border-subtle rounded-lg p-6">
          <p className="font-mono text-xs text-text-muted mb-2">{c.response_label}</p>
          <p className="text-sm text-text-secondary">{c.response_text}</p>
        </div>
      </div>
    </div>
  );
}
