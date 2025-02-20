function calcularLetraDNI(dnis) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let resultado = [];

  for (let i = 0; i < dnis.length; i++) {
    let letra = letras[dnis[i] % 23];
    resultado.push({ dni: dnis[i], letra: letra });
  }

  return resultado;
}

// Ejemplo de uso
const dnis = [12345678, 87654321, 11223344];
console.log(calcularLetraDNI(dnis));
