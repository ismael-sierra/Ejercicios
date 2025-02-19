function asignarCategorias(personas) {
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < 12) {
      personas[i].categoria = "Infantil";
    } else if (personas[i].edad >= 12 && personas[i].edad <= 17) {
      personas[i].categoria = "Adolescente";
    } else {
      personas[i].categoria = "Adulto";
    }
  }
  return personas;
}

// Ejemplo de uso
const personas = [
  { nombre: "Rubén", edad: 5 },
  { nombre: "Sergio", edad: 14 },
  { nombre: "Ismael", edad: 21 },
];
console.log(asignarCategorias(personas));
