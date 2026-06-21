import { clsx } from 'clsx';

interface Props {
  label: string;
  variant?: 'accent' | 'amber' | 'muted' | 'green';
  size?: 'sm' | 'md';
}

export default function TechBadge({ label, variant = 'accent', size = 'sm' }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-mono border rounded',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        {
          'bg-[#00C2FF]/5 border-[#00C2FF]/20 text-[#00C2FF]': variant === 'accent',
          'bg-[#FFB300]/5 border-[#FFB300]/20 text-[#FFB300]': variant === 'amber',
          'bg-[#00FF88]/5 border-[#00FF88]/20 text-[#00FF88]': variant === 'green',
          'bg-[#242424] border-[#333] text-[#888]': variant === 'muted',
        }
      )}
    >
      {label}
    </span>
  );
}
