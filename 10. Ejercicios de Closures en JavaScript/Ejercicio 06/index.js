function crearContador() {
  let contador = 0;
  return {
    incrementar: function () {
      contador++;
      return contador;
    },
    reset: function () {
      contador = 0;
    },
  };
}

// Ejemplo de uso
const contador = crearContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
contador.reset();
console.log(contador.incrementar());
