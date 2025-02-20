function dividirNombres(nombresCompletos) {
  let resultado = [];
  for (let i = 0; i < nombresCompletos.length; i++) {
    let partes = nombresCompletos[i].split(" ");
    let nombre = partes[0];
    let apellido = partes.slice(1).join(" ");
    resultado.push({ nombre, apellido });
  }
  return resultado;
}

// Ejemplo de uso
const nombres = ["Ismael Sierra", "Ana Vega"];
console.log(dividirNombres(nombres));
