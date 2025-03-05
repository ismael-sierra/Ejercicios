document.addEventListener("DOMContentLoaded", function () {
  let div = document.getElementById("miDiv");

  div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "green";
    div.textContent = "Ratón dentro";
  });

  div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "white";
    div.textContent = "Pasa el ratón aquí";
  });
});
