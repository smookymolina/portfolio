'use client';

import SectionHeader from '@/components/SectionHeader';
import PublicationCard from '@/components/PublicationCard';
import TechBadge from '@/components/TechBadge';
import { getPublications, getConferences, getTeaching } from '@/lib/research';
import { MapPin, Calendar, Award, BookOpen, Mic, Tv } from 'lucide-react';
import { useLang } from '@/lib/lang';

export default function ResearchPage() {
  const { t, lang } = useLang();
  const r = t.research;

  const publications = getPublications(lang);
  const conferences = getConferences(lang);
  const teaching = getTeaching(lang);

  const ROLE_LABELS: Record<string, string> = {
    speaker:  r.role_speaker,
    poster:   r.role_poster,
    staff:    r.role_staff,
    attendee: r.role_attendee,
    media:    r.role_media,
  };

  const ROLE_COLORS: Record<string, string> = {
    speaker:  'text-accent',
    poster:   'text-text-secondary',
    staff:    'text-accent-amber',
    attendee: 'text-text-muted',
    media:    'text-accent-amber',
  };

  const mediaConferences = conferences.filter((c) => c.role === 'media');
  const academicConferences = conferences.filter((c) => c.role !== 'media');

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader label={r.label} title={r.title} subtitle={r.subtitle} />

        {/* Research IDs */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: 'ORCID',        value: '0009-0009-6732-8100', url: 'https://orcid.org/0009-0009-6732-8100' },
            { label: 'CVU CONACYT',  value: '1340773' },
            { label: 'Publications', value: '3 (2024–2026)' },
          ].map((id) => (
            <div key={id.label} className="bg-surface-alt border border-border-subtle rounded-lg px-5 py-4">
              <p className="font-mono text-xs text-text-muted mb-1">{id.label}</p>
              {id.url ? (
                <a href={id.url} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent hover:text-accent/80">
                  {id.value} ↗
                </a>
              ) : (
                <p className="font-mono text-sm text-text-primary">{id.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-text-primary">{r.publications}</h2>
          </div>
          <div className="space-y-6">
            {publications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
          </div>
        </div>

        {/* Academic Conferences */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Mic size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-text-primary">{r.conferences}</h2>

          </div>
          <div className="space-y-px border border-border-subtle rounded-lg overflow-hidden">
            {academicConferences.map((conf) => (
              <div key={conf.id} className="bg-surface-alt border-b border-border-subtle last:border-b-0 p-5">
                <div className={`font-mono text-xs mb-2 ${ROLE_COLORS[conf.role]}`}>
                  ● {ROLE_LABELS[conf.role]}
                </div>
                <h3 className="font-medium text-text-primary mb-1">{conf.name}</h3>
                <p className="text-sm text-text-secondary mb-2">{conf.description}</p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <MapPin size={11} /> {conf.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={11} /> {conf.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media appearances */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Tv size={16} className="text-accent-amber" />
            <h2 className="text-xl font-semibold text-text-primary">{r.media_appearances}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {mediaConferences.map((conf) => (
              <div key={conf.id} className="bg-surface-alt border border-border-subtle rounded-lg p-5 hover:border-accent-amber/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Tv size={13} className="text-accent-amber" />
                  <span className="font-mono text-xs text-accent-amber">{conf.date} · {conf.location}</span>
                </div>
                <h3 className="font-medium text-text-primary mb-2">{conf.name}</h3>
                <p className="text-sm text-text-secondary">{conf.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-text-primary">{r.teaching}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {teaching.map((tch) => (
              <div key={tch.id} className="bg-surface-alt border border-border-subtle rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-accent">{tch.role}</span>
                  <span className="font-mono text-xs text-text-muted">{tch.period}</span>
                </div>
                <p className="font-medium text-text-primary mb-1">{tch.subjects.join(' · ')}</p>
                <p className="text-sm text-text-muted mb-3">{tch.institution}</p>
                <p className="text-sm text-text-secondary mb-4">{tch.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tch.tools.map((tool) => <TechBadge key={tool} label={tool} variant="muted" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
