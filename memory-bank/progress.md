# Progress — HealthCore monorepo

## Fuente y alcance de esta revisión

Estado documentado a partir del árbol actual y de los README de raíz, `uis/`, `services/`, `packages/`, `docs/`, `agents/` y `infra/`. El [`../BRIEFING.md`](../BRIEFING.md) define el contexto empresarial, pero sus necesidades no se consideran funcionalidades entregadas. No se modifican funcionalidades ni se infiere trabajo fuera del contenido del repo.

## Funcionalidades existentes — evidencia en el repo

- **No se encuentra una aplicación de HealthCore ejecutable** ni código funcional de producto en `uis/` o `services/`.
- `uis/README.md` describe los destinos previstos de web pública y backoffice; los subdirectorios `website/` y `backoffice/` no existen aún.
- `services/` contiene README de guía solamente; no hay API ni workers implementados.
- `packages/shared` incluye metadata para `@repo/shared-types` y tipos genéricos mínimos (`Id`, `BaseEntity`), señalados como base/placeholder; no hay scripts de paquete.
- Hay estructura documentada para `data/raw`, `data/pipelines`, `data/process`, `data/eval`, además de `agents/_template`, skills de análisis de datos, revisión de código e investigación. No se observan pipelines de HealthCore, datasets ni agentes de empresa implementados.
- El devcontainer ofrece configuración de desarrollo con Python 3.12, Node 22, Docker, GitHub CLI, JupyterLab, pnpm/Corepack y soporte condicional para uv. Esto no es una aplicación desplegada.
- `CONTEXT.md` continúa siendo el placeholder de la plantilla; el contexto empresarial fuente es `BRIEFING.md`. `company-choice.md` recoge preferencias de áreas de interés y una idea de agente, no una entrega implementada.

## Completado

- Inspección del briefing empresarial, estructura del repositorio y README relevantes.
- Creación de este banco de memoria en la raíz, en `memory-bank/`, con `projectbrief.md`, `techContext.md` y `progress.md`.

## Estado actual

El proyecto está en fase de plantilla/estructura y planificación, no en una fase demostrable de producto funcional. Las necesidades empresariales descritas en `BRIEFING.md` —incluidos dashboards, reservas, integraciones EHR, automatizaciones y asistencia con IA— son objetivos o requisitos potenciales; no constan implementados en el árbol actual.

## Problemas y limitaciones conocidos

- Sistemas EHR no interoperables, procesos manuales, ausencia de capa de datos compartida y métricas tardías son **problemas declarados de HealthCore en el briefing**, no fallos de software nuevo en este repo.
- No hay configuración raíz de workspace, dependencias generales, despliegue ni orquestación local comprobable; la existencia de una receta en el README o del devcontainer no basta para afirmar que corre la solución.
- Faltan decisiones y evidencias técnicas sobre privacidad, seguridad, acceso a sistemas clínicos, residencia de datos, integración y validación regulatoria. Deben resolverse antes de tratar datos reales o afirmar cumplimiento.
- La documentación actual no ofrece sub-READMEs de `uis/website`, `uis/backoffice` o servicios porque estos componentes no existen aún.

## Próximos pasos sugeridos (no aprobados ni ejecutados)

1. Acordar el primer caso de uso y criterios de éxito con las áreas interesadas; distinguir MVP de las necesidades amplias del briefing.
2. Definir límites de datos, permisos, auditoría, retención y requisitos HIPAA/UK GDPR con Cumplimiento antes de cualquier integración o dato real.
3. Concretar contratos y acceso a los sistemas fuente, especialmente ambos EHR y datos de facturación; diseñar el modelo de integración sin asumir conectividad disponible.
4. Confirmar decisiones tecnológicas pendientes y el modo de ejecución del monorepo; luego implementar en las ubicaciones existentes/previstas: `./uis/website`, `./uis/backoffice` y `/services`, documentando cada componente con su README.
5. Añadir pruebas, datos sintéticos apropiados y evaluación antes de habilitar automatización o IA en flujos clínicos, financieros o regulatorios.

Estos pasos son recomendaciones de planificación, no compromisos, decisiones aprobadas ni trabajo ya realizado.
