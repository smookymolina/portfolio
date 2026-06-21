'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/highlights', label: 'Highlights' },
  { href: '/projects',   label: 'Projects' },
  { href: '/research',   label: 'Research' },
  { href: '/contact',    label: 'Contact' },
];

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname            = usePathname();
  const { theme, toggle }   = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-accent/40 rounded flex items-center justify-center group-hover:border-accent transition-colors">
            <span className="font-mono text-xs text-accent font-medium">JM</span>
          </div>
          <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block">
            jair.molina
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/smookymolina"
            target="_blank" rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/jair-molina-arce-4909622b2"
            target="_blank" rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="text-text-muted hover:text-text-primary transition-colors p-1 rounded"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={CV}
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 border border-border text-xs font-mono text-text-secondary hover:border-accent hover:text-accent transition-colors rounded"
          >
            CV.pdf ↗
          </a>

          <button
            className="md:hidden text-text-secondary hover:text-text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border-subtle px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-2 border-b border-border-subtle ${
                pathname === link.href ? 'text-accent' : 'text-text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={CV} target="_blank" className="text-sm text-accent font-mono mt-2">
            Download CV ↗
          </a>
        </div>
      )}
    </header>
  );
}
