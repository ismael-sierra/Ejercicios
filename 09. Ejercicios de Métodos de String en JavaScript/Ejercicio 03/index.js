function contienePalabra(texto, palabra) {
  return texto.includes(palabra);
}

// Ejemplo de uso
const texto = "Este es un ejemplo de texto para buscar palabras.";
const palabra = "ejemplo";
console.log(contienePalabra(texto, palabra));
