function contarLetra(texto, letra) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }
  return contador;
}

// Ejemplo de uso
console.log(contarLetra("manzana", "a"));
