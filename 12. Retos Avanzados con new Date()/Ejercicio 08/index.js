function diasHabilesEntreFechas(fechaInicio, fechaFin, festivos = []) {
  let inicio = new Date(fechaInicio);
  let fin = new Date(fechaFin);
  if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
    return "Fechas no válidas";
  }

  let diasHabiles = 0;
  let festivosMap = new Set(festivos.map((f) => new Date(f).toDateString()));

  while (inicio <= fin) {
    let diaSemana = inicio.getDay();
    let esFestivo = festivosMap.has(inicio.toDateString());
    if (diaSemana !== 0 && diaSemana !== 6 && !esFestivo) {
      diasHabiles++;
    }
    inicio.setDate(inicio.getDate() + 1);
  }

  return `Días hábiles entre las fechas: ${diasHabiles}`;
}

// Ejemplo de uso
console.log(
  diasHabilesEntreFechas("2025-02-26", "2025-06-20", [
    "2025-03-03",
    "2025-03-04",
    "2025-04-17",
    "2025-04-18",
    "2025-04-25",
    "2025-04-28",
    "2025-05-01",
    "2025-05-02",
  ])
);
