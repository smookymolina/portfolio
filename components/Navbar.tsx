'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/highlights', label: 'Highlights' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#00C2FF]/40 rounded flex items-center justify-center group-hover:border-[#00C2FF] transition-colors">
            <span className="font-mono text-xs text-[#00C2FF] font-medium">JM</span>
          </div>
          <span className="font-mono text-sm text-[#888] group-hover:text-[#F0F0F0] transition-colors hidden sm:block">
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
                  ? 'text-[#00C2FF]'
                  : 'text-[#888] hover:text-[#F0F0F0]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: social + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/smookymolina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#F0F0F0] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/jair-molina-arce-4909622b2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#F0F0F0] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/cv/CV_Jair_Molina_2026.pdf"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 border border-[#242424] text-xs font-mono text-[#888] hover:border-[#00C2FF] hover:text-[#00C2FF] transition-colors rounded"
          >
            CV.pdf ↗
          </a>
          <button
            className="md:hidden text-[#888] hover:text-[#F0F0F0]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-2 border-b border-[#1a1a1a] ${
                pathname === link.href ? 'text-[#00C2FF]' : 'text-[#888]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv/CV_Jair_Molina_2026.pdf"
            target="_blank"
            className="text-sm text-[#00C2FF] font-mono mt-2"
          >
            Download CV ↗
          </a>
        </div>
      )}
    </header>
  );
}
