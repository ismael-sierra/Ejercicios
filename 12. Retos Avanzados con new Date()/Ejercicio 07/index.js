function proximaLunaLlena(fecha) {
  // Fecha conocida de una luna llena pasada (como referencia)
  const referencia = new Date("2024-01-25T17:54:00Z");
  const cicloLunar = 29.53 * 24 * 60 * 60 * 1000;

  // Convertimos la fecha ingresada a un objeto Date
  let fechaBase = new Date(fecha);
  if (isNaN(fechaBase)) {
    return "Fecha no válida";
  }

  let diferenciaTiempo = fechaBase - referencia;

  let ciclosTranscurridos = Math.ceil(diferenciaTiempo / cicloLunar);

  let proximaLuna = new Date(
    referencia.getTime() + ciclosTranscurridos * cicloLunar
  );

  /* toISOString() convierte la fecha a un formato estándar (YYYY-MM-DDTHH:mm:ss.sssZ). 
      Se usa split('T')[0] para extraer solo la parte de la fecha sin la hora. */
  return `La próxima luna llena será el ${
    proximaLuna.toISOString().split("T")[0]
  }`;
}

// Ejemplo de uso
console.log(proximaLunaLlena("2025-02-26T00:00:00Z"));
