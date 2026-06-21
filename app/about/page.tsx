import { ExternalLink } from 'lucide-react';
import TechBadge from '@/components/TechBadge';
import SectionHeader from '@/components/SectionHeader';
import FallbackImage from '@/components/FallbackImage';

const SKILLS = [
  { category: 'Embedded Systems / IoT',  items: ['ESP32','STM32 (Cortex-M)','Arduino','C/C++ bare-metal','MQTT','UART · SPI · I2C','WiFi','OTA Updates'], variant: 'amber' as const },
  { category: 'Firmware Engineering',    items: ['C/C++ embedded','ARM Assembly (Thumb-2)','RTOS concepts','ISR / DMA','ADC multi-channel','PWM control','Watchdog timers'], variant: 'amber' as const },
  { category: 'Control Systems',         items: ['PID (classic & digital)','Auto-tuning (Z-N)','State space modeling','Linearization','LabVIEW','MATLAB/Simulink'], variant: 'accent' as const },
  { category: 'Instrumentation & DAQ',   items: ['Pressure transducers','Thermocouples (K-type)','Load cells + HX711','Signal conditioning','LabVIEW DAQ','Python (pandas/numpy)'], variant: 'accent' as const },
  { category: 'CAD / Simulation',        items: ['SolidWorks','ANSYS (FEA, Thermal)','FlatCAM (PCB CAM)','KiCad','Python simulation'], variant: 'muted' as const },
  { category: 'Software & Backend',      items: ['Python','Flask + SQLAlchemy','FastAPI','Docker','REST APIs','JWT auth','PostgreSQL · MySQL · Redis','Prometheus'], variant: 'muted' as const },
];

const TIMELINE = [
  { period: '2026 – Present', role: 'Instructor — Advanced Excel',                              org: 'Profuturo · Mexico City',                                          type: 'teaching' },
  { period: '2025 – Present', role: 'Lecturer — Thermal Engineering & Aerospace Systems Modeling', org: 'Universidad Internacional de Innovación de Aguascalientes (UIIA)',  type: 'teaching',  highlight: true },
  { period: '2024 – Present', role: 'MSc. in Advanced Technologies — Control & Instrumentation', org: 'Instituto Politécnico Nacional (IPN)',                              type: 'education', highlight: true },
  { period: '2024',           role: 'Co-Author & In-Person Speaker — IAC 2024',                 org: '75th International Astronautical Congress · Milan, Italy',           type: 'research',  highlight: true },
  { period: '2024',           role: 'Graduate Instructor — Disruptive Technologies (VR/AR)',     org: 'ENBA–IPN · Postgraduate',                                          type: 'teaching' },
  { period: '2022 – 2024',    role: 'Embedded Systems & Instrumentation — Propulsion Test Bench', org: 'Instituto Politécnico Nacional · Research',                       type: 'engineering', highlight: true },
  { period: '2023 – 2024',    role: 'Full-Stack IoT Platform & SmartCity Network',              org: 'Independent Project',                                              type: 'engineering' },
  { period: '2023',           role: 'Chief of Staff — ICASST 2023',                             org: 'International Congress · Mexico City',                              type: 'research' },
  { period: '2017 – 2023',    role: 'B.Eng. Mechanical Engineering',                            org: 'Instituto Politécnico Nacional (IPN) — Degree in process',          type: 'education' },
];

const TYPE_COLORS: Record<string, string> = {
  engineering: 'text-accent',
  research:    'text-accent-amber',
  teaching:    'text-accent-green',
  education:   'text-text-secondary',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Profile hero */}
        <div className="grid md:grid-cols-[320px_1fr] gap-16 mb-24">
          <div>
            <div className="aspect-square bg-surface rounded-lg border border-border-subtle relative overflow-hidden mb-4">
              <FallbackImage
                src="/images/profile/jair-molina.jpg"
                alt="Jair Molina Arce"
                fill sizes="320px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.12] pointer-events-none">
                <p className="font-mono text-xs text-text-muted">[ profile photo ]</p>
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {[
                { label: 'ORCID',      value: '0009-0009-6732-8100', url: 'https://orcid.org/0009-0009-6732-8100' },
                { label: 'CVU CONACYT',value: '1340773' },
                { label: 'GitHub',     value: 'smookymolina', url: 'https://github.com/smookymolina' },
                { label: 'Location',   value: 'Mexico City, Mexico' },
                { label: 'Languages',  value: 'Spanish (native) · English (technical)' },
                { label: 'Startup',    value: 'CO.DE Aerospace (Co-Founder)' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-2 border-b border-border-subtle last:border-0">
                  <span className="text-text-muted">{row.label}</span>
                  {row.url ? (
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      {row.value} ↗
                    </a>
                  ) : (
                    <span className="text-text-secondary">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// engineer profile</p>
            <h1 className="text-4xl font-semibold text-text-primary mb-2">Jair Molina Arce</h1>
            <p className="text-xl text-text-secondary mb-8">Embedded Systems &amp; Advanced Technology Engineer</p>

            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
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
                <div key={s.l} className="bg-surface-alt border border-border-subtle rounded p-4">
                  <p className="font-mono text-accent text-2xl font-medium">{s.v}</p>
                  <p className="text-xs text-text-muted whitespace-pre-line mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <SectionHeader label="// technical skills" title="Engineering Competencies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SKILLS.map((sg) => (
            <div key={sg.category} className="bg-surface-alt border border-border-subtle rounded-lg p-5">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{sg.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {sg.items.map((item) => (
                  <TechBadge key={item} label={item} variant={sg.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeader label="// experience" title="Timeline" />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 -translate-x-[3px] ${
                  item.highlight ? 'border-accent bg-accent' : 'border-border bg-background'
                }`} />
                <p className="font-mono text-xs text-text-muted mb-1">{item.period}</p>
                <p className={`font-medium ${item.highlight ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {item.role}
                </p>
                <p className={`text-sm ${TYPE_COLORS[item.type]}`}>{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
