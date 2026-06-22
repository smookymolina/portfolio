'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useLang } from '@/lib/lang';

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const NAV_LINKS = [
    { href: '/',           label: t.nav.home },
    { href: '/about',      label: t.nav.about },
    { href: '/highlights', label: t.nav.highlights },
    { href: '/projects',   label: t.nav.projects },
    { href: '/research',   label: t.nav.research },
    { href: '/contact',    label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
            <div className="w-8 h-8 border border-accent/40 rounded flex items-center justify-center group-hover:border-accent transition-colors">
              <span className="font-mono text-xs text-accent font-medium">JM</span>
            </div>
            <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block">
              Jair Molina
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1 ${
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
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/smookymolina"
              target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/jair-molina-arce-4909622b2"
              target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="px-2 py-1 font-mono text-xs border border-border rounded text-text-muted hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-mono text-text-secondary hover:border-accent hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t.nav.cv} ↗
            </a>

            <button
              className="md:hidden p-1.5 text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + nav — conditionally rendered for correct animation and focus */}
      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="md:hidden fixed top-16 left-0 right-0 z-40 animate-in max-h-[calc(100vh-4rem)] overflow-y-auto"
            style={{
              background: 'rgb(var(--color-surface) / 0.55)',
              backdropFilter: 'blur(24px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
              borderBottom: '1px solid rgb(var(--color-border) / 0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
        <div className="px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base py-3 px-3 border-b border-border-subtle/50 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors ${
                pathname === link.href
                  ? 'text-accent font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4 mt-2">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 border border-accent/30 bg-accent/5 text-sm text-accent font-mono rounded hover:border-accent hover:bg-accent/10 transition-colors"
            >
              {t.nav.cv} ↗
            </a>
            <button
              onClick={toggleLang}
              className="px-4 py-2.5 font-mono text-sm border border-border/60 bg-surface/40 rounded text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 border border-border/60 bg-surface/40 rounded text-text-muted hover:text-text-primary hover:border-border-subtle transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
          </nav>
        </>
      )}
    </>
  );
}
