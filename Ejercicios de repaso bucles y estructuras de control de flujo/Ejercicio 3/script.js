let edad = parseInt(prompt("Ingrese su edad:"), 10);

if (isNaN(edad) || edad <= 0) {
  console.log("Edad no válida.");
} else if (edad <= 12) {
  console.log("Eres un niño.");
} else if (edad <= 19) {
  console.log("Eres un adolescente.");
} else if (edad <= 64) {
  console.log("Eres un adulto.");
} else {
  console.log("Eres un adulto mayor.");
}
