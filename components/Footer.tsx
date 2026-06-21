import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Identity */}
          <div>
            <div className="font-mono text-xs text-[#555] mb-1">// engineer</div>
            <p className="font-semibold text-[#F0F0F0] mb-1">Jair Molina Arce</p>
            <p className="text-sm text-[#888]">
              Embedded Systems & Advanced Technology Engineer
            </p>
            <p className="text-xs text-[#555] font-mono mt-3">
              IPN · Mexico City · ORCID: 0009-0009-6732-8100
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-xs text-[#555] mb-4">// navigate</div>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/highlights', label: 'Highlights' },
                { href: '/projects', label: 'Projects' },
                { href: '/research', label: 'Research' },
                { href: '/contact', label: 'Contact' },
                { href: '/cv/CV_Jair_Molina_2026.pdf', label: 'Resume PDF' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#555] hover:text-[#00C2FF] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-xs text-[#555] mb-4">// connect</div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ingjairmolina@gmail.com"
                className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00C2FF] transition-colors"
              >
                <Mail size={14} />
                ingjairmolina@gmail.com
              </a>
              <a
                href="https://github.com/smookymolina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00C2FF] transition-colors"
              >
                <Github size={14} />
                github.com/smookymolina
              </a>
              <a
                href="https://linkedin.com/in/jair-molina-arce-4909622b2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00C2FF] transition-colors"
              >
                <Linkedin size={14} />
                linkedin.com/in/jair-molina-arce
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555] font-mono">
            © {new Date().getFullYear()} Jair Molina Arce · Built with Next.js 14 + Tailwind
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#555] font-mono">CO.DE Aerospace Co-Founder</span>
            <span className="text-[#242424]">·</span>
            <span className="text-xs text-[#555] font-mono">CVU CONACYT: 1340773</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
