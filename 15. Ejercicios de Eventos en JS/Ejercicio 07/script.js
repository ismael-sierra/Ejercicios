document.addEventListener("DOMContentLoaded", function () {
  let campo = document.getElementById("campoTexto");

  campo.addEventListener("focus", function () {
    campo.style.border = "2px solid green";
  });

  campo.addEventListener("blur", function () {
    campo.style.border = "2px solid red";
  });
});
