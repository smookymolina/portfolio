import { Mail, Github, Linkedin, ExternalLink, MapPin, Download } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

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

const LINKS = [
  { icon: Mail,        label: 'Email',    sub: 'speedysmoking@gmail.com',              href: 'mailto:speedysmoking@gmail.com' },
  { icon: Linkedin,    label: 'LinkedIn', sub: 'jair-molina-arce-4909622b2',            href: 'https://linkedin.com/in/jair-molina-arce-4909622b2' },
  { icon: Github,      label: 'GitHub',   sub: 'github.com/smookymolina',               href: 'https://github.com/smookymolina' },
  { icon: ExternalLink,label: 'ORCID',    sub: '0009-0009-6732-8100',                   href: 'https://orcid.org/0009-0009-6732-8100' },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="05 — contact"
          title="Let's Work Together"
          subtitle="Open to full-time positions, R&D roles, and technical collaborations. Primarily based in Mexico City — open to remote and international opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact channels */}
          <div>
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
              // contact channels
            </h2>
            <div className="space-y-4">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-surface-alt border border-border-subtle rounded-lg hover:border-accent/40 hover:bg-accent/[0.03] transition-all group"
                  >
                    <div className="w-10 h-10 rounded border border-border bg-surface flex items-center justify-center group-hover:border-accent/40">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{link.label}</p>
                      <p className="text-xs text-text-secondary">{link.sub}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability & positions */}
          <div>
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
              // availability
            </h2>

            <div className="bg-surface-alt border border-border-subtle rounded-lg p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="font-mono text-xs text-accent-green">Available</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Actively seeking engineering positions and R&amp;D roles. Available for immediate start.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <MapPin size={11} />
                <span>Mexico City, Mexico · Remote OK · Open to relocation</span>
              </div>
            </div>

            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">
              // target positions
            </h3>
            <div className="flex flex-wrap gap-2">
              {POSITIONS.map((pos) => (
                <TechBadge key={pos} label={pos} variant="muted" />
              ))}
            </div>
          </div>
        </div>

        {/* CV download */}
        <div className="bg-surface-alt border border-border-subtle rounded-lg p-8 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            // resume
          </p>
          <h2 className="text-2xl font-semibold text-text-primary mb-3">Download Full Resume</h2>
          <p className="text-text-secondary mb-6 text-sm">
            Complete CV with detailed technical competencies, project descriptions, publications,
            and academic history.
          </p>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors"
          >
            <Download size={16} />
            CV_Jair_Molina_Arce_2026_v2.pdf
          </a>
          <p className="font-mono text-xs text-text-muted mt-4">Updated June 2026</p>
        </div>
      </div>
    </div>
  );
}
