function manipularBits(numero) {
  return {
    duplicado: numero << 1, // Duplicar usando desplazamiento a la izquierda
    mitad: numero >> 1, // Dividir entre 2 usando desplazamiento a la derecha
  };
}

// Ejemplo de uso
console.log(manipularBits(10)); // { duplicado: 20, mitad: 5 }
console.log(manipularBits(7)); // { duplicado: 14, mitad: 3 }
