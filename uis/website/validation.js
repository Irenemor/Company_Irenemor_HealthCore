// Activa el modo estricto para detectar algunos errores de escritura en JavaScript.
'use strict';

// Busca el formulario por su id; si no existe en la página, no se instala ningún comportamiento.
const form = document.querySelector('#application-form');

if (form) {
  // Conjuntos de valores válidos para impedir que los selectores acepten opciones inesperadas.
  const allowedCountries = new Set(['us', 'uk', 'other']);
  const allowedInterests = new Set([
    'primary-care',
    'specialists',
    'chronic-care',
    'prevention',
    'general',
  ]);

  // Cada objeto relaciona un control, su zona de error y la regla que comprueba su valor.
  const fields = [
    {
      input: form.elements.namedItem('fullName'),
      error: document.querySelector('#full-name-error'),
      // El nombre debe contener texto y alcanzar la longitud mínima indicada en el HTML.
      validate(value, input) {
        if (!value.trim()) return 'Escribe tu nombre completo.';
        if (value.trim().length < input.minLength) {
          return `El nombre debe tener al menos ${input.minLength} caracteres.`;
        }
        return input.validity.valid ? '' : 'Revisa el formato del nombre.';
      },
    },
    {
      input: form.elements.namedItem('email'),
      error: document.querySelector('#email-error'),
      // Comprueba que haya un correo y que el navegador no detecte un formato incorrecto.
      validate(value, input) {
        if (!value.trim()) return 'Escribe tu correo electrónico.';
        if (input.validity.typeMismatch) return 'Introduce un correo electrónico con un formato válido.';
        return input.validity.valid ? '' : 'Revisa el correo electrónico.';
      },
    },
    {
      input: form.elements.namedItem('country'),
      error: document.querySelector('#country-error'),
      // Exige una selección y comprueba que pertenezca a las opciones permitidas.
      validate(value, input) {
        if (!value) return 'Selecciona el país de interés.';
        if (!allowedCountries.has(value)) return 'Selecciona una opción de la lista.';
        return input.validity.valid ? '' : 'Revisa el país seleccionado.';
      },
    },
    {
      input: form.elements.namedItem('interest'),
      error: document.querySelector('#interest-error'),
      // Aplica la misma comprobación de selección a las categorías de servicio.
      validate(value, input) {
        if (!value) return 'Selecciona el servicio sobre el que deseas información.';
        if (!allowedInterests.has(value)) return 'Selecciona una opción de la lista.';
        return input.validity.valid ? '' : 'Revisa el servicio seleccionado.';
      },
    },
    {
      input: form.elements.namedItem('message'),
      error: document.querySelector('#message-error'),
      // El mensaje es opcional, pero si se escribe no puede superar el máximo del HTML.
      validate(value, input) {
        if (value.length > input.maxLength) {
          return `El mensaje no puede superar los ${input.maxLength} caracteres.`;
        }
        return input.validity.valid ? '' : 'Revisa el contenido del mensaje.';
      },
    },
  ];
  // Región de la página que anuncia el resultado general de la validación.
  const status = document.querySelector('#form-status');

  // Valida un control, escribe su error, actualiza aria-invalid y devuelve true si pasa.
  function validateField(field) {
    const message = field.validate(field.input.value, field.input);
    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    return message === '';
  }

  // Borra el aviso general anterior y devuelve su color al estado normal.
  function clearStatus() {
    status.textContent = '';
    status.classList.remove('text-rose-800');
    status.classList.add('text-teal-900');
  }

  // Mientras la persona edita o abandona un campo, actualiza su error individual.
  fields.forEach((field) => {
    field.input.addEventListener('input', () => {
      validateField(field);
      clearStatus();
    });
    field.input.addEventListener('change', () => {
      validateField(field);
      clearStatus();
    });
    field.input.addEventListener('blur', () => validateField(field));
  });

  // Intercepta el envío: esta demostración valida los datos, pero nunca los transmite.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearStatus();

    // Busca y valida campos en orden; find devuelve el primero que no supera la regla.
    const firstInvalidField = fields.find((field) => !validateField(field));
    if (firstInvalidField) {
      status.textContent = 'Revisa los campos indicados antes de continuar.';
      status.classList.remove('text-teal-900');
      status.classList.add('text-rose-800');
      firstInvalidField.input.focus();
      return;
    }

    status.textContent = 'Validación correcta. El envío es simulado: tu solicitud no se ha transmitido ni guardado.';
  });

  // Después del reinicio nativo, elimina mensajes y estados de error de la interfaz.
  form.addEventListener('reset', () => {
    // El temporizador permite que el navegador restablezca primero los valores del formulario.
    window.setTimeout(() => {
      fields.forEach((field) => {
        field.error.textContent = '';
        field.input.removeAttribute('aria-invalid');
      });
      clearStatus();
    }, 0);
  });
}
