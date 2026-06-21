interface Props {
  label: string;   // e.g. "01 — highlights"
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, subtitle, align = 'left' }: Props) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="font-mono text-xs text-[#00C2FF] tracking-widest uppercase mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#F0F0F0] leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-[#888] max-w-2xl leading-relaxed text-base">{subtitle}</p>}
      <div className={`mt-6 h-px bg-gradient-to-r from-[#00C2FF]/30 to-transparent ${align === 'center' ? 'mx-auto max-w-xs' : 'max-w-xs'}`} />
    </div>
  );
}
