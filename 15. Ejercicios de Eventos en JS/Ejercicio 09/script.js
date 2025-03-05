document.addEventListener("DOMContentLoaded", function () {
  let mensaje = document.getElementById("mensaje");

  window.addEventListener("scroll", function () {
    mensaje.style.display = "block"; 
    setTimeout(() => {
      mensaje.style.display = "none"; // Lo oculta después de 2 segundos
    }, 2000);
  });
});
