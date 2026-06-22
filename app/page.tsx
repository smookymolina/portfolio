'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, Tv } from 'lucide-react';
import { CLASS_A_PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import TechBadge from '@/components/TechBadge';
import FallbackImage from '@/components/FallbackImage';
import ProfileCarousel from '@/components/ProfileCarousel';
import { useLang } from '@/lib/lang';

const CV = '/cv/CV_Jair_Molina_Arce_2026_v2.pdf';

const MEDIA = [
  { channel: 'TV Azteca',  program: 'Tecnología',      topic: 'VR Fire Extinguisher Training', year: '2024' },
  { channel: 'ADN40',      program: 'Mexico Profundo',  topic: 'AR Tourism — Tren Maya',        year: '2024' },
  { channel: 'Canal Once', program: 'Realidad Virtual', topic: 'VR Industrial Training',        year: '2024' },
  { channel: 'Canal Once', program: 'Mexico Profundo',  topic: 'Tourism Technology',            year: '2024' },
];

const SIGNAL_PATH =
  'M0,40 L30,40 L40,10 L50,70 L60,40 L90,40 L100,40 L110,15 L120,65 L130,40 L160,40 L170,25 L180,55 L190,40 L220,40 L230,8 L240,72 L250,40 L280,40 L290,30 L300,50 L310,40 L340,40';

export default function HomePage() {
  const { t } = useLang();
  const h = t.home;

  const STATS = [
    { value: 'MSc. AT',      label: h.stat_msc_label,    sub: h.stat_msc_sub },
    { value: '3×',           label: h.stat_pub_label,    sub: 'IAC · Springer · Revista' },
    { value: '4×',           label: h.stat_tv_label,     sub: 'TV Azteca · ADN40 · Canal Once' },
    { value: '6h → 20min',   label: h.stat_daq_label,    sub: h.stat_daq_sub },
  ];

  const TECH_STACK = [
    'ESP32','STM32','C/C++','MQTT','Python',
    'UART · SPI · I2C','LabVIEW','ANSYS','FEA',
    'Flask','Docker','MATLAB/Simulink',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden pt-16">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.025] blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-0">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

            {/* Left: text */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  {h.hero_label}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-[1.1] mb-4 md:mb-6">
                Jair<br />Molina Arce
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-3 md:mb-4 font-light">
                {h.hero_subtitle}
              </p>
              <p className="font-mono text-xs text-text-muted mb-4">{h.hero_title_cv}</p>

              <p className="text-sm md:text-base text-text-muted max-w-xl leading-relaxed mb-8 md:mb-10">
                {h.hero_description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
                <Link
                  href="/highlights"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {h.cta_highlights} <ArrowRight size={15} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {h.cta_projects}
                </Link>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm font-mono rounded hover:border-border-subtle hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  CV.pdf <ExternalLink size={14} />
                </a>
              </div>

              {/* Oscilloscope */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-text-muted">CH1: Chamber Pressure [psi]</span>
                  <span className="font-mono text-xs text-accent blink">▊</span>
                </div>
                <svg viewBox="0 0 340 80" className="w-full max-w-md h-14 opacity-50">
                  <path d={SIGNAL_PATH} fill="none" stroke="currentColor" className="text-accent signal-line" strokeWidth="1.5" strokeLinejoin="round" />
                  {[0,1,2,3,4].map((i) => (
                    <line key={i} x1={i*85} y1="0" x2={i*85} y2="80" stroke="currentColor" strokeWidth="1" className="text-border-subtle opacity-50" />
                  ))}
                  {[0,1,2].map((i) => (
                    <line key={i} x1="0" y1={i*40} x2="340" y2={i*40} stroke="currentColor" strokeWidth="1" className="text-border-subtle opacity-50" />
                  ))}
                </svg>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.map((tag) => (
                  <TechBadge key={tag} label={tag} variant="muted" />
                ))}
              </div>
            </div>

            {/* Right: profile carousel */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <ProfileCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border-subtle bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border-subtle">
            {STATS.map((s) => (
              <div key={s.label} className="px-4 md:px-6 py-5 md:py-6">
                <p className="font-mono text-accent text-base md:text-lg font-medium mb-0.5">{s.value}</p>
                <p className="text-xs md:text-sm text-text-primary font-medium mb-0.5">{s.label}</p>
                <p className="text-xs text-text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO REEL VIDEO ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <div className="relative border border-border-subtle bg-surface-alt/45 backdrop-blur-md rounded-xl p-6 md:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  {h.video_label}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-4 leading-snug">
                {h.video_title}
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-6 font-light">
                {h.video_desc}
              </p>
              
              <div className="inline-flex items-center gap-2 text-xs font-mono text-text-muted bg-surface border border-border-subtle rounded-md px-3 py-1.5 self-start">
                <span className="text-accent">▶</span> Play / Pause enabled
              </div>
            </div>
            
            {/* Right: Video player container */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-black/50 shadow-2xl group transition-all duration-300 hover:border-accent/45">
              <video
                src="/videos/capsula.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{h.featured_label}</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">{h.featured_title}</h2>
            <p className="text-text-secondary mt-2 max-w-xl text-sm md:text-base">{h.featured_subtitle}</p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors font-mono">
            {h.view_all} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {CLASS_A_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 md:hidden flex justify-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors font-mono">
            {h.view_all} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── IAC 2024 BANNER ── */}
      <section className="border-y border-border-subtle bg-surface-alt overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{h.pub_label}</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-4 leading-snug">{h.pub_title}</h2>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base">{h.pub_desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['IAF','Small Satellites','IAC 2024','Milan Italy','CubeSat'].map((tag) => (
                  <TechBadge key={tag} label={tag} variant="accent" />
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
              <FallbackImage src="/images/research/iac-milan.jpeg" alt="IAC 2024 — Milan, Italy" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 font-mono text-xs text-text-muted">IAC 2024 · Milan, Italy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NATIONAL MEDIA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-8 md:mb-10">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{h.media_label}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">{h.media_title}</h2>
          <p className="text-text-secondary max-w-2xl leading-relaxed text-sm md:text-base">{h.media_desc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {MEDIA.map((m) => (
            <div key={m.channel + m.program} className="bg-surface-alt border border-border-subtle rounded-lg p-4 md:p-5 hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Tv size={13} className="text-accent shrink-0" />
                <span className="font-mono text-xs text-accent font-medium truncate">{m.channel}</span>
              </div>
              <p className="text-xs md:text-sm font-medium text-text-primary mb-1">{m.program}</p>
              <p className="text-xs text-text-muted leading-relaxed">{m.topic}</p>
              <p className="font-mono text-xs text-text-muted mt-2 pt-2 border-t border-border-subtle">{m.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROFILE (CV-BASED) ── */}
      <section className="border-t border-border-subtle bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{h.profile_label}</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6 leading-snug">{h.profile_title}</h2>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">{h.profile_desc1}</p>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">{h.profile_desc2}</p>
              <p className="text-text-secondary mb-8 leading-relaxed text-sm md:text-base">{h.profile_desc3}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 transition-colors">
                  {h.full_profile} <ArrowRight size={14} />
                </Link>
                <a href={CV} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-text-primary transition-colors">
                  <ExternalLink size={13} /> {h.download_cv}
                </a>
              </div>
              {/* Key identifiers */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['CVU CONACYT: 1340773', 'ORCID: 0009-0009-6732-8100', 'IPN · CDMX'].map((id) => (
                  <span key={id} className="font-mono text-xs px-2 py-1 bg-surface border border-border-subtle text-text-muted rounded">
                    {id}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill grid — from CV specialization table */}
            <div className="grid grid-cols-2 gap-3">
              {h.skill_labels.map((label, i) => (
                <div
                  key={label}
                  className={`p-3 md:p-4 rounded border ${
                    i === 0 || i === 4
                      ? 'bg-accent/5 border-accent/20'
                      : 'bg-surface border-border-subtle'
                  }`}
                >
                  <p className="text-xs md:text-sm font-medium text-text-primary mb-1">{label}</p>
                  <p className="font-mono text-xs text-text-muted leading-relaxed">{h.skill_details[i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="rounded-lg border border-border-subtle bg-surface-alt p-8 md:p-14 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{h.cta_label}</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-4">{h.cta_title}</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed text-sm md:text-base">{h.cta_desc}</p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-2.5 md:py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {h.get_in_touch} <ArrowRight size={15} />
            </Link>
            <Link href="/highlights"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-2.5 md:py-3 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {h.see_highlights}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
