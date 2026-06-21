'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { CATEGORY_LABELS } from '@/lib/projects';
import TechBadge from './TechBadge';

interface Props {
  project: Project;
}

const STATUS_COLORS: Record<string, string> = {
  completed:   'text-accent-green',
  prototype:   'text-accent-amber',
  'in-progress':'text-accent',
  research:    'text-text-secondary',
};

const STATUS_LABELS: Record<string, string> = {
  completed:   'Completed',
  prototype:   'Prototype',
  'in-progress':'In Progress',
  research:    'Research',
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block card-surface rounded-lg overflow-hidden"
    >
      {/* Cover */}
      <div className="relative aspect-video bg-surface overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

        {project.classification === 'A' && (
          <div className="absolute top-3 left-3">
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent rounded">
              Featured
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
          <div className="font-mono text-xs text-text-muted tracking-widest">[ no image ]</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-xs ${STATUS_COLORS[project.status]}`}>
            ● {STATUS_LABELS[project.status]}
          </span>
          <span className="font-mono text-xs text-text-muted">{project.period}</span>
        </div>

        <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-text-secondary mb-4 line-clamp-2">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.categories.slice(0, 3).map((cat) => (
            <TechBadge key={cat} label={CATEGORY_LABELS[cat]} variant="accent" />
          ))}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex gap-4 pt-3 border-t border-border-subtle">
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
