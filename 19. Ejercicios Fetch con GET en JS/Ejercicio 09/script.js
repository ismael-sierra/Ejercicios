fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(`${user.name} - Ciudad: ${user.address.city}`);
    });
  })
  .catch((error) => console.error("Error al obtener los datos:", error));
