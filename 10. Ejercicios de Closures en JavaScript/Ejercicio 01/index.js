function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

// Ejemplo de uso
const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());
