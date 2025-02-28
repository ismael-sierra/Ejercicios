const moment = require("moment-timezone");

let fechaTokyo = moment.tz("2025-05-01 12:00:00", "Asia/Tokyo");

let fechaMadrid = moment.tz(fechaTokyo.format(), "Europe/Madrid");

console.log(`Fecha en Tokyo: ${fechaTokyo.format("YYYY-MM-DD HH:mm:ss")}`);
console.log(`Fecha en Madrid: ${fechaMadrid.format("YYYY-MM-DD HH:mm:ss")}`);

let diferenciaHoras = fechaTokyo.hours() - fechaMadrid.hours();
console.log(
  `Diferencia horaria entre Tokyo y Madrid: ${diferenciaHoras} horas`
);
