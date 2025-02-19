function actualizarNiveles(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nivel === "básico") {
      usuarios[i].nivel = "intermedio";
    } else if (usuarios[i].nivel === "intermedio") {
      usuarios[i].nivel = "avanzado";
    }
  }
  return usuarios;
}

// Ejemplo de uso
const usuarios = [
  { usuario: "Julián", nivel: "básico" },
  { usuario: "Ismael", nivel: "intermedio" },
  { usuario: "Ana", nivel: "avanzado" },
];
console.log(actualizarNiveles(usuarios));
