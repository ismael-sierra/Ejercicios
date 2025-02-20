function eliminarEspaciosExtra(texto) {
  let palabras = texto.trim().split(" ");
  let resultado = [];
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] !== "") {
      resultado.push(palabras[i]);
    }
  }
  return resultado.join(" ");
}

// Ejemplo de uso
console.log(
  eliminarEspaciosExtra("  Esto   es   un   texto  con   espacios  extra.  ")
);
