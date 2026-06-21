import { ExternalLink, BookOpen, FileText, Presentation } from 'lucide-react';
import type { Publication } from '@/lib/research';
import TechBadge from './TechBadge';

const TYPE_ICONS = {
  'conference': Presentation,
  'journal': FileText,
  'book-chapter': BookOpen,
};

const TYPE_LABELS = {
  'conference': 'Conference Paper',
  'journal': 'Journal Article',
  'book-chapter': 'Book Chapter',
};

interface Props {
  pub: Publication;
}

export default function PublicationCard({ pub }: Props) {
  const Icon = TYPE_ICONS[pub.type];

  return (
    <div className="card-surface rounded-lg p-6">
      {/* Type badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-[#555]">
          <Icon size={14} />
          <span className="font-mono text-xs">{TYPE_LABELS[pub.type]}</span>
        </div>
        <span className="font-mono text-xs text-[#555]">{pub.year}</span>
      </div>

      {/* Highlight banner */}
      {pub.highlight && (
        <div className="mb-4 px-3 py-2 bg-[#00C2FF]/5 border-l-2 border-[#00C2FF] rounded-r">
          <p className="text-xs text-[#00C2FF]">{pub.highlight}</p>
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold text-[#F0F0F0] mb-2 leading-snug">{pub.title}</h3>

      {/* Authors */}
      <p
        className="text-sm text-[#888] mb-1"
        dangerouslySetInnerHTML={{ __html: pub.authors }}
      />

      {/* Venue */}
      <p className="text-xs text-[#555] font-mono mb-4">{pub.venue}</p>

      {/* Abstract */}
      <p className="text-sm text-[#888] mb-4 leading-relaxed line-clamp-3">{pub.abstract}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {pub.tags.map((tag) => (
          <TechBadge key={tag} label={tag} variant="muted" />
        ))}
      </div>

      {/* DOI link */}
      {pub.doi && (
        <a
          href={pub.url || `https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00C2FF] hover:text-[#00C2FF]/80 transition-colors"
        >
          <ExternalLink size={12} />
          DOI: {pub.doi}
        </a>
      )}
    </div>
  );
}
