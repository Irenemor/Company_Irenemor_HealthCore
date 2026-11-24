# memory-bank-maintenance

## Objetivo y cuándo utilizarla

Actualizar únicamente los documentos del banco de memoria que deban cambiar cuando haya cambios relevantes y comprobables en el negocio, la arquitectura, las funcionalidades o el estado de HealthCore. Utiliza esta skill después de cambios relevantes en el proyecto o cuando se solicite revisar la vigencia del banco de memoria.

El único objetivo de esta skill es mantener `memory-bank/` actualizado. No implementes funcionalidades ni edites `AGENTS.md`, otras reglas o archivos fuera del banco de memoria.

## Inputs

Consulta y utiliza:

- Los archivos modificados o la descripción verificable de los cambios realizados.
- `BRIEFING.md`, como fuente del contexto empresarial.
- `memory-bank/projectbrief.md`.
- `memory-bank/techContext.md`.
- `memory-bank/progress.md`.

Si el cambio depende de una convención o implementación, consulta también los README o archivos fuente correspondientes antes de modificar memoria. No deduzcas estado únicamente a partir de una solicitud, plan, README de plantilla o funcionalidad propuesta.

## Procedimiento

1. Identifica los cambios relevantes y las evidencias disponibles en los archivos fuente. Separa cambios implementados de propuestas, requisitos y decisiones pendientes.
2. Contrasta cada dato empresarial con `BRIEFING.md` y cada dato técnico o de estado con los archivos fuente/README aplicables. Trata el briefing como contexto empresarial, no como evidencia de implementación.
3. Determina el archivo de memoria afectado:
   - `projectbrief.md`: cambios confirmados en la empresa, modelo de negocio, problema, objetivos o alcance.
   - `techContext.md`: stack, arquitectura, estructura, convenciones, restricciones o decisiones técnicas confirmadas.
   - `progress.md`: funcionalidades realmente existentes, tareas completadas, estado, problemas conocidos y próximos pasos.
4. Actualiza solo los archivos de memoria afectados. Conserva la información que siga siendo válida, elimina o corrige únicamente lo que haya quedado obsoleto y evita duplicar contenido entre documentos.
5. No inventes datos ni rellenes vacíos con suposiciones. Marca explícitamente como pendiente de confirmar cualquier decisión, fuente insuficiente o inconsistencia relevante; si el cambio requiere una decisión del desarrollador, no la resuelvas en su nombre.
6. Verifica los documentos editados: comprueba que las afirmaciones tienen fuente, que no hay contradicciones entre los tres archivos, que las rutas y el estado coinciden con el repositorio y que los cambios no exceden el banco de memoria.
7. Informa los archivos actualizados, las fuentes consultadas, las verificaciones realizadas y las cuestiones pendientes. Si no hay cambio relevante o falta evidencia, no alteres el banco y explica el motivo.

## Outputs

- Los archivos Markdown afectados dentro de `memory-bank/`, actualizados de forma concisa y coherente; puede no haber archivos modificados si no hay cambios relevantes confirmados.
- Un resumen que indique cambios reflejados, archivos modificados, fuentes consultadas, verificaciones realizadas y decisiones o datos pendientes de confirmar.

## Criterios de aceptación verificables

La tarea se acepta solo si se puede comprobar que:

- Todo cambio relevante confirmado está reflejado en el archivo de memoria que le corresponde.
- La información actualizada está contrastada con las fuentes disponibles.
- `projectbrief.md`, `techContext.md` y `progress.md` no se contradicen entre sí.
- No se introdujo información inventada ni se presentó una propuesta como funcionalidad implementada.
- Se conservaron los contenidos previos que siguen siendo válidos.
- Las cuestiones pendientes de confirmar están identificadas explícitamente.
- El resumen final informa los archivos modificados, las fuentes consultadas y las verificaciones realizadas.
- No se modificó ningún archivo fuera de `memory-bank/`.
