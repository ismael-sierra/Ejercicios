function generarNombresUsuario(nombresCompletos) {
  let usuarios = [];
  for (let i = 0; i < nombresCompletos.length; i++) {
    let partes = nombresCompletos[i].trim().split(" ");
    let nombreUsuario = partes[0][0].toLowerCase() + partes[1].toLowerCase();
    usuarios.push(nombreUsuario);
  }
  return usuarios;
}

// Ejemplo de uso
const nombres = ["Ismael Sierra", "Ana Vega"];
console.log(generarNombresUsuario(nombres));
