document.addEventListener("DOMContentLoaded", function () {
  let elementos = document.querySelectorAll(".modificar");
  
  elementos.forEach((elemento) => {
    elemento.textContent = "Texto modificado";
  });
});
