document.addEventListener("DOMContentLoaded", function () {
  let enlaces = document.querySelectorAll(".lista a");

  enlaces.forEach((enlace) => {
    console.log(enlace.href);
  });
});
