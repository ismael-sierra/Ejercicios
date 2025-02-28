document.addEventListener("DOMContentLoaded", function () {
  let miDiv = document.getElementById("miDiv");
  let boton = document.getElementById("toggleBtn");

  boton.addEventListener("click", function () {
    if (miDiv.style.display === "none") {
      miDiv.style.display = "block";
      boton.textContent = "Ocultar";
    } else {
      miDiv.style.display = "none";
      boton.textContent = "Mostrar";
    }
  });
});
