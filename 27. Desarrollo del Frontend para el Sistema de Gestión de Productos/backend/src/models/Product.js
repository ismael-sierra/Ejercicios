const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  categoria: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  codigoProducto: {
    type: String,
    required: true,
    unique: true,
  },
  fechaFabricacion: {
    type: Date,
    required: true,
  },
  garantiaMeses: {
    type: Number,
    required: true,
    min: 0,
  },
  peso: {
    type: Number,
    required: true,
    min: 0,
  },
  dimensiones: {
    alto: {
      type: Number,
      required: true,
      min: 0,
    },
    ancho: {
      type: Number,
      required: true,
      min: 0,
    },
    profundidad: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  coloresDisponibles: {
    type: [String],
    default: [],
  },
  etiquetas: {
    type: [String],
    default: [],
  },
  imagenes: {
    type: [String],
    default: [],
  },
  esActivo: {
    type: Boolean,
    required: true,
    default: true,
  },
  fechaCreacion: {
    type: Date,
    required: true,
    default: Date.now,
  },
  ultimaActualizacion: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Producto = mongoose.model("Producto", productSchema);

module.exports = Producto;
