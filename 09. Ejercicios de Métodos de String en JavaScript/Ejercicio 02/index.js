function filtrarCorreosPorDominio(correos, dominio) {
  let resultado = [];
  for (let i = 0; i < correos.length; i++) {
    if (correos[i].endsWith(dominio)) {
      resultado.push(correos[i]);
    }
  }
  return resultado;
}

// Ejemplo de uso
const correos = [
  "usuario1@prueba.com",
  "usuario2@gmail.com",
  "usuario3@gemail.com",
  "usuario4@yahoo.com",
  "usuario5@gmail.com",
];
const dominio = "@gmail.com";
const correosFiltrados = filtrarCorreosPorDominio(correos, dominio);
console.log(correosFiltrados);
