# Regla de arquitectura del monorepo HealthCore

## Nombre y objetivo

**Nombre:** Arquitectura y ubicación de componentes HealthCore.  
**Objetivo:** proteger la organización del monorepo existente y mantener cada interfaz y backend en su ubicación canónica, evitando implementaciones duplicadas o dispersas.

## Alcance

**SIEMPRE ACTIVA — se aplica a todo el repositorio.**  
Aplica a toda creación, edición, movimiento o eliminación de archivos y carpetas, así como a propuestas de arquitectura.

## Convenciones arquitectónicas

- Website público: `./uis/website`.
- Backoffice interno: `./uis/backoffice`.
- APIs, servicios backend y workers: `/services`.
- No crear árboles paralelos ni ubicaciones alternativas para aplicaciones frontend o backend, ni duplicar esos componentes en la raíz u otras carpetas.
- Sigue la responsabilidad de cada carpeta descrita en los README del monorepo. Las guías expresan convenciones; no implican que un componente ya esté implementado.

## Gestión de cambios

- Respeta `AGENTS.md`, los README relevantes, la arquitectura existente y las decisiones y restricciones documentadas en `memory-bank/`.
- Trata `BRIEFING.md` como fuente del contexto empresarial. No presentes necesidades del briefing como funcionalidades existentes ni propongas cambios que contradigan sus restricciones sin pedir confirmación.
- Antes de cambios arquitectónicos, verifica que la ubicación propuesta coincide con estas rutas y con las guías de carpeta. Si hay conflicto o una decisión pendiente, detente y solicita autorización explícita.

## Restricciones

No muevas, elimines ni reorganices estructuras existentes sin autorización explícita del desarrollador. No añadas una ubicación alternativa para sortear esta regla. Los cambios ordinarios dentro de la estructura aprobada siguen permitidos si respetan los README y el alcance solicitado.

## Criterios de cumplimiento

Antes de dar por terminado un cambio, comprueba que:

1. Cada archivo o componente nuevo de website, backoffice o backend está dentro de su ruta canónica indicada arriba.
2. El diff no crea árboles paralelos, duplica aplicaciones ni introduce rutas alternativas.
3. No se movieron, eliminaron o reorganizaron estructuras existentes sin autorización explícita.
4. El cambio respeta los README aplicables, `AGENTS.md`, `memory-bank/` y el contexto de `BRIEFING.md`; los conflictos o decisiones no resueltas se elevan al desarrollador.
