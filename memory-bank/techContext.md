# Technical context — HealthCore monorepo

## Fuentes y nivel de certeza

- La arquitectura de carpetas y convenciones se documenta en [`../README.es.md`](../README.es.md), [`../uis/README.md`](../uis/README.md), [`../services/README.md`](../services/README.md), [`../packages/README.md`](../packages/README.md) y [`../docs/README.md`](../docs/README.md).
- El estado comprobable corresponde al árbol inspeccionado. Los README describen convenciones o recomendaciones, no necesariamente software implementado.
- **Confirmado** indica configuración/código presente o una convención expresa. **Pendiente/no confirmado** indica que no hay decisión o implementación demostrable en el repo.

## Stack tecnológico

### Confirmado en el repositorio

- `packages/shared` es un paquete privado TypeScript llamado `@repo/shared-types`, versión `0.0.1`. Su `package.json` no declara dependencias ni scripts. `types/index.ts` contiene `Id`, `BaseEntity` y un comentario que identifica los tipos como placeholders.
- `.devcontainer/devcontainer.json` define un entorno base Ubuntu 24.04 con Python 3.12, Node.js 22, Docker fuera del contenedor y GitHub CLI; instala JupyterLab con Python. Usa Corepack para activar `pnpm@latest` y contempla `uv`/`uv sync` si existe `pyproject.toml`.
- La configuración del editor incluye Prettier, ESLint, Pylance, extensiones de Python/Jupyter y Docker; `editor.formatOnSave` está habilitado en el devcontainer.
- `skills/data-analysis/scripts/pandas_clean.py` declara que es un script Python y requiere pandas para ejecutarse; no se confirma aquí la instalación de esa dependencia.

### Convenciones documentadas, aún no implementadas

- La guía raíz recomienda una API centralizada con **FastAPI** dentro de `services/`, evitando microservicios al principio y separando workers solo si lo requieren. No hay código FastAPI ni app API presente.
- `uis/` es la ubicación de todas las aplicaciones frontend; sus dos proyectos previstos son `website` (público) y `backoffice` (interno). La documentación no selecciona framework frontend.
- Estructura prevista de rutas: frontend público `./uis/website`, backoffice `./uis/backoffice`, APIs en `/services`. No deben crearse ubicaciones alternativas.
- `data/` organiza datos en `raw/`, `pipelines/`, `process/` y `eval/`; `agents/`, `skills/`, `mcps/` y `workflows/` tienen responsabilidades separadas descritas por sus README.
- `packages/` aloja librerías versionables compartidas; `shared/` contiene recursos sueltos. `docs/` es para arquitectura y decisiones transversales; `infra/` para infraestructura y despliegue.

## Arquitectura y estado observado

El repositorio está organizado como monorepo por responsabilidad: interfaces, servicios, datos, agentes y capacidades de IA, automatización, reutilización, documentación e infraestructura. Los directorios de UI solo contienen sus README de nivel superior; no existen todavía `uis/website` ni `uis/backoffice`. `services/` contiene únicamente sus README; no hay subservicios. La raíz no contiene `package.json`, `pyproject.toml`, `pnpm-workspace.yaml` ni `docker-compose.yml` en el árbol observado, por lo que no se confirma un workspace instalable ni orquestación local ejecutable.

Hay directorios de datos (`raw/`, `pipelines/`, `process/`, `eval/`) con README, pero no se observan datasets en ellos. Existen plantillas y documentación para agentes, skills de análisis de datos/revisión/investigación y la metadata/type placeholder del paquete compartido. Esto no demuestra un producto o servicio ejecutable.

## Decisiones y restricciones

### Hechos/convenciones confirmados

- Mantener cada tipo de artefacto en la carpeta de responsabilidad del monorepo y documentar apps, servicios, agentes y pipelines al añadirlos.
- La guía recomienda una API central FastAPI como dirección de arquitectura, no muchos microservicios prematuros.
- El dominio opera bajo HIPAA (EE. UU.) y UK GDPR (Reino Unido), según `BRIEFING.md`; cualquier solución que trate datos sanitarios debe evaluarse respecto a ambas jurisdicciones.

### Pendiente de decisión o validación

- Framework, bibliotecas, diseño y proceso de build del frontend público y del backoffice.
- Persistencia, bases de datos, autenticación/autorización, hosting, despliegue, CI/CD, observabilidad y gestión de secretos.
- Contratos, protocolos, acceso y estrategia de integración con los dos EHR, facturación y otros sistemas de origen.
- Modelo de datos compartido, ubicación/residencia de datos y controles para flujos transfronterizos.
- Proveedores y canales de notificación; elección, validación y supervisión de modelos de IA.
- Alcance, controles y aprobación formal de cumplimiento/seguridad para cualquier solución.

No inferir tecnologías de producción a partir de herramientas de desarrollo del devcontainer ni convertir ejemplos de README en funcionalidades existentes.
