const productos = [];

const agregarProducto = (nombre, precio, stock) => {
  productos.push({ nombre, precio, stock });
};

const productosEnMayusculas = () =>
  productos.map((p) => ({ ...p, nombre: p.nombre.toUpperCase() }));

const filtrarStockBajo = (limite) => productos.filter((p) => p.stock < limite);

const ordenarPorPrecio = () => productos.sort((a, b) => a.precio - b.precio);

const buscarProducto = (nombre) =>
  productos.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

const obtenerInventarioComoString = () =>
  productos
    .map((p) => `${p.nombre}: $${p.precio} (${p.stock} en stock)`)
    .join(" | ");

module.exports = {
  agregarProducto,
  productosEnMayusculas,
  filtrarStockBajo,
  ordenarPorPrecio,
  buscarProducto,
  obtenerInventarioComoString,
  productos,
};
