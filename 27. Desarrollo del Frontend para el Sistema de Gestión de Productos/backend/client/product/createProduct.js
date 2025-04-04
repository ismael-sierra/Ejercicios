const createProduct = async () => {
  const productData = {
    nombre: "Laptop Gaming Pro",
    descripcion: "Laptop gaming de alta gama con RTX 3080",
    precio: 1999.99,
    stock: 10,
    categoria: "Electrónica",
    marca: "TechPro",
    codigoProducto: "LAP-001",
    fechaFabricacion: "2024-01-15",
    garantiaMeses: 24,
    peso: 2.5,
    dimensiones: {
      alto: 2.5,
      ancho: 35,
      profundidad: 25,
    },
    coloresDisponibles: ["Negro", "Plateado"],
    etiquetas: ["gaming", "laptop", "alta gama"],
    imagenes: ["url1.jpg", "url2.jpg"],
    esActivo: true,
  };

  try {
    console.log("Datos a enviar:", productData);
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error al crear el producto");
    }

    const data = await response.json();
    console.log("Producto creado exitosamente:", data);
    return data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

// Para poder ejecutarlo directamente
createProduct();
