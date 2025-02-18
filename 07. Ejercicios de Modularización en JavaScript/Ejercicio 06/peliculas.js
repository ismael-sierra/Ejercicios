const peliculas = [];

export const agregarPelicula = (titulo, duracion, genero) => {
  peliculas.push({ titulo, duracion, genero });
};

export const buscarPeliculasPorGenero = (genero) =>
  peliculas.filter(
    (pelicula) => pelicula.genero.toLowerCase() === genero.toLowerCase()
  );

export const obtenerTitulosComoString = () =>
  peliculas.map((pelicula) => pelicula.titulo).join(", ");

export const ordenarPorDuracion = () =>
  peliculas.sort((a, b) => a.duracion - b.duracion);

export { peliculas };
