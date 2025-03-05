document.addEventListener("DOMContentLoaded", function () {
  let botones = document.querySelectorAll(".boton");

  botones.forEach((boton, index) => {
    boton.addEventListener("click", function () {
      alert(`Botón ${index + 1} presionado`);
    });
  });
});
