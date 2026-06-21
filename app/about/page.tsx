import { ExternalLink } from 'lucide-react';
import TechBadge from '@/components/TechBadge';
import SectionHeader from '@/components/SectionHeader';
import { TEACHING } from '@/lib/research';

const SKILLS = [
  {
    category: 'Embedded Systems / IoT',
    items: ['ESP32', 'STM32 (Cortex-M)', 'Arduino', 'C/C++ bare-metal', 'MQTT', 'UART · SPI · I2C', 'WiFi', 'OTA Updates'],
    variant: 'amber' as const,
  },
  {
    category: 'Firmware Engineering',
    items: ['C/C++ embedded', 'ARM Assembly (Thumb-2)', 'RTOS concepts', 'ISR / DMA', 'ADC multi-channel', 'PWM control', 'Watchdog timers'],
    variant: 'amber' as const,
  },
  {
    category: 'Control Systems',
    items: ['PID (classic & digital)', 'Auto-tuning (Z-N)', 'State space modeling', 'Linearization', 'LabVIEW', 'MATLAB/Simulink'],
    variant: 'accent' as const,
  },
  {
    category: 'Instrumentation & DAQ',
    items: ['Pressure transducers', 'Thermocouples (K-type)', 'Load cells + HX711', 'Signal conditioning', 'LabVIEW DAQ', 'Python (pandas/numpy)'],
    variant: 'accent' as const,
  },
  {
    category: 'CAD / Simulation',
    items: ['SolidWorks', 'ANSYS (FEA, Thermal)', 'FlatCAM (PCB CAM)', 'KiCad', 'Python simulation'],
    variant: 'muted' as const,
  },
  {
    category: 'Software & Backend',
    items: ['Python', 'Flask + SQLAlchemy', 'FastAPI', 'Docker', 'REST APIs', 'JWT auth', 'PostgreSQL · MySQL · Redis', 'Prometheus'],
    variant: 'muted' as const,
  },
];

const TIMELINE = [
  {
    period: '2026 – Present',
    role: 'Instructor — Advanced Excel',
    org: 'Profuturo · Mexico City',
    type: 'teaching',
  },
  {
    period: '2025 – Present',
    role: 'Lecturer — Thermal Engineering & Aerospace Systems Modeling',
    org: 'Universidad Internacional de Innovación de Aguascalientes (UIIA)',
    type: 'teaching',
    highlight: true,
  },
  {
    period: '2024 – Present',
    role: 'MSc. in Advanced Technologies — Control & Instrumentation',
    org: 'Instituto Politécnico Nacional (IPN)',
    type: 'education',
    highlight: true,
  },
  {
    period: '2024',
    role: 'Co-Author & In-Person Speaker — IAC 2024',
    org: '75th International Astronautical Congress · Milan, Italy',
    type: 'research',
    highlight: true,
  },
  {
    period: '2024',
    role: 'Graduate Instructor — Disruptive Technologies (VR/AR)',
    org: 'ENBA–IPN · Postgraduate',
    type: 'teaching',
  },
  {
    period: '2022 – 2024',
    role: 'Embedded Systems & Instrumentation — Propulsion Test Bench',
    org: 'Instituto Politécnico Nacional · Research',
    type: 'engineering',
    highlight: true,
  },
  {
    period: '2023 – 2024',
    role: 'Full-Stack IoT Platform & SmartCity Network',
    org: 'Independent Project',
    type: 'engineering',
  },
  {
    period: '2023',
    role: 'Chief of Staff — ICASST 2023',
    org: 'International Congress · Mexico City',
    type: 'research',
  },
  {
    period: '2017 – 2023',
    role: 'B.Eng. Mechanical Engineering',
    org: 'Instituto Politécnico Nacional (IPN) — Degree in process',
    type: 'education',
  },
];

const TYPE_COLORS: Record<string, string> = {
  engineering: 'text-[#00C2FF]',
  research: 'text-[#FFB300]',
  teaching: 'text-[#00FF88]',
  education: 'text-[#888]',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Profile hero */}
        <div className="grid md:grid-cols-[320px_1fr] gap-16 mb-24">
          {/* Photo placeholder */}
          <div>
            <div className="aspect-square bg-[#111] rounded-lg border border-[#1a1a1a] relative overflow-hidden mb-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
                <p className="font-mono text-xs text-[#333]">📁 /images/profile/jair-molina.jpg</p>
              </div>
            </div>

            {/* Identifiers */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-[#555]">ORCID</span>
                <a
                  href="https://orcid.org/0009-0009-6732-8100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C2FF] hover:text-[#00C2FF]/80"
                >
                  0009-0009-6732-8100 ↗
                </a>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-[#555]">CVU CONACYT</span>
                <span className="text-[#888]">1340773</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-[#555]">GitHub</span>
                <a
                  href="https://github.com/smookymolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C2FF] hover:text-[#00C2FF]/80"
                >
                  smookymolina ↗
                </a>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-[#555]">Location</span>
                <span className="text-[#888]">Mexico City, Mexico</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-[#555]">Languages</span>
                <span className="text-[#888]">Spanish (native) · English (technical)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#555]">Startup</span>
                <span className="text-[#888]">CO.DE Aerospace (Co-Founder)</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-mono text-xs text-[#00C2FF] tracking-widest uppercase mb-3">
              // engineer profile
            </p>
            <h1 className="text-4xl font-semibold text-[#F0F0F0] mb-2">Jair Molina Arce</h1>
            <p className="text-xl text-[#888] mb-8">
              Embedded Systems &amp; Advanced Technology Engineer
            </p>

            <div className="space-y-4 text-[#888] leading-relaxed mb-8">
              <p>
                Mechanical Engineer from IPN Mexico, pursuing a Master's in Advanced Technologies
                with research focus on dynamic systems control and instrumentation. My work bridges
                hardware, firmware, and software — building real physical systems that push the
                boundaries of what's possible with constrained resources.
              </p>
              <p>
                I designed and built a complete DAQ system for solid-fuel rocket motor test benches
                — hardware, signal conditioning, firmware, and analysis pipeline included. I
                modified a 3D printer into a PCB milling machine. I implemented adaptive PID
                controllers that reduced settling time by 35%. I built end-to-end IoT platforms
                that go from sensor hardware to production-grade web dashboards.
              </p>
              <p>
                In 2024, I co-authored and personally presented research at the 75th International
                Astronautical Congress (IAC) in Milan — the most important astronautical event in
                the world. In 2026, I co-authored a Springer book chapter on ML-driven
                cyberdefense for satellite communications.
              </p>
              <p>
                I teach Thermal Engineering and Aerospace Systems Modeling at university level.
                I co-founded CO.DE Aerospace with my MSc. research partner Alan Rosas Palacios —
                a technology company at the intersection of software, courses, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { v: '5+', l: 'Years building\nhardware systems' },
                { v: '3×', l: 'Published /\nPeer-reviewed' },
                { v: '2×', l: 'University\ncourses taught' },
              ].map((s) => (
                <div key={s.l} className="bg-[#0D0D0D] border border-[#1a1a1a] rounded p-4">
                  <p className="font-mono text-[#00C2FF] text-2xl font-medium">{s.v}</p>
                  <p className="text-xs text-[#555] whitespace-pre-line mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <SectionHeader label="// technical skills" title="Engineering Competencies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg p-5">
              <h3 className="font-mono text-xs text-[#555] uppercase tracking-widest mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((item) => (
                  <TechBadge key={item} label={item} variant={skillGroup.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeader label="// experience" title="Timeline" />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1a1a1a]" />
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div
                  className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 -translate-x-[3px] ${
                    item.highlight
                      ? 'border-[#00C2FF] bg-[#00C2FF]'
                      : 'border-[#333] bg-[#0A0A0A]'
                  }`}
                />
                <p className="font-mono text-xs text-[#555] mb-1">{item.period}</p>
                <p className={`font-medium ${item.highlight ? 'text-[#F0F0F0]' : 'text-[#888]'}`}>
                  {item.role}
                </p>
                <p className="text-sm text-[#555]">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
