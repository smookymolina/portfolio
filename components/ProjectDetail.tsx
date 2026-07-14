'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { type Project, getProjectBySlug } from '@/lib/projects';
import TechBadge from '@/components/TechBadge';
import FallbackImage from '@/components/FallbackImage';
import { useLang } from '@/lib/lang';

export default function ProjectDetail({ project: initialProject }: { project: Project }) {
  const { t, lang } = useLang();
  const project = getProjectBySlug(initialProject.slug, lang) || initialProject;
  const c = t.common;
  const p = t.projects;

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-text-secondary transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded">
          <ArrowLeft size={14} /> {c.all_projects}
        </Link>

        {/* Hero image */}
        <div className="relative aspect-video bg-surface rounded-lg border border-border-subtle overflow-hidden mb-10">
          <FallbackImage src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 900px" className={`${project.coverFit === 'cover' ? 'object-cover' : 'object-contain'} ${project.coverPosition || 'object-center'} opacity-80`} />
        </div>

        {/* Broadcast video capsule */}
        {project.videoUrl && (
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest">{c.broadcast_coverage}</h2>
              {project.broadcastChannels && project.broadcastChannels.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-text-muted">{c.featured_on}:</span>
                  {project.broadcastChannels.map((ch) => (
                    <span key={ch} className="font-mono text-xs px-2 py-0.5 rounded border border-accent/40 text-accent bg-accent/5">
                      {ch}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg border border-border-subtle overflow-hidden bg-black">
              <video
                src={project.videoUrl}
                controls
                preload="metadata"
                className="w-full aspect-video"
                aria-label={lang === 'en' ? `${project.title} — broadcast footage` : `${project.title} — cobertura televisiva`}
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.categories.map((cat) => (
            <TechBadge key={cat} label={p.categories[cat as keyof typeof p.categories] || cat} variant="accent" />
          ))}
          <span className="font-mono text-xs text-text-muted">·</span>
          <span className="font-mono text-xs text-text-muted">{project.period}</span>
          <span className="font-mono text-xs text-text-muted">·</span>
          <span className="font-mono text-xs text-text-muted">{project.institution}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 leading-tight">{project.title}</h1>
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">{project.tagline}</p>

        {project.githubUrl && (
          <div className="flex gap-4 mb-10">
            <a
              href={project.githubUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-mono text-text-secondary hover:border-accent hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <Github size={14} /> {c.view_on_github}
            </a>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{c.overview}</h2>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.description}</p>
            </div>

            <div>
              <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{c.highlights_section}</h2>
              <ul className="space-y-3">
                {project.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{c.evidence}</h2>
              <ul className="space-y-2">
                {project.evidence.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-accent text-xs mt-0.5">→</span>
                    <span className="text-sm text-text-secondary">{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{c.gallery}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video bg-surface rounded border border-border-subtle overflow-hidden">
                      <FallbackImage src={img} alt={`${project.title} — ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 400px" className="object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
                        <p className="font-mono text-[9px] text-text-muted">{img.split('/').pop()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {project.metrics && project.metrics.length > 0 && (
              <div className="bg-surface-alt border border-border-subtle rounded-lg p-5">
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{c.metrics}</h3>
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-accent text-xl font-medium">
                        {m.value}<span className="text-sm text-text-muted ml-1">{m.unit}</span>
                      </p>
                      <p className="text-xs text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.hardware && project.hardware.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">{c.hardware}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.hardware.map((hw) => <TechBadge key={hw} label={hw} variant="amber" />)}
                </div>
              </div>
            )}

            {project.firmware && project.firmware.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">{c.firmware}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.firmware.map((fw) => <TechBadge key={fw} label={fw} variant="accent" />)}
                </div>
              </div>
            )}

            {project.software.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">{c.software}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.software.map((sw) => <TechBadge key={sw} label={sw} variant="muted" />)}
                </div>
              </div>
            )}

            {project.protocols && project.protocols.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">{c.protocols}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.protocols.map((p) => <TechBadge key={p} label={p} variant="muted" />)}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-accent transition-colors">
            <ArrowLeft size={14} /> {c.all_projects}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t.home.get_in_touch} <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
