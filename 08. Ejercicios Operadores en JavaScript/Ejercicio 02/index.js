function calculateDifferences(obj) {
  let { a, b } = obj;

  // Restar b de a con el operador -=
  a -= b;

  // Multiplicar a por 3
  a *= 3;

  // Dividir b entre 2
  b /= 2;

  return { a, b };
}

// Ejemplo de uso
const inputObj = { a: 10, b: 4 };
console.log(calculateDifferences(inputObj));
