import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./services/usersService.js";

document.getElementById("btnUsuarios").addEventListener("click", async () => {
  const data = await getUsers();
  mostrarUsuariosEnTabla(data.usuarios);
});

document
  .getElementById("btnBuscarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("Introduce el ID del usuario:");
    if (!id) return;
    const data = await getUserById(id);
    console.log("Respuesta de la API:", data);

    if (!data || !data.usuario) {
      alert("Usuario no encontrado.");
      return;
    }
    mostrarUsuariosEnTabla([data.usuario]);
  });

document
  .getElementById("btnNuevoUsuario")
  .addEventListener("click", async () => {
    const nombre = prompt("Nombre del usuario:");
    const edad = prompt("Edad del usuario:");
    const mail = prompt("Correo del usuario:");
    if (!nombre || !edad || !mail) return;
    await createUser({ nombre, edad, mail });
    actualizarListaUsuarios();
  });

document
  .getElementById("btnActualizarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("ID del usuario a actualizar:");
    const nombre = prompt("Nuevo nombre:");
    const edad = prompt("Nueva edad:");
    const mail = prompt("Nuevo correo:");
    if (!id) return;
    await updateUser(id, { nombre, edad, mail });
    actualizarListaUsuarios();
  });

document
  .getElementById("btnEliminarUsuario")
  .addEventListener("click", async () => {
    const id = prompt("ID del usuario a eliminar:");
    if (!id) return;
    await deleteUser(id);
    actualizarListaUsuarios();
  });

function mostrarUsuariosEnTabla(usuarios) {
  let tabla = document.getElementById("tablaUsuarios");
  if (!tabla) {
    tabla = document.createElement("table");
    tabla.id = "tablaUsuarios";
    tabla.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        `;
    document.body.appendChild(tabla);
  } else {
    tabla.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        `;
  }
  usuarios.forEach((usuario) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.mail}</td>
        `;
    tabla.appendChild(fila);
  });
}

async function actualizarListaUsuarios() {
  const data = await getUsers();
  mostrarUsuariosEnTabla(data.usuarios);
}
