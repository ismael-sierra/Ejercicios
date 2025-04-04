const updateProduct = async () => {
  // Ejemplo de un ObjectId de MongoDB (24 caracteres hexadecimales)
  const productId = "65f9e8b7c261e8b7c261e8b7"; // Reemplaza con el ObjectId real del producto a actualizar

  const productData = {
    nombre: "Laptop Gaming Pro 2.0",
    descripcion: "Nueva versión mejorada de la laptop gaming de alta gama",
    precio: 2099.99,
    stock: 15,
    categoria: "Electrónica",
    marca: "TechPro",
    codigoProducto: "LAP-002",
    fechaFabricacion: "2024-02-20",
    garantiaMeses: 36,
    peso: 2.4,
    dimensiones: {
      alto: 2.4,
      ancho: 34,
      profundidad: 24,
    },
    coloresDisponibles: ["Negro", "Rojo"],
    etiquetas: ["gaming", "laptop", "alta gama"],
    imagenes: ["url3.jpg", "url4.jpg"],
    esActivo: true,
  };

  try {
    const response = await fetch(
      `http://localhost:3000/products/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Error en la petición HTTP: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Producto actualizado exitosamente:", data);
    return data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

// Para poder ejecutarlo directamente
updateProduct();
