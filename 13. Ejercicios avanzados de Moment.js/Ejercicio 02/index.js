const moment = require("moment");

let fecha = moment("2025-02-26");

fecha.add(2, "weeks");

console.log(fecha.format("dddd, MMMM Do YYYY"));
