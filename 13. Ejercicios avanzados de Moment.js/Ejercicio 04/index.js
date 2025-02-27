const moment = require("moment");

let fechaTokyo = moment("2025-05-01 12:00:00");

// Obtener la diferencia horaria (Tokyo UTC+9, Madrid UTC+1)
let diferenciaHoras = 9 - 2;

let fechaMadrid = fechaTokyo.clone().subtract(diferenciaHoras, "hours");

console.log(`Fecha en Tokyo: ${fechaTokyo.format("YYYY-MM-DD HH:mm:ss")}`);
console.log(`Fecha en Madrid: ${fechaMadrid.format("YYYY-MM-DD HH:mm:ss")}`);

console.log(
  `Diferencia horaria entre Tokyo y Madrid: ${diferenciaHoras} horas`
);
