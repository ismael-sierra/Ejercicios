import {
  agregarProducto,
  eliminarUltimoProducto,
  filtrarStockBajo,
  ordenarPorStock,
  productos,
} from "./almacen.js";

agregarProducto("Manzanas", 5);
agregarProducto("Peras", 20);
agregarProducto("Plátanos", 8);

console.log("Productos con stock bajo:", filtrarStockBajo());
ordenarPorStock();
console.log("Productos ordenados por stock:", productos);
eliminarUltimoProducto();
console.log("Stock después de eliminar el último producto:", productos);
