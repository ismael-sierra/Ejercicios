function contarViernes13(año) {
  // Validamos que el año sea un número válido
  if (typeof año !== "number" || año < 1) {
    return "El año debe ser un número válido y positivo.";
  }

  let contador = 0;

  for (let mes = 0; mes < 12; mes++) {
    const fecha = new Date(año, mes, 13);

    // Verificamos si cae en viernes (día 5 de la semana en JS)
    if (fecha.getDay() === 5) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso
console.log(contarViernes13(2025)); // 1, en junio
