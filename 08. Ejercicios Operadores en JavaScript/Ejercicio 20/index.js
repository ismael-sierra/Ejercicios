function contarOcurrencias(arr) {
  const histograma = {};

  arr.forEach((num) => {
    histograma[num] = (histograma[num] || 0) + 1;
  });

  return histograma;
}

// Ejemplo de uso
const numeros = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5];
const resultado = contarOcurrencias(numeros);
console.log(resultado);
