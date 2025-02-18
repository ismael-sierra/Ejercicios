const {
  agregarLibro,
  buscarLibroPorAutor,
  obtenerListaTitulos,
  hayLibrosDeGenero,
  ordenarLibrosAlfabeticamente,
  filtrarLibrosPorGenero,
} = require("./libros");

agregarLibro("1984", "George Orwell", "Ciencia ficción");
agregarLibro(
  "Cien años de soledad",
  "Gabriel García Márquez",
  "Realismo mágico"
);
agregarLibro("El Hobbit", "J.R.R. Tolkien", "Fantasía");

console.log(buscarLibroPorAutor("George Orwell"));
console.log(obtenerListaTitulos());
console.log(hayLibrosDeGenero("Fantasía"));
ordenarLibrosAlfabeticamente();
console.log(filtrarLibrosPorGenero("Realismo mágico"));
