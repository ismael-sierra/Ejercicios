function obtenerIniciales(nombres) {
  let resultado = [];
  for (let i = 0; i < nombres.length; i++) {
    let palabras = nombres[i].split(" ");
    let iniciales = "";
    for (let j = 0; j < palabras.length; j++) {
      iniciales += palabras[j][0].toUpperCase();
    }
    resultado.push(iniciales);
  }
  return resultado;
}

// Ejemplo de uso
const nombres = ["Ismael Sierra", "Adán Rodríguez", "Carmen Berrío"];
const iniciales = obtenerIniciales(nombres);
console.log(iniciales);
