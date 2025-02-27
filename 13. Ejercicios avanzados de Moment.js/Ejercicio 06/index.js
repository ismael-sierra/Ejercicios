const moment = require("moment");

let fecha = moment("2025-12-25");

let formatoPersonalizado = `El día ${fecha.format("DD")} de ${fecha.format(
  "MMMM"
)} de ${fecha.format("YYYY")} es un ${fecha.format("dddd")}`;

console.log(formatoPersonalizado);
