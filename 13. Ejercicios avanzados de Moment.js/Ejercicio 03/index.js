const moment = require("moment");

let fecha1 = moment("2025-02-10");
let fecha2 = moment("2025-02-12");

console.log(`¿Fecha1 es antes que Fecha2? ${fecha1.isBefore(fecha2)}`);
console.log(`¿Fecha1 es después que Fecha2? ${fecha1.isAfter(fecha2)}`);
console.log(`¿Fecha1 es igual a Fecha2? ${fecha1.isSame(fecha2)}`);
