function convertirCadenasAEnteros(cadenas) {
  if (!Array.isArray(cadenas)) {
    return "El argumento debe ser un array de cadenas.";
  }

  return cadenas.map((cadena) => parseInt(cadena, 0));
}

// Ejemplo de uso
const cadenasNumericas = ["1010", "075", "42", "0x1F"];
console.log(convertirCadenasAEnteros(cadenasNumericas));
