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
          'bg-accent/5  border-accent/20  text-accent':        variant === 'accent',
          'bg-accent-amber/5  border-accent-amber/20  text-accent-amber': variant === 'amber',
          'bg-accent-green/5  border-accent-green/20  text-accent-green': variant === 'green',
          'bg-border/60 border-border text-text-secondary':    variant === 'muted',
        }
      )}
    >
      {label}
    </span>
  );
}
