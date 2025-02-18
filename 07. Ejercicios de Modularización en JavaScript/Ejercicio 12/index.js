import { agregarProducto, calcularPromedio, productos } from "./productos.js";

agregarProducto("Teléfono", [5, 4, 4, 5]);
agregarProducto("Laptop", [3, 5, 4, 2, 5]);

console.log("Promedio de Teléfono:", calcularPromedio("Teléfono"));
console.log("Promedio de Laptop:", calcularPromedio("Laptop"));
