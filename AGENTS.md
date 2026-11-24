# Instrucciones para agentes — HealthCore

## Inicio obligatorio

Antes de analizar o cambiar el proyecto, lee en este orden:

1. [`memory-bank/projectbrief.md`](./memory-bank/projectbrief.md) — contexto y objetivos empresariales.
2. [`memory-bank/techContext.md`](./memory-bank/techContext.md) — arquitectura, stack confirmado y decisiones pendientes.
3. [`memory-bank/progress.md`](./memory-bank/progress.md) — estado real y trabajo previo.
4. Lee [`BRIEFING.md`](./BRIEFING.md) y los README de las carpetas que afecte tu tarea. La guía raíz y los README de `uis/` y `services/` rigen la organización del monorepo.

Distingue siempre hechos comprobables, recomendaciones de los README y decisiones pendientes. No conviertas necesidades del briefing en funcionalidades implementadas ni asumas tecnologías, datos, integraciones o comandos que el repositorio no documente.

## Arquitectura y ubicación

- Mantén el trabajo en este monorepo y en la carpeta correspondiente a su responsabilidad.
- La web pública va en `./uis/website`; el backoffice va en `./uis/backoffice`; las APIs y workers relacionados van en `/services`.
- No crees aplicaciones ni estructuras frontend/backend paralelas en la raíz u otras carpetas. Sigue los README y documenta cada componente nuevo según sus convenciones.
- `services/README.md` recomienda una API central FastAPI y evitar microservicios prematuros; es una recomendación arquitectónica, no prueba de una API existente. No la implementes ni cambies esa dirección sin autorización.

## Protocolo obligatorio antes de cada commit

Completa estos pasos, en orden, para todos los cambios que se vayan a incluir en el commit:

1. **Revisar cambios:** inspecciona el diff completo y confirma que solo contiene el alcance solicitado, sin secretos ni cambios accidentales.
2. **Comprobar requisitos:** contrasta los cambios con la petición, estas instrucciones, el briefing y los README aplicables; resuelve o comunica cualquier incumplimiento.
3. **Ejecutar pruebas y verificaciones:** usa únicamente los comandos documentados para los componentes afectados. Si no hay pruebas o comando aplicable documentado, indícalo y realiza las verificaciones estáticas pertinentes sin inventar comandos.
4. **Validar resultados:** comprueba las salidas, errores y estado final del diff; confirma que las verificaciones terminaron correctamente y que no contradicen el comportamiento esperado.
5. **Autorizar el commit:** solo procede si los pasos anteriores están completos y no hay errores ni verificaciones pendientes. Si una comprobación falla, no se puede ejecutar o queda pendiente, no hagas commit; informa el bloqueo y solicita indicaciones.

## Archivos y cambios protegidos

No modifiques sin autorización explícita del desarrollador:

- Secretos, credenciales, claves, certificados y archivos `.env` (no los expongas ni los incluyas en diffs o commits).
- Dependencias y configuración global del proyecto: manifiestos y lockfiles de paquetes, configuración raíz de workspace, configuración global de herramientas y `.gitignore`.
- Infraestructura y entorno de desarrollo/despliegue: `infra/`, `.devcontainer/`, configuración de CI/CD y archivos de orquestación como `docker-compose.yml`.
- Contexto empresarial fuente (`BRIEFING.md`) o estas instrucciones (`AGENTS.md`).
- Cualquier archivo fuera del alcance solicitado cuya modificación pueda afectar a otros componentes.

La autorización debe cubrir el archivo o tipo de cambio protegido. No bloquees cambios ordinarios dentro del alcance aprobado ni ediciones de código de aplicación que respeten la arquitectura.

## Cuándo detenerse y pedir confirmación

Detente antes de actuar y solicita confirmación cuando:

- La tarea requiera cambiar límites entre carpetas, crear una estructura paralela, introducir o sustituir una arquitectura o tomar una decisión técnica pendiente con impacto transversal.
- Se proponga eliminar archivos/carpetas, cambiar datos o migraciones de forma destructiva, o alterar compatibilidad.
- Una petición contradiga `BRIEFING.md`, estas instrucciones o una restricción de privacidad/regulación del dominio sanitario.
- Sea necesario modificar un elemento protegido sin autorización explícita.
- No puedas verificar requisitos o resultados con la información y herramientas disponibles.

Expón brevemente el motivo, el impacto y la decisión concreta que necesitas. No supongas autorización por silencio; espera respuesta antes de continuar con ese cambio.
