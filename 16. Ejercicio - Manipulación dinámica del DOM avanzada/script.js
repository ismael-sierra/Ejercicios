let contador = 1;

function crearElemento(texto) {
  const elemento = document.createElement("p");
  elemento.classList.add("elemento");
  elemento.textContent = texto;
  return elemento;
}

// Creación de elementos
document.getElementById("btnCrear").addEventListener("click", () => {
  const nuevoElemento = crearElemento(`Elemento creado número ${contador++}`);
  document.getElementById("contenedorNuevos").appendChild(nuevoElemento);
});

// Inserción de elementos
const contenedorInserciones = document.getElementById("contenedorInserciones");
const referencia = document.getElementById("elementoReferencia");

document.getElementById("btnInsertarAntes").addEventListener("click", () => {
  const nuevoElemento = crearElemento("Creado elemento antes de referencia");
  contenedorInserciones.insertBefore(nuevoElemento, referencia);
});

document.getElementById("btnInsertarDespues").addEventListener("click", () => {
  const nuevoElemento = crearElemento("Creado elemento después de referencia");
  referencia.insertAdjacentElement("afterend", nuevoElemento);
});

document.getElementById("btnInsertarInicio").addEventListener("click", () => {
  const nuevoElemento = crearElemento("Creado elemento al inicio");
  contenedorInserciones.prepend(nuevoElemento);
});

document.getElementById("btnInsertarFinal").addEventListener("click", () => {
  const nuevoElemento = crearElemento("Creado elemento al final");
  contenedorInserciones.appendChild(nuevoElemento);
});

// Eliminación de elementos
document.getElementById("btnEliminar").addEventListener("click", () => {
  const contenedorEliminables = document.getElementById(
    "contenedorEliminables"
  );
  const ultimoElemento = contenedorEliminables.lastElementChild;
  if (ultimoElemento) {
    ultimoElemento.remove();
  }
});

// Reemplazo de elementos
document.getElementById("btnReemplazar").addEventListener("click", () => {
  const contenedorReemplazo = document.getElementById("contenedorReemplazo");
  const elementoReemplazable = contenedorReemplazo.querySelector(".elemento");
  if (elementoReemplazable) {
    const nuevoElemento = crearElemento(
      `Elemento reemplazado número ${contador++}`
    );
    elementoReemplazable.replaceWith(nuevoElemento);
  }
});
