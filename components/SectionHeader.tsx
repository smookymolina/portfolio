interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, subtitle, align = 'left' }: Props) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary max-w-2xl leading-relaxed text-base">{subtitle}</p>
      )}
      <div
        className={`mt-6 h-px bg-gradient-to-r from-accent/30 to-transparent ${
          align === 'center' ? 'mx-auto max-w-xs' : 'max-w-xs'
        }`}
      />
    </div>
  );
}
