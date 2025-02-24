function redondeoInteligente(numeros) {
  if (!Array.isArray(numeros)) {
    return "El argumento debe ser un array de números.";
  }

  return numeros.map((num) => {
    if (num % 1 === 0.5 || num % 1 === -0.5) {
      return Math.floor(num) % 2 === 0 ? Math.floor(num) : Math.ceil(num);
    }
    return Math.round(num);
  });
}

// Ejemplo de uso
const numerosEjemplo = [1.5, 2.5, 3.5, 4.5, -1.5, -2.5, -3.5, -4.5];
console.log(redondeoInteligente(numerosEjemplo));
