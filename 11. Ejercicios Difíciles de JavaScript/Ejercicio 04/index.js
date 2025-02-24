function filtrarPorValorAbsoluto(objetos, umbral) {
  if (!Array.isArray(objetos) || typeof umbral !== "number") {
    return "El argumento debe ser un array de objetos y un número.";
  }

  return objetos.filter((obj) => Math.abs(obj.valor) > umbral);
}

// Ejemplo de uso
const datos = [
  { valor: -10 },
  { valor: 5 },
  { valor: -3 },
  { valor: 20 },
  { valor: -15 },
];
const umbral = 5;
console.log(filtrarPorValorAbsoluto(datos, umbral));
