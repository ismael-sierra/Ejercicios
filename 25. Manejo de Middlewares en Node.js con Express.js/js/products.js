import {
  getProducts,
  getFeaturedProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./services/productsService.js";

document.getElementById("btnProductos").addEventListener("click", async () => {
  const data = await getProducts();
  mostrarProductosEnTabla(data.productos);
});

document.getElementById("btnDestacados").addEventListener("click", async () => {
  try {
    const data = await getFeaturedProducts();
    if (!data.productos || data.productos.length === 0) {
      alert("No hay productos destacados.");
      return;
    }
    mostrarProductosEnTabla(data.productos);
  } catch (error) {
    console.error("Error al obtener productos destacados:", error);
    alert("Error al obtener productos destacados.");
  }
});

document
  .getElementById("btnBuscarProducto")
  .addEventListener("click", async () => {
    const id = prompt("Introduce el ID del producto:");
    if (!id) return;
    const data = await getProductById(id);
    if (!data || !data.producto) {
      alert("Producto no encontrado.");
      return;
    }
    mostrarProductosEnTabla([data.producto]);
  });

document
  .getElementById("btnNuevoProducto")
  .addEventListener("click", async () => {
    const nombre = prompt("Nombre del producto:");
    const categoria = prompt("Categoría:");
    const precio = prompt("Precio:");
    const destacado = confirm(
      "¿Es un producto destacado? (Aceptar = Sí / Cancelar = No)"
    );

    if (!nombre || !categoria || !precio) return;

    const data = await createProduct({ nombre, categoria, precio, destacado });
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
    await updateProduct(id, { nombre, categoria, precio });
    actualizarListaProductos();
  });

document
  .getElementById("btnEliminarProducto")
  .addEventListener("click", async () => {
    const id = prompt("ID del producto a eliminar:");
    if (!id) return;
    await deleteProduct(id);
    actualizarListaProductos();
  });

function mostrarProductosEnTabla(productos) {
  let tabla = document.getElementById("tablaProductos");
  if (!tabla) {
    tabla = document.createElement("table");
    tabla.id = "tablaProductos";
    tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
        </tr>
    `;
    document.body.appendChild(tabla);
  } else {
    tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
        </tr>
    `;
  }
  productos.forEach((producto) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.precio}</td>
    `;
    tabla.appendChild(fila);
  });
}

async function actualizarListaProductos() {
  const data = await getProducts();
  mostrarProductosEnTabla(data.productos);
}
