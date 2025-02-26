function obtenerLunesDelAnio(anio) {
  let lunesArray = [];
  let fecha = new Date(anio, 0, 1);

  // Encontrar el primer lunes del año
  while (fecha.getDay() !== 2) {
    fecha.setDate(fecha.getDate() + 1);
  }

  // Iterar por todas las semanas del año
  while (fecha.getFullYear() === anio) {
    let fechaFormateada = fecha.toISOString().split("T")[0];
    lunesArray.push(fechaFormateada);
    fecha.setDate(fecha.getDate() + 7);
  }

  return lunesArray;
}

// Ejemplo de uso
console.log(obtenerLunesDelAnio(2025));
