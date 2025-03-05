document.addEventListener("DOMContentLoaded", function () {
  let campoTexto = document.getElementById("campoTexto");
  let contador = document.getElementById("contador");

  campoTexto.addEventListener("input", function () {
    contador.textContent = campoTexto.value.length;
  });
});
