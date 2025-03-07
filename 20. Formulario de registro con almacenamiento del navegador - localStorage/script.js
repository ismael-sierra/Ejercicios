document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registro-form");
  const tablaContainer = document.getElementById("tabla-container");
  const tablaBody = document.getElementById("tabla-body");
  const eliminarBtn = document.getElementById("eliminar-datos");

  function mostrarDatos() {
    const datos = JSON.parse(localStorage.getItem("usuario"));
    if (datos) {
      form.parentElement.classList.add("oculto");
      tablaContainer.classList.remove("oculto");

      tablaBody.innerHTML = "";
      const fila = document.createElement("tr");
      fila.innerHTML = `
                <td>${datos.nombre}</td>
                <td>${datos.edad}</td>
                <td>${datos.email}</td>
                <td>${datos.fecha}</td>
            `;
      tablaBody.appendChild(fila);
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const fecha = new Date().toLocaleString();

    if (nombre && edad && email) {
      const datosUsuario = { nombre, edad, email, fecha };
      localStorage.setItem("usuario", JSON.stringify(datosUsuario));
      mostrarDatos();
    }
  });

  eliminarBtn.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    tablaContainer.classList.add("oculto");
    form.parentElement.classList.remove("oculto");
    form.reset();
  });

  mostrarDatos();
});
