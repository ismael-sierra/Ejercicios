const cursos = [];

export const agregarCurso = (nombre, inscritos) => {
  cursos.push({ nombre, inscritos });
};

export const ordenarPorInscritos = () =>
  cursos.sort((a, b) => a.inscritos - b.inscritos);

export const obtenerNombresCursos = () => cursos.map((curso) => curso.nombre);

export { cursos };
