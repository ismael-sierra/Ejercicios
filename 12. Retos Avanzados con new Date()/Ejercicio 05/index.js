function ultimosDomingos(anio) {
  // Validamos que el año sea un número válido
  if (typeof anio !== "number" || anio < 1) {
    return "El año debe ser un número válido y positivo.";
  }

  let domingos = [];

  for (let mes = 0; mes < 12; mes++) {
    // Obtenemos el último día del mes
    let ultimoDia = new Date(anio, mes + 1, 0);

    // Retrocedemos hasta encontrar un domingo
    while (ultimoDia.getUTCDay() !== 0) {
      /* getUTCDay() obtiene el día de la semana en formato UTC (0 = domingo, 6 = sábado), 
        asegurando que no haya problemas con la zona horaria local. */
      ultimoDia.setDate(ultimoDia.getDate() - 1);
    }

    // Guardamos la fecha en el array en formato YYYY-MM-DD
    /* toISOString() convierte la fecha a un formato estándar (YYYY-MM-DDTHH:mm:ss.sssZ). 
      Se usa split('T')[0] para extraer solo la parte de la fecha sin la hora. */
    domingos.push(ultimoDia.toISOString().split("T")[0]);
  }

  return domingos;
}

// Ejemplo de uso
console.log(ultimosDomingos(2025));
