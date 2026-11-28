# Evidencia de verificación web — 2026-11-24

## Entorno y alcance

- Repositorio: `Company_Irenemor_HealthCore`.
- Cambios de trabajo observados: únicamente archivos no rastreados bajo `uis/website/` y `Plan/`. `git status --short` no mostró cambios rastreados; por ello `git diff` no incluye esos archivos nuevos.
- `BRIEFING.md` no aparece modificado. No se observaron cambios en manifests o configuración raíz protegida.
- El comando exacto del README, ejecutado desde la raíz, intentó iniciar `http-server` en `0.0.0.0:3000` pero falló con `EADDRINUSE`: el puerto estaba ocupado por el servidor local ya activo. Por tanto, el README contiene el comando correcto para el entorno, pero no se verificó una segunda instancia arrancando correctamente. El servidor existente respondió HTTP 200 para `/` y `/application.html`.
- El entorno actual no reporta variables Codespaces (`CODESPACES`, `CODESPACE_NAME`, dominio de port forwarding) y no se dispone de URL pública de Codespaces. El puerto no fue publicado ni se probó desde sesión externa.

## Pruebas realizadas

- Rutas: landing `/` e `application.html` cargaron localmente; respuestas HTTP 200. Enlaces internos y hashes de la landing resolvieron a elementos existentes. No se validaron todas las navegaciones mediante clic real.
- Formulario: envío vacío bloqueado con errores y foco en el primer inválido; nombre de un carácter inválido; email mal formado inválido; selección vacía de país e interés incluida en el escenario vacío. Los valores de opciones inventados no pudieron seleccionarse porque no existen en los menús; no se forzó manipulación del DOM.
- Éxito: datos válidos muestran la confirmación de envío simulado, sin transmisión ni persistencia.
- Longitud: el navegador limita el textarea a 500 caracteres; se comprobó que 501 introducidos se truncan a 500, por lo que la validación JS de excedente no puede activarse mediante interacción normal.
- Reset: limpia valores, errores, `aria-invalid` y estado.
- Responsive: landing y formulario, tamaños de viewport 375×812, 768×1024 y 1440×900; sin overflow horizontal en esos anchos.
- Marcado: JSON-LD de landing parseable como JSON y enlaces hash con destino existente.
- Consola: advertencia del CDN Tailwind (“should not be used in production”); no se observó error crítico. `get_errors` no reportó errores en los archivos revisados.

## Rendimiento y accesibilidad — pendientes

- PageSpeed Insights no se ejecutó: no hay URL pública de Codespaces que medir.
- Lighthouse no se ejecutó ni se conserva captura. No se afirma puntuación ≥80.
- No se verificaron contraste con herramienta, zoom/reflow ni recorrido completo de teclado en todas las páginas.
- No se ejecutó validador externo Schema.org.

## Datos que completar en entorno Codespaces

Cuando exista Codespace autorizado: publicar el puerto 3000 con visibilidad Public, registrar URL pública y comprobarla desde sesión externa; medir `/` con PageSpeed Insights y, si no puede acceder, correr Lighthouse sobre esa misma vista y guardar captura. Registrar puntuación, fecha, vista medida y URL. No incluir datos personales/sanitarios ni secretos.