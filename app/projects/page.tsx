'use client';

import { useState } from 'react';
import { PROJECTS, CATEGORY_LABELS, type ProjectCategory } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';

const CATEGORIES: ProjectCategory[] = ['embedded','firmware','iot','aerospace','ai','hardware','control'];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  const btn = (cat: ProjectCategory | 'all', label: string) => (
    <button
      key={cat}
      onClick={() => setActive(cat)}
      className={`px-4 py-1.5 text-sm font-mono rounded border transition-colors ${
        active === cat
          ? 'border-accent text-accent bg-accent/5'
          : 'border-border text-text-muted hover:border-border-subtle hover:text-text-secondary'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="02 — projects"
          title="All Engineering Projects"
          subtitle="Complete inventory of hardware, firmware, IoT, and research projects. Filter by engineering domain."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {btn('all', `All (${PROJECTS.length})`)}
          {CATEGORIES.map((cat) =>
            btn(cat, `${CATEGORY_LABELS[cat]} (${PROJECTS.filter((p) => p.categories.includes(cat)).length})`)
          )}
        </div>

        {(active === 'all' || filtered.some((p) => p.classification === 'A')) && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-accent">Class A — Exceptional</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.filter((p) => p.classification === 'A').map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {(active === 'all' || filtered.some((p) => p.classification === 'B')) && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-text-secondary">Class B — Strong Case Studies</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.filter((p) => p.classification === 'B').map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-mono text-text-muted">No projects in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
