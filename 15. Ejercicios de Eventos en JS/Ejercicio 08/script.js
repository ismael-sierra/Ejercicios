document.addEventListener("DOMContentLoaded", function () {
  let anchoSpan = document.getElementById("ancho");
  let altoSpan = document.getElementById("alto");

  function actualizarDimensiones() {
    anchoSpan.textContent = window.innerWidth;
    altoSpan.textContent = window.innerHeight;
  }

  window.addEventListener("resize", actualizarDimensiones);

  actualizarDimensiones();
});
