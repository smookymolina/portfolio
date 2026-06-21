import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';
import ProjectDetail from '@/components/ProjectDetail';

interface Props { params: { slug: string }; }

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
  return <ProjectDetail project={project} />;
}
