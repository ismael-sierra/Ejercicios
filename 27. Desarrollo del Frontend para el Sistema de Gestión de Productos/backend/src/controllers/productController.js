// Importación de servicios
const {
  getProducts,
  updateProduct,
  insertProduct,
  deleteProduct,
} = require("../services/productServices");
const {
  validateProductCreation,
  validateProductUpdate,
  validateProductId,
} = require("../validations/productValidations");

const productController = {
  getProductController: async (req, response) => {
    try {
      const data = await getProducts();
      response.status(200).json(data);
    } catch (e) {
      console.log("Error al recoger productos de la BBDD", e);
      response
        .status(500)
        .json({ error: "Error al recoger productos de la BBDD" });
    }
  },

  getProductById: async (req, response) => {
    try {
      const { id } = req.params;
      const product = await getProducts(id);
      if (!product) {
        return response.status(404).json({ error: "Producto no encontrado" });
      }
      response.status(200).json(product);
    } catch (e) {
      console.log("Error al obtener producto por ID", e);
      response.status(500).json({ error: "Error al obtener producto por ID" });
    }
  },

  createProduct: [
    ...validateProductCreation,
    async (req, response) => {
      try {
        const newProduct = await insertProduct(req.body);
        response.status(201).json(newProduct);
      } catch (e) {
        console.log("Error al crear producto", e);
        response.status(500).json({ error: e.message });
      }
    },
  ],

  updateProduct: [
    ...validateProductUpdate,
    async (req, response) => {
      try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await updateProduct(id, productData);
        response.status(200).json(updatedProduct);
      } catch (e) {
        console.log("Error al actualizar producto", e);
        response.status(500).json({ error: "Error al actualizar producto" });
      }
    },
  ],
};

module.exports = productController;
