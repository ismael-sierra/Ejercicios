function redondearNumerosConPrecision(numeros) {
  if (
    !Array.isArray(numeros) ||
    !numeros.every((num) => typeof num === "number")
  ) {
    return "El argumento debe ser un array de números.";
  }

  const redondeados = numeros.map((num) => Number(num.toFixed(3)));

  return redondeados;
}

// Ejemplo de uso
const numerosDecimales = [1.12345, 2.6789, 3.0004, 4.99999];
console.log(redondearNumerosConPrecision(numerosDecimales));
