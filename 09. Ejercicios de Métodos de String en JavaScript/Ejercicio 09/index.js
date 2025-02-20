function repetirPalabra(palabra, veces) {
  let resultado = [];
  for (let i = 0; i < veces; i++) {
    resultado.push(palabra);
  }
  return resultado.join(" ");
}

// Ejemplo de uso
console.log(repetirPalabra("Hola", 3));
