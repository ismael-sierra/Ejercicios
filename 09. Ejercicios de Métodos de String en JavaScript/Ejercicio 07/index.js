function limpiarEspacios(frases) {
  let resultado = [];
  for (let i = 0; i < frases.length; i++) {
    resultado.push(frases[i].trim());
  }
  return resultado;
}

// Ejemplo de uso
const frases = [
  "  Hola mundo  ",
  "  Esto es un ejemplo",
  "Otra frase   ",
  "   Última frase   ",
];
const frasesLimpias = limpiarEspacios(frases);
console.log(frasesLimpias);
