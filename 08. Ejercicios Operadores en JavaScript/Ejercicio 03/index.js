function actualizaPrecios(productos) {
  for (let producto of productos) {
    if (producto.precio < 20) {
      producto.precio *= 1.15; // Aumentar en 15%
    } else if (producto.precio >= 50) {
      producto.precio *= 0.9; // Disminuir en 10%
    }
  }
  return productos;
}

// Ejemplo de uso
const inventario = [
  { nombre: "Producto A", precio: 15 },
  { nombre: "Producto B", precio: 50 },
  { nombre: "Producto C", precio: 30 },
];
console.log(actualizaPrecios(inventario));
