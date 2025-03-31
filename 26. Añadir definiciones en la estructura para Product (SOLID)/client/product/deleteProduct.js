const deleteProduct = async () => {
  // Ejemplo de un ObjectId de MongoDB (24 caracteres hexadecimales)
  const productId = "65f9e8b7c261e8b7c261e8b7"; // Reemplaza con el ObjectId real del producto a eliminar

  try {
    const response = await fetch(
      `http://localhost:3000/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Error en la petición HTTP: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Producto eliminado exitosamente:", data);
    return data;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};

// Para poder ejecutarlo directamente
deleteProduct();
