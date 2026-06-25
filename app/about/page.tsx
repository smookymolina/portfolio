'use client';

import TechBadge from '@/components/TechBadge';
import SectionHeader from '@/components/SectionHeader';
import FallbackImage from '@/components/FallbackImage';
import { useLang } from '@/lib/lang';
import { useTheme } from '@/lib/theme';

const TYPE_COLORS: Record<string, string> = {
  engineering: 'text-accent',
  research:    'text-accent-amber',
  teaching:    'text-accent-green',
  education:   'text-text-secondary',
  media:       'text-accent-amber',
};

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;
  const { theme } = useTheme();
  
  const SKILLS = a.skills;
  const TIMELINE = a.timeline;

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Profile hero */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 lg:gap-16 mb-24">
          <div>
            <div className="bg-surface-alt rounded-lg border border-border-subtle relative overflow-hidden mb-5 w-[200px] h-[200px] mx-auto md:w-full md:h-auto md:aspect-square">
              {/* Placeholder shown when photo not yet available */}
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <div className="w-24 h-24 rounded-full border-2 border-accent/30 bg-surface flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/40">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <p className="font-mono text-xs text-text-muted">// profile photo</p>
              </div>
              {/* Actual image overlay (takes precedence when available) */}
              <div className="absolute inset-0 z-20">
                <FallbackImage src="/images/profile/jair-molina.jpeg" alt="Jair Molina Arce" fill sizes="300px" className="object-cover object-[50%_30%]" />
              </div>
            </div>

            <div className="space-y-0 font-mono text-xs border border-border-subtle rounded-lg overflow-hidden">
              {[
                { label: 'ORCID',       value: '0009-0009-6732-8100', url: 'https://orcid.org/0009-0009-6732-8100' },
                { label: 'CVU CONACYT', value: '1340773' },
                { label: 'GitHub',      value: 'smookymolina', url: 'https://github.com/smookymolina' },
                { label: 'Location',    value: 'Mexico City, Mexico' },
                { label: 'Languages',   value: 'Spanish (native) · English (advanced)' },
                { label: 'Startup',     value: 'CO.DE Aerospace · Co-Founder' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between px-4 py-3 border-b border-border-subtle last:border-0 bg-surface-alt hover:bg-surface transition-colors">
                  <span className="text-text-muted">{row.label}</span>
                  {row.url ? (
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      {row.value} ↗
                    </a>
                  ) : (
                    <span className="text-text-secondary text-right">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={theme === 'dark' ? "bg-background/55 backdrop-blur-sm rounded-2xl p-5 md:p-7 border border-white/[0.05] shadow-lg" : ""}>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{a.label}</p>
            <h1 className="text-4xl font-semibold text-text-primary mb-2">Jair Molina Arce</h1>
            <p className="text-xl text-text-secondary mb-8">{a.subtitle}</p>

            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
              <p>{a.bio3}</p>
              <p>{a.bio4}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['5+','3×','2×'].map((v, i) => (
                <div key={v} className="bg-surface-alt border border-border-subtle rounded p-4">
                  <p className="font-mono text-accent text-2xl font-medium">{v}</p>
                  <p className="text-xs text-text-muted whitespace-pre-line mt-1">{a.stat_labels[i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <SectionHeader label={a.skills_label} title={a.skills_title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {SKILLS.map((sg) => (
            <div key={sg.category} className="bg-surface-alt border border-border-subtle rounded-lg p-5">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{sg.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {sg.items.map((item) => (
                  <TechBadge key={item} label={item} variant={sg.variant as 'accent' | 'amber' | 'muted' | 'green'} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeader label={a.timeline_label} title={a.timeline_title} />
        <div className={theme === 'dark' ? "bg-background/55 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/[0.05] shadow-lg relative" : "relative"}>
          <div className={theme === 'dark' ? "absolute left-6 md:left-8 top-6 md:top-8 bottom-6 md:bottom-8 w-px bg-border-subtle" : "absolute left-0 top-0 bottom-0 w-px bg-border-subtle"} />
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 -translate-x-[3px] ${
                  item.highlight ? 'border-accent bg-accent' : 'border-border bg-background'
                }`} />
                <p className="font-mono text-xs text-text-muted mb-0.5">{item.period}</p>
                <p className={`font-medium ${item.highlight ? 'text-text-primary' : 'text-text-secondary'}`}>{item.role}</p>
                <p className={`text-sm ${TYPE_COLORS[item.type]}`}>{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
