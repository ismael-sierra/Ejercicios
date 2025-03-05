document.addEventListener("DOMContentLoaded", function () {
  let area = document.getElementById("area");

  area.addEventListener("mousemove", function () {
    alert("El ratón se está moviendo dentro del área.");
  });

  area.addEventListener("mouseleave", function () {
    area.textContent = "Mueve el ratón aquí";
  });
});
