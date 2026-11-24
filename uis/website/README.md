# HealthCore public website

Sitio público estático de HealthCore, ubicado en `uis/website` conforme a la organización del monorepo. Incluye una landing (`index.html`) y un formulario demostrativo de solicitud de información (`application.html`) con validación en navegador (`validation.js`). El formulario no transmite ni persiste datos; no introduzcas información médica o de salud.

## Ejecutar en local (Windows/PowerShell) o Codespaces

Requiere Node.js y npm disponibles en el entorno. Desde la raíz del repositorio, ejecuta:

```sh
npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0
```

Abre `http://localhost:3000/` para la landing o `http://localhost:3000/application.html` para el formulario. En local, el servidor se ejecuta en tu equipo; no hace falta Codespaces ni exponer el puerto a Internet. En Codespaces, reenvía el puerto 3000 y establece la visibilidad como **Public** solo si más adelante necesitas compartir la vista para evaluación externa.

Este comando requiere conexión a Internet la primera vez para que `npx` pueda obtener `http-server`. Está documentado como instrucción de ejecución; su funcionamiento debe comprobarse en el entorno antes de considerarlo verificado.
