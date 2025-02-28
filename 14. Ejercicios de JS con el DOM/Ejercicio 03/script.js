document.addEventListener("DOMContentLoaded", function () {
  let elementosActivos = document.getElementsByClassName("activo").length;
  document.getElementById(
    "resultado"
  ).textContent = `Hay ${elementosActivos} elementos con la clase "activo".`;
});
