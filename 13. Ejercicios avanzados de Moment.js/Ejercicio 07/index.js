const moment = require("moment");

let fechaBase = moment("2025-06-01");

let nuevaFecha = fechaBase.clone().add(7, "days").add(3, "hours");

let fechaFutura = moment("2025-06-10");

let esAnterior = nuevaFecha.isBefore(fechaFutura);

console.log(`Fecha base: ${fechaBase.format("YYYY-MM-DD HH:mm")}`);
console.log(
  `Nueva fecha (tras sumar 7 días y 3 horas): ${nuevaFecha.format(
    "YYYY-MM-DD HH:mm"
  )}`
);
console.log(`Fecha futura: ${fechaFutura.format("YYYY-MM-DD")}`);
console.log(`¿La nueva fecha es anterior a la fecha futura? ${esAnterior}`);
