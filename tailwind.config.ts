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
        background: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#1A1A1A',
        border: '#242424',
        'text-primary': '#F0F0F0',
        'text-secondary': '#888888',
        'text-muted': '#555555',
        accent: '#00C2FF',
        'accent-dim': '#0088BB',
        'accent-amber': '#FFB300',
        'accent-green': '#00FF88',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'signal': 'signal 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        signal: {
          '0%, 100%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0, 194, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 194, 255, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
