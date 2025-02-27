const moment = require("moment");

let fechaInicio = moment("2020-01-01");
let fechaFin = moment("2025-03-15");

let años = fechaFin.diff(fechaInicio, "years");
fechaInicio.add(años, "years");
let meses = fechaFin.diff(fechaInicio, "months");
fechaInicio.add(meses, "months");
let dias = fechaFin.diff(fechaInicio, "days");

console.log(`Diferencia: ${años} años, ${meses} meses y ${dias} días.`);
