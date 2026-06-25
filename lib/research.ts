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
  role: 'speaker' | 'poster' | 'staff' | 'attendee' | 'media';
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
    coverImage: '/images/research/iac-milan.jpeg',
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
    coverImage: '/images/research/ml-cyberdefense.jpeg',
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
    coverImage: '/images/research/revista-espacio.jpeg',
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
    name: 'TV Azteca México — VR Fire Extinguisher Training (National Broadcast)',
    role: 'media',
    location: 'Mexico City, Mexico',
    date: '2024',
    description:
      'Live demonstration of a VR industrial safety training system on TV Azteca México. Immersive virtual reality simulation for fire extinguisher training with haptic feedback — broadcast to a national audience.',
  },
  {
    id: 'c07',
    name: 'ADN40 — "Mexico Profundo": Tren Maya AR Tourism App',
    role: 'media',
    location: 'Mexico City, Mexico',
    date: '2024',
    description:
      'Featured technology segment on ADN40 (national news channel) presenting the Mexico Profundo augmented reality tourism app for the Tren Maya railway corridor. Live demo of AR cultural overlays and route points of interest.',
  },
  {
    id: 'c08',
    name: 'Canal Once — "Realidad Virtual": VR Technology Segment',
    role: 'media',
    location: 'Mexico City, Mexico',
    date: '2024',
    description:
      'Invited technology guest on Canal Once (IPN public television) for a VR segment showcasing immersive applications for industrial training and education. Demonstrated VR fire extinguisher simulation live on air.',
  },
  {
    id: 'c09',
    name: 'Canal Once — "Mexico Profundo": Tourism Technology',
    role: 'media',
    location: 'Mexico City, Mexico',
    date: '2024',
    description:
      'Second appearance on Canal Once for the "Mexico Profundo" program, presenting AR tourism technology for Mexican cultural heritage and the Tren Maya railway experience.',
  },
];

export const TEACHING = [
  {
    id: 't01',
    role: 'Lecturer',
    subjects: ['Thermal Engineering', 'Aerospace Systems Modeling'],
    institution: 'Universidad Nacional de Innovación e Ingeniería (UNII)',
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

const PUBLICATION_TRANSLATIONS_ES: Record<string, {
  abstract: string;
  highlight: string;
  venue?: string;
}> = {
  pub01: {
    abstract: 'Investigación presentada en el Simposio de la IAA sobre Misiones de Pequeños Satélites dentro del 75.° IAC en Milán. El trabajo aborda el diseño de misiones y aspectos de ingeniería de sistemas para aplicaciones de pequeños satélites, desarrollados dentro del grupo de investigación aeroespacial del IPN.',
    highlight: 'Presentado en persona en el congreso astronáutico más importante del mundo: IAC 2024, Milán, Italia.',
    venue: '75.° Congreso Internacional de Astronáutica (IAC 2024) — Milán, Italia',
  },
  pub02: {
    abstract: 'Este capítulo presenta un marco de aprendizaje automático para estrategias dinámicas contra la interferencia en comunicaciones satelitales que operan en las bandas de frecuencia Ku y Ka. El enfoque aprovecha modelos adaptativos de ML para detectar y contrarrestar ataques de interferencia en tiempo real, con implicaciones para la seguridad de los enlaces satelitales militares y comerciales.',
    highlight: 'Co-autor de un capítulo de libro Springer sobre ciberdefensa impulsada por ML para enlaces satelitales — intersección tecnológica de defensa de la IA + espacio.',
    venue: 'Capítulo de Libro Springer',
  },
  pub03: {
    abstract: 'Caracterización, diseño y simulación de un banco de pruebas mecánicas para la medición de parámetros operativos. El trabajo documenta todo el proceso de diseño del banco de pruebas de motores cohete de combustible sólido: selección de sensores, análisis estructural, arquitectura del sistema DAQ y metodología de validación experimental.',
    highlight: 'Único autor — documentación completa del diseño del sistema DAQ del banco de pruebas de propulsión y metodología experimental.',
    venue: 'Revista Hacia el Espacio',
  },
};

const CONFERENCE_TRANSLATIONS_ES: Record<string, {
  name: string;
  location: string;
  date: string;
  description: string;
}> = {
  c01: {
    name: '75.° Congreso Internacional de Astronáutica (IAC 2024)',
    location: 'Milán, Italia',
    date: 'Octubre de 2024',
    description: 'Presentó investigación sobre misiones de pequeños satélites en el Simposio de la IAA. Presentación en persona en el encuentro anual más grande de profesionales de la astronáutica en todo el mundo.',
  },
  c02: {
    name: 'Caracterización de un banco de pruebas de cohetes de combustible sólido — UPIITA–IPN',
    location: 'Ciudad de México, México',
    date: 'Marzo de 2024',
    description: 'Presentó el diseño completo y los resultados experimentales del sistema DAQ del banco de pruebas de propulsión a la comunidad de ingeniería en UPIITA–IPN.',
  },
  c03: {
    name: 'Póster Científico — Planetario Luis Enrique Erro (CDA–IPN)',
    location: 'Ciudad de México, México',
    date: '2023',
    description: 'Presentación en póster de la investigación en etapa inicial del banco de pruebas de propulsión en el evento de astronomía y ciencias espaciales del CDA–IPN.',
  },
  c04: {
    name: 'ICASST 2023 — Congreso Internacional sobre Ciencia y Tecnología de Sistemas Avanzados',
    location: 'Ciudad de México, México',
    date: '2023',
    description: 'Jefe de Staff para el congreso internacional. Responsable de la organización de sesiones, coordinación de ponentes y logística.',
  },
  c05: {
    name: 'ICASST 2022 — Congreso Internacional sobre Ciencia y Tecnología de Sistemas Avanzados',
    location: 'Ciudad de México, México',
    date: '2022',
    description: 'Miembro del Comité Organizador del congreso internacional.',
  },
  c06: {
    name: 'TV Azteca México — Entrenamiento de Extintor VR (Transmisión Nacional)',
    location: 'Ciudad de México, México',
    date: '2024',
    description: 'Demostración en vivo de un sistema de entrenamiento de seguridad industrial VR en TV Azteca México. Simulación inmersiva de realidad virtual para entrenamiento de extintor de incendios con retroalimentación háptica, transmitida a nivel nacional.',
  },
  c07: {
    name: 'ADN40 — "México Profundo": App AR del Tren Maya',
    location: 'Ciudad de México, México',
    date: '2024',
    description: 'Segmento tecnológico destacado en ADN40 que presenta la aplicación de turismo en realidad aumentada de México Profundo para el corredor del Tren Maya. Demo en vivo de capas AR culturales y puntos de interés de la ruta.',
  },
  c08: {
    name: 'Canal Once — "Realidad Virtual": Segmento de Tecnología VR',
    location: 'Ciudad de México, México',
    date: '2024',
    description: 'Invitado tecnológico en Canal Once para un segmento de VR mostrando aplicaciones inmersivas para entrenamiento industrial y educación. Demostró la simulación de extintores VR en vivo.',
  },
  c09: {
    name: 'Canal Once — "México Profundo": Tecnología Turística',
    location: 'Ciudad de México, México',
    date: '2024',
    description: 'Segunda aparición en Canal Once para el programa "México Profundo", presentando tecnología de turismo AR para el patrimonio cultural mexicano y la experiencia del Tren Maya.',
  },
};

const TEACHING_TRANSLATIONS_ES: Record<string, {
  role: string;
  subjects: string[];
  description: string;
}> = {
  t01: {
    role: 'Docente',
    subjects: ['Ingeniería Térmica', 'Modelado de Sistemas Aeroespaciales'],
    description: 'Imparte cursos de licenciatura en Ingeniería Térmica y Modelado de Sistemas Aeroespaciales en formato virtual. Diseña el contenido del curso, actividades prácticas y evaluaciones enfocadas en aplicaciones reales de la industria aeroespacial.',
  },
  t02: {
    role: 'Instructor de Posgrado',
    subjects: ['Tecnologías Disruptivas: Impacto de VR y AR'],
    description: 'Diseñó e impartió un curso de posgrado sobre tecnologías VR/AR y su aplicación a la gestión de información y el entrenamiento técnico inmersivo.',
  },
};

export function getPublications(lang: 'en' | 'es'): Publication[] {
  if (lang === 'en') return PUBLICATIONS;
  return PUBLICATIONS.map((pub) => {
    const t = PUBLICATION_TRANSLATIONS_ES[pub.id];
    if (!t) return pub;
    return {
      ...pub,
      abstract: t.abstract,
      highlight: t.highlight,
      venue: t.venue || pub.venue,
    };
  });
}

export function getConferences(lang: 'en' | 'es'): Conference[] {
  if (lang === 'en') return CONFERENCES;
  return CONFERENCES.map((conf) => {
    const t = CONFERENCE_TRANSLATIONS_ES[conf.id];
    if (!t) return conf;
    return {
      ...conf,
      name: t.name || conf.name,
      location: t.location || conf.location,
      description: t.description || conf.description,
      date: t.date || conf.date,
    };
  });
}

export function getTeaching(lang: 'en' | 'es') {
  if (lang === 'en') return TEACHING;
  return TEACHING.map((t) => {
    const trans = TEACHING_TRANSLATIONS_ES[t.id];
    if (!trans) return t;
    return {
      ...t,
      role: trans.role || t.role,
      subjects: trans.subjects || t.subjects,
      description: trans.description || t.description,
    };
  });
}
