'use client';

import Link from 'next/link';
import FallbackImage from './FallbackImage';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { getProjectBySlug } from '@/lib/projects';
import TechBadge from './TechBadge';
import { useLang } from '@/lib/lang';

interface Props {
  project: Project;
}

const STATUS_COLORS: Record<string, string> = {
  completed:   'text-accent-green',
  prototype:   'text-accent-amber',
  'in-progress':'text-accent',
  research:    'text-text-secondary',
};

export default function ProjectCard({ project: initialProject }: Props) {
  const { t, lang } = useLang();
  const project = getProjectBySlug(initialProject.slug, lang) || initialProject;
  const p = t.projects;

  const statusLabel = p.status[project.status as keyof typeof p.status] || project.status;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block card-surface rounded-lg overflow-hidden"
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] bg-surface overflow-hidden">
        <FallbackImage
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className={`${project.coverFit === 'cover' ? 'object-cover' : 'object-contain'} ${project.coverPosition || 'object-center'} opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />

        {project.classification === 'A' && (
          <div className="absolute top-3 left-3">
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent rounded">
              {p.featured}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-xs ${STATUS_COLORS[project.status]}`}>
            ● {statusLabel}
          </span>
          <span className="font-mono text-xs text-text-muted">{project.period}</span>
        </div>

        <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-text-secondary mb-4 line-clamp-2">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.categories.slice(0, 3).map((cat) => (
            <TechBadge key={cat} label={p.categories[cat as keyof typeof p.categories] || cat} variant="accent" />
          ))}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-3 border-t border-border-subtle">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="font-mono text-accent text-sm font-medium">
                  {m.value}<span className="text-xs text-text-muted"> {m.unit}</span>
                </p>
                <p className="text-xs text-text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end mt-3">
          <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
        </div>
      </div>
    </Link>
  );
}
