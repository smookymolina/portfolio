'use client';

import { ArrowRight, ExternalLink, Cpu, Wifi, Zap, Wrench, Globe, Shield, Radio, Tv, Film } from 'lucide-react';
import Link from 'next/link';
import TechBadge from '@/components/TechBadge';
import SectionHeader from '@/components/SectionHeader';
import FallbackImage from '@/components/FallbackImage';
import { useLang } from '@/lib/lang';

const HIGHLIGHTS = [
  {
    id: 'h01', icon: Cpu, rank: '01', category: 'Hardware + Firmware + Aerospace',
    title: 'Solid-Fuel Rocket Motor Test Bench — DAQ System',
    description: 'Designed and built a complete data acquisition system for rocket motor static fire tests. Custom signal conditioning PCB, multi-channel sensor integration (pressure, temperature, thrust), and embedded firmware in C/C++ on ESP32 and STM32. Validated with FEA in ANSYS. Published in peer-reviewed journal.',
    hardware: ['ESP32','STM32','HX711','MAX6675','Custom PCB','Pressure transducers'],
    firmware: ['C/C++ bare-metal','UART · SPI · I2C','ADC multi-channel','ISR sampling'],
    metrics: [{ v:'1 kHz',l:'Sampling rate' },{ v:'0–150 psi',l:'Pressure range' },{ v:'3 ch',l:'Simultaneous sensors' }],
    badge: 'Published Research', badgeColor: 'accent' as const,
    link: '/projects/rocket-propulsion-daq', coverImage: '/images/projects/banco-pruebas/hero.jpeg',
  },
  {
    id: 'h02', icon: Wifi, rank: '02', category: 'Embedded + IoT + Real-Time',
    title: 'Wireless Telemetry System — MQTT, <50ms Latency',
    description: 'Real-time wireless telemetry for rocket motor tests using ESP32 over MQTT. Transmits chamber pressure, nozzle temperature, and thrust data during static fire with end-to-end latency under 50 ms. Live web dashboard with automatic safety alerts when values exceed thresholds.',
    hardware: ['ESP32 (WiFi)','Sensor array'],
    firmware: ['C++ (ESP-IDF)','MQTT QoS 1','ISR-driven sampling','OTA updates','Watchdog timer'],
    metrics: [{ v:'<50 ms',l:'End-to-end latency' },{ v:'100 Hz',l:'Data rate' },{ v:'>50 m',l:'Outdoor range' }],
    badge: 'Real-Time Firmware', badgeColor: 'accent' as const,
    link: '/projects/mqtt-telemetry-propulsion', coverImage: '/images/projects/telemetria-mqtt/hero.jpeg',
  },
  {
    id: 'h03', icon: Zap, rank: '03', category: 'Firmware + Control Systems',
    title: 'Adaptive PID — STM32H753ZI (Cortex-M7), Furuta Pendulum (−35% Settling Time)',
    description: 'Self-tuning PID controller in embedded C++ on STM32H753ZI (Cortex-M7). Applied to a Furuta rotary inverted pendulum — a classic nonlinear underactuated control benchmark. Extended Ziegler-Nichols auto-tuning identifies plant dynamics online and updates gains without shutdown. Fixed-point arithmetic in the ISR ensures deterministic real-time behavior.',
    hardware: ['STM32H753ZI (Cortex-M7)','Furuta pendulum (plant)','ADC encoder feedback','PWM motor output'],
    firmware: ['C++ (STM32 HAL)','Extended Ziegler-Nichols','Fixed-point ISR','UART logging'],
    metrics: [{ v:'−35%',l:'Settling time reduction' },{ v:'1 kHz',l:'Control loop rate' },{ v:'~18%',l:'Overshoot reduction' }],
    badge: 'Quantified Impact', badgeColor: 'green' as const,
    link: '/projects/adaptive-pid-stm32', coverImage: '/images/projects/pid-stm32/hero.jpeg',
  },
  {
    id: 'h04', icon: Wrench, rank: '04', category: 'Hardware Hacking + PCB Fabrication',
    title: '3D Printer → CNC Milling Setup — KiCad PCB Design & Fabrication (~2019)',
    description: 'Converted a consumer FDM 3D printer into a CNC milling setup: removed extruder, mounted mototool spindle, replaced controller board with a GRBL-compatible CNC shield. Calibration tests on wood, then designed a PCB in KiCad for a mini switching power supply and milled it on the converted machine. The circuit worked — later integrated into a signal switcher at UPIITA-IPN.',
    hardware: ['FDM 3D Printer (modified)','High-speed rotary tool (mototool)','GRBL-compatible CNC shield','Single-sided copper-clad FR4'],
    firmware: ['GRBL-compatible CNC shield (configured for milling)','G-code via FlatCAM (from KiCad Gerbers)'],
    metrics: [{ v:'KiCad→mill→circuit',l:'Full fabrication chain' },{ v:'UPIITA-IPN',l:'Applied: signal switcher' },{ v:'~2019',l:'Personal lab project' }],
    badge: 'Builder / PCB Fabrication', badgeColor: 'amber' as const,
    link: '/projects/3d-printer-pcb-mill', coverImage: '/images/projects/pcb-mill/hero.jpeg',
  },
  {
    id: 'h05', icon: Globe, rank: '05', category: 'International Research — Aerospace',
    title: 'IAC 2024 — In-Person Speaker, Milan Italy',
    description: 'Co-author and in-person presenter at the 75th International Astronautical Congress (IAC) in Milan, Italy — the most important astronautical congress in the world. Presented at the 31st IAA Symposium on Small Satellite Missions in October 2024.',
    hardware: [], firmware: [],
    metrics: [{ v:'IAC 2024',l:'Milan, Oct 2024' },{ v:'75th',l:"World's largest IAC" },{ v:'In person',l:'Presented live' }],
    badge: 'International Speaker', badgeColor: 'accent' as const,
    link: '/research', coverImage: '/images/research/iac-milan.jpeg', doi: '10.52202/078365-0120',
  },
  {
    id: 'h06', icon: Shield, rank: '06', category: 'AI + Defense + Satellite Communications',
    title: 'ML-Driven Cyberdefense for Satellite Links (Springer, 2026)',
    description: 'Co-author of a Springer book chapter on machine learning-based anti-jamming strategies for satellite communications in Ku and Ka frequency bands. Adaptive ML framework for real-time detection and countering of jamming attacks on military and commercial satellite links.',
    hardware: [], firmware: [],
    metrics: [{ v:'Springer',l:'Publisher 2026' },{ v:'Ku/Ka Band',l:'Satellite freq.' },{ v:'Defense Tech',l:'Application' }],
    badge: 'Defense · ML · Satellites', badgeColor: 'amber' as const,
    link: '/research', doi: '10.1007/978-3-032-09735-4_15',
  },
  {
    id: 'h07', icon: Radio, rank: '07', category: 'IoT + Full-Stack + Smart Cities',
    title: 'SmartCity IoT Sensor Network — End-to-End',
    description: 'Distributed IoT network with multiple ESP32 nodes (gas + environmental sensors) publishing via MQTT to a Flask/PostgreSQL backend. Real-time Chart.js dashboard with push alerts and automated weekly PDF environmental reports.',
    hardware: ['ESP32 nodes','MQ-series gas sensors','BME280 (temp/humidity/pressure)'],
    firmware: ['C++ MQTT','Deep sleep optimization','OTA updates'],
    metrics: [{ v:'End-to-end',l:'HW → FW → Backend → UI' },{ v:'Auto PDF',l:'Weekly reports' },{ v:'Multi-node',l:'Scalable' }],
    badge: 'IoT System', badgeColor: 'accent' as const,
    link: '/projects/smartcity-iot-network', coverImage: '/images/projects/smartcity-iot/hero.jpeg',
  },
  {
    id: 'h08', icon: Tv, rank: '08', category: 'VR · Industrial Training · National TV',
    title: 'VR Fire Extinguisher Training — Demonstrated on TV Azteca',
    description: 'Immersive VR application for industrial fire extinguisher safety training with haptic feedback and motion tracking. Selected for a live demonstration on TV Azteca México in 2024 — broadcast to a national audience.',
    hardware: ['VR headset','Motion tracking hardware','Haptic feedback devices'],
    firmware: [],
    metrics: [{ v:'TV Azteca',l:'National broadcast 2024' },{ v:'Live demo',l:'National audience' },{ v:'Haptic',l:'Full HW integration' }],
    badge: 'TV Azteca · VR · Training', badgeColor: 'muted' as const,
    link: '/projects/vr-industrial-training', coverImage: '/images/projects/vr-training/hero.jpeg',
  },
  {
    id: 'h09', icon: Film, rank: '09', category: 'AR Tourism · National Media · Culture',
    title: 'Mexico Profundo — Tren Maya AR App · ADN40 + Canal Once',
    description: 'Augmented reality tourism app for Mexico\'s Tren Maya railway corridor featuring AR cultural overlays and indigenous heritage content. Featured in four national TV segments: ADN40 "Mexico Profundo", Canal Once "Realidad Virtual", Canal Once "Mexico Profundo", and TV Azteca — reaching millions of viewers.',
    hardware: [],
    firmware: [],
    metrics: [{ v:'4 segments',l:'National TV broadcasts' },{ v:'ADN40 + Once',l:'Major channels' },{ v:'AR + GPS',l:'Technology stack' }],
    badge: 'ADN40 · Canal Once · AR', badgeColor: 'amber' as const,
    link: '/projects/tren-maya-tourism-app', coverImage: '/images/projects/tren-maya/hero.jpeg',
  },
];

export default function HighlightsPage() {
  const { t } = useLang();
  const h = t.highlights;

  const translatedHighlights = HIGHLIGHTS.map((hl) => {
    const tItem = h.items[hl.id as keyof typeof h.items];
    if (!tItem) return hl;
    return {
      ...hl,
      category: tItem.category,
      title: tItem.title,
      description: tItem.description,
      badge: tItem.badge,
      hardware: tItem.hardware.length > 0 ? tItem.hardware : hl.hardware,
      firmware: tItem.firmware.length > 0 ? tItem.firmware : hl.firmware,
      metrics: hl.metrics.map((m, idx) => ({
        v: m.v,
        l: tItem.metric_labels[idx] || m.l,
      })),
    };
  });

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader label={h.label} title={h.title} subtitle={h.subtitle} />

        <div className="space-y-px border border-border-subtle rounded-lg overflow-hidden">
          {translatedHighlights.map((hl) => {
            const Icon = hl.icon;
            return (
              <div key={hl.id} className="bg-surface-alt border-b border-border-subtle last:border-b-0">
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded border border-border bg-surface flex items-center justify-center">
                          <Icon size={17} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-mono text-xs text-text-muted">{hl.rank}</span>
                            <span className="font-mono text-xs text-text-muted">·</span>
                            <span className="font-mono text-xs text-text-muted">{hl.category}</span>
                            <TechBadge label={hl.badge} variant={hl.badgeColor} />
                          </div>
                          <h2 className="text-lg md:text-xl font-semibold text-text-primary leading-snug">{hl.title}</h2>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-5 ml-14">{hl.description}</p>

                      <div className="ml-14 grid md:grid-cols-2 gap-4 mb-5">
                        {hl.hardware.length > 0 && (
                          <div>
                            <p className="font-mono text-xs text-text-muted mb-2">{h.hw_label}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {hl.hardware.map((hw) => <TechBadge key={hw} label={hw} variant="amber" />)}
                            </div>
                          </div>
                        )}
                        {hl.firmware.length > 0 && (
                          <div>
                            <p className="font-mono text-xs text-text-muted mb-2">{h.fw_label}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {hl.firmware.map((fw) => <TechBadge key={fw} label={fw} variant="accent" />)}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="ml-14 flex flex-wrap gap-6 mb-4">
                        {hl.metrics.map((m) => (
                          <div key={m.l}>
                            <p className="font-mono text-accent font-medium text-sm">{m.v}</p>
                            <p className="text-xs text-text-muted">{m.l}</p>
                          </div>
                        ))}
                      </div>

                      <div className="ml-14 flex items-center gap-4">
                        <Link href={hl.link} className="inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded">
                          {h.view_detail} <ArrowRight size={13} />
                        </Link>
                        {'doi' in hl && hl.doi && (
                          <a
                            href={`https://doi.org/${hl.doi}`}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-secondary transition-colors"
                          >
                            <ExternalLink size={11} /> DOI: {hl.doi}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="hidden md:block w-44 flex-shrink-0">
                      <div className="aspect-video bg-surface rounded border border-border-subtle relative overflow-hidden">
                        {'coverImage' in hl && hl.coverImage && (
                          <FallbackImage src={hl.coverImage} alt={hl.title} fill sizes="176px" className="object-cover opacity-70" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
                          <p className="font-mono text-[9px] text-text-muted">{hl.rank}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
