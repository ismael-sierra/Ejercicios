function convertirANotacionExponencial(numeros) {
  if (
    !Array.isArray(numeros) ||
    !numeros.every((num) => typeof num === "number")
  ) {
    return "El argumento debe ser un array de números.";
  }

  const convertidos = numeros.map((num) => {
    const notacion = num.toExponential(4);
    return num < 0 ? `${notacion} (originalmente negativo)` : notacion;
  });

  return convertidos;
}

// Ejemplo de uso
const numerosEjemplo = [123456, -0.0005678, 987654321, -42.7, 0.0000345];
console.log(convertirANotacionExponencial(numerosEjemplo));
