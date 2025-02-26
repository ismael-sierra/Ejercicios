function tiempoHastaMedianoche(zonaHoraria) {
  try {
    let ahora = new Date();
    let opciones = {
      timeZone: zonaHoraria,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    //Intl es un objeto global en JavaScript que proporciona herramientas para
    // la internacionalización, como formateo de fechas, números y cadenas en
    // distintos idiomas y zonas horarias.
    let formatoHora = new Intl.DateTimeFormat("es-ES", opciones).format(ahora);
    let [hora, minuto, segundo] = formatoHora.split(":").map(Number);

    let horasRestantes = 23 - hora;
    let minutosRestantes = 59 - minuto;
    let segundosRestantes = 59 - segundo;

    return `Tiempo restante hasta la medianoche en ${zonaHoraria}: ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;
  } catch (error) {
    return "Zona horaria no válida";
  }
}

// Ejemplo de uso
console.log(tiempoHastaMedianoche("Europe/Madrid"));
