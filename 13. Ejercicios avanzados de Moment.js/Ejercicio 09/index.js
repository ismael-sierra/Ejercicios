const moment = require("moment");

let fechaInvalida = moment("2025-02-30", "YYYY-MM-DD");

if (fechaInvalida.isValid()) {
  console.log(`La fecha es válida: ${fechaInvalida.format("YYYY-MM-DD")}`);
} else {
  console.log("La fecha ingresada no es válida.");
}
