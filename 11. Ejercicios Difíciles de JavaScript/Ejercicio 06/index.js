function redondearHaciaAbajo(numeros) {
  if (!Array.isArray(numeros)) {
    return "El argumento debe ser un array de números.";
  }

  return numeros.map((num) => (Number.isInteger(num) ? num : Math.floor(num)));
}

// Ejemplo de uso
const numerosEjemplo = [1.8, 2.3, -3.7, 4, 5.9, -2, 7.0];
console.log(redondearHaciaAbajo(numerosEjemplo));
