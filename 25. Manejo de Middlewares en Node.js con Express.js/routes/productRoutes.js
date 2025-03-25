const express = require("express");
const router = express.Router();

const productos = [];

router.get("/:id", (req, res) => {
  const producto = productos.find((p) => p.id == req.params.id);
  if (!producto) {
    return res
      .status(404)
      .json({ success: "FALLO", message: "Producto no encontrado." });
  }
  res.status(200).json({ success: "OK", producto });
});

// GET /products - Recupera una lista de productos con filtros múltiples
router.get("/", (req, res) => {
  const { categoria, precioMax } = req.query;
  let filtrados = productos;
  if (categoria) filtrados = filtrados.filter((p) => p.categoria === categoria);
  if (precioMax)
    filtrados = filtrados.filter((p) => p.precio <= parseFloat(precioMax));
  res.status(200).json({ success: "OK", productos: filtrados });
});

// GET /products/featured - Obtiene productos destacados, con un límite y categoría
router.get("/featured", (req, res) => {
  console.log("Petición recibida en /products/featured");
  const destacados = productos.filter((p) => p.destacado === true);
  if (destacados.length === 0) {
    return res
      .status(200)
      .json({ success: "FALLO", message: "No hay productos destacados." });
  }
  res.status(200).json({ success: "OK", productos: destacados });
});

// GET /products/categories/:mainCategory? - Muestra productos filtrados por una categoría principal y opcionalmente por subcategorías
router.get("/categories/:mainCategory?", (req, res) => {
  const { mainCategory } = req.params;
  if (!mainCategory)
    return res
      .status(400)
      .json({ success: "FALLO", message: "Debe especificar una categoría" });
  const filtrados = productos.filter((p) => p.categoria === mainCategory);
  res.status(200).json({ success: "OK", productos: filtrados });
});

// POST /products - Permite la creación de un nuevo producto
router.post("/", (req, res) => {
  const { nombre, categoria, precio, destacado } = req.body;
  if (!nombre || !categoria || !precio) {
    return res
      .status(400)
      .json({ success: "FALLO", message: "Faltan datos obligatorios" });
  }
  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    categoria,
    precio,
    destacado: !!destacado,
  };
  productos.push(nuevoProducto);
  res.status(201).json({
    success: "OK",
    message: "Producto agregado",
    producto: nuevoProducto,
  });
});

// GET /products/:id/reviews - Recupera reseñas de un producto especificado por su id, con filtros
router.get("/:id/reviews", (req, res) => {
  res
    .status(200)
    .json({ success: "OK", message: `Reseñas del producto ${req.params.id}` });
});

// POST /products/:id/reviews - Permite añadir una nueva reseña a un producto específico
router.post("/:id/reviews", (req, res) => {
  res.status(201).json({
    success: "OK",
    message: `Reseña agregada al producto ${req.params.id}`,
  });
});

// PUT /products/:id - Actualiza los detalles de un producto
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: "OK", message: `Producto ${req.params.id} actualizado` });
});

// GET /products/search - Permite realizar una búsqueda avanzada de productos
router.get("/search", (req, res) => {
  res
    .status(200)
    .json({ success: "OK", message: "Búsqueda avanzada en construcción" });
});

router.delete("/:id", (req, res) => {
  const index = productos.findIndex((p) => p.id == req.params.id);
  if (index === -1) {
    return res
      .status(404)
      .json({ success: "FALLO", message: "Producto no encontrado." });
  }
  productos.splice(index, 1);
  productos.forEach((p, i) => {
    p.id = i + 1;
  });
  res.status(200).json({
    success: "OK",
    message: "Producto eliminado y IDs reorganizados.",
  });
});

module.exports = router;
