const apiUrl = "http://localhost:3000/products";

export async function getProducts() {
  const response = await fetch(apiUrl);
  return await response.json();
}

export async function getFeaturedProducts() {
  const response = await fetch("http://localhost:3000/products/featured");
  if (!response.ok) {
    throw new Error("Error al obtener productos destacados.");
  }
  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  if (!response.ok) {
    throw new Error("Producto no encontrado.");
  }
  return await response.json();
}

export async function createProduct(product) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await response.json();
}

export async function updateProduct(id, product) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await response.json();
}

export async function deleteProduct(id) {
  const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  return await response.json();
}
