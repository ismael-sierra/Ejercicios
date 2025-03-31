const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const {
  validateProductCreation,
  validateProductUpdate,
  validateProductId,
} = require("../validations/productValidations");

// Obtener todos los productos
router.get("/", productController.getProductController);

// Obtener un producto por ID
router.get("/:id", validateProductId, productController.getProductById);

// Crear un nuevo producto
router.post("/", validateProductCreation, productController.createProduct);

// Actualizar un producto existente
router.put(
  "/:id",
  validateProductId,
  validateProductUpdate,
  productController.updateProduct
);

// Eliminar un producto
router.delete("/:id", validateProductId, (req, res) => {
  res.status(501).json({ error: "Eliminar producto aún no implementado" });
});

module.exports = router;
