# Project brief — HealthCore

## Fuente y criterio

- **Fuente empresarial principal:** [`../BRIEFING.md`](../BRIEFING.md), briefing interno de HealthCore para 4Geeks Academy.
- **Contexto del repositorio:** [`../CONTEXT.md`](../CONTEXT.md) sigue siendo un placeholder de la plantilla; no sustituye al briefing.
- En este documento, **Hecho confirmado** significa que está declarado por el briefing o la estructura actual. **Necesidad/propuesta** describe un objetivo solicitado, no una funcionalidad ya implementada.

## Empresa y modelo de negocio — hechos confirmados

HealthCore es una empresa de atención sanitaria ambulatoria fundada en 2011 y dirigida por la Dra. Sandra Okonkwo. Opera 12 clínicas: nueve en Estados Unidos (Texas, Florida y Georgia) y tres en el Reino Unido (Londres y Mánchester). Ofrece atención primaria, consultas con especialistas, gestión de enfermedades crónicas y programas de salud preventiva. Tiene aproximadamente 200 empleados, incluyendo unas 120 personas de personal clínico, y una facturación anual cercana a 28 millones de dólares.

El modelo de negocio presta servicios clínicos en dos mercados: en EE. UU. trabaja con seguros comerciales, Medicare y Medicaid; en el Reino Unido combina pago privado con un contrato pequeño con el NHS. Sus diferenciadores declarados son citas en el mismo día, horarios ampliados y personal bilingüe en los mercados estadounidenses.

## Problema que resuelve el proyecto

HealthCore Digital es la unidad interna creada para modernizar los sistemas, flujos de trabajo y herramientas de la empresa. El problema central es que la operación creció sobre sistemas y procesos aislados: las sedes estadounidenses y británicas usan distintos EHR que no se comunican; no hay capa de datos compartida; las reservas, la facturación británica y los registros de cumplimiento dependen de procesos manuales o dispersos. La dirección recibe informes tardíos y no comparables.

Consecuencias indicadas en el briefing: 22 % de no-shows (unos 1,8 millones de dólares anuales en huecos perdidos), 14 % de rechazo de reclamaciones en EE. UU., unos 35 minutos diarios por clínico dedicados a documentación asistible y dificultad para consolidar registros de pacientes y auditoría. La compañía está sujeta a HIPAA en EE. UU. y UK GDPR en Reino Unido; el tratamiento de datos de pacientes requiere especial cuidado legal y operativo.

## Objetivos de negocio y alcance previsto

El objetivo general es permitir que HealthCore opere de forma segura, eficiente y centrada en el paciente, con mejor integración y visibilidad entre sus 12 clínicas y dos jurisdicciones. El briefing plantea necesidades para:

- **Operaciones clínicas:** exponer datos de los dos EHR mediante una API unificada, asistir documentación clínica y ofrecer visibilidad de operaciones entre sedes.
- **Experiencia del paciente:** habilitar reservas online compartidas, recordatorios y contacto proactivo, y medir reservas, no-shows y satisfacción.
- **Ingresos y facturación:** revisar reclamaciones antes del envío, apoyar codificación, unificar visibilidad de ingresos y analizar rechazos y seguimientos.
- **Cumplimiento y gobierno del dato:** centralizar monitorización y auditoría y facilitar solicitudes de datos de pacientes.
- **Personas:** digitalizar procesos de RR. HH., onboarding y seguimiento de formación CME.
- **Tecnología y dirección:** integrar fuentes, mejorar telemetría y alimentar dashboards departamentales y ejecutivos.

Estos puntos son **necesidades descritas por el briefing**, no compromisos de entrega ni capacidades ya construidas. La selección personal de áreas de interés y una idea de agente para apoyar documentación técnica/regulatoria aparecen en [`../company-choice.md`](../company-choice.md); son propuestas de enfoque, no alcance aprobado ni implementación existente.

## Límites y cautelas

- El proyecto pertenece al monorepo existente; no crear otro repositorio ni aplicaciones o carpetas alternativas.
- La web pública corresponde a `./uis/website`, el backoffice a `./uis/backoffice` y las APIs a `/services`, según la guía y estructura de responsabilidades del monorepo. En el estado inspeccionado, las dos carpetas de UI aún no existen; no crearlas como parte de este trabajo de documentación.
- No asumir que se dispone de datos reales, acceso a EHR, integraciones, aprobaciones regulatorias o modelos clínicos. El repositorio no los demuestra.
- No presentar asistencia de IA como decisión o funcionalidad aprobada: el briefing expresa necesidades y oportunidades, mientras que las soluciones concretas requieren definición, evaluación y revisión de cumplimiento.
