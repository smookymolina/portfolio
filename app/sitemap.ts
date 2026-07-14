import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/projects';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://jairmolina.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,           changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/projects`,   changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/research`,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/highlights`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,    changeFrequency: 'yearly',  priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    changeFrequency: 'monthly',
    priority: p.classification === 'A' ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
