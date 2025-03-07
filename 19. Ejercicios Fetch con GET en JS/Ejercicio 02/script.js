fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => response.json())
  .then((user) => {
    document.getElementById(
      "user-info"
    ).textContent = `Nombre: ${user.name}, Correo: ${user.email}`;
  })
  .catch((error) => {
    document.getElementById("user-info").textContent =
      "Error al cargar los datos";
    console.error("Error:", error);
  });
