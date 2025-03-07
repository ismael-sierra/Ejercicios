document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => response.json())
    .then((user) => {
      console.log("Nombre:", user.name);
      console.log("Ciudad:", user.address.city);
      console.log("Compañía:", user.company.name);

      document.getElementById("nombre").textContent = user.name;
      document.getElementById("ciudad").textContent = user.address.city;
      document.getElementById("compania").textContent = user.company.name;
    })
    .catch((error) =>
      console.error("Error al obtener los datos del usuario:", error)
    );
});
