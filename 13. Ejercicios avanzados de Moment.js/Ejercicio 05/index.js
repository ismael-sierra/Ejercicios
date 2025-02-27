const moment = require("moment");

let fechaInicio = moment("2025-01-01");
let fechaFin = moment("2025-10-01");

let diferenciaMeses = fechaFin.diff(fechaInicio, "months");

console.log(`Diferencia en meses: ${diferenciaMeses}`);
