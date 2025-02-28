document.addEventListener("DOMContentLoaded", function () {
  let div = document.getElementById("miDiv");

  if (div.classList.contains("activo")) {
    console.log("El elemento tiene la clase 'activo'.");
  } else {
    console.log("El elemento NO tiene la clase 'activo'.");
  }
});
