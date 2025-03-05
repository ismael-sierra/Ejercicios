document.addEventListener("DOMContentLoaded", function () {
  let miDiv = document.getElementById("miDiv");

  miDiv.addEventListener("mouseover", function () {
    miDiv.style.backgroundColor = "lightblue";
  });

  miDiv.addEventListener("mouseout", function () {
    miDiv.style.backgroundColor = "white";
  });
});
