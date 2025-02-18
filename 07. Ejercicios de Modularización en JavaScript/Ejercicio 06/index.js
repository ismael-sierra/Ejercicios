import {
  agregarPelicula,
  buscarPeliculasPorGenero,
  obtenerTitulosComoString,
  ordenarPorDuracion,
  peliculas,
} from "./peliculas.js";

agregarPelicula("Inception", 148, "Ciencia ficción");
agregarPelicula("Titanic", 195, "Romance");
agregarPelicula("The Dark Knight", 152, "Acción");

console.log(buscarPeliculasPorGenero("Acción"));
console.log(obtenerTitulosComoString());
ordenarPorDuracion();
console.log(peliculas);
