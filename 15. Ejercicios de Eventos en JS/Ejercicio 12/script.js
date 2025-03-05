document.addEventListener("DOMContentLoaded", function () {
  let campoTexto = document.getElementById("campoTexto");

  campoTexto.addEventListener("keydown", function (event) {
    alert("Tecla presionada: " + event.key);
  });

  campoTexto.addEventListener("keyup", function (event) {
    alert("Tecla soltada: " + event.key);
  });
});
