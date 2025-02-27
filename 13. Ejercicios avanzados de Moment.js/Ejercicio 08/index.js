const moment = require("moment");

let fecha = moment("2023-03-01");

fecha.subtract(4, "months").subtract(10, "days");

fecha.add(1, "year").add(2, "weeks");

console.log(fecha.format("DD-MM-YYYY"));
