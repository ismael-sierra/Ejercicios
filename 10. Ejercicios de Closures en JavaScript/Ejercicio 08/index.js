function crearSumaAcumulativa() {
  let total = 0;
  return function (valor) {
    total += valor;
    return total;
  };
}

// Ejemplo de uso
const suma = crearSumaAcumulativa();
console.log(suma(10));
console.log(suma(8));
console.log(suma(2));
