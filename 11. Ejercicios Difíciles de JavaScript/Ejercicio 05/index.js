function redondearHaciaArriba(numeros) {
  if (!Array.isArray(numeros)) {
    return "El argumento debe ser un array de números.";
  }

  const filtrados = numeros.filter(
    (num) => !isNaN(num) && typeof num === "number"
  );
  const redondeados = filtrados.map((num) => Math.ceil(num));

  return redondeados;
}

// Ejemplo de uso
const numerosDecimales = [1.2, 2.5, -3.7, NaN, 4.1, -0.2, 7.9];
console.log(redondearHaciaArriba(numerosDecimales));
