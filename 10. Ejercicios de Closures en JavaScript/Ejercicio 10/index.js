function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

// Ejemplo de uso
const multiplicarPorDos = crearMultiplicador(2);
console.log(multiplicarPorDos(5));
console.log(multiplicarPorDos(10));

const multiplicarPorTres = crearMultiplicador(3);
console.log(multiplicarPorTres(4));
