function transformarNombres(nombres) {
  let resultado = [];
  for (let i = 0; i < nombres.length; i++) {
    resultado.push({
      nombre: nombres[i].toUpperCase(),
      longitud: nombres[i].length,
    });
  }
  return resultado;
}

// Ejemplo de uso
const nombres = ["Ismael", "Ana", "Jose Carlos"];
console.log(transformarNombres(nombres));
