function convertirNumerosACadenas(numeros) {
  if (
    !Array.isArray(numeros) ||
    !numeros.every((num) => typeof num === "number")
  ) {
    return "El argumento debe ser un array de números.";
  }

  const convertidos = numeros.map((num) => {
    const string = num.toString();
    return typeof string === "string" ? string : null;
  });

  return {
    original: numeros,
    convertidos: convertidos,
  };
}

// Ejemplo de uso
const arregloNumeros = [1, 2, 3, 4, 5];
console.log(convertirNumerosACadenas(arregloNumeros));
