const apiUrl = "http://localhost:3000";

document.getElementById("btnRaiz").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

document.getElementById("btnAbout").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/about`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("contactNombre").value;
  const email = document.getElementById("contactEmail").value;
  const mensaje = document.getElementById("contactMensaje").value;

  const response = await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, mensaje }),
  });
  const data = await response.json();
  alert(data.message);
  e.target.reset();
});

document.getElementById("btnUsuarios").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/users`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

document
  .getElementById("btnBuscarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("Introduce el ID del usuario:");
    if (!id) return;
    const response = await fetch(`${apiUrl}/users/${id}/profile`);
    const data = await response.json();
    alert(JSON.stringify(data));
  });

document
  .getElementById("btnNuevoUsuario")
  .addEventListener("click", async () => {
    const nombre = prompt("Nombre del usuario:");
    const edad = prompt("Edad del usuario:");
    const mail = prompt("Correo del usuario:");
    if (!nombre || !edad || !mail) return;
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, edad, mail }),
    });
    const data = await response.json();
    alert(data.message);
  });

document
  .getElementById("btnActualizarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("ID del usuario a actualizar:");
    const nombre = prompt("Nuevo nombre:");
    const edad = prompt("Nueva edad:");
    const mail = prompt("Nuevo correo:");
    if (!id) return;
    const response = await fetch(`${apiUrl}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, edad, mail }),
    });
    const data = await response.json();
    alert(data.message);
  });

document
  .getElementById("btnEliminarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("ID del usuario a eliminar:");
    if (!id) return;
    const response = await fetch(`${apiUrl}/users/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    alert(data.message);
  });

document.getElementById("btnProductos").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/products`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

document.getElementById("btnDestacados").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/products/featured`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

document
  .getElementById("btnBuscarProducto")
  .addEventListener("click", async () => {
    const id = prompt("Introduce el ID del producto:");
    if (!id) return;
    const response = await fetch(`${apiUrl}/products/${id}`);
    const data = await response.json();
    alert(JSON.stringify(data));
  });

document
  .getElementById("btnNuevoProducto")
  .addEventListener("click", async () => {
    const nombre = prompt("Nombre del producto:");
    const categoria = prompt("Categoría:");
    const precio = prompt("Precio:");
    if (!nombre || !categoria || !precio) return;
    const response = await fetch(`${apiUrl}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, categoria, precio }),
    });
    const data = await response.json();
    alert(data.message);
  });

document
  .getElementById("btnActualizarProducto")
  .addEventListener("click", async () => {
    const id = prompt("ID del producto a actualizar:");
    const nombre = prompt("Nuevo nombre:");
    const categoria = prompt("Nueva categoría:");
    const precio = prompt("Nuevo precio:");
    if (!id) return;
    const response = await fetch(`${apiUrl}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, categoria, precio }),
    });
    const data = await response.json();
    alert(data.message);
  });
