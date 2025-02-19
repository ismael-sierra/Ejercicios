function modificarArray(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] < 0 ? 0 : numeros[i];
  }
  return numeros;
}

// Ejemplo de uso
const numeros = [5, -3, 8, -1, 0, -7, 10];
console.log(modificarArray(numeros));
// [5, 0, 8, 0, 0, 0, 10]
