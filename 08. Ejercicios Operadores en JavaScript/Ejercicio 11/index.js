function validarDisponibilidad(productos) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock <= 0) {
      return false;
    }
  }
  return true;
}

// Ejemplo de uso
const productos = [
  { nombre: "Producto A", stock: 10 },
  { nombre: "Producto B", stock: 5 },
  { nombre: "Producto C", stock: 0 },
];
console.log(validarDisponibilidad(productos)); // false

const productosDisponibles = [
  { nombre: "Producto D", stock: 3 },
  { nombre: "Producto E", stock: 8 },
];
console.log(validarDisponibilidad(productosDisponibles)); // true
