function manipularContador(contador) {
  if (contador.valor % 2 === 0) {
    contador.valor += 2; // Incrementar en 2 si es par
  } else {
    contador.valor -= 1; // Decrementar en 1 si es impar
  }
  return contador;
}

// Ejemplo de uso
const contador = { valor: 4 };
console.log(manipularContador(contador)); // { valor: 6 }

const contador2 = { valor: 5 };
console.log(manipularContador(contador2)); // { valor: 4 }
