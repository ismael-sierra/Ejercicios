import {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
} from "./services/productService.js";

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();

  document
    .getElementById("product-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      await guardarProducto();
    });
});

async function cargarProductos() {
  try {
    const productos = await getAllProducts();
    actualizarTabla(productos);
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

function actualizarTabla(productos) {
  const tbody = document.getElementById("product-table-body");
  tbody.innerHTML = ""; // Limpiar tabla

  productos.forEach((producto) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.id || producto._id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}€</td>
      <td>${producto.stock}</td>
      <td>
        <button class="edit" data-id="${
          producto.id || producto._id
        }">Editar</button>
        <button class="delete" data-id="${
          producto.id || producto._id
        }">Eliminar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });

  // Agregar eventos a los botones después de insertar las filas
  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", () => editarProducto(button.dataset.id));
  });

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", () => eliminarProducto(button.dataset.id));
  });
}

async function guardarProducto() {
  const id = document.getElementById("product-id").value;
  const nombre = document.getElementById("product-name").value.trim();
  const precio = parseFloat(document.getElementById("product-price").value);
  const stock = parseInt(document.getElementById("product-stock").value);
  const marca = document.getElementById("product-brand").value.trim();
  const categoria = document.getElementById("product-category").value.trim();
  const descripcion = document
    .getElementById("product-description")
    .value.trim();
  const codigoProducto = document.getElementById("product-code").value.trim();
  const garantiaMeses = parseInt(
    document.getElementById("product-warranty").value
  );
  const fechaFabricacion = document.getElementById("product-date").value;
  const peso = parseFloat(document.getElementById("product-weight").value);
  const dimensiones = {
    ancho: parseFloat(document.getElementById("product-width").value),
    alto: parseFloat(document.getElementById("product-height").value),
    profundidad: parseFloat(document.getElementById("product-depth").value),
  };

  if (
    !nombre ||
    isNaN(precio) ||
    isNaN(stock) ||
    !marca ||
    !categoria ||
    !descripcion ||
    !codigoProducto ||
    isNaN(garantiaMeses) ||
    !fechaFabricacion ||
    isNaN(peso) ||
    isNaN(dimensiones.ancho) ||
    isNaN(dimensiones.alto) ||
    isNaN(dimensiones.profundidad)
  ) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const producto = {
    nombre,
    precio,
    stock,
    marca,
    categoria,
    descripcion,
    codigoProducto,
    garantiaMeses,
    fechaFabricacion,
    peso,
    dimensiones,
  };

  console.log("Enviando producto:", producto);

  try {
    if (id) {
      await updateProduct(id, producto);
    } else {
      await createProduct(producto);
    }

    document.getElementById("product-form").reset();
    document.getElementById("product-id").value = ""; // Reset ID tras editar
    cargarProductos();
  } catch (error) {
    console.error("Error al guardar producto:", error);
  }
}

async function editarProducto(id) {
  try {
    console.log(`Editando producto con ID: ${id}`); // Depuración

    const productos = await getProductById(id);
    console.log("Producto recibido:", productos); // Ver qué devuelve el backend

    if (!Array.isArray(productos) || productos.length === 0) {
      console.error(`Producto con ID ${id} no encontrado.`);
      alert("Error: Producto no encontrado.");
      return;
    }

    const producto = productos.find((p) => p._id === id);

    if (!producto) {
      console.error(`Producto con ID ${id} no encontrado en la lista.`);
      alert("Error: Producto no encontrado en la base de datos.");
      return;
    }

    // Llenar formulario con los valores del producto
    document.getElementById("product-id").value = producto._id || "";
    document.getElementById("product-name").value = producto.nombre || "";
    document.getElementById("product-price").value = producto.precio || "";
    document.getElementById("product-stock").value = producto.stock || "";
    document.getElementById("product-brand").value = producto.marca || "";
    document.getElementById("product-category").value =
      producto.categoria || "";
    document.getElementById("product-description").value =
      producto.descripcion || "";
    document.getElementById("product-code").value =
      producto.codigoProducto || "";
    document.getElementById("product-warranty").value =
      producto.garantiaMeses || "";
    document.getElementById("product-date").value =
      producto.fechaFabricacion?.split("T")[0] || "";
    document.getElementById("product-weight").value = producto.peso || "";

    // Manejar dimensiones si existen
    const dimensiones = producto.dimensiones || {};
    document.getElementById("product-width").value = dimensiones.ancho || "";
    document.getElementById("product-height").value = dimensiones.alto || "";
    document.getElementById("product-depth").value =
      dimensiones.profundidad || "";
  } catch (error) {
    console.error("Error al obtener detalles del producto:", error);
    alert("Ocurrió un error al cargar el producto.");
  }
}

async function eliminarProducto(id) {
  if (!id) {
    alert("Error: Producto no encontrado.");
    return;
  }

  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    try {
      console.log(`Marcando como inactivo el producto con ID: ${id}`);

      const producto = await getProductById(id);
      if (!producto) {
        alert("Error: Producto no encontrado en la base de datos.");
        return;
      }

      // Simula eliminación estableciendo esActivo: false
      producto.esActivo = false;
      await updateProduct(id, producto);

      cargarProductos();
      alert("Producto marcado como inactivo.");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      alert("Error al eliminar el producto.");
    }
  }
}

// Hacer las funciones accesibles globalmente
window.editarProducto = editarProducto;
window.eliminarProducto = eliminarProducto;
