# Plan de trabajo — sitio web público HealthCore

## 1. Objetivo y alcance

Construir la primera presencia digital pública de HealthCore dentro del monorepo existente, en `uis/website`, con una landing page y una página de solicitud/registro. La experiencia debe ser profesional, mobile-first, accesible, optimizada para SEO y reflejar fielmente el contexto empresarial de `BRIEFING.md`.

El formulario solo valida y simula el envío en el navegador: no se conectará a servicios, no persistirá datos ni manejará información clínica. No incluir campos de salud ni solicitar datos sensibles innecesarios. Mantener `BRIEFING.md` intacto.

### Contexto de marca que debe respetarse

- HealthCore ofrece atención ambulatoria: atención primaria, consultas con especialistas, gestión de enfermedades crónicas y prevención.
- Fundada en 2011; red de 12 clínicas: nueve en EE. UU. y tres en Reino Unido.
- Diferenciadores declarados: citas en el mismo día, horarios ampliados y personal bilingüe en los mercados estadounidenses.
- Opera bajo HIPAA en EE. UU. y UK GDPR en Reino Unido. No afirmar que una web, producto o proceso está certificado o cumple plenamente esos marcos sin evidencia/aprobación.
- El tono debe transmitir experiencia sanitaria establecida, accesibilidad, confianza y modernización responsable.

## 2. Decisiones y restricciones de implementación

1. Ubicar la aplicación exclusivamente en `uis/website`, conforme a `AGENTS.md` y a la organización del monorepo. No crear una app paralela en la raíz.
2. La guía de la tarea propone `index.html`, `application.html` y `validation.js`; implementar esos archivos dentro de `uis/website` y añadir allí un README con instrucciones de ejecución y alcance.
3. Utilizar Tailwind CSS con clases utilitarias como sistema de estilos. Preferir la forma de uso más sencilla compatible con la plantilla y el requisito; evitar CSS personalizado. Si se considera un build/dependencia, comprobar antes las convenciones y restricciones del repo: la configuración raíz y manifiestos de dependencias están protegidos por `AGENTS.md`; no modificarlos sin autorización explícita. El uso de CDN puede servir para desarrollo/demo, pero se deberá verificar su impacto en rendimiento y documentar la decisión.
4. No asumir que el comando de ejemplo `npx http-server` funciona desde la raíz: el repositorio no confirma todavía una configuración ejecutable. Verificar el comando desde el directorio correcto y documentarlo. No cambiar manifests globales ni configuración protegida.
5. La tarea exige una página pública de Codespaces para auditoría. Esta exposición/port forwarding y la captura de PageSpeed/Lighthouse son operaciones de entrega que deberán realizarse cuando exista un entorno disponible; no se pueden dar por completadas por el mero hecho de escribir el plan o el código.

## 3. Fases de trabajo

### Fase 0 — Preparación y trazabilidad de requisitos

- Confirmar `BRIEFING.md` como fuente para contenido y campos específicos, junto con `AGENTS.md` y README de `uis/` y demás guías aplicables.
- Resolver el destino de archivos con las convenciones del monorepo: `uis/website`.
- Preparar una matriz requisito → artefacto → comprobación para los criterios de HTML, responsive/Tailwind, accesibilidad, formulario, contexto y entrega.
- Identificar antes de codificar los campos exactos del formulario requeridos por la tarea. El briefing empresarial disponible describe servicios y operaciones, pero no proporciona un esquema explícito de formulario de admisión/registro ni reglas de validación por campo. No inventar campos médicos ni declarar que existe un esquema de dominio aprobado. Proponer campos de contacto/solicitud no sensibles, dejar documentada la limitación y solicitar confirmación al responsable/manager si se necesita conformidad literal con requisitos de admisión específicos.

**Salida:** matriz de trazabilidad y lista explícita de campos/reglas confirmados y pendientes.

**Puerta de salida:** no avanzar con un formulario de datos sanitarios o con supuestas reglas clínicas; resolver la ambigüedad de campos antes de afirmar cumplimiento total con el briefing.

### Fase 1 — Estructura y ejecución local

- Crear `uis/website/index.html`, `uis/website/application.html`, `uis/website/validation.js` y `uis/website/README.md`.
- Establecer HTML5 válido, idioma del documento, metadatos básicos, enlaces de navegación entre las dos páginas y una estructura de encabezados jerárquica.
- Documentar un comando `npx` compatible con Codespaces desde una ubicación clara (preferentemente el directorio de la app si evita tocar la configuración raíz).
- Ejecutar y verificar el comando en navegador antes de avanzar; confirmar carga de ambas páginas y recursos sin errores de consola ni rutas rotas.

**Criterios de aceptación:** los archivos requeridos están en la ubicación monorepo correcta; ambas páginas se sirven localmente mediante el comando documentado; no se afirma que una receta está verificada sin haberla ejecutado.

### Fase 2 — Landing page

- Construir header con nombre/logo textual HealthCore, navegación clara y CTA hacia `application.html`.
- Hero con propuesta de valor concreta y fiel al briefing; evitar promesas clínicas, disponibilidad universal o métricas no verificadas.
- Añadir al menos dos secciones útiles (por ejemplo: servicios; ventajas de acceso y experiencia; presencia en dos mercados/12 clínicas; cómo solicitar información).
- Añadir contacto/llamada a la acción y footer profesional. No inventar teléfonos, direcciones, correos ni perfiles sociales: si no constan, usar CTA interno al formulario o marcadores que se deberán sustituir con datos aprobados antes de publicar.
- Incluir marcado JSON-LD Schema.org tipo `Organization` (o `MedicalOrganization` si la información/semántica es adecuada), usando únicamente datos confirmados. No inventar URL pública, coordenadas o contacto.
- Aplicar Tailwind mobile-first con breakpoints apropiados y composición visual profesional.
- Toda imagen debe tener `alt` descriptivo; las decorativas tendrán alternativa vacía. Preferir recursos ligeros y autorizados.

**Criterios de aceptación:** semántica (`header`, `nav`, `main`, `section`, `article` cuando corresponda, `footer`), propuesta y contenido HealthCore correctos, dos o más secciones adicionales, CTA funcional, JSON-LD válido, imágenes con `alt` y responsive sin CSS manual innecesario.

### Fase 3 — Formulario de aplicación/registro

- Diseñar formulario separado, claro y adaptable a móvil/tablet/escritorio.
- Añadir únicamente campos aprobados para la finalidad declarada. Usar tipos apropiados (`text`, `email`, `tel`, `select`, etc.), `label` asociado por `for`/`id`, `required` donde aplique y `fieldset`/`legend` para grupos.
- Incluir botón primario de envío y botón secundario de limpiar. El formulario no transmite ni guarda datos.
- Cada campo debe tener instrucciones y errores vinculados mediante `aria-describedby`; mantener estado accesible con `aria-invalid` y región de estado (`aria-live`/`role=status`) cuando corresponda.

**Criterios de aceptación:** los campos coinciden con lo aprobado; etiquetas y grupos semánticos correctos; campos obligatorios explícitos; navegación por teclado y foco visibles; formulario responsive; no solicita información sanitaria sensible sin necesidad/ autorización.

### Fase 4 — Validación en JavaScript y estados de usuario

- Implementar en `validation.js` validación para todos los campos aprobados, en tiempo real (input/change y/o blur) y al enviar.
- Aprovechar validación nativa del navegador cuando corresponda y complementar con reglas JavaScript específicas aprobadas (formato, longitud, valores admitidos, consistencia entre campos); evitar reglas de dominio inventadas.
- Mostrar mensajes concretos, asociados al campo y anunciables por tecnologías de asistencia; retirar el error cuando se corrija el valor.
- Cancelar el envío ante errores, llevar foco al primer campo inválido y no enviar ni persistir datos.
- Si todo es válido, mostrar confirmación de éxito que explique que el envío es simulado y que no se ha transmitido información.
- El botón de limpiar debe restablecer valores, errores, estilos y mensajes de estado de forma coherente.

**Criterios de aceptación:** cada campo tiene validaciones positiva y negativa probadas; submit inválido se bloquea; submit válido muestra éxito simulado; reset funciona; errores específicos, visibles, asociados y anunciados; sin errores de consola.

### Fase 5 — Accesibilidad, responsive, SEO y rendimiento

- Revisar en tamaños móvil, tablet y escritorio; probar navegación por teclado, orden de foco, enlaces, botones y controles del formulario.
- Revisar contraste mínimo legible, foco visible, zoom/reflow, nombres accesibles y semántica. Usar ARIA solo para complementar semántica nativa.
- Revisar title, description, idioma, jerarquía de headings, enlaces internos, Schema.org y metadatos; evitar contenido SEO engañoso.
- Reducir recursos pesados y dependencias externas; verificar carga y errores. Mantener Tailwind como única solución de diseño salvo necesidad justificada.
- Ejecutar validaciones disponibles en el entorno (HTML/JSON-LD, consola y comprobaciones manuales); documentar limitaciones si no hay herramientas automatizadas instaladas, sin añadir dependencias globales protegidas.

**Criterios de aceptación:** responsive mobile-first, clases Tailwind y breakpoints apropiados, teclado funcional, contraste adecuado, errores accesibles, metadatos/Schema correctos y ninguna incidencia crítica en consola.

### Fase 6 — Verificación integral y evidencia

- Probar todas las rutas y enlaces, cada regla de validación, reset, mensaje de éxito y casos en móvil/tablet/escritorio.
- Verificar que el comando `npx` del README se ejecuta desde la ubicación indicada en Codespaces o entorno local compatible.
- Revisar cambios completos para confirmar que solo afectan al alcance autorizado y que no se modificó `BRIEFING.md` ni configuración protegida.
- Publicar el puerto de Codespaces con visibilidad **Public** cuando el usuario tenga Codespace activo; comprobar URL desde una sesión externa. No publicar datos de pacientes ni secretos.
- Medir la página con PageSpeed Insights sobre la URL pública de Codespaces. Objetivo exigido: puntuación mínima 80; ideal >90. Si PageSpeed no puede acceder a Codespaces, correr Lighthouse de Chrome DevTools sobre la misma vista local/Codespaces y conservar captura. Registrar URL, fecha, vista medida, puntuación y captura.

**Criterios de aceptación:** todo el comportamiento anterior probado; evidencia de URL pública y PageSpeed/Lighthouse ≥80 incorporable a la descripción del PR. Si la publicación o medición no está disponible, declararlo pendiente, no simular evidencia.

### Fase 7 — Entrega y PR

- Confirmar presencia de `index.html`, `application.html`, `validation.js`, `BRIEFING.md` sin modificar y README local con el comando de ejecución.
- Probar ambas páginas directamente y en varios tamaños de ventana; revisar consola.
- Incluir en la descripción del PR la URL pública de Codespaces y captura de PageSpeed o Lighthouse con puntuación ≥80, además de resumen y pruebas realizadas.
- Solicitar revisión/aprobación del PR y, una vez aprobado, hacer merge a `main` conforme a la instrucción de la tarea. No dar el PR por aprobado ni el merge por hecho antes de que ocurra.

**Criterios de aceptación:** repositorio actualizado, archivos requeridos presentes, instrucciones reproducibles, URL y evidencia incluidas, PR aprobado y mergeado a `main`.

## 4. Matriz de evaluación y evidencia

| Criterio | Implementación prevista | Evidencia/comprobación |
|---|---|---|
| HTML semántico y jerárquico | Ambas páginas con landmarks y headings lógicos | Inspección de HTML/DOM y recorrido de teclado |
| Imágenes accesibles | `alt` informativo o vacío si decorativa | Inspección de todos los elementos `img` |
| Schema.org | JSON-LD con datos confirmados de HealthCore | Validador Schema/inspección JSON-LD |
| Responsive/mobile-first | Tailwind, estilos base móviles y `sm`/`md`/`lg` | DevTools con vistas móvil, tablet y desktop |
| Tailwind sin CSS superfluo | Utilidades Tailwind; CSS personalizado solo justificado | Inspección del código y documentación de excepción |
| Ejecución local/Codespaces | Comando npx reproducible documentado | Ejecución real siguiendo README |
| Accesibilidad | Teclado, foco, contraste, labels, estados anunciados | Revisión manual y Lighthouse/auditoría disponible |
| Formulario según contexto | Campos y reglas aprobados, no genéricos inventados | Comparación explícita con briefing/confirmación de campos |
| Validación completa | Todos los campos validados; errores específicos; éxito/reset | Casos de prueba positivos y negativos por campo |
| Rendimiento | Optimización de recursos y carga | PSI en URL pública o captura Lighthouse; mínimo 80 |
| Entrega | URL pública y evidencia en PR; merge tras aprobación | Descripción del PR y estado final del PR |

## 5. Riesgos y asuntos pendientes

- **Esquema de formulario no detallado:** el `BRIEFING.md` disponible no especifica campos exactos ni reglas de validación de un formulario de aplicación/registro. Resolver esta discrepancia antes de considerar aprobado el formulario contextual.
- **Datos de contacto no indicados:** no inventarlos; solicitar datos corporativos aprobados o limitar el contacto a enlaces internos.
- **Privacidad sanitaria:** no recoger datos clínicos en este MVP de presentación. La mención de HIPAA/UK GDPR describe el contexto, no una certificación del sitio.
- **Tailwind CDN y puntuación:** la facilidad de prototipado puede afectar el rendimiento. Medir; si no alcanza 80, revisar una estrategia de build local, respetando la restricción de no tocar manifests/configuración protegidos sin autorización.
- **Evidencia externa:** URL Codespaces pública, captura de Lighthouse/PSI, aprobación y merge dependen del entorno, permisos y revisión; planificarlos como tareas explícitas, no como resultados garantizados.
