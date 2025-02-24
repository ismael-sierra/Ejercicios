function transformarStringsNumericos(cadenas) {
  if (!Array.isArray(cadenas)) {
    return "El argumento debe ser un array de cadenas.";
  }

  return cadenas.map((cadena) => {
    const numero = Number(cadena);
    return {
      original: cadena,
      numero,
      exponencial: numero.toExponential(2),
      redondeado: Math.round(numero),
    };
  });
}

// Ejemplo de uso
const cadenasNumericas = ["123.45", "0.056", "789", "3.14159"];
console.log(transformarStringsNumericos(cadenasNumericas));
