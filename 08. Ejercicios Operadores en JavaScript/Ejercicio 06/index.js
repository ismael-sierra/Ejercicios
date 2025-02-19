function clasificarNumero(numero) {
  return numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";
}

// Ejemplo de uso
console.log(clasificarNumero(10)); // "Positivo"
console.log(clasificarNumero(-5)); // "Negativo"
console.log(clasificarNumero(0)); // "Cero"
