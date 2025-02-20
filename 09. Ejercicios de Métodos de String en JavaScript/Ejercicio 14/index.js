function contienePalabraProhibida(texto, palabrasProhibidas) {
  for (let i = 0; i < palabrasProhibidas.length; i++) {
    if (texto.includes(palabrasProhibidas[i])) {
      return true;
    }
  }
  return false;
}

// Ejemplo de uso
const texto1 = "Esto es un mensaje de prueba.";
const palabrasProhibidas1 = ["prueba", "prohibido"];
console.log(contienePalabraProhibida(texto1, palabrasProhibidas1)); // Salida: true

const texto2 = "Y este mensaje debe dar false.";
const palabrasProhibidas2 = ["prueba", "prohibido"];
console.log(contienePalabraProhibida(texto2, palabrasProhibidas2)); // Salida: false
