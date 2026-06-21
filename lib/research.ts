export interface Publication {
  id: string;
  type: 'conference' | 'journal' | 'book-chapter';
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  abstract: string;
  tags: string[];
  highlight?: string; // Why this matters
  coverImage?: string;
}

export interface Conference {
  id: string;
  name: string;
  role: 'speaker' | 'poster' | 'staff' | 'attendee';
  location: string;
  date: string;
  description: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub01',
    type: 'conference',
    title: '31st IAA Symposium on Small Satellite Missions',
    authors:
      'Sánchez González, A., Manríquez Chávez, Y., Rosas Palacios, A., <strong>Molina Arce, J.</strong>',
    venue: '75th International Astronautical Congress (IAC 2024) — Milan, Italy',
    year: 2024,
    doi: '10.52202/078365-0120',
    url: 'https://doi.org/10.52202/078365-0120',
    abstract:
      'Research presented at the IAA Symposium on Small Satellite Missions within the 75th IAC in Milan. The work addresses mission design and systems engineering aspects for small satellite applications, developed within the IPN aerospace research group.',
    tags: ['CubeSat', 'Small Satellites', 'Mission Design', 'Aerospace', 'IAC'],
    highlight:
      'Presented in person at the most important astronautical congress in the world — IAC 2024, Milan, Italy.',
    coverImage: '/images/research/iac-milan.jpg',
  },
  {
    id: 'pub02',
    type: 'book-chapter',
    title:
      'Machine Learning-Driven Cyberdefense for Dynamic Anti-jamming Strategies in Ku and Ka Band Satellite Links',
    authors:
      'Rosas Palacios, A., <strong>Molina-Arce, J.</strong>, Quintero-Granados, A., Ordaz-Huerta, Y.E.',
    venue: 'Springer Book Chapter',
    year: 2026,
    doi: '10.1007/978-3-032-09735-4_15',
    url: 'https://doi.org/10.1007/978-3-032-09735-4_15',
    abstract:
      'This chapter presents a machine learning framework for dynamic anti-jamming strategies in satellite communications operating in the Ku and Ka frequency bands. The approach leverages adaptive ML models to detect and counter jamming attacks in real time, with implications for military and commercial satellite link security.',
    tags: ['Machine Learning', 'Cybersecurity', 'Satellite Communications', 'Anti-Jamming', 'Ku/Ka Band', 'Defense'],
    highlight:
      'Co-author of a Springer book chapter on ML-driven cyberdefense for satellite links — defense-tech intersection of AI + space.',
    coverImage: '/images/research/ml-cyberdefense.jpg',
  },
  {
    id: 'pub03',
    type: 'journal',
    title:
      'Caracterización, diseño y simulación de un banco de pruebas mecánicas para la medición de parámetros operativos',
    authors: '<strong>Molina Arce, J.</strong>',
    venue: 'Revista Hacia el Espacio',
    year: 2024,
    abstract:
      'Characterization, design, and simulation of a mechanical test bench for operational parameter measurement. The work documents the full design process of the solid-fuel rocket motor test bench: sensor selection, structural analysis, DAQ system architecture, and experimental validation methodology.',
    tags: ['Test Bench', 'DAQ', 'Instrumentation', 'Rocket Propulsion', 'FEA'],
    highlight:
      'Sole author — full documentation of the propulsion test bench DAQ system design and experimental methodology.',
    coverImage: '/images/research/revista-espacio.jpg',
  },
];

export const CONFERENCES: Conference[] = [
  {
    id: 'c01',
    name: '75th International Astronautical Congress (IAC 2024)',
    role: 'speaker',
    location: 'Milan, Italy',
    date: 'October 2024',
    description:
      'Presented research on small satellite missions at the IAA Symposium. In-person presentation at the largest annual gathering of astronautical professionals worldwide.',
  },
  {
    id: 'c02',
    name: 'Characterization of a Solid-Fuel Rocket Test Bench — UPIITA–IPN',
    role: 'speaker',
    location: 'Mexico City, Mexico',
    date: 'March 2024',
    description:
      'Presented the complete design and experimental results of the propulsion test bench DAQ system to the engineering community at UPIITA–IPN.',
  },
  {
    id: 'c03',
    name: 'Scientific Poster — Planetario Luis Enrique Erro (CDA–IPN)',
    role: 'poster',
    location: 'Mexico City, Mexico',
    date: '2023',
    description:
      'Poster presentation of early-stage propulsion test bench research at the CDA–IPN astronomy and space science event.',
  },
  {
    id: 'c04',
    name: 'ICASST 2023 — International Congress on Advanced Systems Science and Technology',
    role: 'staff',
    location: 'Mexico City, Mexico',
    date: '2023',
    description:
      'Chief of Staff (Jefe de Staff) for the international congress. Responsible for organizing sessions, speaker coordination, and logistics.',
  },
  {
    id: 'c05',
    name: 'ICASST 2022 — International Congress on Advanced Systems Science and Technology',
    role: 'staff',
    location: 'Mexico City, Mexico',
    date: '2022',
    description: 'Organizing Committee member for the international congress.',
  },
  {
    id: 'c06',
    name: 'Technology Demo — TV Azteca México (National Broadcast)',
    role: 'speaker',
    location: 'Mexico City, Mexico',
    date: '2024',
    description:
      'Live demonstration of a VR industrial safety training system on TV Azteca México. Reached a national audience. Topic: Virtual Reality applied to fire extinguisher training.',
  },
];

export const TEACHING = [
  {
    id: 't01',
    role: 'Lecturer',
    subjects: ['Thermal Engineering', 'Aerospace Systems Modeling'],
    institution: 'Universidad Internacional de Innovación de Aguascalientes (UIIA)',
    period: 'Aug. 2025 – Present',
    format: 'Virtual',
    tools: ['ANSYS', 'MATLAB/Simulink', 'SolidWorks'],
    description:
      'Teaching undergraduate courses in Thermal Engineering and Aerospace Systems Modeling in virtual format. Designs course content, hands-on activities, and assessments focused on real aerospace industry applications.',
  },
  {
    id: 't02',
    role: 'Graduate Instructor',
    subjects: ['Disruptive Technologies: Impact of VR and AR'],
    institution: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA) — IPN',
    period: '2024',
    format: 'In-person',
    tools: ['VR/AR platforms', 'Immersive training tools'],
    description:
      'Designed and delivered a postgraduate course on VR/AR technologies and their application to information management and immersive technical training.',
  },
];
