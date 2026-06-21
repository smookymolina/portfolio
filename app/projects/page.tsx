'use client';

import { useState } from 'react';
import { PROJECTS, CATEGORY_LABELS, type ProjectCategory } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';

const CATEGORIES: ProjectCategory[] = ['embedded', 'firmware', 'iot', 'aerospace', 'ai', 'hardware', 'control'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filtered = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="02 — projects"
          title="All Engineering Projects"
          subtitle="Complete inventory of hardware, firmware, IoT, and research projects. Filter by engineering domain."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 text-sm font-mono rounded border transition-colors ${
              activeCategory === 'all'
                ? 'border-[#00C2FF] text-[#00C2FF] bg-[#00C2FF]/5'
                : 'border-[#242424] text-[#555] hover:border-[#333] hover:text-[#888]'
            }`}
          >
            All ({PROJECTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PROJECTS.filter((p) => p.categories.includes(cat)).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm font-mono rounded border transition-colors ${
                  activeCategory === cat
                    ? 'border-[#00C2FF] text-[#00C2FF] bg-[#00C2FF]/5'
                    : 'border-[#242424] text-[#555] hover:border-[#333] hover:text-[#888]'
                }`}
              >
                {CATEGORY_LABELS[cat]} ({count})
              </button>
            );
          })}
        </div>

        {/* Class A section */}
        {(activeCategory === 'all' || filtered.some((p) => p.classification === 'A')) && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="font-mono text-xs text-[#00C2FF]">Class A — Exceptional</span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered
                .filter((p) => p.classification === 'A')
                .map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
            </div>
          </div>
        )}

        {/* Class B section */}
        {(activeCategory === 'all' || filtered.some((p) => p.classification === 'B')) && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="font-mono text-xs text-[#888]">Class B — Strong Case Studies</span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered
                .filter((p) => p.classification === 'B')
                .map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-mono text-[#555]">No projects in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
