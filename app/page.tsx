'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Tv } from 'lucide-react';
import { CLASS_A_PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import TechBadge from '@/components/TechBadge';
import FallbackImage from '@/components/FallbackImage';
import ProfileCarousel from '@/components/ProfileCarousel';
import { useLang } from '@/lib/lang';
import { SITE } from '@/lib/site';

const CV = SITE.cv;
const EMAIL = SITE.email;

const HW_STACK = ['ESP32', 'STM32', 'RP2350', 'C/C++', 'MicroPython', 'CAN bus · OBD-II', 'UART · SPI · I2C', 'MQTT · 4G', 'KiCad', 'DAQ'];
const SW_STACK = ['Python', 'LabVIEW', 'MATLAB/Simulink', 'ANSYS · FEA', 'SolidWorks', 'Docker', 'Flask'];

// Slugs + images for the embedded-systems journey section (text lives in translations)
const JOURNEY_PROJECTS = [
  { slug: 'tesis-banco-pruebas',      image: '/images/projects/tesis-banco-pruebas/hero.jpeg' },
  { slug: 'jaguar-mx-thermal-control', image: '/images/projects/jaguar-mx/hero.jpeg' },
  { slug: 'canbus-fleet-telematics',   image: '/images/projects/canbus-fleet/hero.jpeg' },
  { slug: 'cubesat-ground-station',    image: '/images/projects/ground-station/hero.jpeg' },
];

export default function HomePage() {
  const { t, lang } = useLang();
  const h = t.home;

  const MEDIA = h.media_list || [];

  const STATS = [
    { value: '6h → 20min', label: h.stat_daq_label, sub: h.stat_daq_sub },
    { value: '3×',         label: h.stat_pub_label, sub: 'IAC · Springer · Revista' },
    { value: 'MSc.',       label: h.stat_msc_label, sub: h.stat_msc_sub },
    { value: '4×',         label: h.stat_tv_label,  sub: 'TV Azteca · ADN40 · Canal Once' },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden pt-16">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[700px] md:h-[700px] rounded-full bg-accent/[0.025] blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

            {/* Left: text */}
            <div className="order-2 md:order-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    {h.hero_label}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-[1.1] mb-3">
                  Jair<br />Molina Arce
                </h1>
                <p className="font-mono text-xs md:text-sm text-text-secondary">{h.hero_role}</p>
              </div>

              <div className="bg-background/55 backdrop-blur-sm rounded-xl p-5 border border-white/[0.05] max-w-xl shadow-lg">
                <p className="text-lg md:text-xl lg:text-2xl text-text-primary mb-3 font-light leading-snug">
                  {h.hero_tagline}
                </p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                  {h.hero_description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {h.cta_projects} <ArrowRight size={15} />
                </Link>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  CV.pdf <ExternalLink size={14} />
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/smookymolina"
                    target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="p-2.5 border border-border rounded text-text-secondary hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/jair-molina-arce-4909622b2"
                    target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="p-2.5 border border-border rounded text-text-secondary hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-xs text-text-muted mr-1">{h.hw_stack_label}</span>
                  {HW_STACK.map((tag) => <TechBadge key={tag} label={tag} variant="accent" />)}
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-xs text-text-muted mr-1">{h.sw_stack_label}</span>
                  {SW_STACK.map((tag) => <TechBadge key={tag} label={tag} variant="muted" />)}
                </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border-subtle">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface-alt px-4 md:px-6 py-5 md:py-6">
                <p className="font-mono text-accent text-base md:text-lg font-medium mb-0.5">{s.value}</p>
                <p className="text-xs md:text-sm text-text-primary font-medium mb-0.5">{s.label}</p>
                <p className="text-xs text-text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SYSTEMS JOURNEY ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{h.journey_label}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">{h.journey_title}</h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">{h.journey_desc}</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {h.journey_items.map((item, i) => (
            <Link
              key={JOURNEY_PROJECTS[i].slug}
              href={`/projects/${JOURNEY_PROJECTS[i].slug}`}
              className="group grid md:grid-cols-[1fr_1.2fr] gap-0 md:gap-8 rounded-lg border border-border-subtle bg-surface hover:border-accent/40 transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <div className={`relative aspect-video md:aspect-auto md:min-h-[220px] bg-background ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <FallbackImage src={JOURNEY_PROJECTS[i].image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className={`p-5 md:p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="font-mono text-[11px] text-accent tracking-widest mb-2">{item.step}</p>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-accent">
                  {h.journey_cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
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
                {['IAF', 'Small Satellites', 'IAC 2024', 'Milan Italy', 'CubeSat'].map((tag) => (
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
              <FallbackImage src="/images/research/iac-milan.jpeg" alt={lang === 'en' ? 'IAC 2024 — Milan, Italy' : 'IAC 2024 — Milán, Italia'} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 font-mono text-xs text-text-muted">IAC 2024 · {lang === 'en' ? 'Milan, Italy' : 'Milán, Italia'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{h.profile_label}</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6 leading-snug">{h.profile_title}</h2>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">{h.profile_desc1}</p>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm md:text-base">{h.profile_desc2}</p>
              <p className="text-text-secondary mb-8 leading-relaxed text-sm md:text-base">{h.profile_desc3}</p>
            </div>

            <div className="pt-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-accent/80 transition-colors">
                  {h.full_profile} <ArrowRight size={14} />
                </Link>
                <a href={CV} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-text-primary transition-colors">
                  <ExternalLink size={13} /> {h.download_cv}
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['CVU CONACYT: 1340773', 'ORCID: 0009-0009-6732-8100', 'IPN · CDMX'].map((id) => (
                  <span key={id} className="font-mono text-xs px-2 py-1 bg-surface border border-border-subtle text-text-muted rounded">
                    {id}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill grid — from CV specialization table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
      </section>

      {/* ── NATIONAL MEDIA + DEMO REEL ── */}
      <section className="border-y border-border-subtle bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="mb-8 md:mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{h.media_label}</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">{h.media_title}</h2>
            <p className="text-text-secondary max-w-2xl leading-relaxed text-sm md:text-base">{h.media_desc}</p>
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start mb-10">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-black/50 shadow-2xl">
              <video
                src="/videos/capsula.mp4"
                controls
                preload="none"
                poster="/images/research/iac-milan.jpeg"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-widest uppercase">{h.video_label}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3 leading-snug">{h.video_title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">{h.video_desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {MEDIA.map((m) => (
              <div key={m.channel + m.program} className="bg-surface border border-border-subtle rounded-lg p-4 md:p-5 hover:border-accent/30 transition-colors">
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="rounded-lg border border-border-subtle bg-surface-alt p-8 md:p-14 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{h.cta_label}</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary mb-4">{h.cta_title}</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed text-sm md:text-base">{h.cta_desc}</p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-6">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-2.5 md:py-3 bg-accent text-background font-medium text-sm rounded hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {h.get_in_touch} <ArrowRight size={15} />
            </Link>
            <a href={CV} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-2.5 md:py-3 border border-border text-text-secondary text-sm rounded hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {h.download_cv}
            </a>
          </div>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors">
            <Mail size={14} /> {EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
