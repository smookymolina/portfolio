import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background:       'rgb(var(--color-bg) / <alpha-value>)',
        surface:          'rgb(var(--color-surface) / <alpha-value>)',
        'surface-alt':    'rgb(var(--color-surface-alt) / <alpha-value>)',
        border:           'rgb(var(--color-border) / <alpha-value>)',
        'border-subtle':  'rgb(var(--color-border-subtle) / <alpha-value>)',
        'text-primary':   'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-muted':     'rgb(var(--color-text-muted) / <alpha-value>)',
        accent:           'rgb(var(--color-accent) / <alpha-value>)',
        'accent-dim':     'rgb(var(--color-accent-dim) / <alpha-value>)',
        'accent-amber':   'rgb(var(--color-accent-amber) / <alpha-value>)',
        'accent-green':   'rgb(var(--color-accent-green) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-up':   'slideUp 0.6s ease forwards',
        'scan':       'scan 8s linear infinite',
      },
      keyframes: {
        fadeIn:  { from:{ opacity:'0' }, to:{ opacity:'1' } },
        slideUp: { from:{ opacity:'0', transform:'translateY(24px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        scan:    { '0%':{ transform:'translateX(-100%)' }, '100%':{ transform:'translateX(400%)' } },
      },
    },
  },
  plugins: [],
};

export default config;
