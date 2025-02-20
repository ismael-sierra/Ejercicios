function extraerParteTexto(texto, inicio, fin) {
  return texto.slice(inicio, fin);
}

// Ejemplo de uso
console.log(extraerParteTexto("Hola gente", 0, 4));
