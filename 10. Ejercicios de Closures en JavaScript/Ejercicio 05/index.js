function crearGeneradorId() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}

// Ejemplo de uso
const generarId = crearGeneradorId();
console.log(generarId());
console.log(generarId());
console.log(generarId());
