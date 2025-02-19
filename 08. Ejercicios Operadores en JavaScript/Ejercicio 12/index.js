function calcularTotal(listaCompras) {
  let total = 0;
  for (let i = 0; i < listaCompras.length; i++) {
    total += listaCompras[i].precio * listaCompras[i].cantidad;
  }
  return total;
}

// Ejemplo de uso
const listaCompras = [
  { nombre: "Manzanas", precio: 1, cantidad: 5 },
  { nombre: "Leche", precio: 2, cantidad: 2 },
  { nombre: "Pan", precio: 1.2, cantidad: 3 },
];
console.log(calcularTotal(listaCompras)); 
