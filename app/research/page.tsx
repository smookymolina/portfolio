import SectionHeader from '@/components/SectionHeader';
import PublicationCard from '@/components/PublicationCard';
import TechBadge from '@/components/TechBadge';
import { PUBLICATIONS, CONFERENCES, TEACHING } from '@/lib/research';
import { MapPin, Calendar, Award, BookOpen, Mic } from 'lucide-react';

const ROLE_LABELS: Record<string, string> = {
  speaker: 'Speaker / Presenter',
  poster: 'Poster Presentation',
  staff: 'Organizing Committee',
  attendee: 'Attendee',
};

const ROLE_COLORS: Record<string, string> = {
  speaker: 'text-[#00C2FF]',
  poster: 'text-[#888]',
  staff: 'text-[#FFB300]',
  attendee: 'text-[#555]',
};

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="03 — research"
          title="Scientific Production & Academic Activity"
          subtitle="Publications, conference presentations, and academic contributions in aerospace engineering, embedded systems, and AI-driven defense technology."
        />

        {/* Research IDs banner */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: 'ORCID', value: '0009-0009-6732-8100', url: 'https://orcid.org/0009-0009-6732-8100' },
            { label: 'CVU CONACYT', value: '1340773', url: null },
            { label: 'Publications', value: '3 (2024–2026)', url: null },
          ].map((id) => (
            <div key={id.label} className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg px-5 py-4">
              <p className="font-mono text-xs text-[#555] mb-1">{id.label}</p>
              {id.url ? (
                <a
                  href={id.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[#00C2FF] hover:text-[#00C2FF]/80"
                >
                  {id.value} ↗
                </a>
              ) : (
                <p className="font-mono text-sm text-[#F0F0F0]">{id.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={16} className="text-[#00C2FF]" />
            <h2 className="text-xl font-semibold text-[#F0F0F0]">Publications</h2>
          </div>
          <div className="space-y-6">
            {PUBLICATIONS.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>

        {/* Conferences & Events */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Mic size={16} className="text-[#00C2FF]" />
            <h2 className="text-xl font-semibold text-[#F0F0F0]">Conferences & Presentations</h2>
          </div>
          <div className="space-y-px border border-[#1a1a1a] rounded-lg overflow-hidden">
            {CONFERENCES.map((conf) => (
              <div key={conf.id} className="bg-[#0D0D0D] border-b border-[#1a1a1a] last:border-b-0 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`font-mono text-xs ${ROLE_COLORS[conf.role]}`}>
                        ● {ROLE_LABELS[conf.role]}
                      </span>
                    </div>
                    <h3 className="font-medium text-[#F0F0F0] mb-1">{conf.name}</h3>
                    <p className="text-sm text-[#888] mb-1">{conf.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-[#555]">
                        <MapPin size={11} /> {conf.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#555]">
                        <Calendar size={11} /> {conf.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award size={16} className="text-[#00C2FF]" />
            <h2 className="text-xl font-semibold text-[#F0F0F0]">Teaching Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TEACHING.map((t) => (
              <div key={t.id} className="card-surface rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-[#00C2FF]">{t.role}</span>
                  <span className="font-mono text-xs text-[#555]">{t.period}</span>
                </div>
                <p className="font-medium text-[#F0F0F0] mb-1">
                  {t.subjects.join(' · ')}
                </p>
                <p className="text-sm text-[#555] mb-3">{t.institution}</p>
                <p className="text-sm text-[#888] mb-4">{t.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.tools.map((tool) => (
                    <TechBadge key={tool} label={tool} variant="muted" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
