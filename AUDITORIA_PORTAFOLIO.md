# Auditoria del portafolio

Fecha: 2026-06-21

## Resumen ejecutivo

El proyecto tiene una base solida: usa Next.js, tiene buena estructura de rutas, contenido tecnico profundo y varias piezas de branding coherentes. Sin embargo, hoy no se percibe como un portafolio "listo para presentar" por tres razones principales:

1. Faltan activos visuales en `public/` y el sitio depende de muchas imagenes que no existen.
2. Hay problemas de codificacion visibles en varios textos (`â€”`, `Ã³`, `Ï€`, etc.), lo que rompe la percepcion de calidad.
3. La propuesta editorial esta sobrecargada: demasiados proyectos, demasiados mensajes y poca jerarquia de "prueba vs. relleno".

## Tendencias profesionales actuales

Basado en patrones fuertes de portafolios tecnicos y en buenas practicas actuales de web, un portafolio profesional en 2026 suele tener estas caracteristicas:

1. Hero corto y orientado a valor. En vez de describirse con muchas etiquetas, el sitio debe decir en una frase que problema resuelves y con que tipo de sistemas.
2. Menos proyectos, mas evidencia. Los mejores portafolios priorizan 3 a 5 casos fuertes, con contexto, metrica, resultado y pruebas visuales.
3. Casos de estudio, no solo fichas. La narrativa esperada es: problema -> enfoque -> implementacion -> resultado -> evidencia.
4. Imagen y video reales. Capturas, fotos de hardware, diagramas y una pieza de media por proyecto elevan mucho la credibilidad.
5. Baseline fuerte de accesibilidad y performance. Hoy es expectativa, no extra.
6. CTA simple y directo. CV, GitHub, LinkedIn y email deben estar visibles sin friccion.
7. Señales de confianza. Publicaciones, congresos, metricas y experiencia docente suman, pero deben presentarse con jerarquia clara.

## Hallazgos criticos

### 1) El sitio apunta a imagenes que no existen

El repo solo contiene el PDF del CV en `public/`. No hay carpeta `public/images/`, pero el sitio referencia docenas de archivos como:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/highlights/page.tsx`
- `app/projects/[slug]/page.tsx`
- `lib/projects.ts`
- `lib/research.ts`

Impacto:

- Los componentes `FallbackImage` y `next/image` no van a mostrar contenido real.
- Varios bloques quedaran vacios o con overlays de placeholder.
- La pagina se sentira incompleta aunque el codigo compile bien.

Prioridad: critica.

### 2) Hay texto con codificacion rota en toda la experiencia

Se observan artefactos de encoding en el hero, metadata, README y data files. Ejemplos:

- `app/layout.tsx`
- `app/page.tsx`
- `README.md`
- `lib/projects.ts`
- `lib/research.ts`
- `app/about/page.tsx`
- `app/highlights/page.tsx`
- `app/research/page.tsx`

Impacto:

- La marca se ve descuidada.
- Los acentos, guiones largos y simbolos tecnicos se leen mal.
- Esto reduce confianza de inmediato en un portafolio profesional.

Prioridad: critica.

### 3) Open Graph y preview social estan rotos por falta de imagen

`app/layout.tsx` referencia `/images/og/og-image.jpg`, pero no existe ningun activo en `public/images/og/`.

Impacto:

- Las tarjetas al compartir en LinkedIn, X o WhatsApp pueden salir sin imagen.
- Pierdes una de las señales mas visibles de profesionalismo.

Prioridad: alta.

## Hallazgos altos

### 4) La pagina depende demasiado de placeholders

Aunque existe `FallbackImage`, cuando una imagen falla, el componente retorna `null`. Eso evita errores, pero tambien oculta el problema.

Impacto:

- El usuario puede ver bloques vacios o composiciones incompletas.
- El portfolio parece "en construccion".

Recomendacion:

- Si no hay media real, reemplazar el bloque por una composicion tipografica deliberada, no por un placeholder muerto.

### 5) Hay demasiado peso en mensajes aspiracionales y demasiado poco en resultados verificables

El contenido esta muy cargado de frases como "cutting-edge", "exceptional", "production-ready", etc. Eso funciona solo si va acompanado de evidencia visual y resultados claros.

Impacto:

- Se siente mas como declaracion de intenciones que como demostracion.
- En un portafolio profesional, el lector quiere hechos en los primeros 10 segundos.

Recomendacion:

- Reducir adjetivos.
- Subir metricas, screenshots y capturas de resultados.
- Dar prioridad a 3 o 4 proyectos top, y mover el resto a "archive" o "more work".

### 6) La navegacion movil y el foco accesible pueden mejorar

Hay controles custom en `components/Navbar.tsx` y varias acciones en `app/contact/page.tsx` que no muestran una estrategia explicita de `focus-visible`.

Impacto:

- La experiencia con teclado puede sentirse menos pulida.
- La navegacion movil no tiene cierre con `Escape` ni control de foco.

Referencia util:

- MDN recomienda que los elementos interactivos sean enfocables y tengan estilo de foco visible.

### 7) El sitio pierde rendimiento potencial por configuracion de imagenes

`next.config.mjs` tiene `images.unoptimized: true`.

Impacto:

- Cuando agregues imagenes reales, perderas compresion, responsive sizing y parte del beneficio de `next/image`.
- En un portfolio visual, esto pesa mas de lo que parece.

Prioridad: media-alta.

### 8) Varias paginas mezclan demasiados conceptos

El sitio combina:

- portafolio profesional
- research
- teaching
- aerospace
- IoT
- automation
- startup profile

Impacto:

- El mensaje central se diluye.
- Un recruiter o hiring manager puede no entender en 15 segundos cual es tu posicionamiento principal.

Recomendacion:

- Definir una narrativa principal: `Embedded / Firmware / Instrumentation`.
- Dejar research, aerospace y teaching como evidencia de respaldo.

## Hallazgos medios

### 9) Algunos links que abren en nueva pestaña no usan `rel` completo

Se observan anchors con `target="_blank"` sin `rel="noopener noreferrer"` en:

- `app/page.tsx`
- `app/contact/page.tsx`
- `components/Navbar.tsx`

Impacto:

- Riesgo menor de seguridad y mala higiene tecnica.

### 10) `ProjectCard` expone un prop `variant` que no se usa

Archivo:

- `components/ProjectCard.tsx`

Impacto:

- Indica deuda de mantenimiento o una abstraccion incompleta.

### 11) Faltan decisiones claras de bilingue

El portafolio esta casi totalmente en ingles, pero el contexto profesional y parte del contenido estan en espanol.

Impacto:

- Puede funcionar bien para internacional, pero si apuntas tambien a Mexico, conviene una estrategia bilingue clara.

## Recomendaciones priorizadas

### Fase 1: Arreglos criticos

1. Agrega todos los assets reales en `public/images/...`.
2. Corrige todo el texto con encoding roto y guarda los archivos en UTF-8 limpio.
3. Sube una imagen OG real en `public/images/og/og-image.jpg`.
4. Reemplaza placeholders vacios por bloques de contenido intencionales si aun no hay imagen.

### Fase 2: Profesionalizacion visual

1. Reduce el hero a una sola propuesta de valor fuerte.
2. Deja solo 3 a 5 proyectos destacados arriba del fold.
3. Convierte cada proyecto top en mini caso de estudio con:
   - problema
   - solucion
   - metricas
   - evidencia
4. Usa fotos reales, diagramas o capturas de hardware/software.

### Fase 3: UX, accesibilidad y performance

1. Agrega estilos `focus-visible` consistentes.
2. Mejora el menu movil con cierre por `Escape` y mejor control de estado.
3. Quita `images.unoptimized: true` cuando tengas media lista para optimizar.
4. Considera `priority` para la imagen LCP real del hero.
5. Revisa contraste y legibilidad en cards, badges y textos secundarios.

### Fase 4: SEO y confianza

1. Define `canonical`, `robots` y `sitemap`.
2. Asegura Open Graph y Twitter card con imagen valida.
3. Unifica naming: titulo, descripcion, email, GitHub y LinkedIn.
4. Si el objetivo es empleo, agrega una seccion corta de "what I am looking for".

## Resumen de impacto

Si corriges solo tres cosas, yo haria esto primero:

1. Imagenes reales.
2. Encoding limpio.
3. Menos contenido, mas evidencia.

Con eso, el sitio pasa de "buen borrador tecnico" a "portafolio serio y presentable".

## Fuentes de referencia

- https://web.dev/articles/vitals
- https://web.dev/articles/optimize-lcp
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable

