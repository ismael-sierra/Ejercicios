document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("miFormulario");
  let campoTexto = document.getElementById("campoTexto");
  let mensajeError = document.getElementById("mensajeError");

  formulario.addEventListener("submit", function (event) {
    if (campoTexto.value.trim() === "") {
      event.preventDefault(); // Evita el envío del formulario
      mensajeError.textContent = "El campo de texto es obligatorio.";
    } else {
      mensajeError.textContent = ""; // Borra el mensaje si el campo está lleno
    }
  });
});
