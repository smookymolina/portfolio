export type ProjectCategory =
  | 'embedded'
  | 'firmware'
  | 'iot'
  | 'aerospace'
  | 'ai'
  | 'hardware'
  | 'control';

export type ProjectStatus = 'completed' | 'prototype' | 'in-progress' | 'research';
export type ProjectClass = 'A' | 'B' | 'C';

export interface Metric {
  label: string;
  value: string;
  unit?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  categories: ProjectCategory[];
  classification: ProjectClass;
  status: ProjectStatus;
  period: string;
  institution: string;
  description: string;
  hardware?: string[];
  firmware?: string[];
  software: string[];
  protocols?: string[];
  metrics?: Metric[];
  highlights: string[];
  evidence: string[];
  githubUrl?: string;
  coverImage: string; // e.g. /images/projects/banco-pruebas/hero.jpg
  coverFit?: 'cover' | 'contain';
  coverPosition?: string;
  gallery?: string[]; // e.g. ['/images/projects/banco-pruebas/01.jpeg']
  videoUrl?: string; // e.g. /videos/vr-training-broadcast.mp4
  broadcastChannels?: string[]; // TV channels that featured this project
  featured: boolean;
}

export const PROJECTS: Project[] = [
  // ──────────────────────────────
  // CLASS A — HERO / COVER PROJECTS
  // ──────────────────────────────
  {
    id: 'p01',
    slug: 'rocket-propulsion-daq',
    title: 'Rocket Propulsion Test Bench — DAQ System',
    subtitle: 'Data Acquisition & Instrumentation for Solid-Fuel Rocket Motors',
    tagline:
      'Custom DAQ hardware + embedded firmware for real-time measurement of chamber pressure, nozzle temperature, and thrust during static fire tests.',
    categories: ['embedded', 'firmware', 'hardware', 'aerospace'],
    classification: 'A',
    status: 'completed',
    period: '2022 – 2024',
    institution: 'Instituto Politécnico Nacional — UPIITA',
    description: `Designed and implemented a complete data acquisition system for a solid-fuel rocket motor test bench. The system integrates pressure transducers, type-K thermocouples, and load cells into a custom signal conditioning board. Firmware written in C/C++ on ESP32 and STM32 handles multi-channel ADC sampling, sensor fusion, and real-time data streaming. Data analysis pipeline in Python and LabVIEW processes experimental results for thermal and structural validation.

The project was published in Revista Hacia el Espacio (2024) and formally presented at UPIITA–IPN and the 2023 Planetario Luis Enrique Erro poster session.`,
    hardware: [
      'ESP32 (Tensilica Xtensa LX6)',
      'STM32 (Cortex-M)',
      'HX711 — Load Cell Amplifier',
      'MAX6675 — Thermocouple-to-SPI',
      'Pressure transducers (0–150 psi)',
      'Wheatstone bridge signal conditioning',
      'Custom PCB — signal conditioning board',
    ],
    firmware: [
      'C/C++ bare-metal',
      'UART / SPI / I2C drivers',
      'Multi-channel ADC sampling',
      'Interrupt-driven sensor reading',
      'Real-time data streaming to PC',
    ],
    software: [
      'Python (pandas, numpy, matplotlib)',
      'LabVIEW DAQ',
      'MATLAB/Simulink',
      'SolidWorks FEA',
      'ANSYS Thermal',
    ],
    protocols: ['UART', 'SPI', 'I2C', 'USB-Serial'],
    metrics: [
      { label: 'Sampling rate', value: '1 kHz', unit: 'per channel' },
      { label: 'Temperature range', value: '0–1200', unit: '°C' },
      { label: 'Pressure range', value: '0–150', unit: 'psi' },
      { label: 'Thermal model error', value: '<4', unit: '% RMS' },
    ],
    highlights: [
      'Full hardware-to-software system built from scratch',
      'Custom signal conditioning PCB designed in-house',
      'Integrated thermal-structural FEA validation with ANSYS',
      'Published in peer-reviewed national journal (Revista Hacia el Espacio, 2024)',
      'Presented at UPIITA–IPN and scientific poster session at CDA–IPN',
    ],
    evidence: [
      'Publication: Revista Hacia el Espacio, 2024',
      'Presentation: UPIITA–IPN, March 2024',
      'Poster: Planetario Luis Enrique Erro, CDA–IPN, 2023',
      'Experimental data & analysis reports',
      'Hardware photos and test videos',
    ],
    coverImage: '/images/projects/banco-pruebas/hero.jpeg',
    coverFit: 'cover',
    coverPosition: 'object-top',
    gallery: [
      '/images/projects/banco-pruebas/01.jpeg',
      '/images/projects/banco-pruebas/02.jpeg',
      '/images/projects/banco-pruebas/03.jpeg',
    ],
    featured: true,
  },
  {
    id: 'p02',
    slug: 'mqtt-telemetry-propulsion',
    title: 'Real-Time Wireless Telemetry — Rocket Motor Tests',
    subtitle: 'ESP32 MQTT Telemetry with <50ms Latency for Static Fire Monitoring',
    tagline:
      'Wireless embedded system transmitting critical propulsion parameters in real time during static fire tests, with live web dashboard and automatic safety alerts.',
    categories: ['embedded', 'firmware', 'iot', 'aerospace'],
    classification: 'A',
    status: 'completed',
    period: '2023 – 2024',
    institution: 'Instituto Politécnico Nacional',
    description: `Wireless telemetry extension of the DAQ system for rocket motor test benches. An ESP32 node reads chamber pressure, nozzle temperature, and thrust sensors and publishes data over MQTT to a local broker in real time. A web dashboard displays live charts and triggers safety alerts when values exceed operational thresholds. The system achieves end-to-end latency under 50 ms — critical for test safety.`,
    hardware: [
      'ESP32 (WiFi 2.4 GHz + BLE)',
      'Pressure / temperature / thrust sensors',
    ],
    firmware: [
      'C++ (ESP-IDF / Arduino Framework)',
      'MQTT client (PubSubClient)',
      'ISR-driven sensor sampling',
      'Watchdog timer for safety',
      'OTA firmware update capability',
    ],
    software: [
      'Mosquitto MQTT Broker (local)',
      'Flask (dashboard backend)',
      'Chart.js (real-time visualization)',
      'SQLite (time-series storage)',
    ],
    protocols: ['MQTT over TCP/IP', 'WiFi 802.11 b/g/n', 'HTTP/REST'],
    metrics: [
      { label: 'End-to-end latency', value: '<50', unit: 'ms' },
      { label: 'WiFi range', value: '>50', unit: 'm outdoor' },
      { label: 'Data rate', value: '100', unit: 'Hz' },
    ],
    highlights: [
      'Sub-50ms latency in uncontrolled industrial environment',
      'Automatic out-of-range safety alerts with configurable thresholds',
      'OTA firmware update support — no physical access required',
      'Real-time web dashboard with historical data storage',
    ],
    evidence: [
      'Embedded C++ source code',
      'Live dashboard screenshots',
      'Latency measurement logs',
      'Integration with test bench DAQ (P-01)',
    ],
    githubUrl: 'https://github.com/smookymolina',
    coverImage: '/images/projects/telemetria-mqtt/hero.jpg',
    coverFit: 'cover',
    coverPosition: 'object-center',
    gallery: [
      '/images/projects/telemetria-mqtt/01.jpeg',
      '/images/projects/telemetria-mqtt/02.jpeg',
      '/images/projects/telemetria-mqtt/dashboard.jpeg',
    ],
    featured: true,
  },
  {
    id: 'p04',
    slug: 'adaptive-pid-stm32',
    title: 'Adaptive PID Controller — Auto-Tuning on STM32',
    subtitle: 'Digital Control with Extended Ziegler-Nichols Auto-Tuning, −35% Settling Time',
    tagline:
      'Self-tuning PID controller implemented in C++ on STM32 Cortex-M, achieving a 35% reduction in settling time over manual tuning on a real propulsion test bench.',
    categories: ['embedded', 'firmware', 'control', 'aerospace'],
    classification: 'A',
    status: 'completed',
    period: '2023 – 2024',
    institution: 'IPN — Laboratory of Control & Dynamic Systems',
    description: `Digital PID controller with an extended Ziegler-Nichols auto-tuning algorithm, implemented in embedded C++ on STM32 Cortex-M. The controller runs in real time on the propulsion test bench, reading sensor feedback via ADC and driving actuators through PWM. The auto-tuning routine identifies system dynamics online and updates PID gains without interrupting operation. Transient response is visualized in LabVIEW over UART.`,
    hardware: [
      'STM32 (Cortex-M) — primary controller',
      'ADC — sensor feedback (pressure, flow)',
      'PWM outputs — actuator control',
      'UART → PC / LabVIEW visualization',
    ],
    firmware: [
      'C++ embedded — STM32 HAL',
      'Extended Ziegler-Nichols auto-tuning',
      'Fixed-point arithmetic for real-time ISR',
      'UART logging at 115200 baud',
      'Configurable PID gains via serial interface',
    ],
    software: ['LabVIEW (transient response monitoring)', 'MATLAB/Simulink (model validation)'],
    protocols: ['UART', 'PWM', 'ADC DMA'],
    metrics: [
      { label: 'Settling time reduction', value: '35', unit: '%' },
      { label: 'Control loop rate', value: '1', unit: 'kHz' },
      { label: 'Overshoot reduction', value: '~18', unit: '%' },
    ],
    highlights: [
      'Quantified 35% improvement in settling time vs. manual tuning',
      'Online auto-tuning — no system shutdown required',
      'Fixed-point arithmetic ensures deterministic real-time behavior',
      'Validated on real hardware, not simulation',
    ],
    evidence: [
      'Embedded C++ source code (STM32)',
      'LabVIEW visualization screenshots',
      'Transient response data (before/after)',
      'MATLAB model for tuning validation',
    ],
    githubUrl: 'https://github.com/smookymolina/atz_stm32',
    coverImage: '/images/projects/pid-stm32/hero.jpeg',
    gallery: [
      '/images/projects/pid-stm32/response-curve.jpeg',
      '/images/projects/pid-stm32/hardware.jpeg',
    ],
    featured: true,
  },
  {
    id: 'p05',
    slug: '3d-printer-pcb-mill',
    title: '3D Printer → PCB Milling Machine Conversion',
    subtitle: 'Hardware Modification: FDM Printer Retrofitted with Rotary Tool for PCB Fabrication',
    tagline:
      'Modified a consumer FDM 3D printer mechanically and reprogrammed its firmware to operate as a PCB milling machine using a rotary cutting tool.',
    categories: ['hardware', 'firmware', 'embedded'],
    classification: 'A',
    status: 'prototype',
    period: '2023 – 2024',
    institution: 'Personal Lab / CO.DE Aerospace',
    description: `Converted a consumer FDM 3D printer into a PCB milling machine by mechanically replacing the extruder assembly with a high-speed rotary tool (mototool) and reprogramming the motion controller firmware (GRBL) to support milling operations. Mechanical modifications included custom tool mount design, Z-axis stiffening, and cable management. The machine successfully fabricated functional single-sided PCBs by copper layer removal (isolation routing). This project demonstrates hardware hacking, mechanical design, firmware modification, and PCB fabrication skills.`,
    hardware: [
      '3D Printer chassis (modified)',
      'High-speed rotary tool (mototool) — spindle replacement',
      'Custom tool mount bracket (3D-printed)',
      'GRBL-compatible motion controller',
      'Stepper motors (X/Y/Z axes)',
      'Copper-clad FR4 PCB substrate',
    ],
    firmware: [
      'GRBL (modified for milling operations)',
      'G-code generation via FlatCAM',
      'Custom spindle enable/disable logic',
    ],
    software: [
      'KiCad (PCB schematic & layout)',
      'FlatCAM (CAM — G-code from PCB Gerbers)',
      'Candle / UGS (G-code sender)',
    ],
    highlights: [
      'Complete hardware conversion — mechanical + electrical + firmware',
      'Successfully fabricated functional single-sided PCBs',
      'Custom spindle mount designed and fabricated in-house',
      'Demonstrates maker/builder mindset: solving with available resources',
      'Low-cost alternative to commercial PCB prototyping services',
    ],
    evidence: [
      'Photos of modified machine',
      'Video of milling operation',
      'Fabricated PCB samples',
      'FlatCAM G-code files',
      'Before/after modification photos',
    ],
    coverImage: '/images/projects/pcb-mill/hero.jpeg',
    gallery: [
      '/images/projects/pcb-mill/machine.jpeg',
      '/images/projects/pcb-mill/pcb-result.jpeg',
      '/images/projects/pcb-mill/milling-video-thumb.jpeg',
    ],
    featured: true,
  },

  // ──────────────────────────────
  // CLASS B — CASE STUDIES
  // ──────────────────────────────
  {
    id: 'p06',
    slug: 'smartcity-iot-network',
    title: 'SmartCity Environmental Monitoring — IoT Sensor Network',
    subtitle: 'Distributed ESP32 Node Network for Urban Air Quality & Climate Monitoring',
    tagline:
      'End-to-end IoT platform: distributed sensor nodes (ESP32 + MQ + BME280) → MQTT → Flask/PostgreSQL backend → live web dashboard with automated PDF reports.',
    categories: ['embedded', 'iot', 'firmware'],
    classification: 'B',
    status: 'completed',
    period: '2023 – 2024',
    institution: 'Independent Project',
    description: `Distributed IoT network for urban environmental monitoring. Each node consists of an ESP32 microcontroller connected to gas quality sensors (MQ series) and a BME280 environmental sensor (temperature, humidity, atmospheric pressure). Nodes publish readings via MQTT to a central broker. A Flask/PostgreSQL backend stores time-series data and serves a Chart.js dashboard with push notifications and weekly automated PDF reports.`,
    hardware: [
      'ESP32 (multiple nodes)',
      'MQ-series gas sensors (CO, CO2, LPG)',
      'BME280 (temperature, humidity, pressure)',
      'Custom enclosures for outdoor deployment',
    ],
    firmware: [
      'C++ (Arduino Framework)',
      'MQTT publish with QoS 1',
      'Deep sleep between readings (battery optimization)',
      'OTA updates',
    ],
    software: [
      'Flask + PostgreSQL (backend)',
      'Chart.js (time-series dashboard)',
      'Mosquitto MQTT broker',
      'ReportLab (automated PDF reports)',
      'Push notification service',
    ],
    protocols: ['MQTT', 'HTTP/REST', 'WiFi 802.11'],
    highlights: [
      'Complete end-to-end system: hardware → firmware → cloud → dashboard',
      'Automated weekly PDF environmental reports',
      'Battery-optimized with ESP32 deep sleep cycling',
      'Multi-node expandable architecture',
    ],
    evidence: ['Dashboard screenshots', 'Node photos', 'Sample automated reports'],
    coverImage: '/images/projects/smartcity-iot/hero.jpeg',
    gallery: ['/images/projects/smartcity-iot/dashboard.jpeg', '/images/projects/smartcity-iot/nodes.jpeg'],
    featured: false,
  },
  {
    id: 'p07',
    slug: 'iot-monitoring-platform',
    title: 'Production-Grade IoT Monitoring Platform',
    subtitle: 'Full-Stack Flask API with JWT Auth, Docker Deployment & Real-Time Dashboard',
    tagline:
      'Secure, containerized web platform for IoT sensor data ingestion, role-based access control, real-time visualization, and event history — production-ready architecture.',
    categories: ['iot', 'embedded'],
    classification: 'B',
    status: 'completed',
    period: '2023 – 2024',
    institution: 'Independent Project / IPN',
    description: `Production-grade backend platform for IoT sensor data management. REST API built with Flask and SQLAlchemy handles data ingestion from remote sensor nodes. Authentication uses JWT with role-based access control (admin, operator, viewer). Deployment via Docker + Gunicorn with Prometheus metrics, Redis caching, and MySQL as primary database. The dashboard provides real-time sensor visualization and configurable event alerts.`,
    software: [
      'Flask + SQLAlchemy (REST API)',
      'JWT + Flask-Login + bcrypt (auth)',
      'Docker + Gunicorn (deployment)',
      'Prometheus (monitoring)',
      'MySQL + Redis (databases)',
      'HTML/CSS/JS + Chart.js (frontend)',
    ],
    protocols: ['HTTP/REST', 'WebSocket (live updates)'],
    metrics: [
      { label: 'API response time', value: '<50', unit: 'ms p95' },
      { label: 'Concurrent users', value: '50+', unit: 'tested' },
    ],
    highlights: [
      'Production-ready: Docker, Gunicorn, Prometheus, rate limiting',
      'OWASP-compliant security: JWT, CSRF, HTTPS, bcrypt',
      'Role-based access control with audit logging',
      'Real-time dashboard with configurable alert thresholds',
    ],
    evidence: ['Architecture diagram', 'API documentation', 'Docker Compose configuration'],
    coverImage: '/images/projects/iot-platform/hero.jpeg',
    gallery: ['/images/projects/iot-platform/dashboard.jpeg', '/images/projects/iot-platform/api-docs.jpeg'],
    featured: false,
  },
  {
    id: 'p08',
    slug: 'jobhunter-ai-pipeline',
    title: 'JobHunter — AI-Driven Job Application Automation',
    subtitle: 'FastAPI + MCP Server + Next.js + Telegram Bot — Full AI Pipeline',
    tagline:
      'Local automation system with custom MCP server that orchestrates AI agents to search job listings, generate tailored LaTeX CVs, compile PDFs, and manage applications via Telegram.',
    categories: ['ai', 'embedded'],
    classification: 'B',
    status: 'in-progress',
    period: '2026',
    institution: 'Personal Project',
    description: `End-to-end job application automation system built with modern AI tooling. A FastAPI backend manages vacancies in SQLite and exposes a REST API. A custom MCP (Model Context Protocol) server orchestrates AI agents that analyze job listings, generate tailored LaTeX CVs, compile PDFs via pdflatex, and manage the full review pipeline. A Next.js dashboard provides real-time visibility. A Telegram bot interface allows mobile control of the entire workflow. Follows absolute-path discipline and WAL-safe SQLite patterns.`,
    software: [
      'FastAPI (backend)',
      'Next.js 14 (dashboard frontend)',
      'SQLite (job vacancy database)',
      'Custom MCP Server (AI orchestration)',
      'pdflatex (CV PDF generation)',
      'Telegram Bot API (mobile interface)',
      'Python (AI pipeline)',
    ],
    metrics: [{ label: 'Pipeline stages', value: '5', unit: 'automated' }],
    highlights: [
      'Custom MCP server for LLM tool integration — cutting-edge 2026',
      'Fully local — no cloud dependency, privacy-preserving',
      'AI-generated LaTeX CVs compiled to PDF automatically',
      'Telegram bot for mobile pipeline control',
      'WAL-safe SQLite with absolute-path discipline',
    ],
    evidence: ['GitHub: github.com/smookymolina/JobHunter', 'README with full architecture diagram'],
    githubUrl: 'https://github.com/smookymolina/JobHunter',
    coverImage: '/images/projects/jobhunter/hero.jpeg',
    gallery: ['/images/projects/jobhunter/dashboard.jpeg', '/images/projects/jobhunter/pipeline.jpeg'],
    featured: false,
  },
  {
    id: 'p09',
    slug: 'data-pipeline-reports',
    title: 'Experimental Data Pipeline — Automated Technical Reports',
    subtitle: 'Python Pipeline: DAQ Data → Statistical Analysis → PDF/Excel Reports in <20 Minutes',
    tagline:
      'Automated processing pipeline that reduces post-test analysis time from 6 hours to under 20 minutes — from raw sensor data to formatted PDF + Excel technical reports.',
    categories: ['embedded', 'ai'],
    classification: 'B',
    status: 'completed',
    period: '2024 – 2025',
    institution: 'IPN — Research Project',
    description: `Python automation pipeline for processing experimental data from the rocket propulsion test bench. Takes raw multi-channel sensor data as input, applies statistical processing (mean, variance, FFT, trend analysis), and generates publication-quality PDF reports and Excel spreadsheets — all without manual intervention. Reduced post-test analysis cycle from 6 hours to under 20 minutes.`,
    software: [
      'Python — pandas, numpy, scipy',
      'matplotlib / seaborn (visualization)',
      'openpyxl (Excel generation)',
      'ReportLab (PDF generation)',
      'Automated template system',
    ],
    metrics: [
      { label: 'Analysis time reduction', value: '94', unit: '%' },
      { label: 'Time: before', value: '6', unit: 'hours' },
      { label: 'Time: after', value: '<20', unit: 'minutes' },
    ],
    highlights: [
      '94% reduction in post-test analysis time',
      'Zero manual intervention from raw data to final report',
      'Generates both PDF (for publication) and Excel (for team review)',
      'Statistical metrics: mean, std, FFT, trend detection',
    ],
    evidence: ['Python source code', 'Sample generated reports (PDF + Excel)', 'Before/after timing comparison'],
    coverImage: '/images/projects/data-pipeline/pipeline.jpeg',
    featured: false,
  },
  {
    id: 'p10',
    slug: 'thermal-dynamics-simulator',
    title: 'Thermal Dynamics Simulator — Aerospace Propulsion Components',
    subtitle: 'Heat Transfer Models Validated with Real Test Bench Data (<4% RMS Error)',
    tagline:
      'Computational thermal model for solid-fuel rocket propulsion components: conduction, convection, and radiation — validated against experimental data with <4% RMS error.',
    categories: ['aerospace', 'control'],
    classification: 'B',
    status: 'in-progress',
    period: '2024 – 2025',
    institution: 'IPN — Aerospace Research Group',
    description: `Computational model of heat transfer in solid-fuel rocket motor components, implemented in Python and ANSYS. Models all three heat transfer mechanisms (conduction, convection, radiation) in the combustion chamber, nozzle, and casing. Validated against experimental data from the test bench — achieving less than 4% RMS error. Generates automated thermal distribution maps and technical reports.`,
    software: ['Python (numerical integration)', 'ANSYS Thermal (FEA)', 'matplotlib (thermal maps)', 'ReportLab (automated reports)'],
    metrics: [
      { label: 'Model error (RMS)', value: '<4', unit: '%' },
      { label: 'Temperature range', value: '25–1200', unit: '°C' },
    ],
    highlights: [
      'Validated against real experimental data — not just theoretical',
      '<4% RMS error between model and experiment',
      'Covers all 3 heat transfer modes simultaneously',
      'Automated thermal maps and PDF report generation',
    ],
    evidence: [
      'Python simulation code',
      'ANSYS model files',
      'Validation plots (model vs. experimental)',
      'Thermal distribution maps',
    ],
    coverImage: '/images/projects/thermal-simulator/hero.jpeg',
    featured: false,
  },
  {
    id: 'p11',
    slug: 'dynamic-systems-modeling',
    title: 'Dynamic Systems Modeling — State Space & Linearization Toolkit',
    subtitle: 'Python Library for Nonlinear System Simulation, Linearization & Stability Analysis',
    tagline:
      'Clean Python library for modeling dynamic systems: finite-difference Jacobians, equilibrium finding, nonlinear vs. linearized simulation comparison, and phase plane analysis.',
    categories: ['control', 'aerospace'],
    classification: 'B',
    status: 'completed',
    period: '2025',
    institution: 'IPN — MSc. Advanced Technologies',
    description: `Python toolkit for dynamic systems analysis developed for MSc. coursework in Aerospace Systems Modeling. Implements: finite-difference Jacobian computation (∂f/∂x, ∂f/∂u), equilibrium point finding via scipy.optimize.root, nonlinear simulation with scipy.integrate.solve_ivp, and linearized system simulation. Includes graphical comparison of nonlinear vs. linearized trajectories for validation.`,
    software: [
      'Python — numpy, scipy, matplotlib',
      'scipy.integrate (solve_ivp — RK45)',
      'scipy.optimize (root — equilibrium finding)',
      'Custom Model dataclass architecture',
    ],
    highlights: [
      'Professional code quality with dataclass-based Model abstraction',
      'Finite-difference Jacobians with numerical stability',
      'Handles nonlinear systems with multiple equilibrium points',
      'Comparative visualization: NL vs. linearized for validation',
    ],
    evidence: [
      'GitHub: github.com/smookymolina/Clase_02_Modelizacion',
      'Well-documented Python source (Spanish + technical comments)',
    ],
    githubUrl: 'https://github.com/smookymolina/Clase_02_Modelizacion',
    coverImage: '/images/projects/dynamic-modeling/hero.jpeg',
    featured: false,
  },
  {
    id: 'p13',
    slug: 'vr-industrial-training',
    title: 'VR Industrial Safety Training — Fire Extinguisher Simulation',
    subtitle: 'Immersive VR Environment Demonstrated Live on National Television (TV Azteca)',
    tagline:
      'Immersive VR simulation for industrial fire extinguisher training — demonstrated live on TV Azteca México before a national audience.',
    categories: ['ai'],
    classification: 'B',
    status: 'completed',
    period: '2024',
    institution: 'Professional Project / TV Azteca México',
    description: `VR training application for industrial fire safety protocols. The immersive environment simulates fire extinguisher use in an industrial facility with realistic physics, haptic feedback, and interactive scoring. Integrated with motion tracking hardware for full-body interaction. The application was selected for a live technology demonstration on TV Azteca México, reaching a national audience.`,
    hardware: ['Motion tracking hardware', 'Haptic feedback devices', 'VR headset'],
    software: ['VR development platform', 'Real-time 3D engine', 'Physics simulation'],
    highlights: [
      'Live demonstration on TV Azteca México — national broadcast audience',
      'Haptic feedback integration for realistic interaction',
      'Industrial-grade scenario design with fire physics simulation',
      'Selected as featured technology among competing solutions',
    ],
    evidence: [
      'TV Azteca broadcast footage (2024)',
      'Application demo video',
      'Training protocol documentation',
    ],
    coverImage: '/images/projects/vr-training/hero.jpeg',
    gallery: ['/images/projects/vr-training/tv-azteca.jpeg', '/images/projects/vr-training/simulation.jpeg'],
    videoUrl: '/videos/capsula.mp4',
    broadcastChannels: ['TV Azteca'],
    featured: false,
  },
  {
    id: 'p14',
    slug: 'tren-maya-tourism-app',
    title: 'Mexico Profundo — Tren Maya AR Tourism App',
    subtitle: 'Augmented Reality Tourism App for Tren Maya Railway — Featured on ADN40 & Canal Once',
    tagline:
      'Interactive AR tourism application for Mexico\'s Tren Maya railway corridor — cultural overlays, route landmarks, and indigenous heritage content. Featured live on ADN40 and Canal Once national broadcasts.',
    categories: ['ai'],
    classification: 'B',
    status: 'completed',
    period: '2024',
    institution: 'Professional Project — Mexico Profundo',
    description: `Augmented reality tourism application for Mexico's Tren Maya railway corridor, developed as part of the "Mexico Profundo" cultural technology initiative. The app features real-time AR overlays for historical and cultural landmarks along the Tren Maya route, interactive GPS-based points of interest, and indigenous heritage content.

The application was demonstrated live on ADN40 (national news channel) and Canal Once (IPN public television) as featured technology segments, reaching a combined audience of millions of viewers across Mexico.`,
    hardware: [],
    firmware: [],
    software: [
      'AR development platform',
      'Mobile app (iOS / Android)',
      'Real-time 3D engine',
      'GPS integration',
      'Cultural content CMS',
    ],
    highlights: [
      'Featured live on ADN40 national news — Mexico Profundo segment',
      'Featured on Canal Once (IPN public television) — Mexico Profundo',
      'AR cultural overlays for Tren Maya route landmarks',
      'Indigenous heritage and cultural content integration',
      'Reached millions of viewers across Mexico national broadcasts',
    ],
    evidence: [
      'ADN40 broadcast footage (2024)',
      'Canal Once broadcast footage (2024)',
      'Mexico Profundo program feature',
      'Application demo video',
    ],
    coverImage: '/images/projects/tren-maya/hero.jpeg',
    gallery: [
      '/images/projects/tren-maya/adn40.jpeg',
      '/images/projects/tren-maya/canal-once.jpeg',
      '/images/projects/tren-maya/app-demo.jpeg',
    ],
    videoUrl: '/videos/capsula.mp4',
    broadcastChannels: ['ADN40', 'Canal Once'],
    featured: false,
  },
  {
    id: 'p03',
    slug: 'stm32-embedded-firmware',
    title: 'STM32 Bare-Metal Firmware — Assembly & C',
    subtitle: 'Low-Level ARM Cortex-M Programming: Peripheral Control in Assembly',
    tagline:
      'Bare-metal STM32 firmware written in ARM Assembly and C for direct peripheral register manipulation — no HAL abstraction layer.',
    categories: ['embedded', 'firmware'],
    classification: 'B',
    status: 'in-progress',
    period: '2025',
    institution: 'IPN / Personal',
    description: `Low-level STM32 firmware written directly in ARM Assembly and C, bypassing HAL abstraction layers for maximum determinism and performance. Covers GPIO, timers, UART, SPI, and interrupt vector table configuration at the register level. Part of an advanced embedded systems deep-dive.`,
    hardware: ['STM32 (Cortex-M)', 'Peripherals: GPIO, UART, SPI, Timers'],
    firmware: [
      'ARM Assembly (Thumb-2)',
      'C (bare-metal, no HAL)',
      'Linker script configuration',
      'Startup code & interrupt vector table',
    ],
    software: ['STM32CubeIDE', 'OpenOCD + GDB', 'arm-none-eabi-gcc'],
    highlights: [
      'Register-level peripheral control (no HAL)',
      'ARM Thumb-2 Assembly for performance-critical routines',
      'Custom startup and linker script',
    ],
    evidence: ['GitHub: github.com/smookymolina/atz_stm32 (Assembly language)'],
    githubUrl: 'https://github.com/smookymolina/atz_stm32',
    coverImage: '/images/projects/stm32-firmware/hero.jpeg',
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const CLASS_A_PROJECTS = PROJECTS.filter((p) => p.classification === 'A');
export const CLASS_B_PROJECTS = PROJECTS.filter((p) => p.classification === 'B');

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.categories.includes(category));
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  embedded: 'Embedded Systems',
  firmware: 'Firmware',
  iot: 'IoT',
  aerospace: 'Aerospace',
  ai: 'AI / Automation',
  hardware: 'Hardware Design',
  control: 'Control Systems',
};
