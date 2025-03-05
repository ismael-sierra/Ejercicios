document.addEventListener("DOMContentLoaded", function () {
  let campoTexto = document.getElementById("campoTexto");
  let boton = document.getElementById("miBoton");

  campoTexto.addEventListener("input", function () {
    if (campoTexto.value.trim() === "") {
      boton.disabled = true; // Deshabilita el botón si el campo está vacío
    } else {
      boton.disabled = false; // Habilita el botón si hay texto
    }
  });
});
