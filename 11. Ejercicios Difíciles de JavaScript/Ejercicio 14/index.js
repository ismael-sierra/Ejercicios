function generarNumerosAleatoriosConRegistro(n) {
  if (typeof n !== "number" || n <= 0) {
    return "El argumento debe ser un número positivo.";
  }

  return Array.from({ length: n }, () => {
    const original = Math.random() * 100;
    return { original, redondeado: Math.round(original) };
  });
}

// Ejemplo de uso
console.log(generarNumerosAleatoriosConRegistro(5));
