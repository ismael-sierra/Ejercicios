function calcularDiferenciaFechas(fecha1, fecha2) {
  const inicio = new Date(fecha1);
  const fin = new Date(fecha2);

  if (isNaN(inicio) || isNaN(fin)) {
    return "Las fechas proporcionadas no son válidas.";
  }

  if (inicio > fin) {
    [inicio, fin] = [fin, inicio];
  }

  let años = fin.getFullYear() - inicio.getFullYear();
  let meses = fin.getMonth() - inicio.getMonth();
  let dias = fin.getDate() - inicio.getDate();

  // Si el día de la segunda fecha es menor que el de la primera
  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(
      fin.getFullYear(),
      fin.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  // Si el mes de la segunda fecha es menor que el de la primera
  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses, dias };
}

// Ejemplo de uso
console.log(calcularDiferenciaFechas("2003-09-30", "2025-01-25"));
