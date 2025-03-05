document.addEventListener("DOMContentLoaded", function () {
  let boton = document.getElementById("miBoton");

  boton.addEventListener("mousedown", function () {
    boton.style.backgroundColor = "#e74c3c"; // Rojo al presionar
  });

  boton.addEventListener("mouseup", function () {
    boton.style.backgroundColor = "#3498db"; // Azul al soltar
  });
});
