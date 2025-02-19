function verificarParidad(numero) {
  return (numero & 1) === 0 ? "Par" : "Impar";
}

// Ejemplo de uso
console.log(verificarParidad(10)); // "Par"
console.log(verificarParidad(7)); // "Impar"
console.log(verificarParidad(0)); // "Par"
