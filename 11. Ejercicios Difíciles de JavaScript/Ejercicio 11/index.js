function convertirCadenasADecimales(cadenas) {
  if (!Array.isArray(cadenas)) {
    return "El argumento debe ser un array de cadenas.";
  }

  return cadenas.map((cadena) => parseFloat(cadena));
}

// Ejemplo de uso
const cadenasNumericas = ["10.5abc", "3.14", "42.00xyz", "0.987test"];
console.log(convertirCadenasADecimales(cadenasNumericas));
