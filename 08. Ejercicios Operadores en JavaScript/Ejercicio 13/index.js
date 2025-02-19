function filtrarMayoresDeEdad(personas) {
  let resultado = [];
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
      resultado.push(personas[i]);
    }
  }
  return resultado;
}

// Ejemplo de uso
const personas = [
  { nombre: "Ismael", edad: 21 },
  { nombre: "Julián", edad: 17 },
  { nombre: "Ana", edad: 51 },
  { nombre: "Sergio", edad: 14 },
];
console.log(filtrarMayoresDeEdad(personas));
