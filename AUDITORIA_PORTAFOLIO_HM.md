# Auditoría Técnica de Portafolio: Jair Molina (Jr. Embedded Systems Engineer)

**Evaluador:** Senior Technical Recruiter / Hiring Manager (10+ años en manufactura tecnológica, sector automotriz/IoT en México).  
**Fecha:** 2026-06-25  

---

## 1. Análisis de Narrativa y Posicionamiento General

Como Hiring Manager en México (para empresas como Intel, Continental, Bosch, o startups de diseño electrónico en Jalisco/CDMX), mi principal problema al buscar un perfil "Jr. de Sistemas Embebidos" es filtrar a los candidatos que **realmente saben hardware y firmware de bajo nivel** de aquellos que son programadores web (Full-Stack) o desarrolladores de software generalistas que solo usan microcontroladores como hobby.

### Diagnóstico de la Marca Personal:
* **El Ruido de Software Alto Nivel:** El portafolio actual sufre de un sesgo importante hacia el desarrollo web, realidad virtual (VR/AR) y automatización con IA. Al entrar a un sitio con dominio `.dev` que muestra proyectos de turismo AR del Tren Maya (`p14`), entrenamiento en VR para TV Azteca (`p13`), una plataforma web IoT con Docker/Redis (`p07`), y una herramienta de IA local (`p08`), la primera impresión es: **"Este candidato es un desarrollador web/VR que quiere brincar a embebidos, no un ingeniero de hardware."**
* **La Ventaja Académica:** El perfil real de Jair (Ing. Mecánico de la UPIITA-IPN, cursando Maestría en Tecnologías Avanzadas) es muy fuerte en México. UPIITA tiene una reputación de excelencia en control, matemáticas e instrumentación. Las publicaciones internacionales (IAC 2024, Springer) demuestran rigor científico y capacidad de investigación y desarrollo (R&D). **Esta es la narrativa que debe dominar.**
* **Recomendación de Enfoque:** Debes reposicionarte explícitamente como **"Embedded Systems & Instrumentation Engineer"**. Las habilidades mecánicas (SolidWorks, FEA, ANSYS) y de control (PID, espacio de estados) deben presentarse como complementos de R&D de hardware, mientras que el software de alto nivel (Flask, Docker, React, VR) debe quedar estrictamente relegado a "Herramientas de Soporte" o "Otros Proyectos".

---

## 2. Auditoría Crítica de Proyectos Destacados (El Núcleo Técnico)

### P-01: Rocket Propulsion Test Bench — DAQ System
* **La Trampa de Credibilidad (Alta Prioridad):** El portafolio dice: *"Custom signal conditioning PCB designed in-house"* y *"Custom PCB — signal conditioning board"*. Sin embargo, tu perfil real indica que **tu experiencia en PCB se limita a perfboard/protoboard**.
  > [!CAUTION]
  > **Riesgo en Entrevista:** Si un entrevistador de hardware lee "Custom PCB designed in-house" para un acondicionamiento de puente de Wheatstone (celda de carga) y termopares (MAX6675), te preguntará de inmediato: *"¿Cómo diseñaste el plano de tierra para aislar el ruido digital del analógico? ¿Qué ancho de pista usaste para las señales diferenciales? ¿Diseñaste en 2 o 4 capas?"*. Si respondes que lo hiciste en una placa fenólica perforada (perfboard), perderás toda credibilidad por inflar el portafolio.
  * **Acción Correctiva:** Debes cambiar el copy. En lugar de "Custom PCB", describe el circuito como *"Custom analog signal conditioning circuit integrated on protoboard/perfboard utilizing instrumentation amplifiers and active filtering"* (o similar en español). La honestidad técnica genera confianza; el adorno corporativo la destruye.
* **La Arquitectura Mixta (ESP32 + STM32):** El proyecto menciona que usa ambos micros. Un entrevistador te preguntará: *"¿Por qué usas ambos? ¿Cómo se comunican entre sí (SPI, UART, I2C)? ¿Cuál es el maestro y cuál es el esclavo? ¿Cómo garantizas la sincronización de reloj en la adquisición de 1 kHz?"*. Asegúrate de tener respuestas claras y de que el código en tu GitHub refleje esta arquitectura.

### P-05: 3D Printer → PCB Milling Machine Conversion
* **Inconsistencia de Firmware y Fechas (Muy Grave):** 
  * En el portafolio se afirma que el proyecto se realizó en el periodo **2023 – 2024** y que utiliza un **controlador compatible con GRBL** y firmware **GRBL modificado**.
  * Tu perfil real indica que este proyecto se realizó hace **~7 años (2019)** y que reconfiguraste el firmware **Marlin**.
  > [!WARNING]
  > **Discrepancia Técnica:** Marlin y GRBL son sistemas completamente distintos. Marlin está optimizado para impresión 3D (control de temperatura, extrusores, cinemáticas delta/cartesianas avanzadas, guardado en EEPROM), mientras que GRBL está escrito en C puro para microcontroladores AVR/ARM optimizado para fresado CNC clásico de 3 ejes. Un entrevistador que conozca ambos te atrapará en segundos si confundes sus archivos de configuración o comandos. Además, cambiar la fecha de 2019 a 2023-2024 puede ser detectado si ven tu CV formal o si te trabas explicando cuándo lo hiciste.
  * **Acción Correctiva:** Cambia las fechas al periodo real (2019) y especifica que reconfiguraste **Marlin Firmware** para deshabilitar las protecciones térmicas del extrusor y mapear los pines del ventilador/calentador para controlar el relevador del mototool (spindle). Esto demuestra capacidad de solución de problemas ("hardware hacking") desde tus inicios y honestidad de fechas.

### P-04: Adaptive PID Controller — Auto-Tuning on STM32
* **La Pregunta Trampa del FPU:** El proyecto menciona: *"Fixed-point arithmetic ensures deterministic real-time behavior"*.
  * **Pregunta de Seguimiento Esperada:** *"¿Por qué implementaste aritmética de punto fijo en un microcontrolador STM32 (Cortex-M) si la mayoría de las series modernas (M4/M7) cuentan con una Unidad de Punto Flotante (FPU) por hardware que ejecuta operaciones flotantes en un solo ciclo de reloj de forma totalmente determinista? ¿Qué modelo exacto de STM32 utilizaste (ej. STM32F103 que carece de FPU, o STM32F407 con FPU)?"*.
  * **Recomendación:** Prepárate para responder esto. Si usaste un STM32F103 (Cortex-M3), la respuesta es directa (no tiene FPU). Si usaste uno con FPU, debes justificar si fue por portabilidad a arquitecturas más pequeñas o fines didácticos de optimización de memoria.

---

## 3. Elementos Faltantes vs. Elementos Distractores

### Lo que Falta por Completo (Expectativa de la Industria):
1. **Esquemáticos y Layouts:** Si dices que trabajas con hardware, un Hiring Manager quiere ver esquemáticos (archivos PDF o capturas de KiCad/Altium). Aunque sea de tu fuente conmutada de 2019 o diagramas de interconexión del banco de pruebas.
2. **Repositorios de Código Limpios:** El link a tu GitHub debe llevar a código C/C++ estructurado para embebidos, no solo scripts de Python para análisis. El repositorio `atz_stm32` debe tener un README claro que explique la arquitectura del firmware (bare-metal, uso de interrupciones, inicialización de registros).
3. **Videos de Funcionamiento Técnico:** Tienes videos para TV Azteca, pero un reclutador técnico prefiere un video de 15 segundos grabado con celular que muestre el banco de pruebas disparando y los datos graficándose en tiempo real, o el osciloscopio mostrando la señal PWM del controlador PID.

### Lo que Distrae y Debe Ser Relegado:
* **Proyectos de VR/AR (Tren Maya, TV Azteca extintores):** Ocupan demasiado espacio visual y no aportan al perfil de embebidos. Deben quitarse de "Class A Projects" (Highlights) y moverse a una sección secundaria de "Proyectos Adicionales / Experiencia en Software".
* **JobHunter (p08):** Es un gran proyecto de IA y backend, pero clasificarlo como `embedded` (en las categorías de `lib/projects.ts`) es un error grave de consistencia. Quítale la etiqueta de embebidos inmediatamente.
* **Plataforma IoT de "Grado de Producción" (p07):** Contiene JWT, Docker, Redis, MySQL, etc. Es desarrollo web puro. Debe moverse a proyectos secundarios.

---

## 4. Recomendaciones Priorizadas de Cambio

| Prioridad | Cambio Recomendado | Por qué | Esfuerzo |
| :--- | :--- | :--- | :--- |
| **1. Crítica** | Corregir la descripción de PCB en **P-01** (Quitar "Custom PCB designed in-house"). | Evita ser descartado por mentir o inflar tu experiencia real cuando te hagan preguntas de diseño de PCBs en la entrevista técnica. | Bajo |
| **2. Crítica** | Sincronizar fechas y firmware de la fresadora **P-05** (Marlin vs. GRBL, 2019 vs. 2023). | Evita contradicciones técnicas graves sobre el firmware utilizado y la temporalidad del proyecto. | Bajo |
| **3. Alta** | Quitar proyectos de VR/AR (`p13`, `p14`) y Web (`p07`, `p08`) de la sección de Proyectos Destacados (Class A) de la Home y Highlights. | Limpia la narrativa del portafolio, enfocándolo 100% en sistemas embebidos, control e instrumentación. | Medio |
| **4. Alta** | Subir esquemáticos (PDF/KiCad) o diagramas de cableado detallados del sistema DAQ y de la fuente conmutada de 2019. | Aporta la evidencia tangible de hardware que todo Hiring Manager de electrónica busca para validar tus habilidades. | Medio |
| **5. Media** | Corregir codificación de caracteres rotos (`â€”`, `Ã³`, `Ï€`) en los textos de traducción (`lib/translations.ts`). | Un portafolio profesional no puede tener errores de visualización de texto (UTF-8 roto) en un perfil que afirma ser detallista. | Bajo |
| **6. Media** | Estructurar y limpiar el repositorio `atz_stm32` en GitHub. | El entrevistador técnico abrirá tu GitHub durante o después de la entrevista; debe ver código C estructurado, modular y bien comentado. | Medio-Alto |

---

## 5. Evaluación Semáforo para la Entrevista

### 🟢 Lo que ya está listo para mostrarse:
* **El perfil académico y de investigación:** Tus ponencias en el IAC 2024 de Milán y tus publicaciones en Springer/Hacia el Espacio son excelentes. Te posicionan como un perfil con alta capacidad de autoaprendizaje, análisis matemático y rigor científico.
* **El proyecto DAQ del banco de pruebas (P-01) en su esencia:** La integración de sensores de presión, temperatura y celdas de carga para pruebas de motores cohete de combustible sólido es una aplicación de instrumentación real sumamente atractiva y retadora.
* **El modelado de sistemas dinámicos (P-11 y P-10):** Demuestra que entiendes la física y las matemáticas detrás de los sistemas que controlas, algo raro en programadores de firmware empíricos.

### 🟡 Lo que necesita ajuste antes de la entrevista:
* **La justificación técnica del controlador PID en STM32 (P-04):** Prepárate para justificar la necesidad de la aritmética de punto fijo en lugar del uso del FPU del Cortex-M.
* **La explicación de la comunicación ESP32 - STM32 en P-01:** Debes dominar la explicación de cómo interactúan ambos chips (protocolos físicos, buffers de datos, control de flujo).
* **Los enlaces de GitHub de tu portafolio:** Asegúrate de que los enlaces dirijan a repositorios públicos activos, no a páginas 404 o perfiles vacíos.

### 🔴 Lo que podría jugar en tu contra (Eliminar/Modificar Ya):
* **La afirmación de haber diseñado PCBs profesionales en P-01:** Si mantienes que diseñaste una PCB para el acondicionamiento de señales y en la prueba práctica o preguntas te piden diseñar un esquemático o rutear y no dominas la herramienta (KiCad/Altium), la inconsistencia la notarás de inmediato.
* **La discrepancia de fechas y firmware en la máquina de fresado (P-05):** Si te preguntan por GRBL y tu experiencia real es con Marlin de hace 7 años, la confusión será evidente y destruirá la confianza del entrevistador.
* **La etiqueta `embedded` en JobHunter (P-08):** Un bot de Telegram que corre en local para buscar empleo no es un sistema embebido. Mantener esa etiqueta demuestra falta de rigor en la terminología del sector.
