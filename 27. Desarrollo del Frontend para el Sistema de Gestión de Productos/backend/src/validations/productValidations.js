const { body, param } = require("express-validator");

const validateProductCreation = [
  body("nombre").isString().notEmpty().withMessage("El nombre es requerido"),
  body("descripcion")
    .isString()
    .notEmpty()
    .withMessage("La descripción es requerida"),
  body("precio")
    .isFloat({ min: 0 })
    .withMessage("El precio debe ser un número mayor o igual a 0"),
  body("stock")
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número entero mayor o igual a 0"),
  body("categoria")
    .isString()
    .notEmpty()
    .withMessage("La categoría es requerida"),
  body("marca").isString().notEmpty().withMessage("La marca es requerida"),
  body("codigoProducto")
    .isString()
    .notEmpty()
    .withMessage("El código del producto es requerido"),
  body("fechaFabricacion")
    .isISO8601()
    .withMessage("La fecha de fabricación debe ser una fecha válida"),
  body("garantiaMeses")
    .isInt({ min: 0 })
    .withMessage("La garantía debe ser un número entero mayor o igual a 0"),
  body("peso")
    .isFloat({ min: 0 })
    .withMessage("El peso debe ser un número mayor o igual a 0"),
  body("dimensiones.alto")
    .isFloat({ min: 0 })
    .withMessage("El alto debe ser un número mayor o igual a 0"),
  body("dimensiones.ancho")
    .isFloat({ min: 0 })
    .withMessage("El ancho debe ser un número mayor o igual a 0"),
  body("dimensiones.profundidad")
    .isFloat({ min: 0 })
    .withMessage("La profundidad debe ser un número mayor o igual a 0"),
  body("esActivo")
    .isBoolean()
    .withMessage("El estado activo debe ser un booleano"),
];

const validateProductUpdate = [
  param("id").isMongoId().withMessage("ID de producto no válido"),
  body("nombre")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("El nombre debe ser un string no vacío"),
  body("descripcion")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("La descripción debe ser un string no vacío"),
  body("precio")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("El precio debe ser un número mayor o igual a 0"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número entero mayor o igual a 0"),
  body("categoria")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("La categoría debe ser un string no vacío"),
  body("marca")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("La marca debe ser un string no vacío"),
  body("codigoProducto")
    .optional()
    .isString()
    .notEmpty()
    .withMessage("El código del producto debe ser un string no vacío"),
  body("fechaFabricacion")
    .optional()
    .isISO8601()
    .withMessage("La fecha de fabricación debe ser una fecha válida"),
  body("garantiaMeses")
    .optional()
    .isInt({ min: 0 })
    .withMessage("La garantía debe ser un número entero mayor o igual a 0"),
  body("peso")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("El peso debe ser un número mayor o igual a 0"),
  body("dimensiones.alto")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("El alto debe ser un número mayor o igual a 0"),
  body("dimensiones.ancho")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("El ancho debe ser un número mayor o igual a 0"),
  body("dimensiones.profundidad")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("La profundidad debe ser un número mayor o igual a 0"),
  body("esActivo")
    .optional()
    .isBoolean()
    .withMessage("El estado activo debe ser un booleano"),
];

const validateProductId = [
  param("id").isMongoId().withMessage("ID de producto no válido"),
];

module.exports = {
  validateProductCreation,
  validateProductUpdate,
  validateProductId,
};
