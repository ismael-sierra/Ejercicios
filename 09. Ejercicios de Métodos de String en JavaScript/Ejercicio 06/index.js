function formatearNombres(nombres) {
  let resultado = [];
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i].toLowerCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    resultado.push(nombre);
  }
  return resultado;
}

// Ejemplo de uso
const nombres = ["ISMAEL", "ana", "PeDro", "JuLiÁn"];
const nombresFormateados = formatearNombres(nombres);
console.log(nombresFormateados);
