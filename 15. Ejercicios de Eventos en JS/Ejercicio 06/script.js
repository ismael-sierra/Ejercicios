document.addEventListener("DOMContentLoaded", function () {
  let selector = document.getElementById("opciones");
  let mensaje = document.getElementById("mensaje");

  selector.addEventListener("change", function () {
    if (selector.value) {
      mensaje.textContent = "Has seleccionado: " + selector.value;
    } else {
      mensaje.textContent = "No has seleccionado ninguna opción.";
    }
  });
});
