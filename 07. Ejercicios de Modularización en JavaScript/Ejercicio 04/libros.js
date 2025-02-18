const libros = [];

const agregarLibro = (titulo, autor, genero) => {
  libros.push({ titulo, autor, genero });
};

const buscarLibroPorAutor = (autor) =>
  libros.find((libro) => libro.autor.toLowerCase() === autor.toLowerCase());

const obtenerListaTitulos = () => libros.map((libro) => libro.titulo);

const hayLibrosDeGenero = (genero) =>
  libros.some((libro) => libro.genero.toLowerCase() === genero.toLowerCase());

const ordenarLibrosAlfabeticamente = () =>
  libros.sort((a, b) => (a.titulo > b.titulo ? 1 : -1));

const filtrarLibrosPorGenero = (genero) =>
  libros.filter((libro) => libro.genero.toLowerCase() === genero.toLowerCase());

module.exports = {
  agregarLibro,
  buscarLibroPorAutor,
  obtenerListaTitulos,
  hayLibrosDeGenero,
  ordenarLibrosAlfabeticamente,
  filtrarLibrosPorGenero,
  libros,
};
