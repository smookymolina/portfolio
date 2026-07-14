'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useLang } from '@/lib/lang';
import { SITE } from '@/lib/site';

const CV = SITE.cv;

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
    { href: '/',         label: t.nav.home },
    { href: '/projects', label: t.nav.projects },
    { href: '/research', label: t.nav.research },
    { href: '/about',    label: t.nav.about },
    { href: '/contact',  label: t.nav.contact },
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
              aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label={lang === 'en' ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : `Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
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
              aria-label={lang === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Cerrar menú' : 'Abrir menú')}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown — floating glass panel */}
      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="md:hidden fixed top-[62px] right-3 z-50 w-52 rounded-2xl overflow-hidden"
            style={{
              background: 'rgb(var(--color-surface) / 0.62)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-1 pt-1.5 pb-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-sm py-2 px-3 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    pathname === link.href
                      ? 'text-accent font-medium bg-accent/8'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mx-2 my-1.5 h-px bg-border-subtle/40" />
              <div className="flex items-center gap-1.5 px-2 pb-1">
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 border border-accent/30 bg-accent/5 text-[11px] text-accent font-mono rounded-lg hover:border-accent hover:bg-accent/10 transition-colors"
                >
                  {t.nav.cv} ↗
                </a>
                <button
                  onClick={toggleLang}
                  aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                  className="px-2.5 py-1.5 font-mono text-[11px] border border-border/60 bg-surface/30 rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  {lang === 'en' ? 'ES' : 'EN'}
                </button>
                <button
                  onClick={toggleTheme}
                  aria-label={lang === 'en' ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : `Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                  className="p-1.5 border border-border/60 bg-surface/30 rounded-lg text-text-muted hover:text-text-primary hover:border-border-subtle transition-colors"
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
