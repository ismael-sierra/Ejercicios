let edad = 21;

if (isNaN(edad) || edad <= 0) {
  console.log("La edad no es válida.");
} else if (edad <= 12) {
  console.log("Eres un niño.");
} else if (edad <= 19) {
  console.log("Eres un adolescente.");
} else if (edad <= 64) {
  console.log("Eres un adulto.");
} else {
  console.log("Eres un adulto mayor.");
}
