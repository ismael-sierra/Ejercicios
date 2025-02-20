function censurarTexto(texto, palabrasProhibidas) {
  for (let i = 0; i < palabrasProhibidas.length; i++) {
    let patronBusqueda = new String(palabrasProhibidas[i]);
    texto = texto.replaceAll(
      patronBusqueda,
      "*".repeat(palabrasProhibidas[i].length)
    );
  }
  return texto;
}

// Ejemplo de uso
const texto = "Este es un texto de ejemplo con algunas palabras prohibidas.";
const palabrasProhibidas = ["ejemplo", "prohibidas"];
const textoCensurado = censurarTexto(texto, palabrasProhibidas);
console.log(textoCensurado);
