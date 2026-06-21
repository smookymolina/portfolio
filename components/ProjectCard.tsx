'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { CATEGORY_LABELS } from '@/lib/projects';
import TechBadge from './TechBadge';


interface Props {
  project: Project;
  variant?: 'default' | 'featured';
}

const STATUS_COLORS: Record<string, string> = {
  completed: 'text-[#00FF88]',
  prototype: 'text-[#FFB300]',
  'in-progress': 'text-[#00C2FF]',
  research: 'text-[#888]',
};

const STATUS_LABELS: Record<string, string> = {
  completed: 'Completed',
  prototype: 'Prototype',
  'in-progress': 'In Progress',
  research: 'Research',
};

export default function ProjectCard({ project, variant = 'default' }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block card-surface rounded-lg overflow-hidden"
    >
      {/* Cover Image */}
      <div className="relative aspect-video bg-[#111] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          onError={(e) => {
            // Fallback for missing images during development
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />

        {/* Classification badge */}
        <div className="absolute top-3 left-3">
          {project.classification === 'A' && (
            <span className="font-mono text-xs px-2 py-0.5 bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] rounded">
              Featured
            </span>
          )}
        </div>

        {/* Placeholder for missing images */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-center">
            <div className="font-mono text-4xl text-[#333]">[ ]</div>
            <p className="font-mono text-xs text-[#333] mt-1">{project.id}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Status + Period */}
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-xs ${STATUS_COLORS[project.status]}`}>
            ● {STATUS_LABELS[project.status]}
          </span>
          <span className="font-mono text-xs text-[#555]">{project.period}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[#F0F0F0] mb-2 group-hover:text-[#00C2FF] transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-[#888] mb-4 line-clamp-2">{project.tagline}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.categories.slice(0, 3).map((cat) => (
            <TechBadge key={cat} label={CATEGORY_LABELS[cat]} variant="accent" />
          ))}
        </div>

        {/* Key metrics if any */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex gap-4 pt-3 border-t border-[#1a1a1a]">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="font-mono text-[#00C2FF] text-sm font-medium">{m.value}<span className="text-xs text-[#555]"> {m.unit}</span></p>
                <p className="text-xs text-[#555]">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Arrow */}
        <div className="flex justify-end mt-3">
          <ArrowUpRight size={16} className="text-[#555] group-hover:text-[#00C2FF] transition-colors" />
        </div>
      </div>
    </Link>
  );
}
