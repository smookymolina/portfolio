import Link from 'next/link';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { CLASS_A_PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import TechBadge from '@/components/TechBadge';
import FallbackImage from '@/components/FallbackImage';

const STATS = [
  { value: 'IAC 2024',    label: "Int'l Astronautical Congress", sub: 'Milan, Italy — In person' },
  { value: '2×',          label: 'Published Papers',             sub: 'Conference + Book Chapter' },
  { value: 'ESP32 · STM32',label: 'Primary MCUs',               sub: 'C/C++ Firmware' },
  { value: '6h → 20min',  label: 'DAQ Analysis Pipeline',       sub: '94% time reduction' },
];

const TECH_STACK = [
  'ESP32','STM32','C/C++','MQTT','Python',
  'UART · SPI · I2C','LabVIEW','ANSYS','FEA',
  'Flask','Docker','MATLAB/Simulink',
];

const SIGNAL_PATH =
  'M0,40 L30,40 L40,10 L50,70 L60,40 L90,40 L100,40 L110,15 L120,65 L130,40 L160,40 L170,25 L180,55 L190,40 L220,40 L230,8 L240,72 L250,40 L280,40 L290,30 L300,50 L310,40 L340,40';

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 animate-in">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Embedded Systems · Aerospace · IoT · Firmware
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-[1.1] mb-6 animate-in delay-100">
              Jair<br />Molina Arce
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-4 font-light animate-in delay-200">
              Embedded Systems &amp; Advanced Technology Engineer
            </p>

            <p className="text-base text-text-muted max-w-2xl leading-relaxed mb-10 animate-in delay-300">
              I build systems at the intersection of hardware and software — from solid-fuel rocket
              test benches with real-time DAQ to distributed IoT networks for urban monitoring.
              Researcher at IPN · Speaker at IAC 2024, Milan · Co-Founder at CO.DE Aerospace.
            </p>

            <div className="flex flex-wrap gap-4 mb-16 animate-in delay-400">
              <Link
                href="/highlights"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors"
              >
                Engineering Highlights <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors"
              >
                All Projects
              </Link>
              <a
                href={CV}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary text-sm font-mono rounded hover:border-border-subtle hover:text-text-primary transition-colors"
              >
                CV.pdf <ExternalLink size={14} />
              </a>
            </div>

            {/* Oscilloscope signal */}
            <div className="mb-16 animate-in delay-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-text-muted">CH1: Chamber Pressure [psi]</span>
                <span className="font-mono text-xs text-accent blink">▊</span>
              </div>
              <svg viewBox="0 0 340 80" className="w-full max-w-xl h-16 opacity-60" xmlns="http://www.w3.org/2000/svg">
                <path d={SIGNAL_PATH} fill="none" stroke="currentColor" className="text-accent signal-line" strokeWidth="1.5" strokeLinejoin="round" />
                {[0,1,2,3,4].map((i) => (
                  <line key={i} x1={i*85} y1="0" x2={i*85} y2="80" stroke="currentColor" strokeWidth="1" className="text-border-subtle opacity-50" />
                ))}
                {[0,1,2].map((i) => (
                  <line key={i} x1="0" y1={i*40} x2="340" y2={i*40} stroke="currentColor" strokeWidth="1" className="text-border-subtle opacity-50" />
                ))}
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 animate-in delay-500">
              {TECH_STACK.map((t) => (
                <TechBadge key={t} label={t} variant="muted" />
              ))}
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
          <a href="https://github.com/smookymolina" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/jair-molina-arce-4909622b2" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border-subtle bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border-subtle">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-6">
                <p className="font-mono text-accent text-lg font-medium mb-0.5">{s.value}</p>
                <p className="text-sm text-text-primary font-medium mb-0.5">{s.label}</p>
                <p className="text-xs text-text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
              02 — selected work
            </p>
            <h2 className="text-3xl font-semibold text-text-primary">Class A Projects</h2>
            <p className="text-text-secondary mt-2">
              Exceptional hardware + firmware systems that define this engineering profile.
            </p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors font-mono">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLASS_A_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors font-mono">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* IAC 2024 BANNER */}
      <section className="border-y border-border-subtle bg-surface-alt overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                // international publication
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4 leading-snug">
                75th International Astronautical Congress — IAC 2024
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Co-author and in-person speaker at the most important astronautical congress in the
                world. Presented at the 31st IAA Symposium on Small Satellite Missions in Milan,
                Italy, October 2024.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['IAF','Small Satellites','IAC 2024','Milan Italy','CubeSat'].map((t) => (
                  <TechBadge key={t} label={t} variant="accent" />
                ))}
              </div>
              <a
                href="https://doi.org/10.52202/078365-0120"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 transition-colors"
              >
                <ExternalLink size={14} /> DOI: 10.52202/078365-0120
              </a>
            </div>
            <div className="relative aspect-video bg-surface rounded-lg border border-border-subtle overflow-hidden">
              <FallbackImage
                src="/images/research/iac-milan.jpg"
                alt="IAC 2024 — Milan, Italy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.12] pointer-events-none">
                <p className="font-mono text-xs text-text-muted">IAC 2024 — Milan, Italy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ABOUT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              03 — profile
            </p>
            <h2 className="text-3xl font-semibold text-text-primary mb-6">
              π-shaped engineer at the intersection of hardware &amp; software
            </h2>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Mechanical Engineer from IPN Mexico, pursuing MSc. in Advanced Technologies with
              focus on dynamic systems control and instrumentation. My work spans embedded firmware,
              sensor integration, control theory, FEA simulation, and aerospace propulsion.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I built a solid-fuel rocket motor DAQ system, converted a 3D printer into a PCB
              milling machine, and co-authored research on ML-driven satellite cyberdefense —
              all while teaching Aerospace Systems Modeling at university level.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 transition-colors">
              Full profile <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Embedded Firmware',    detail: 'C/C++ · ESP32 · STM32',         accent: true  },
              { label: 'DAQ & Instrumentation',detail: 'Pressure · Temp · Load Cell',    accent: false },
              { label: 'IoT & Telemetry',      detail: 'MQTT · WiFi · REST',             accent: false },
              { label: 'Control Systems',      detail: 'PID · Auto-Tune · State Space',  accent: false },
              { label: 'Aerospace FEA',        detail: 'ANSYS · SolidWorks',             accent: false },
              { label: 'Research',             detail: 'IAC 2024 · IPN · Springer',      accent: true  },
            ].map((item) => (
              <div
                key={item.label}
                className={`p-4 rounded border ${
                  item.accent
                    ? 'bg-accent/5 border-accent/20'
                    : 'bg-surface border-border-subtle'
                }`}
              >
                <p className="text-sm font-medium text-text-primary mb-1">{item.label}</p>
                <p className="font-mono text-xs text-text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
        <div className="rounded-lg border border-border-subtle bg-surface-alt p-12 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            // available for hire
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
            Looking for an Embedded Systems Engineer?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            Open to positions in Embedded Systems, Firmware Engineering, R&amp;D, Robotics,
            and Aerospace. Based in Mexico City — open to remote and international opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/highlights"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors"
            >
              See Highlights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
