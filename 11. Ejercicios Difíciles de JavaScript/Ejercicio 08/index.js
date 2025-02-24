function generarNumerosAleatorios(n, min, max) {
  if (
    typeof n !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number" ||
    n <= 0 ||
    min >= max
  ) {
    return "Los parámetros deben ser válidos: n > 0 y min < max.";
  }

  const numerosAleatorios = Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

  return numerosAleatorios;
}

// Ejemplo de uso
console.log(generarNumerosAleatorios(5, 1, 15));
