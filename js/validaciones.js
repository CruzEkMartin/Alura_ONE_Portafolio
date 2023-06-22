export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove("formcontato__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("formcontato__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

export function validatextarea(textarea) {
  const tipoDeText = textarea.dataset.tipo;

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("formcontato__textarea--invalid");
    textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML = "";
  } else {
    textarea.parentElement.classList.add("formcontato__textarea--invalid");
    textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML =
      mostrarMensajeDeError(tipoDeText, textarea);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "Solo se permiten 50 caracteres.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío",
    patternMismatch: "Solo se permiten 50 caracteres.",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
    patternMismatch: "Solo se permiten 300 caracteres.",
  },
};


function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
