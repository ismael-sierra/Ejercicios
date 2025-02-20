function alternarMayusculasMinusculas(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    // Si el índice es par, la letra es mayúscula
    // Si es impar, minúscula
    resultado += i % 2 === 0 ? texto[i].toUpperCase() : texto[i].toLowerCase();
  }
  return resultado;
}

// Ejemplo de uso
console.log(alternarMayusculasMinusculas("hola gente"));
