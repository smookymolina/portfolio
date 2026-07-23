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

export interface ProcessStep {
  title: string;
  description: string;
  image?: string;
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
  process?: ProcessStep[];
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
  // CLASS A — EMBEDDED SYSTEMS FLAGSHIP PROJECTS
  // ──────────────────────────────
  {
    id: 'p20',
    slug: 'tesis-banco-pruebas',
    title: 'MSc Thesis — Test Bench for Solid-Fuel Experimental Rockets',
    subtitle: 'Characterization & Design: Welded Structure, Distributed ESP32 DAQ, and Real-Time Monitoring App',
    tagline:
      'Complete engineering cycle for a rocket motor test bench: CAD + FEA structural design, in-house welded fabrication, distributed ESP32 sensor network (thrust, pressure, temperature), and a real-time wireless monitoring app.',
    categories: ['embedded', 'hardware', 'aerospace', 'control'],
    classification: 'A',
    status: 'completed',
    period: '2024 – 2026',
    institution: 'IPN — UPIITA · MSc in Advanced Technology',
    description: `Master's thesis (defended May 2026, UPIITA–IPN): "Characterization and Design of a Test Bench for Solid-Fuel Experimental Rockets". The project covers the full engineering cycle of a static-fire test bench for class F–J rocket motors.

The structure is a 75×75×75 cm welded A36 steel frame designed in SolidWorks and validated with FEA: maximum von Mises stress of 7.13 MPa against a 250 MPa yield (safety factor 4:1 at 2000 N design thrust with a 1.5 dynamic factor). Fabrication — cutting, welding, and painting — was done in-house.

Instrumentation is a distributed embedded system: a main ESP32 coordinates load-cell nodes (HX711, 24-bit ADC), a pressure channel (0–1.2 MPa transducer), K-type thermocouples over MAX6675/SPI, and an ESP32-CAM, communicating over a UART bus. The main node runs digital filtering, JSON packaging, and a WebSocket server on a local WiFi access point, streaming live data to a mobile/web dashboard with pre-launch checklist, calibration routines, real-time charts, and CSV export. Both measurement channels were validated point-by-point against reference instruments.

Next phase (in progress): consolidating the breadboard-validated electronics into a dedicated KiCad schematic and PCB for the bench's signal acquisition chain.`,
    hardware: [
      'ESP32 main controller + ESP32 load-cell nodes',
      'HX711 24-bit ADC — 2× 50 kg load cells (thrust)',
      'Pressure transducer 0–1.2 MPa (chamber pressure)',
      'MAX6675 + K-type thermocouple (SPI)',
      'ESP32-CAM — visual test recording',
      'A36 welded steel frame 75×75×75 cm (FS 4:1)',
    ],
    firmware: [
      'C/C++ (ESP-IDF / Arduino framework)',
      'Distributed nodes over UART bus (115200 bps)',
      'Digital filtering + JSON packaging',
      'WebSocket server on local WiFi AP',
      'Calibration & tare routines (known-weight)',
    ],
    software: [
      'SolidWorks (CAD of structure and mounts)',
      'FEA structural validation (von Mises, displacement)',
      'Mobile/Web SPA dashboard (real-time charts)',
      'Python (channel validation analysis)',
    ],
    protocols: ['UART bus', 'SPI', 'WiFi AP', 'WebSocket', 'HTTP'],
    metrics: [
      { label: 'Structural safety factor', value: '4:1', unit: '@ 2000 N' },
      { label: 'Max von Mises stress', value: '7.13', unit: 'MPa (A36: 250)' },
      { label: 'Thrust channel', value: '2×50', unit: 'kg HX711' },
    ],
    process: [
      {
        title: 'CAD design of the structure',
        description: 'SolidWorks model of the 75×75×75 cm frame for class F–J motors: load paths, motor mount plate, and instrumentation placement designed for 2000 N thrust plus a 1.5 dynamic factor.',
        image: '/images/projects/tesis-banco-pruebas/cad-frame.jpeg',
      },
      {
        title: 'FEA structural validation',
        description: 'Von Mises stress analysis under dynamic load: 7.13 MPa maximum vs. 250 MPa yield for A36 steel — 4:1 safety factor, 2.49 mm max displacement, with critical attention to welded joints.',
        image: '/images/projects/tesis-banco-pruebas/fea.jpeg',
      },
      {
        title: 'In-house welded fabrication',
        description: 'Cutting, arc welding, and finishing of the steel frame done personally in the workshop — the same engineer who simulated the structure fabricated it.',
        image: '/images/projects/tesis-banco-pruebas/welding.jpeg',
      },
      {
        title: 'Distributed electronics architecture',
        description: 'Block design of the distributed DAQ: main ESP32 + load-cell nodes (HX711) + pressure and thermocouple channels + ESP32-CAM, linked by a UART bus with WiFi AP output.',
        image: '/images/projects/tesis-banco-pruebas/architecture.jpeg',
      },
      {
        title: 'Wiring and breadboard prototyping',
        description: 'Full wiring diagram (HX711 ×2, MAX6675, 0.5–4.5 V pressure transducer) and breadboard bring-up of every sensor channel before mechanical integration.',
        image: '/images/projects/tesis-banco-pruebas/wiring.jpeg',
      },
      {
        title: 'Mechanical integration',
        description: 'Motor mount, load cells, and sensor harness installed on the welded frame; sensor routing kept clear of the exhaust path.',
        image: '/images/projects/tesis-banco-pruebas/mounting.jpeg',
      },
      {
        title: 'Calibration and channel validation',
        description: 'Point-by-point validation of the pressure channel (relative error within limits across 100–700 kPa) and thrust channel (2×50 kg cells, known-weight calibration) against reference instruments.',
        image: '/images/projects/tesis-banco-pruebas/hero.jpeg',
      },
      {
        title: 'Real-time monitoring app',
        description: 'Mobile/web dashboard served from the bench itself: pre-launch sequence (propellant tare, general tare, known-weight calibration, camera URL), live thrust/pressure charts, and CSV export.',
        image: '/images/projects/tesis-banco-pruebas/app.jpeg',
      },
      {
        title: 'Next phase: dedicated schematic & PCB',
        description: 'The breadboard-validated acquisition chain is being consolidated into a dedicated KiCad schematic and PCB — the final hardware iteration of the bench electronics.',
      },
    ],
    highlights: [
      'Full-cycle engineering: CAD → FEA → welded fabrication → electronics → firmware → validated measurements',
      'Distributed ESP32 architecture with dedicated load-cell nodes and camera node over UART bus',
      'Self-hosted WiFi AP + WebSocket dashboard — no external network needed at the test site',
      'Point-by-point validation of pressure and thrust channels against reference instruments',
      'Structure validated at 4:1 safety factor for class F–J motors (2000 N design load)',
    ],
    evidence: [
      'MSc thesis document — UPIITA–IPN, May 2026',
      'FEA reports (von Mises, displacement) and CAD models',
      'Channel validation charts (pressure & thrust)',
      'Monitoring app screenshots and fabrication photos',
      'Dedicated KiCad schematic + PCB — in progress',
    ],
    coverImage: '/images/projects/tesis-banco-pruebas/hero.jpeg',
    coverFit: 'cover',
    gallery: [
      '/images/projects/tesis-banco-pruebas/motors.jpeg',
      '/images/projects/tesis-banco-pruebas/validation-pressure.jpeg',
      '/images/projects/tesis-banco-pruebas/validation-thrust.jpeg',
      '/images/projects/tesis-banco-pruebas/frame.jpeg',
    ],
    featured: true,
  },
  {
    id: 'p21',
    slug: 'jaguar-mx-thermal-control',
    title: 'Jaguar MX — Hot-Air Extraction System for Telecom Cabinets',
    subtitle: 'RP2350 Safety FSM, Mixed-Signal KiCad PCB (0 DRC Errors) — Fabricated Board SE_TELCODEN_V1',
    tagline:
      'Industrial thermal-control system developed for Jaguar de México: fail-safe firmware FSM on Seeed XIAO RP2350, dual-NTC acquisition, H-bridge damper actuator, 48 V fan stage — from Wokwi simulation to a fabricated mixed-signal PCB.',
    categories: ['embedded', 'firmware', 'hardware'],
    classification: 'A',
    status: 'completed',
    period: '2026',
    institution: 'Jaguar de México',
    description: `Complete embedded development (firmware, simulation, schematic, and PCB) of a hot-air extraction system for telecommunications cabinets, built for Jaguar de México's embedded systems engineering evaluation — and fabricated as the SE_TELCODEN_V1 board.

The firmware is a MicroPython safety FSM (INIT → READING → COOLING / IDLE / ERROR / LOCKOUT) on a Seeed XIAO RP2350. Two NTC TT05 sensors are read through voltage dividers with Beta-equation conversion (B=3435 K per datasheet — not the generic 3950 K), open/short-circuit validation, and a trimmed-mean filter over a circular buffer. A DIP switch selects 8 thermal setpoints (40–75 °C) with ±1 °C hysteresis. The system drives a FIT0803 linear actuator (cabinet dampers) through a TB6612FNG H-bridge and an MR1238E48B-FSR 48 V industrial fan through an isolated MOSFET stage. An 8 s hardware watchdog is kept alive during the actuator's 3 s blocking travel via chunked feeding injected into the H-bridge driver.

The KiCad design strictly separates analog/logic from the 48 V power stage: split AGND/PGND planes joined at a single net-tie, per-net-class track widths (48 V at 1.5 mm), and guard rings on the ADC inputs. Final DRC: 0 errors, 0 warnings, 0 unrouted nets. The board was manufactured and brought up successfully.`,
    hardware: [
      'Seeed XIAO RP2350 (RP2040-compatible)',
      '2× NTC TT05 10K (B=3435 K) + voltage dividers',
      'TB6612FNG H-bridge → FIT0803 linear actuator',
      'MOSFET power stage → MR1238E48B-FSR 48 V fan',
      'DIP switch — 8 thermal setpoints (40–75 °C)',
      'Fabricated PCB SE_TELCODEN_V1 (relay + buck stages)',
    ],
    firmware: [
      'MicroPython — OOP module structure (fsm / adc_ntc / hbridge)',
      'Safety FSM: INIT · READING · COOLING · IDLE · ERROR · LOCKOUT',
      '8 s hardware watchdog with chunked feeding (500 ms)',
      'Trimmed-mean filter over circular ADC buffer',
      'Sensor fault detection (open/short, 10–130 °C validity window)',
    ],
    software: [
      'KiCad (schematic + mixed-signal PCB layout)',
      'Wokwi (full-system simulation, custom H-bridge chip)',
      'Python unit tests with machine-module mocks',
    ],
    protocols: ['ADC', 'PWM / H-bridge control', 'UART (serial console commands)'],
    metrics: [
      { label: 'Final DRC', value: '0', unit: 'errors · 0 warnings' },
      { label: 'FSM safety states', value: '6', unit: 'incl. LOCKOUT' },
      { label: 'Setpoint range', value: '40–75', unit: '°C (8 steps)' },
    ],
    process: [
      {
        title: 'Requirements and FSM architecture',
        description: 'Translated the industrial requirement (cool a telecom cabinet only when internal temp exceeds both the setpoint and the outside temp) into a 6-state safety FSM with ERROR safe-state and permanent LOCKOUT after 5 failed recoveries.',
      },
      {
        title: 'Firmware in MicroPython',
        description: 'Modular OOP firmware: NTC Beta-equation driver with open/short detection, trimmed-mean circular buffer, H-bridge driver with watchdog feeding injected as a callback so the 3 s actuator travel never trips the 8 s WDT.',
      },
      {
        title: 'Full-system simulation in Wokwi',
        description: 'RP2040 simulation with a custom TB6612FNG chip, antiparallel LEDs to visualize H-bridge polarity, serial command injection (SET/TEMP/EXT), and simulated thermal feedback closing the full COOLING → IDLE cycle.',
      },
      {
        title: 'Mixed-signal schematic in KiCad',
        description: 'Readable-by-blocks schematic: logic/analog side (MCU, LDO, NTC conditioning, DIP switch) and power side (H-bridge, 48 V MOSFET stage), with AGND/PGND joined at a single net-tie.',
        image: '/images/projects/jaguar-mx/schematic.jpeg',
      },
      {
        title: 'PCB layout — analog vs. power separation',
        description: 'Net classes per domain (48 V at 1.5 mm, 5 V at 1.0 mm, 3V3 signal at 0.4 mm), split ground planes, guard rings on ADC traces, connectors and test points on the board edge. Final DRC: 0 errors, 0 warnings, 0 unrouted.',
        image: '/images/projects/jaguar-mx/pcb-render.jpeg',
      },
      {
        title: 'Fabrication and bring-up',
        description: 'The SE_TELCODEN_V1 board was manufactured and brought up: XIAO RP2350 socketed, relay and buck stages populated, and the labeled harness (motor, limit, NTCs, fan) connected for functional testing.',
        image: '/images/projects/jaguar-mx/hero.jpeg',
      },
    ],
    highlights: [
      'Fail-safe firmware: safe states, hardware watchdog, sensor-fault detection, and permanent LOCKOUT',
      'Datasheet-driven engineering: corrected NTC Beta constant (3435 K) avoiding a >3 °C systematic error',
      'Watchdog-safe blocking actuator control via chunked feeding — predictability over async complexity',
      'Mixed-signal KiCad layout with split ground planes and per-class track widths — DRC clean',
      'Validated end-to-end in Wokwi before committing to hardware; board fabricated and working',
    ],
    evidence: [
      'Fabricated PCB SE_TELCODEN_V1 — bring-up photos',
      'Wokwi simulation: wokwi.com/projects/468449090390286337',
      'KiCad project (schematic + PCB, DRC clean)',
      'MicroPython firmware modules + unit tests',
      'Technical evaluation report — Jaguar de México, 2026',
    ],
    coverImage: '/images/projects/jaguar-mx/hero.jpeg',
    coverFit: 'cover',
    gallery: [
      '/images/projects/jaguar-mx/board-02.jpeg',
      '/images/projects/jaguar-mx/board-03.jpeg',
      '/images/projects/jaguar-mx/pcb-render.jpeg',
      '/images/projects/jaguar-mx/schematic.jpeg',
    ],
    featured: true,
  },
  {
    id: 'p22',
    slug: 'canbus-fleet-telematics',
    title: 'CAN Bus Fleet Telematics — OBD-II Monitoring & Predictive Maintenance',
    subtitle: 'Embedded CAN Gateway + 4G Telematics for Vehicle Fleet Management',
    tagline:
      'Vehicle telematics system built on the CAN bus: an embedded gateway polls OBD-II PIDs and diagnostic trouble codes, streams them over 4G/MQTT, and feeds a fleet dashboard with predictive-maintenance alerts.',
    categories: ['embedded', 'firmware', 'iot'],
    classification: 'A',
    status: 'prototype',
    period: '2022 – 2023',
    institution: 'UPIITA-IPN — B.Eng. project',
    description: `Fleet-monitoring system developed during my bachelor's degree, following the standard methodology for automotive CAN/OBD-II integrations. An embedded gateway (STM32 + MCP2515 CAN controller + TJA1050 transceiver) connects to the vehicle's OBD-II port and communicates on the 500 kbit/s CAN 2.0B bus.

The gateway polls SAE J1979 mode-01 PIDs (RPM, vehicle speed, coolant temperature, MAF, throttle position) via the 0x7DF broadcast ID, decodes the standard scaling formulas, and reads diagnostic trouble codes (mode 03) with freeze-frame data. Frames are received in an interrupt service routine into a ring buffer, decoded, packaged as JSON, and transmitted through a 4G LTE telematics modem (UART AT commands) with GPS position to an MQTT broker.

The fleet backend stores time-series data per vehicle and applies threshold- and trend-based rules on DTCs and sensor signals (e.g., sustained coolant temperature rise, misfire counts) to schedule predictive maintenance instead of reactive repairs. This project is documented here as a methodology reconstruction of the original academic work.`,
    hardware: [
      'STM32 (Cortex-M) gateway',
      'MCP2515 CAN controller (SPI) + TJA1050 transceiver',
      'OBD-II (SAE J1962) vehicle connector',
      '4G LTE telematics modem (AT over UART)',
      'GPS/GNSS module (NMEA)',
    ],
    firmware: [
      'C embedded — CAN driver with ISR + ring buffer',
      'OBD-II PID polling (mode 01) + DTC readout (mode 03)',
      'Standard PID decode formulas (A·256+B scaling)',
      'JSON telemetry packaging → MQTT over 4G',
      'Watchdog + reconnection logic for cellular link',
    ],
    software: [
      'MQTT broker + time-series storage',
      'Fleet dashboard (per-vehicle KPIs, map, alerts)',
      'Python analysis for maintenance-trend rules',
    ],
    protocols: ['CAN 2.0B (500 kbit/s)', 'OBD-II — SAE J1979', 'ISO-TP (ISO 15765-2)', 'MQTT over 4G LTE', 'UART (AT commands)', 'NMEA (GPS)'],
    metrics: [
      { label: 'CAN bus rate', value: '500', unit: 'kbit/s' },
      { label: 'PIDs monitored', value: '8+', unit: 'per vehicle' },
      { label: 'Sampling', value: '1', unit: 'Hz per PID' },
    ],
    process: [
      {
        title: 'CAN bus fundamentals and frame sniffing',
        description: 'Characterized the vehicle bus: 11-bit identifiers, 500 kbit/s bit rate, arbitration, and passive listening with the MCP2515 in listen-only mode before any transmission.',
        image: '/images/projects/canbus-fleet/hero.jpeg',
      },
      {
        title: 'OBD-II PID polling',
        description: 'Implemented SAE J1979 mode-01 requests to the 0x7DF broadcast address and parsing of 0x7E8 responses — RPM, speed, coolant temp, MAF — using the standard decode formulas.',
        image: '/images/projects/canbus-fleet/obd-pipeline.jpeg',
      },
      {
        title: 'Gateway firmware',
        description: 'Interrupt-driven CAN reception into a ring buffer, PID scheduler at 1 Hz, DTC readout (mode 03) with freeze frames, and JSON packaging of the decoded signals.',
      },
      {
        title: '4G telematics uplink',
        description: 'Cellular modem driven by AT commands over UART: session management, MQTT publishing with QoS, GPS position stamping, and reconnection/watchdog logic for coverage gaps.',
      },
      {
        title: 'Fleet dashboard and predictive maintenance',
        description: 'Per-vehicle time series with threshold and trend rules on DTCs and signals (sustained overheating, misfires) generating maintenance alerts before failures occur.',
      },
    ],
    highlights: [
      'Real automotive protocol stack: CAN 2.0B, SAE J1979 PIDs, DTCs, ISO-TP',
      'Interrupt-driven CAN reception with ring buffer — no dropped frames at bus speed',
      '4G/MQTT telematics link with GPS stamping and reconnection logic',
      'Predictive maintenance from DTC trends instead of reactive repair',
      'Same methodology used in production fleet-management platforms',
    ],
    evidence: [
      'Academic project — UPIITA-IPN (methodology reconstruction)',
      'Architecture and OBD-II pipeline diagrams',
      'Standard-based design: SAE J1979 / ISO 15765',
    ],
    coverImage: '/images/projects/canbus-fleet/hero.jpeg',
    coverFit: 'contain',
    gallery: ['/images/projects/canbus-fleet/obd-pipeline.jpeg'],
    featured: true,
  },
  {
    id: 'p23',
    slug: 'cubesat-ground-station',
    title: 'Remote Satellite Monitoring — Educational CubeSat Ground Station',
    subtitle: 'Fork of an Open-Source Ground Station Adapted to Track National Educational CubeSats',
    tagline:
      'Forked the open-source sgoudelis/ground-station project and adapted it into a remotely accessible ground station: SDR reception, TLE-based pass tracking, and telemetry decoding for national educational CubeSat missions.',
    categories: ['aerospace', 'iot', 'embedded'],
    classification: 'A',
    status: 'completed',
    period: '2024 – 2025',
    institution: 'CO.DE Aerospace — educational collaboration',
    description: `Remote satellite-monitoring station built by forking the open-source ground-station project (github.com/sgoudelis/ground-station) and adapting it to Mexican educational CubeSat missions.

The station combines a VHF/UHF antenna with an RTL-SDR receiver on a Raspberry Pi station server. Orbit propagation from TLE sets schedules upcoming passes, applies Doppler correction during reception, and captures beacon/telemetry downlinks (AFSK/AX.25 framing). Decoded frames — battery voltages, temperatures, beacon counters — are stored and exposed through a web interface so student teams can monitor their satellites remotely without being physically at the station.

The work connects hands-on RF/embedded infrastructure with the small-satellite research line presented at IAC 2024 (small satellite missions symposium).`,
    hardware: [
      'RTL-SDR receiver (VHF/UHF)',
      'Yagi antenna + az/el rotor',
      'Raspberry Pi — station server',
    ],
    firmware: [
      'Pass scheduler from TLE orbit propagation',
      'Doppler-corrected SDR capture',
      'AFSK demodulation + AX.25 frame decoding',
    ],
    software: [
      'Fork of sgoudelis/ground-station (Python)',
      'Web dashboard — telemetry history & beacon health',
      'TLE tracking / pass prediction tooling',
    ],
    protocols: ['AX.25', 'AFSK', 'HTTP/REST', 'TLE / SGP4 propagation'],
    process: [
      {
        title: 'Fork and station bring-up',
        description: 'Forked the open-source ground-station codebase, deployed it on a Raspberry Pi with an RTL-SDR, and validated reception with known amateur-satellite beacons.',
        image: '/images/projects/ground-station/hero.jpeg',
      },
      {
        title: 'Tracking and Doppler correction',
        description: 'TLE-based pass prediction for the target CubeSats, with frequency correction applied across each pass for clean captures.',
      },
      {
        title: 'Telemetry decoding',
        description: 'AFSK/AX.25 decoding of beacon frames into structured telemetry (battery, temperature, counters) stored per pass.',
      },
      {
        title: 'Remote access for student teams',
        description: 'Web interface exposing pass history and decoded telemetry so national educational CubeSat teams monitor their missions remotely.',
      },
    ],
    highlights: [
      'Open-source contribution model: fork, adapt, and operate a real ground station',
      'End-to-end RF chain: antenna → SDR → demodulation → decoded telemetry',
      'Remote, shared access for educational CubeSat teams',
      'Connected to small-satellite research line presented at IAC 2024',
    ],
    evidence: [
      'Base project: github.com/sgoudelis/ground-station (forked)',
      'Decoded telemetry logs from tracked passes',
      'IAC 2024 small-satellite research line (DOI: 10.52202/078365-0120)',
    ],
    githubUrl: 'https://github.com/sgoudelis/ground-station',
    coverImage: '/images/projects/ground-station/hero.jpeg',
    coverFit: 'contain',
    featured: true,
  },
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

The signal conditioning PCB was designed in KiCad and fabricated in-house using a CNC milling setup built from a converted FDM 3D printer — directly applying the milling machine project output to a real embedded system.

The project was published in Revista Hacia el Espacio (2024) and formally presented at UPIITA–IPN and the 2023 Planetario Luis Enrique Erro poster session.`,
    hardware: [
      'ESP32 (Tensilica Xtensa LX6)',
      'STM32 (Cortex-M)',
      'HX711 — Load Cell Amplifier',
      'MAX6675 — Thermocouple-to-SPI',
      'Pressure transducers (0–150 psi)',
      'Wheatstone bridge signal conditioning',
      'Custom PCB — signal conditioning board (KiCad-designed, CNC-milled in-house)',
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
    ],
    highlights: [
      'Full hardware-to-software system built from scratch',
      'Signal conditioning PCB designed in KiCad and milled in-house with converted 3D printer CNC setup',
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
    coverPosition: 'object-[50%_-10px]',
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
    title: 'Adaptive PID Controller — Auto-Tuning on STM32H753ZI',
    subtitle: 'Digital Control on Furuta Pendulum with Extended Ziegler-Nichols Auto-Tuning, −35% Settling Time',
    tagline:
      'Self-tuning PID controller implemented in C++ on STM32H753ZI (Cortex-M7), applied to a Furuta rotary inverted pendulum — achieving a 35% reduction in settling time over manual tuning.',
    categories: ['embedded', 'firmware', 'control'],
    classification: 'A',
    status: 'completed',
    period: '2023 – 2024',
    institution: 'IPN — Laboratory of Control & Dynamic Systems',
    description: `Digital PID controller with an extended Ziegler-Nichols auto-tuning algorithm, implemented in embedded C++ on the STM32H753ZI (ARM Cortex-M7, up to 480 MHz). Applied to a Furuta rotary inverted pendulum — a classic underactuated nonlinear control benchmark. The controller reads encoder and sensor feedback via ADC and drives the pendulum motor through PWM. The auto-tuning routine identifies the linearized plant dynamics online and updates PID gains without interrupting operation. Fixed-point arithmetic is used in the real-time ISR for deterministic timing. Transient response is visualized in LabVIEW over UART.`,
    hardware: [
      'STM32H753ZI (Cortex-M7, up to 480 MHz) — primary controller',
      'Furuta pendulum (rotary inverted pendulum) — plant',
      'ADC — encoder / sensor feedback',
      'PWM output — motor actuator',
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
      'Applied to Furuta rotary inverted pendulum — classic nonlinear underactuated system',
      'STM32H753ZI (Cortex-M7) running real-time control loop at 1 kHz',
      'Online auto-tuning — identifies plant dynamics without stopping operation',
      'Fixed-point arithmetic in ISR for deterministic real-time behavior',
      'Quantified 35% improvement in settling time vs. manual tuning',
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
    subtitle: 'Hardware Hack: FDM Printer Converted to CNC Milling Setup — Full PCB Design-to-Fabrication Cycle',
    tagline:
      'Converted a consumer FDM 3D printer into a CNC-style milling setup, then designed (KiCad) and milled a functional PCB for a switching power supply used in a real UPIITA-IPN project (~2019).',
    categories: ['hardware', 'firmware', 'embedded'],
    classification: 'A',
    status: 'prototype',
    period: '~2019',
    institution: 'Personal Lab / UPIITA-IPN',
    description: `Converted a consumer FDM 3D printer into a CNC-style milling setup by removing the extruder assembly and mounting a high-speed rotary tool (mototool) as the spindle, and replacing the original 3D printer controller board with a GRBL-compatible CNC shield. Ran calibration and depth-cutting tests on wood to validate motion control and cutting depth before milling on copper-clad board.

Used the resulting setup to design and mill multiple real PCBs, including: (1) a mini switching power supply PCB (KiCad layout, built following reference designs) to power multiple Arduino Nano boards — integrated into a signal switcher/selector circuit (LEDs and switches) at UPIITA-IPN; and (2) the custom signal conditioning PCB for the Rocket Motor DAQ system (p01), which integrates pressure transducers, thermocouples, and load cell amplifiers.

This project covers a complete design-to-fabrication cycle: KiCad schematic & layout → G-code via FlatCAM → milling with the converted machine → functional circuit. It directly demonstrates hands-on PCB design with a real EDA tool and in-house fabrication applied to real projects (~2019).`,
    hardware: [
      '3D Printer chassis (modified)',
      'High-speed rotary tool (mototool) — spindle replacement',
      'CNC shield (GRBL-compatible) — replaced original printer controller',
      'Stepper motors (X/Y/Z axes — reused from printer)',
      'Copper-clad single-sided FR4 board',
    ],
    firmware: [
      'GRBL-compatible CNC shield (configured for milling)',
      'G-code generation via FlatCAM (from KiCad Gerbers)',
    ],
    software: [
      'KiCad (PCB schematic & layout)',
      'FlatCAM (CAM — G-code from PCB Gerbers)',
      'Candle / UGS (G-code sender)',
    ],
    highlights: [
      'Complete hardware conversion: extruder removed, mototool spindle mounted, CNC shield installed',
      'Wood calibration tests before milling copper — validated motion control and cutting depth',
      'Designed PCB layouts in KiCad — full EDA workflow from schematic to Gerber to G-code',
      'Milled PCB for mini switching power supply → integrated into signal switcher at UPIITA-IPN',
      'Milled the signal conditioning PCB used in the Rocket Motor DAQ system (p01) — in-house fabrication applied to a real published project',
    ],
    evidence: [
      'KiCad project files (schematic + layout)',
      'Photos of machine conversion and milled PCB (pending upload)',
      'Fabricated PCB — switching power supply for Arduino Nano boards',
    ],
    coverImage: '/images/projects/pcb-mill/hero.jpeg',
    gallery: [
      '/images/projects/pcb-mill/machine.jpeg',
      '/images/projects/pcb-mill/pcb-result.jpeg',
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
    categories: ['iot'],
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
    categories: ['ai'],
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
    categories: ['ai'],
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

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  embedded: 'Embedded Systems',
  firmware: 'Firmware',
  iot: 'IoT',
  aerospace: 'Aerospace',
  ai: 'AI / Automation',
  hardware: 'Hardware Design',
  control: 'Control Systems',
};

const PROJECT_TRANSLATIONS_ES: Record<string, {
  title: string;
  subtitle: string;
  tagline: string;
  institution: string;
  description: string;
  highlights: string[];
  evidence: string[];
  metricsLabels?: string[];
  hardware?: string[];
  firmware?: string[];
  process?: { title: string; description: string }[];
}> = {
  'tesis-banco-pruebas': {
    title: 'Tesis de Maestría — Banco de Pruebas para Cohetes Experimentales de Combustible Sólido',
    subtitle: 'Caracterización y Diseño: Estructura Soldada, DAQ Distribuido con ESP32 y App de Monitoreo en Tiempo Real',
    tagline: 'Ciclo completo de ingeniería para un banco de pruebas de motores cohete: diseño estructural CAD + FEA, fabricación soldada propia, red distribuida de sensores con ESP32 (empuje, presión, temperatura) y app inalámbrica de monitoreo en tiempo real.',
    institution: 'IPN — UPIITA · Maestría en Tecnología Avanzada',
    description: `Tesis de maestría (defendida en mayo 2026, UPIITA–IPN): "Caracterización y Diseño de un Banco de Pruebas para Cohetes Experimentales de Combustible Sólido". El proyecto cubre el ciclo completo de ingeniería de un banco de pruebas estáticas para motores cohete clase F–J.

La estructura es un marco soldado de acero A36 de 75×75×75 cm diseñado en SolidWorks y validado con FEA: esfuerzo máximo de von Mises de 7.13 MPa contra una fluencia de 250 MPa (factor de seguridad 4:1 a 2000 N de empuje de diseño con factor dinámico de 1.5). La fabricación — corte, soldadura y pintura — se realizó internamente.

La instrumentación es un sistema embebido distribuido: un ESP32 principal coordina nodos de celdas de carga (HX711, ADC de 24 bits), un canal de presión (transductor 0–1.2 MPa), termopares tipo K por MAX6675/SPI y un ESP32-CAM, comunicados por un bus UART. El nodo principal ejecuta filtrado digital, empaquetado JSON y un servidor WebSocket sobre un punto de acceso WiFi local, transmitiendo datos en vivo a un dashboard móvil/web con checklist de pre-lanzamiento, rutinas de calibración, gráficas en tiempo real y exportación CSV. Ambos canales de medición se validaron punto a punto contra instrumentos de referencia.

Siguiente fase (en desarrollo): consolidar la electrónica validada en protoboard en un esquemático y PCB dedicados en KiCad para la cadena de adquisición del banco.`,
    highlights: [
      'Ingeniería de ciclo completo: CAD → FEA → fabricación soldada → electrónica → firmware → mediciones validadas',
      'Arquitectura distribuida de ESP32 con nodos dedicados de celdas de carga y nodo de cámara sobre bus UART',
      'AP WiFi propio + dashboard WebSocket — sin necesidad de red externa en el sitio de prueba',
      'Validación punto a punto de los canales de presión y empuje contra instrumentos de referencia',
      'Estructura validada con factor de seguridad 4:1 para motores clase F–J (carga de diseño de 2000 N)',
    ],
    evidence: [
      'Documento de tesis de maestría — UPIITA–IPN, mayo 2026',
      'Reportes FEA (von Mises, desplazamiento) y modelos CAD',
      'Gráficas de validación de canales (presión y empuje)',
      'Capturas de la app de monitoreo y fotos de fabricación',
      'Esquemático + PCB dedicados en KiCad — en desarrollo',
    ],
    metricsLabels: ['Factor de seguridad estructural', 'Esfuerzo máx. von Mises', 'Canal de empuje'],
    hardware: [
      'ESP32 principal + nodos ESP32 de celdas de carga',
      'HX711 ADC 24 bits — 2× celdas de 50 kg (empuje)',
      'Transductor de presión 0–1.2 MPa (presión de cámara)',
      'MAX6675 + termopar tipo K (SPI)',
      'ESP32-CAM — registro visual de pruebas',
      'Marco soldado de acero A36 75×75×75 cm (FS 4:1)',
    ],
    firmware: [
      'C/C++ (ESP-IDF / framework de Arduino)',
      'Nodos distribuidos sobre bus UART (115200 bps)',
      'Filtrado digital + empaquetado JSON',
      'Servidor WebSocket sobre AP WiFi local',
      'Rutinas de calibración y tara (peso conocido)',
    ],
    process: [
      { title: 'Diseño CAD de la estructura', description: 'Modelo en SolidWorks del marco de 75×75×75 cm para motores clase F–J: trayectorias de carga, placa de montaje del motor y ubicación de instrumentación diseñadas para 2000 N de empuje más factor dinámico de 1.5.' },
      { title: 'Validación estructural FEA', description: 'Análisis de esfuerzos von Mises bajo carga dinámica: 7.13 MPa máximo vs. 250 MPa de fluencia del acero A36 — factor de seguridad 4:1, desplazamiento máximo de 2.49 mm, con atención crítica a las uniones soldadas.' },
      { title: 'Fabricación soldada propia', description: 'Corte, soldadura de arco y acabado del marco de acero realizados personalmente en el taller — el mismo ingeniero que simuló la estructura la fabricó.' },
      { title: 'Arquitectura electrónica distribuida', description: 'Diseño por bloques del DAQ distribuido: ESP32 principal + nodos de celdas de carga (HX711) + canales de presión y termopar + ESP32-CAM, enlazados por bus UART con salida por AP WiFi.' },
      { title: 'Cableado y prototipado en protoboard', description: 'Diagrama de conexiones completo (HX711 ×2, MAX6675, transductor de presión 0.5–4.5 V) y puesta en marcha en protoboard de cada canal de sensado antes de la integración mecánica.' },
      { title: 'Integración mecánica', description: 'Montaje del motor, celdas de carga y arnés de sensores instalados en el marco soldado; el ruteo de sensores se mantuvo fuera de la trayectoria del escape.' },
      { title: 'Calibración y validación de canales', description: 'Validación punto a punto del canal de presión (error relativo dentro de límites en 100–700 kPa) y del canal de empuje (2 celdas de 50 kg, calibración con peso conocido) contra instrumentos de referencia.' },
      { title: 'App de monitoreo en tiempo real', description: 'Dashboard móvil/web servido desde el propio banco: secuencia de pre-lanzamiento (tara de propelente, tara general, calibración con peso conocido, URL de cámara), gráficas de empuje/presión en vivo y exportación CSV.' },
      { title: 'Siguiente fase: esquemático y PCB dedicados', description: 'La cadena de adquisición validada en protoboard se está consolidando en un esquemático y PCB dedicados en KiCad — la iteración final del hardware de la electrónica del banco.' },
    ],
  },
  'jaguar-mx-thermal-control': {
    title: 'Jaguar MX — Sistema de Extracción de Aire Caliente para Gabinetes de Telecomunicaciones',
    subtitle: 'FSM de Seguridad en RP2350, PCB Mixed-Signal en KiCad (0 Errores DRC) — Placa Fabricada SE_TELCODEN_V1',
    tagline: 'Sistema industrial de control térmico desarrollado para Jaguar de México: firmware FSM fail-safe en Seeed XIAO RP2350, adquisición dual NTC, actuador de compuertas por puente H, etapa de ventilador de 48 V — de la simulación en Wokwi a una PCB mixed-signal fabricada.',
    institution: 'Jaguar de México',
    description: `Desarrollo embebido completo (firmware, simulación, esquemático y PCB) de un sistema de extracción de aire caliente para gabinetes de telecomunicaciones, construido para la evaluación de ingeniería en sistemas embebidos de Jaguar de México — y fabricado como la placa SE_TELCODEN_V1.

El firmware es una FSM de seguridad en MicroPython (INIT → READING → COOLING / IDLE / ERROR / LOCKOUT) sobre un Seeed XIAO RP2350. Dos sensores NTC TT05 se leen mediante divisores de voltaje con conversión por ecuación Beta (B=3435 K según datasheet — no el genérico de 3950 K), validación de circuito abierto/corto y filtro trimmed-mean sobre un buffer circular. Un DIP switch selecciona 8 setpoints térmicos (40–75 °C) con histéresis de ±1 °C. El sistema acciona un actuador lineal FIT0803 (compuertas del gabinete) mediante un puente H TB6612FNG y un ventilador industrial MR1238E48B-FSR de 48 V mediante una etapa MOSFET aislada. Un watchdog de hardware de 8 s se mantiene alimentado durante el recorrido bloqueante de 3 s del actuador mediante alimentación en ráfagas inyectada al driver del puente H.

El diseño en KiCad separa estrictamente lo analógico/lógico de la etapa de potencia de 48 V: planos AGND/PGND divididos unidos en un solo net-tie, anchos de pista por net class (48 V a 1.5 mm) y anillos de guarda en las entradas ADC. DRC final: 0 errores, 0 avisos, 0 redes sin rutear. La placa fue manufacturada y puesta en marcha con éxito.`,
    highlights: [
      'Firmware fail-safe: estados seguros, watchdog de hardware, detección de falla de sensores y LOCKOUT permanente',
      'Ingeniería guiada por datasheet: constante Beta del NTC corregida (3435 K) evitando un error sistemático >3 °C',
      'Control bloqueante del actuador seguro para el watchdog vía alimentación en ráfagas — predictibilidad sobre complejidad asíncrona',
      'Layout mixed-signal en KiCad con planos de tierra divididos y anchos por clase — DRC limpio',
      'Validado de extremo a extremo en Wokwi antes de comprometer hardware; placa fabricada y funcionando',
    ],
    evidence: [
      'PCB fabricada SE_TELCODEN_V1 — fotos de puesta en marcha',
      'Simulación Wokwi: wokwi.com/projects/468449090390286337',
      'Proyecto KiCad (esquemático + PCB, DRC limpio)',
      'Módulos de firmware MicroPython + pruebas unitarias',
      'Reporte de evaluación técnica — Jaguar de México, 2026',
    ],
    metricsLabels: ['DRC final', 'Estados de seguridad FSM', 'Rango de setpoints'],
    hardware: [
      'Seeed XIAO RP2350 (compatible RP2040)',
      '2× NTC TT05 10K (B=3435 K) + divisores de voltaje',
      'Puente H TB6612FNG → actuador lineal FIT0803',
      'Etapa MOSFET → ventilador MR1238E48B-FSR 48 V',
      'DIP switch — 8 setpoints térmicos (40–75 °C)',
      'PCB fabricada SE_TELCODEN_V1 (etapas de relé y buck)',
    ],
    firmware: [
      'MicroPython — estructura modular OOP (fsm / adc_ntc / hbridge)',
      'FSM de seguridad: INIT · READING · COOLING · IDLE · ERROR · LOCKOUT',
      'Watchdog de hardware de 8 s con alimentación en ráfagas (500 ms)',
      'Filtro trimmed-mean sobre buffer circular de ADC',
      'Detección de fallas de sensor (abierto/corto, ventana de validez 10–130 °C)',
    ],
    process: [
      { title: 'Requerimientos y arquitectura FSM', description: 'Tradujo el requerimiento industrial (enfriar un gabinete de telecom solo cuando la temperatura interna supera el setpoint y la temperatura exterior) a una FSM de seguridad de 6 estados con estado seguro ERROR y LOCKOUT permanente tras 5 recuperaciones fallidas.' },
      { title: 'Firmware en MicroPython', description: 'Firmware modular OOP: driver NTC con ecuación Beta y detección de abierto/corto, buffer circular con trimmed-mean, driver de puente H con alimentación del watchdog inyectada como callback para que el recorrido de 3 s del actuador nunca dispare el WDT de 8 s.' },
      { title: 'Simulación completa en Wokwi', description: 'Simulación en RP2040 con chip custom del TB6612FNG, LEDs en antiparalelo para visualizar la polaridad del puente H, inyección de comandos seriales (SET/TEMP/EXT) y retroalimentación térmica simulada cerrando el ciclo completo COOLING → IDLE.' },
      { title: 'Esquemático mixed-signal en KiCad', description: 'Esquemático legible por bloques: lado lógico/analógico (MCU, LDO, acondicionamiento NTC, DIP switch) y lado de potencia (puente H, etapa MOSFET de 48 V), con AGND/PGND unidos en un solo net-tie.' },
      { title: 'Layout de PCB — separación analógico vs. potencia', description: 'Net classes por dominio (48 V a 1.5 mm, 5 V a 1.0 mm, señal 3V3 a 0.4 mm), planos de tierra divididos, anillos de guarda en pistas ADC, conectores y test points al borde de la placa. DRC final: 0 errores, 0 avisos, 0 sin rutear.' },
      { title: 'Fabricación y puesta en marcha', description: 'La placa SE_TELCODEN_V1 fue manufacturada y puesta en marcha: XIAO RP2350 montado, etapas de relé y buck pobladas, y el arnés etiquetado (motor, límites, NTCs, ventilador) conectado para pruebas funcionales.' },
    ],
  },
  'canbus-fleet-telematics': {
    title: 'Telemática Vehicular CAN Bus — Monitoreo OBD-II y Mantenimiento Predictivo',
    subtitle: 'Gateway CAN Embebido + Telemática 4G para Gestión de Flotas Vehiculares',
    tagline: 'Sistema de telemática vehicular sobre el bus CAN: un gateway embebido consulta PIDs OBD-II y códigos de diagnóstico, los transmite por 4G/MQTT y alimenta un dashboard de flota con alertas de mantenimiento predictivo.',
    institution: 'UPIITA-IPN — Proyecto de licenciatura',
    description: `Sistema de monitoreo de flotas desarrollado durante mi licenciatura, siguiendo la metodología estándar para integraciones automotrices CAN/OBD-II. Un gateway embebido (STM32 + controlador CAN MCP2515 + transceptor TJA1050) se conecta al puerto OBD-II del vehículo y se comunica en el bus CAN 2.0B a 500 kbit/s.

El gateway consulta PIDs del modo 01 de SAE J1979 (RPM, velocidad, temperatura de refrigerante, MAF, posición del acelerador) mediante el ID de difusión 0x7DF, decodifica las fórmulas de escalamiento estándar y lee códigos de diagnóstico (modo 03) con datos de freeze frame. Las tramas se reciben en una rutina de interrupción hacia un ring buffer, se decodifican, se empaquetan como JSON y se transmiten mediante un módem telemático 4G LTE (comandos AT por UART) con posición GPS hacia un broker MQTT.

El backend de flota almacena series de tiempo por vehículo y aplica reglas por umbral y tendencia sobre DTCs y señales (p. ej., aumento sostenido de temperatura de refrigerante, conteo de misfires) para programar mantenimiento predictivo en lugar de reparaciones reactivas. Este proyecto se documenta aquí como una reconstrucción metodológica del trabajo académico original.`,
    highlights: [
      'Stack real de protocolos automotrices: CAN 2.0B, PIDs SAE J1979, DTCs, ISO-TP',
      'Recepción CAN por interrupciones con ring buffer — sin tramas perdidas a velocidad de bus',
      'Enlace telemático 4G/MQTT con estampado GPS y lógica de reconexión',
      'Mantenimiento predictivo desde tendencias de DTCs en lugar de reparación reactiva',
      'Misma metodología usada en plataformas de gestión de flotas en producción',
    ],
    evidence: [
      'Proyecto académico — UPIITA-IPN (reconstrucción metodológica)',
      'Diagramas de arquitectura y del pipeline OBD-II',
      'Diseño basado en estándares: SAE J1979 / ISO 15765',
    ],
    metricsLabels: ['Velocidad del bus CAN', 'PIDs monitoreados', 'Muestreo'],
    hardware: [
      'Gateway STM32 (Cortex-M)',
      'Controlador CAN MCP2515 (SPI) + transceptor TJA1050',
      'Conector vehicular OBD-II (SAE J1962)',
      'Módem telemático 4G LTE (AT por UART)',
      'Módulo GPS/GNSS (NMEA)',
    ],
    firmware: [
      'C embebido — driver CAN con ISR + ring buffer',
      'Consulta de PIDs OBD-II (modo 01) + lectura de DTCs (modo 03)',
      'Fórmulas estándar de decodificación de PIDs (escala A·256+B)',
      'Empaquetado de telemetría JSON → MQTT sobre 4G',
      'Watchdog + lógica de reconexión para el enlace celular',
    ],
    process: [
      { title: 'Fundamentos de CAN bus y sniffing de tramas', description: 'Caracterización del bus del vehículo: identificadores de 11 bits, velocidad de 500 kbit/s, arbitraje y escucha pasiva con el MCP2515 en modo listen-only antes de cualquier transmisión.' },
      { title: 'Consulta de PIDs OBD-II', description: 'Implementación de solicitudes modo 01 de SAE J1979 a la dirección de difusión 0x7DF y parseo de respuestas 0x7E8 — RPM, velocidad, temperatura de refrigerante, MAF — usando las fórmulas estándar de decodificación.' },
      { title: 'Firmware del gateway', description: 'Recepción CAN por interrupciones hacia un ring buffer, planificador de PIDs a 1 Hz, lectura de DTCs (modo 03) con freeze frames y empaquetado JSON de las señales decodificadas.' },
      { title: 'Enlace telemático 4G', description: 'Módem celular controlado por comandos AT sobre UART: gestión de sesión, publicación MQTT con QoS, estampado de posición GPS y lógica de reconexión/watchdog para huecos de cobertura.' },
      { title: 'Dashboard de flota y mantenimiento predictivo', description: 'Series de tiempo por vehículo con reglas de umbral y tendencia sobre DTCs y señales (sobrecalentamiento sostenido, misfires) generando alertas de mantenimiento antes de que ocurran fallas.' },
    ],
  },
  'cubesat-ground-station': {
    title: 'Monitoreo Satelital Remoto — Estación Terrena para CubeSats Educativos',
    subtitle: 'Fork de una Estación Terrena Open-Source Adaptada para Rastrear CubeSats Educativos Nacionales',
    tagline: 'Fork del proyecto open-source sgoudelis/ground-station adaptado como estación terrena con acceso remoto: recepción SDR, rastreo de pases basado en TLE y decodificación de telemetría para misiones CubeSat educativas nacionales.',
    institution: 'CO.DE Aerospace — colaboración educativa',
    description: `Estación de monitoreo satelital remoto construida haciendo fork del proyecto open-source ground-station (github.com/sgoudelis/ground-station) y adaptándolo a misiones CubeSat educativas mexicanas.

La estación combina una antena VHF/UHF con un receptor RTL-SDR sobre un servidor de estación Raspberry Pi. La propagación orbital desde conjuntos TLE agenda los próximos pases, aplica corrección Doppler durante la recepción y captura los enlaces de bajada de beacon/telemetría (tramas AFSK/AX.25). Las tramas decodificadas — voltajes de batería, temperaturas, contadores de beacon — se almacenan y exponen mediante una interfaz web para que los equipos estudiantiles monitoreen sus satélites de forma remota sin estar físicamente en la estación.

El trabajo conecta la infraestructura práctica RF/embebida con la línea de investigación de pequeños satélites presentada en el IAC 2024 (simposio de misiones de pequeños satélites).`,
    highlights: [
      'Modelo de contribución open-source: hacer fork, adaptar y operar una estación terrena real',
      'Cadena RF de extremo a extremo: antena → SDR → demodulación → telemetría decodificada',
      'Acceso remoto y compartido para equipos CubeSat educativos',
      'Conectado con la línea de investigación de pequeños satélites presentada en IAC 2024',
    ],
    evidence: [
      'Proyecto base: github.com/sgoudelis/ground-station (con fork)',
      'Registros de telemetría decodificada de pases rastreados',
      'Línea de investigación de pequeños satélites IAC 2024 (DOI: 10.52202/078365-0120)',
    ],
    hardware: [
      'Receptor RTL-SDR (VHF/UHF)',
      'Antena Yagi + rotor az/el',
      'Raspberry Pi — servidor de estación',
    ],
    firmware: [
      'Planificador de pases desde propagación orbital TLE',
      'Captura SDR con corrección Doppler',
      'Demodulación AFSK + decodificación de tramas AX.25',
    ],
    process: [
      { title: 'Fork y puesta en marcha de la estación', description: 'Fork del código open-source de la estación terrena, desplegado en una Raspberry Pi con RTL-SDR y validado recibiendo beacons conocidos de satélites de radioaficionados.' },
      { title: 'Rastreo y corrección Doppler', description: 'Predicción de pases basada en TLE para los CubeSats objetivo, con corrección de frecuencia aplicada durante cada pase para capturas limpias.' },
      { title: 'Decodificación de telemetría', description: 'Decodificación AFSK/AX.25 de tramas de beacon a telemetría estructurada (batería, temperatura, contadores) almacenada por pase.' },
      { title: 'Acceso remoto para equipos estudiantiles', description: 'Interfaz web que expone el historial de pases y la telemetría decodificada para que los equipos CubeSat educativos nacionales monitoreen sus misiones de forma remota.' },
    ],
  },
  'rocket-propulsion-daq': {
    title: 'Banco de Pruebas de Propulsión Cohete — Sistema DAQ',
    subtitle: 'Adquisición de Datos e Instrumentación para Motores Cohete de Combustible Sólido',
    tagline: 'Hardware DAQ personalizado + firmware embebido para medición en tiempo real de presión de cámara, temperatura de boquilla y empuje durante pruebas de quemado estático.',
    institution: 'Instituto Politécnico Nacional — UPIITA',
    description: `Diseñó e implementó un sistema completo de adquisición de datos para un banco de pruebas de motores cohete de combustible sólido. El sistema integra transductores de presión, termopares tipo K y celdas de carga en una placa de acondicionamiento de señal personalizada. El firmware escrito en C/C++ en ESP32 y STM32 maneja el muestreo ADC multicanal, la fusión de sensores y la transmisión de datos en tiempo real. El flujo de análisis de datos en Python y LabVIEW procesa los resultados experimentales para la validación térmica y estructural.

La PCB de acondicionamiento de señal fue diseñada en KiCad y fabricada internamente con el setup de fresado CNC construido a partir de una impresora 3D FDM convertida — aplicando directamente el output del proyecto de fresadora a un sistema embebido real publicado.

El proyecto fue publicado en la Revista Hacia el Espacio (2024) y presentado formalmente en UPIITA-IPN y en la sesión de carteles del Planetario Luis Enrique Erro de 2023.`,
    highlights: [
      'Sistema completo de hardware a software construido desde cero',
      'PCB de acondicionamiento de señal diseñada en KiCad y fresada internamente con setup CNC convertido',
      'Validación integrada de análisis FEA térmico-estructural con ANSYS',
      'Publicado en revista nacional arbitrada (Revista Hacia el Espacio, 2024)',
      'Presentado en UPIITA-IPN y sesión de póster científico en CDA-IPN',
    ],
    evidence: [
      'Publicación: Revista Hacia el Espacio, 2024',
      'Presentación: UPIITA-IPN, marzo de 2024',
      'Póster: Planetario Luis Enrique Erro, CDA-IPN, 2023',
      'Datos experimentales e informes de análisis',
      'Fotos de hardware y videos de pruebas',
    ],
    metricsLabels: ['Tasa de muestreo', 'Rango de temperatura', 'Rango de presión'],
    hardware: [
      'ESP32 (Tensilica Xtensa LX6)',
      'STM32 (Cortex-M)',
      'HX711 — Amplificador de celda de carga',
      'MAX6675 — Termopar a SPI',
      'Transductores de presión (0–150 psi)',
      'Acondicionamiento de señal con puente de Wheatstone',
      'PCB personalizada — placa de acondicionamiento de señal',
    ],
    firmware: [
      'C/C++ bare-metal',
      'Controladores UART / SPI / I2C',
      'Muestreo ADC multicanal',
      'Lectura de sensores guiada por interrupciones',
      'Transmisión de datos en tiempo real a PC',
    ],
  },
  'mqtt-telemetry-propulsion': {
    title: 'Telemetría Inalámbrica en Tiempo Real — Pruebas de Motores Cohete',
    subtitle: 'Telemetría MQTT con ESP32 con Latencia <50ms para Monitoreo de Pruebas de Fuego Estático',
    tagline: 'Sistema embebido inalámbrico que transmite parámetros críticos de propulsión en tiempo real durante pruebas de fuego estático, con panel web en vivo y alertas automáticas de seguridad.',
    institution: 'Instituto Politécnico Nacional',
    description: `Extensión de telemetría inalámbrica del sistema DAQ para bancos de prueba de motores cohete. Un nodo ESP32 lee sensores de presión de cámara, temperatura de boquilla y empuje y publica datos a través de MQTT a un broker local en tiempo real. Un panel web muestra gráficos en vivo y activa alertas de seguridad cuando los valores exceden los umbrales operativos. El sistema logra una latencia de extremo a extremo de menos de 50 ms, crítica para la seguridad de las pruebas.`,
    highlights: [
      'Latencia inferior a 50 ms en entorno industrial no controlado',
      'Alertas automáticas de fuera de rango con umbrales configurables',
      'Soporte de actualización de firmware OTA — sin necesidad de acceso físico',
      'Panel web en tiempo real con almacenamiento de datos históricos',
    ],
    evidence: [
      'Código fuente embebido en C++',
      'Capturas de pantalla del panel web en vivo',
      'Registros de medición de latencia',
      'Integración con el banco de pruebas DAQ (P-01)',
    ],
    metricsLabels: ['Latencia extremo a extremo', 'Alcance de WiFi', 'Tasa de datos'],
    hardware: [
      'ESP32 (WiFi 2.4 GHz + BLE)',
      'Sensores de presión / temperatura / empuje',
    ],
    firmware: [
      'C++ (ESP-IDF / Framework de Arduino)',
      'Cliente MQTT (PubSubClient)',
      'Muestreo de sensores impulsado por ISR',
      'Temporizador Watchdog para seguridad',
      'Capacidad de actualización de firmware OTA',
    ],
  },
  'adaptive-pid-stm32': {
    title: 'Controlador PID Adaptativo — Auto-Sintonización en STM32H753ZI',
    subtitle: 'Control Digital en Péndulo de Furuta con Ziegler-Nichols Extendido, −35% Tiempo de Establecimiento',
    tagline: 'Controlador PID auto-sintonizable implementado en C++ en STM32H753ZI (Cortex-M7), aplicado a un péndulo de Furuta — logrando una reducción del 35% en el tiempo de establecimiento vs. sintonía manual.',
    institution: 'IPN — Laboratorio de Control y Sistemas Dinámicos',
    description: `Controlador PID digital con un algoritmo de auto-sintonización extendido de Ziegler-Nichols, implementado en C++ embebido en el STM32H753ZI (ARM Cortex-M7, hasta 480 MHz). Aplicado a un péndulo de Furuta (péndulo invertido rotatorio) — referencia clásica de control no lineal subactuado. El controlador lee la retroalimentación de encoders y sensores mediante ADC y controla el motor del péndulo por PWM. La rutina de auto-sintonización identifica la dinámica linealizada de la planta en línea y actualiza las ganancias del PID sin interrumpir la operación. Se utiliza aritmética de punto fijo en el ISR de tiempo real para garantizar comportamiento determinista. La respuesta transitoria se visualiza en LabVIEW a través de UART.`,
    highlights: [
      'Aplicado a péndulo de Furuta — sistema no lineal subactuado clásico de control',
      'STM32H753ZI (Cortex-M7) ejecutando lazo de control en tiempo real a 1 kHz',
      'Sintonización automática en línea — identifica dinámica de la planta sin detener la operación',
      'Aritmética de punto fijo en ISR para comportamiento determinista en tiempo real',
      'Mejora cuantificada del 35% en el tiempo de establecimiento vs. sintonización manual',
    ],
    evidence: [
      'Código fuente embebido en C++ (STM32)',
      'Capturas de pantalla de visualización en LabVIEW',
      'Datos de respuesta transitoria (antes/después)',
      'Modelo de MATLAB para la validación de sintonización',
    ],
    metricsLabels: ['Reducción de tiempo de establecimiento', 'Tasa de bucle de control', 'Reducción de sobreimpulso'],
    hardware: [
      'STM32H753ZI (Cortex-M7, hasta 480 MHz) — controlador primario',
      'Péndulo de Furuta (péndulo invertido rotatorio) — planta',
      'ADC — retroalimentación de encoder / sensores',
      'Salida PWM — actuador motor',
      'UART → Visualización en PC / LabVIEW',
    ],
    firmware: [
      'C++ embebido — STM32 HAL',
      'Sintonización automática extendida de Ziegler-Nichols',
      'Aritmética de punto fijo para ISR en tiempo real',
      'Registro UART a 115200 baudios',
      'Ganancias de PID configurables mediante interfaz serial',
    ],
  },
  '3d-printer-pcb-mill': {
    title: 'Conversión de Impresora 3D → Fresadora CNC',
    subtitle: 'Hack de Hardware: Impresora FDM Convertida en Setup CNC — Ciclo Completo Diseño-Fabricación de PCB',
    tagline: 'Convertí una impresora 3D FDM en un setup de fresado CNC, luego diseñé (KiCad) y fresé una PCB funcional para una fuente conmutada usada en un proyecto real de UPIITA-IPN (~2019).',
    institution: 'Laboratorio Personal / UPIITA-IPN',
    description: `Convertí una impresora 3D FDM de consumo en un setup de fresado CNC al desmontar el ensamblaje del extrusor y montar una herramienta rotativa de alta velocidad (mototool) como husillo, y reemplazar la tarjeta controladora original de la impresora por una shield CNC compatible con GRBL. Realicé pruebas de calibración y corte a distintas profundidades en madera para validar el control de movimiento antes de fresar en placa de cobre.

Usé el setup resultante para diseñar y fresar múltiples PCBs reales, entre ellas: (1) una PCB para mini fuente conmutada (layout en KiCad, siguiendo diseño de referencia) para alimentar varios Arduino Nano — integrada en un conmutador de señales (LEDs y switches) en UPIITA-IPN; y (2) la PCB de acondicionamiento de señal del sistema DAQ para banco de pruebas de motores cohete (p01), que integra transductores de presión, termopares y amplificadores de celda de carga.

Este proyecto cubre un ciclo completo de diseño a fabricación: esquemático y layout en KiCad → G-code con FlatCAM → fresado con la máquina convertida → circuito funcional. Demuestra fabricación de PCB en casa aplicada a proyectos reales publicados (~2019).`,
    highlights: [
      'Conversión completa de hardware: extrusor desmontado, husillo mototool montado, shield CNC instalada',
      'Pruebas de calibración en madera antes de fresar cobre — validación de control de movimiento y profundidad',
      'Layouts de PCB diseñados en KiCad — flujo EDA completo desde esquemático hasta Gerber y G-code',
      'PCB fresada para fuente conmutada mini → integrada en conmutador de señales en UPIITA-IPN',
      'PCB de acondicionamiento de señal del DAQ (p01) fresada internamente — fabricación en casa aplicada a proyecto publicado',
    ],
    evidence: [
      'Archivos de proyecto KiCad (esquemático + layout)',
      'Fotos de la conversión y PCB fresada (pendiente de subir)',
      'PCB fabricada — fuente conmutada para Arduino Nano',
    ],
    metricsLabels: ['Ciclo completo diseño-fabricación', 'Herramienta EDA', 'Aplicación real'],
    hardware: [
      'Chasis de impresora 3D (modificado)',
      'Herramienta rotativa de alta velocidad (mototool) — husillo',
      'Shield CNC compatible con GRBL — reemplazó controlador original',
      'Motores a pasos (ejes X/Y/Z — reutilizados de la impresora)',
      'Placa FR4 de una cara revestida de cobre',
    ],
    firmware: [
      'Shield CNC compatible con GRBL (configurada para fresado)',
      'Generación de G-code con FlatCAM (desde Gerbers de KiCad)',
    ],
  },
  'smartcity-iot-network': {
    title: 'Monitoreo Ambiental SmartCity — Red de Sensores IoT',
    subtitle: 'Red de Nodos de Sensores ESP32 Distribuidos para el Monitoreo Climático y de Calidad del Aire Urbano',
    tagline: 'Plataforma IoT de extremo a extremo: nodos de sensores distribuidos (ESP32 + MQ + BME280) → MQTT → Backend Flask/PostgreSQL → Panel web en vivo con informes PDF automatizados.',
    institution: 'Proyecto Independiente',
    description: `Red IoT distribuida para el monitoreo ambiental urbano. Cada nodo consta de un microcontrolador ESP32 conectado a sensores de calidad de gas (serie MQ) y un sensor ambiental BME280 (temperatura, humedad, presión atmosférica). Los nodos publican lecturas a través de MQTT a un broker central. Un backend de Flask/PostgreSQL almacena datos de series temporales y sirve un panel de Chart.js con notificaciones push e informes PDF semanales automatizados.`,
    highlights: [
      'Sistema completo de extremo a extremo: hardware → firmware → nube → panel web',
      'Informes semanales en PDF generados automáticamente',
      'Optimización de batería mediante ciclos de sueño profundo de ESP32',
      'Arquitectura de múltiples nodos ampliable',
    ],
    evidence: ['Capturas de pantalla del panel', 'Fotos de los nodos', 'Ejemplos de reportes automáticos'],
    metricsLabels: ['Extremo a extremo', 'Reportes en PDF', 'Escalabilidad'],
    hardware: [
      'ESP32 (múltiples nodos)',
      'Sensores de gas de la serie MQ (CO, CO2, GLP)',
      'BME280 (temperatura, humedad, presión)',
      'Gabinetes personalizados para despliegue en exteriores',
    ],
    firmware: [
      'C++ (Framework de Arduino)',
      'Publicación MQTT con QoS 1',
      'Sueño profundo entre lecturas (optimización de batería)',
      'Actualizaciones OTA',
    ],
  },
  'iot-monitoring-platform': {
    title: 'Plataforma de Monitoreo IoT de Grado de Producción',
    subtitle: 'API de Flask Full-Stack con Autenticación JWT, Despliegue en Docker y Panel en Tiempo Real',
    tagline: 'Plataforma web segura y contenedorizada para ingesta de datos de sensores IoT, control de acceso basado en roles, visualización en tiempo real e historial de eventos.',
    institution: 'Proyecto Independiente / IPN',
    description: `Plataforma de backend de grado de producción para la gestión de datos de sensores IoT. La API REST construida con Flask y SQLAlchemy maneja la ingesta de datos de nodos de sensores remotos. La autenticación utiliza JWT con control de acceso basado en roles (administrador, operador, espectador). Despliegue mediante Docker + Gunicorn con métricas de Prometheus, almacenamiento en caché de Redis y MySQL como base de datos principal. El panel de control proporciona visualización de sensores en tiempo real y alertas de eventos configurables.`,
    highlights: [
      'Lista para producción: Docker, Gunicorn, Prometheus, limitación de tasa',
      'Seguridad que cumple con OWASP: JWT, CSRF, HTTPS, bcrypt',
      'Control de acceso basado en roles con registro de auditoría',
      'Panel de control en tiempo real con límites de alerta configurables',
    ],
    evidence: ['Diagrama de arquitectura', 'Documentación de API', 'Configuración de Docker Compose'],
    metricsLabels: ['Tiempo de respuesta de API', 'Usuarios concurrentes'],
  },
  'jobhunter-ai-pipeline': {
    title: 'JobHunter — Automatización del Proceso de Aplicación de Empleo con IA',
    subtitle: 'FastAPI + Servidor MCP + Next.js + Bot de Telegram — Pipeline de IA Completo',
    tagline: 'Sistema de automatización local con un servidor MCP personalizado que coordina agentes de IA para buscar ofertas de empleo, generar CVs en LaTeX personalizados y gestionar aplicaciones.',
    institution: 'Proyecto Personal',
    description: `Sistema de automatización del proceso de búsqueda y aplicación de empleo construido con herramientas de IA modernas. Un backend de FastAPI gestiona las vacantes en SQLite y expone una API REST. Un servidor MCP (Model Context Protocol) personalizado coordina agentes de IA que analizan las ofertas de trabajo, generan CVs adaptados en LaTeX, los compilan a PDF mediante pdflatex y gestionan el proceso de revisión. Un panel de Next.js proporciona visibilidad en tiempo real. Un bot de Telegram permite el control del flujo desde dispositivos móviles. Sigue la disciplina de rutas absolutas y patrones de SQLite seguros para WAL.`,
    highlights: [
      'Servidor MCP personalizado para integración de herramientas LLM — tecnología de vanguardia 2026',
      'Completamente local — sin dependencias en la nube, preservando la privacidad',
      'CVs en LaTeX generados por IA compilados a PDF automáticamente',
      'Bot de Telegram para control móvil del pipeline',
      'SQLite seguro para WAL con disciplina de rutas absolutas',
    ],
    evidence: ['GitHub: github.com/smookymolina/JobHunter', 'README con diagrama de arquitectura completo'],
    metricsLabels: ['Fases del pipeline'],
  },
  'data-pipeline-reports': {
    title: 'Pipeline de Datos Experimentales — Reportes Técnicos Automatizados',
    subtitle: 'Pipeline de Python: Datos DAQ → Análisis Estadístico → Reportes PDF/Excel en <20 Minutos',
    tagline: 'Pipeline de procesamiento automatizado que reduce el tiempo de análisis posterior a la prueba de 6 horas a menos de 20 minutos — desde los datos sin procesar hasta los reportes técnicos en PDF + Excel.',
    institution: 'IPN — Proyecto de Investigación',
    description: `Pipeline de automatización en Python para procesar datos experimentales del banco de pruebas de propulsión cohete. Toma datos de sensores multicanal sin procesar como entrada, aplica procesamiento estadístico (media, varianza, FFT, análisis de tendencias) y genera reportes en PDF e informes en hojas de cálculo de Excel listos para publicación, todo sin intervención manual. Redujo el ciclo de análisis posterior a la prueba de 6 horas a menos de 20 minutos.`,
    highlights: [
      'Reducción del 94% en el tiempo de análisis posterior a la prueba',
      'Cero intervención manual desde los datos sin procesar hasta el reporte final',
      'Genera tanto PDF (para publicación) como Excel (para revisión del equipo)',
      'Métricas estadísticas: media, desviación estándar, FFT, detección de tendencias',
    ],
    evidence: ['Código fuente de Python', 'Muestras de reportes generados (PDF + Excel)', 'Comparación de tiempos antes/después'],
    metricsLabels: ['Reducción de tiempo de análisis', 'Tiempo: antes', 'Tiempo: después'],
  },
  'thermal-dynamics-simulator': {
    title: 'Simulador de Dinámica Térmica — Componentes de Propulsión Aeroespacial',
    subtitle: 'Modelos de Transferencia de Calor Validados con Datos de Banco de Pruebas Reales (<4% de Error RMS)',
    tagline: 'Modelo térmico computacional para componentes de propulsión cohete de combustible sólido: conducción, convección y radiación — validado con datos experimentales con un error RMS <4%.',
    institution: 'IPN — Grupo de Investigación Aeroespacial',
    description: `Modelo computacional de transferencia de calor en componentes de motores cohete de combustible sólido, implementado en Python y ANSYS. Modela los tres mecanismos de transferencia de calor (conducción, convección, radiación) en la cámara de combustión, la boquilla y la carcasa. Validado frente a datos experimentales del banco de pruebas — logrando un error RMS menor al 4%. Genera mapas de distribución térmica e informes técnicos automáticos.`,
    highlights: [
      'Validado con datos experimentales reales, no solo teóricos',
      '<4% de error RMS entre el modelo y el experimento',
      'Cubre los 3 modos de transferencia de calor simultáneamente',
      'Mapas térmicos automatizados y generación de informes en PDF',
    ],
    evidence: [
      'Código de simulación en Python',
      'Archivos del modelo de ANSYS',
      'Gráficos de validación (modelo vs. experimental)',
      'Mapas de distribución térmica',
    ],
    metricsLabels: ['Error del modelo (RMS)', 'Rango de temperatura'],
  },
  'dynamic-systems-modeling': {
    title: 'Modelado de Sistemas Dinámicos — Kit de Herramientas de Espacio de Estados y Linealización',
    subtitle: 'Biblioteca de Python para Simulación de Sistemas No Lineales, Linealización y Análisis de Estabilidad',
    tagline: 'Biblioteca limpia de Python para el modelado de sistemas dinámicos: Jacobianos de diferencias finitas, búsqueda de equilibrio, simulación y análisis de plano de fase.',
    institution: 'IPN — Maestría en Tecnologías Avanzadas',
    description: `Kit de herramientas de Python para el análisis de sistemas dinámicos desarrollado para el curso de posgrado en Modelado de Sistemas Aeroespaciales. Implementa: cálculo de Jacobiano por diferencias finitas (∂f/∂x, ∂f/∂u), búsqueda de puntos de equilibrio a través de scipy.optimize.root, simulación no lineal con scipy.integrate.solve_ivp y simulación de sistemas linealizados. Incluye comparación gráfica de trayectorias no lineales vs. linealizadas para validación.`,
    highlights: [
      'Calidad de código profesional con abstracción de Modelo basada en dataclass',
      'Jacobianos de diferencias finitas con estabilidad numérica',
      'Maneja sistemas no lineales con múltiples puntos de equilibrio',
      'Visualización comparativa: NL vs. linealizado para validación',
    ],
    evidence: [
      'GitHub: github.com/smookymolina/Clase_02_Modelizacion',
      'Código fuente de Python bien documentado (comentarios técnicos en español)',
    ],
  },
  'vr-industrial-training': {
    title: 'Entrenamiento de Seguridad Industrial en VR — Simulación de Extintores',
    subtitle: 'Entorno de VR Inmersivo Demostrado en Vivo en Televisión Nacional (TV Azteca)',
    tagline: 'Simulación inmersiva en realidad virtual para el entrenamiento del uso de extintores de incendios industriales, demostrada en vivo en TV Azteca México ante una audiencia nacional.',
    institution: 'Proyecto Profesional / TV Azteca México',
    description: `Aplicación de entrenamiento en realidad virtual para protocolos de seguridad contra incendios industriales. El entorno inmersivo simula el uso de extintores de incendios en una instalación industrial con física realista, retroalimentación háptica y puntuación interactiva. Integrado con hardware de seguimiento de movimiento para interacción de cuerpo completo. La aplicación fue seleccionada para una demostración tecnológica en vivo en TV Azteca México, llegando a una audiencia nacional.`,
    highlights: [
      'Demostración en vivo en TV Azteca México — audiencia de transmisión nacional',
      'Integración de retroalimentación háptica para una interacción realista',
      'Diseño de escenario de grado industrial con simulación física de incendios',
      'Seleccionada como tecnología destacada entre soluciones competidoras',
    ],
    evidence: [
      'Imágenes de transmisión de TV Azteca (2024)',
      'Video de demostración de la aplicación',
      'Documentación del protocolo de entrenamiento',
    ],
    metricsLabels: ['Audiencia nacional en TV Azteca', 'Demostración en vivo', 'Aptitud háptica'],
    hardware: ['Visor VR', 'Hardware de seguimiento de movimiento', 'Dispositivos de retroalimentación háptica'],
    firmware: [],
  },
  'tren-maya-tourism-app': {
    title: 'México Profundo — Aplicación AR para el Tren Maya',
    subtitle: 'Aplicación de Turismo en Realidad Aumentada para el Tren Maya, Destacada en ADN40 y Canal Once',
    tagline: 'Aplicación interactiva de turismo en realidad aumentada para el corredor del Tren Maya de México: capas culturales, puntos de interés geográficos y contenidos del patrimonio indígena.',
    institution: 'Proyecto Profesional — México Profundo',
    description: `Aplicación de turismo en realidad aumentada para el corredor ferroviario del Tren Maya de México, desarrollada como parte de la iniciativa de tecnología cultural "México Profundo". La aplicación presenta capas en tiempo real en realidad aumentada para sitios históricos y culturales a lo largo de la ruta del Tren Maya, puntos de interés interactivos basados en GPS y contenidos del patrimonio indígena.

La aplicación fue demostrada en vivo en ADN40 (canal nacional de noticias) y Canal Once (televisión pública del IPN) como segmentos de tecnología destacada, llegando a una audiencia combinada de millones de espectadores en todo México.`,
    highlights: [
      'Presentada en vivo en ADN40 noticias nacionales — segmento México Profundo',
      'Presentada en Canal Once (TV pública del IPN) — segmento México Profundo',
      'Capas culturales en realidad aumentada para monumentos de la ruta del Tren Maya',
      'Integración de contenidos de patrimonio indígena y cultural',
      'Llegó a millones de televidentes a través de transmisiones nacionales en México',
    ],
    evidence: [
      'Imágenes de transmisión de ADN40 (2024)',
      'Imágenes de transmisión de Canal Once (2024)',
      'Reportaje del programa México Profundo',
      'Video demostrativo de la aplicación',
    ],
    metricsLabels: ['Emisiones en TV Nacional', 'Canales principales', 'Stack tecnológico'],
    firmware: [],
  },
  'stm32-embedded-firmware': {
    title: 'Firmware STM32 Bare-Metal — Ensamblador y C',
    subtitle: 'Programación de Bajo Nivel ARM Cortex-M: Control de Periféricos en Ensamblador',
    tagline: 'Firmware STM32 bare-metal escrito en Ensamblador ARM y C para la manipulación directa de registros de periféricos, sin capa de abstracción HAL.',
    institution: 'IPN / Personal',
    description: `Firmware STM32 de bajo nivel escrito directamente en Ensamblador ARM y C, evitando las capas de abstracción HAL para obtener el máximo determinismo y rendimiento. Cubre la configuración de GPIO, temporizadores, UART, SPI y la tabla de vectores de interrupción a nivel de registros. Parte de una inmersión profunda en sistemas embebidos avanzados.`,
    highlights: [
      'Control de periféricos a nivel de registros (sin HAL)',
      'Ensamblador ARM Thumb-2 para rutinas de rendimiento crítico',
      'Inicio (startup) y script de enlazador (linker) personalizados',
    ],
    evidence: ['GitHub: github.com/smookymolina/atz_stm32 (código de ensamblador)'],
  },
};

export function getProjects(lang: 'en' | 'es'): Project[] {
  if (lang === 'en') return PROJECTS;
  return PROJECTS.map((p) => {
    const t = PROJECT_TRANSLATIONS_ES[p.slug];
    if (!t) return p;
    return {
      ...p,
      title: t.title,
      subtitle: t.subtitle,
      tagline: t.tagline,
      institution: t.institution,
      description: t.description,
      highlights: t.highlights,
      evidence: t.evidence,
      metrics: p.metrics?.map((m, idx) => ({
        ...m,
        label: t.metricsLabels?.[idx] || m.label,
      })),
      hardware: p.hardware?.map((hw, idx) => t.hardware?.[idx] || hw),
      firmware: p.firmware?.map((fw, idx) => t.firmware?.[idx] || fw),
      process: p.process?.map((step, idx) => ({
        ...step,
        title: t.process?.[idx]?.title || step.title,
        description: t.process?.[idx]?.description || step.description,
      })),
    };
  });
}

export function getProjectBySlug(slug: string, lang: 'en' | 'es' = 'en'): Project | undefined {
  const list = getProjects(lang);
  return list.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory, lang: 'en' | 'es' = 'en'): Project[] {
  const list = getProjects(lang);
  return list.filter((p) => p.categories.includes(category));
}

