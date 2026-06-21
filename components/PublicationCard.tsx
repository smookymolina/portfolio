import { ExternalLink, BookOpen, FileText, Presentation } from 'lucide-react';
import type { Publication } from '@/lib/research';
import TechBadge from './TechBadge';

const TYPE_ICONS = {
  conference:    Presentation,
  journal:       FileText,
  'book-chapter':BookOpen,
};

const TYPE_LABELS = {
  conference:    'Conference Paper',
  journal:       'Journal Article',
  'book-chapter':'Book Chapter',
};

interface Props { pub: Publication; }

export default function PublicationCard({ pub }: Props) {
  const Icon = TYPE_ICONS[pub.type];
  return (
    <div className="card-surface rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-text-muted">
          <Icon size={14} />
          <span className="font-mono text-xs">{TYPE_LABELS[pub.type]}</span>
        </div>
        <span className="font-mono text-xs text-text-muted">{pub.year}</span>
      </div>

      {pub.highlight && (
        <div className="mb-4 px-3 py-2 bg-accent/5 border-l-2 border-accent rounded-r">
          <p className="text-xs text-accent">{pub.highlight}</p>
        </div>
      )}

      <h3 className="font-semibold text-text-primary mb-2 leading-snug">{pub.title}</h3>
      <p className="text-sm text-text-secondary mb-1" dangerouslySetInnerHTML={{ __html: pub.authors }} />
      <p className="text-xs text-text-muted font-mono mb-4">{pub.venue}</p>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">{pub.abstract}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {pub.tags.map((tag) => (
          <TechBadge key={tag} label={tag} variant="muted" />
        ))}
      </div>

      {pub.doi && (
        <a
          href={pub.url || `https://doi.org/${pub.doi}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors"
        >
          <ExternalLink size={12} /> DOI: {pub.doi}
        </a>
      )}
    </div>
  );
}
