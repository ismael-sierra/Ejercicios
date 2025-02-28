document.addEventListener("DOMContentLoaded", function () {
  let elementos = document.getElementsByClassName("item");

  Array.from(elementos).forEach((elemento) => {
    console.log(elemento.textContent);
  });
});
