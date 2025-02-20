function extraerNombresUsuario(correos) {
  let resultado = [];
  for (let i = 0; i < correos.length; i++) {
    let nombreUsuario = correos[i].split("@")[0];
    nombreUsuario =
      nombreUsuario.charAt(0).toUpperCase() +
      nombreUsuario.slice(1).toLowerCase();
    resultado.push(nombreUsuario);
  }
  return resultado;
}

// Ejemplo de uso
const correos = [
  "ismael.sierra@gmail.com",
  "ana.vega@gmail.com",
  "adan.rodriguez@yahoo.com",
];
const nombresUsuarios = extraerNombresUsuario(correos);
console.log(nombresUsuarios);
