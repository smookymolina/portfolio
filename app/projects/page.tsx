'use client';

import { useState } from 'react';
import { getProjects, type ProjectCategory } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { useLang } from '@/lib/lang';

const CATEGORIES: ProjectCategory[] = ['embedded','firmware','iot','aerospace','ai','hardware','control'];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');
  const { t, lang } = useLang();
  const p = t.projects;

  const projects = getProjects(lang);
  const filtered = active === 'all' ? projects : projects.filter((proj) => proj.categories.includes(active));

  const btn = (cat: ProjectCategory | 'all', label: string) => (
    <button
      key={cat}
      onClick={() => setActive(cat)}
      className={`px-4 py-1.5 text-sm font-mono rounded border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
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
        <SectionHeader label={p.label} title={p.title} subtitle={p.subtitle} />

        <div className="flex flex-wrap gap-2 mb-12">
          {btn('all', `${p.all} (${projects.length})`)}
          {CATEGORIES.map((cat) =>
            btn(cat, `${p.categories[cat]} (${projects.filter((proj) => proj.categories.includes(cat)).length})`)
          )}
        </div>

        {filtered.some((proj) => proj.classification === 'A') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-accent whitespace-nowrap">{p.class_a}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.filter((proj) => proj.classification === 'A').map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        )}

        {filtered.some((proj) => proj.classification === 'B') && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap">{p.class_b}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.filter((proj) => proj.classification === 'B').map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-mono text-text-muted">{p.empty}</p>
          </div>
        )}
      </div>
    </div>
  );
}
