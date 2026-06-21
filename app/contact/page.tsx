import { Mail, Github, Linkedin, ExternalLink, MapPin, Download } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechBadge from '@/components/TechBadge';

const POSITIONS = [
  'Embedded Systems Engineer',
  'Firmware Engineer',
  'Instrumentation / DAQ Engineer',
  'Robotics / Mechatronics Engineer',
  'R&D Engineer — Aerospace / Defense',
  'Electronics Design Engineer',
  'IoT Systems Engineer',
  'AI / Automation Engineer',
  'Technical Co-Founder',
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="// contact"
          title="Let's Work Together"
          subtitle="Open to full-time positions, R&D roles, and technical collaborations. Primarily based in Mexico City — open to remote and international opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact channels */}
          <div>
            <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-6">
              // contact channels
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:ingjairmolina@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg hover:border-[#00C2FF]/40 hover:bg-[#00C2FF]/3 transition-all group"
              >
                <div className="w-10 h-10 rounded border border-[#242424] bg-[#111] flex items-center justify-center group-hover:border-[#00C2FF]/40">
                  <Mail size={16} className="text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0]">Email</p>
                  <p className="text-xs text-[#888]">ingjairmolina@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/jair-molina-arce-4909622b2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg hover:border-[#00C2FF]/40 hover:bg-[#00C2FF]/3 transition-all group"
              >
                <div className="w-10 h-10 rounded border border-[#242424] bg-[#111] flex items-center justify-center group-hover:border-[#00C2FF]/40">
                  <Linkedin size={16} className="text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0]">LinkedIn</p>
                  <p className="text-xs text-[#888]">jair-molina-arce-4909622b2</p>
                </div>
              </a>

              <a
                href="https://github.com/smookymolina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg hover:border-[#00C2FF]/40 hover:bg-[#00C2FF]/3 transition-all group"
              >
                <div className="w-10 h-10 rounded border border-[#242424] bg-[#111] flex items-center justify-center group-hover:border-[#00C2FF]/40">
                  <Github size={16} className="text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0]">GitHub</p>
                  <p className="text-xs text-[#888]">github.com/smookymolina</p>
                </div>
              </a>

              <a
                href="https://orcid.org/0009-0009-6732-8100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg hover:border-[#00C2FF]/40 hover:bg-[#00C2FF]/3 transition-all group"
              >
                <div className="w-10 h-10 rounded border border-[#242424] bg-[#111] flex items-center justify-center group-hover:border-[#00C2FF]/40">
                  <ExternalLink size={16} className="text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0F0]">ORCID</p>
                  <p className="text-xs text-[#888]">0009-0009-6732-8100</p>
                </div>
              </a>
            </div>
          </div>

          {/* Availability & positions */}
          <div>
            <h2 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-6">
              // availability
            </h2>

            <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="font-mono text-xs text-[#00FF88]">Available</span>
              </div>
              <p className="text-sm text-[#888] mb-3">
                Actively seeking engineering positions and R&D roles. Available for immediate start.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#555]">
                <MapPin size={11} />
                <span>Mexico City, Mexico · Remote OK · Open to relocation</span>
              </div>
            </div>

            <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-3">
              // target positions
            </h3>
            <div className="flex flex-wrap gap-2">
              {POSITIONS.map((pos) => (
                <TechBadge key={pos} label={pos} variant="muted" />
              ))}
            </div>
          </div>
        </div>

        {/* CV download */}
        <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <p className="font-mono text-xs text-[#00C2FF] tracking-widest uppercase mb-4">
            // resume
          </p>
          <h2 className="text-2xl font-semibold text-[#F0F0F0] mb-3">Download Full Resume</h2>
          <p className="text-[#888] mb-6 text-sm">
            Complete CV with detailed technical competencies, project descriptions, publications,
            and academic history.
          </p>
          <a
            href="/cv/CV_Jair_Molina_2026.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#00C2FF] text-[#0A0A0A] font-medium text-sm rounded hover:bg-[#00C2FF]/90 transition-colors"
          >
            <Download size={16} />
            CV_Jair_Molina_2026.pdf
          </a>
          <p className="font-mono text-xs text-[#555] mt-4">Updated June 2026</p>
        </div>
      </div>
    </div>
  );
}
