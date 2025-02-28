document.addEventListener("DOMContentLoaded", function () {
  let miDiv = document.getElementById("miDiv");

  miDiv.addEventListener("mouseenter", function () {
    miDiv.style.backgroundColor = "#f0f0f0";
  });

  miDiv.addEventListener("mouseleave", function () {
    miDiv.style.backgroundColor = "white";
  });
});
