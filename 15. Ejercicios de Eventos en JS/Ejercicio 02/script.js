document.addEventListener("DOMContentLoaded", function () {
  let imagen = document.getElementById("miImagen");

  imagen.addEventListener("dblclick", function () {
    if (imagen.src.includes("neymar.avif")) {
      imagen.src = "lamine.avif";
    } else {
      imagen.src = "lamine.avif";
    }
  });
});
