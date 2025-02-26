function ajustarUltimaHora(fecha, zonaHoraria) {
  try {
    // Convertimos la fecha a un objeto Date
    let fechaObj = new Date(fecha);
    if (isNaN(fechaObj)) {
      return "Fecha no válida";
    }

    // Ajustamos la fecha a la última hora del día en UTC
    fechaObj.setUTCHours(23, 59, 59, 999);

    // Verificamos si la zona horaria es válida usando un intento de formateo
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zonaHoraria }).format(
        fechaObj
      );
    } catch {
      return "Zona horaria no válida";
    }

    // Formateamos la fecha en la zona horaria dada
    let opciones = {
      timeZone: zonaHoraria,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    let fechaFormateada = new Intl.DateTimeFormat("es-ES", opciones).format(
      fechaObj
    );

    return `Fecha ajustada en ${zonaHoraria}: ${fechaFormateada}`;
  } catch (error) {
    return "Error al procesar la fecha o zona horaria";
  }
}

// Ejemplos de uso válidos
console.log(ajustarUltimaHora("2024-07-20T08:30:00Z", "Europe/London"));
console.log(ajustarUltimaHora("2023-12-31T23:00:00Z", "Asia/Tokyo"));
