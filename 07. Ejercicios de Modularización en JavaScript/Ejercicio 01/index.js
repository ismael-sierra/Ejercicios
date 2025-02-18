const {
  agregarProducto,
  productosEnMayusculas,
  filtrarStockBajo,
  ordenarPorPrecio,
  buscarProducto,
  obtenerInventarioComoString,
} = require("./inventario");

agregarProducto("Laptop", 1500, 5);
agregarProducto("Teclado", 50, 12);
agregarProducto("Monitor", 300, 3);

console.log(productosEnMayusculas());
console.log(filtrarStockBajo(6));
ordenarPorPrecio();
console.log(obtenerInventarioComoString());
console.log(buscarProducto("Monitor"));
