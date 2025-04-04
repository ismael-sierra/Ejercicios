import { API_BASE_URL, HEADERS } from "./apiConfig.js";

// Obtener todos los productos
export async function getAllProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "GET",
      headers: HEADERS,
    });
    return await response.json();
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}

// Obtener detalles de un producto por ID
export async function getProductById(productId) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: "GET",
      headers: HEADERS,
    });
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  }
}

// Crear un nuevo producto
export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(productData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
}

// Actualizar un producto por ID
export async function updateProduct(productId, productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(productData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
}

// Eliminar un producto por ID
export async function deleteProduct(id) {
  if (!id) throw new Error("ID de producto no válido.");

  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Error al eliminar: ${response.status} - ${response.statusText}`
    );
  }

  return response;
}
