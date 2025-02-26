const moment = require("moment");

let fechaInicio = moment("2025-02-26", "YYYY-MM-DD");
let fechaFin = moment("2025-04-25", "YYYY-MM-DD");

let diferenciaDias = fechaFin.diff(fechaInicio, "days");

// Ejemplo de uso
console.log(`La diferencia entre las fechas es de ${diferenciaDias} días.`);
