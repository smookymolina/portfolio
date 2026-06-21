import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { PROJECTS, getProjectBySlug, CATEGORY_LABELS } from '@/lib/projects';
import TechBadge from '@/components/TechBadge';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jair Molina Arce`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-[#555] hover:text-[#888] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All Projects
        </Link>

        {/* Hero image */}
        <div className="relative aspect-video bg-[#111] rounded-lg border border-[#1a1a1a] overflow-hidden mb-10">
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
            <p className="font-mono text-xs text-[#333]">📁 {project.coverImage}</p>
            <p className="font-mono text-[10px] text-[#242424] mt-2">{project.title}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.categories.map((cat) => (
            <TechBadge key={cat} label={CATEGORY_LABELS[cat]} variant="accent" />
          ))}
          <span className="font-mono text-xs text-[#555]">·</span>
          <span className="font-mono text-xs text-[#555]">{project.period}</span>
          <span className="font-mono text-xs text-[#555]">·</span>
          <span className="font-mono text-xs text-[#555]">{project.institution}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#F0F0F0] mb-3 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-[#888] mb-8 leading-relaxed">{project.tagline}</p>

        {/* External links */}
        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#242424] text-sm font-mono text-[#888] hover:border-[#00C2FF] hover:text-[#00C2FF] transition-colors rounded"
            >
              <Github size={14} /> View on GitHub
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main column */}
          <div className="md:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">
                // overview
              </h2>
              <p className="text-[#888] leading-relaxed whitespace-pre-line">{project.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">
                // technical highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#00C2FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#888]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evidence */}
            <div>
              <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">
                // evidence & documentation
              </h2>
              <ul className="space-y-2">
                {project.evidence.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-[#00C2FF] text-xs mt-0.5">→</span>
                    <span className="text-sm text-[#888]">{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery placeholders */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">
                  // gallery
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-video bg-[#111] rounded border border-[#1a1a1a] flex items-center justify-center">
                      <p className="font-mono text-[9px] text-[#333] text-center px-2">{img}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg p-5">
                <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">// metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-[#00C2FF] text-xl font-medium">
                        {m.value}
                        <span className="text-sm text-[#555] ml-1">{m.unit}</span>
                      </p>
                      <p className="text-xs text-[#555]">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hardware */}
            {project.hardware && project.hardware.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-3">// hardware</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.hardware.map((hw) => (
                    <TechBadge key={hw} label={hw} variant="amber" />
                  ))}
                </div>
              </div>
            )}

            {/* Firmware */}
            {project.firmware && project.firmware.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-3">// firmware</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.firmware.map((fw) => (
                    <TechBadge key={fw} label={fw} variant="accent" />
                  ))}
                </div>
              </div>
            )}

            {/* Software */}
            {project.software.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-3">// software</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.software.map((sw) => (
                    <TechBadge key={sw} label={sw} variant="muted" />
                  ))}
                </div>
              </div>
            )}

            {/* Protocols */}
            {project.protocols && project.protocols.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-3">// protocols</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.protocols.map((p) => (
                    <TechBadge key={p} label={p} variant="muted" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next project nav */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#555] hover:text-[#00C2FF] transition-colors"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
          <Link
            href="/highlights"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#555] hover:text-[#00C2FF] transition-colors"
          >
            Engineering Highlights <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
