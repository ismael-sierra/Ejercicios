const alumnos = [];

const agregarAlumno = (nombre, notas) => {
  alumnos.push({ nombre, notas });
};

const calcularPromedio = (notas) =>
  notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const obtenerPromedios = () =>
  alumnos.map((alumno) => ({
    ...alumno,
    promedio: calcularPromedio(alumno.notas),
  }));

const filtrarAprobados = (notaMinima) =>
  obtenerPromedios().filter((alumno) => alumno.promedio >= notaMinima);

const ordenarPorPromedio = () =>
  alumnos.sort((a, b) => calcularPromedio(b.notas) - calcularPromedio(a.notas));

const buscarAlumno = (nombre) =>
  alumnos.find(
    (alumno) => alumno.nombre.toLowerCase() === nombre.toLowerCase()
  );

module.exports = {
  agregarAlumno,
  obtenerPromedios,
  filtrarAprobados,
  ordenarPorPromedio,
  buscarAlumno,
  alumnos,
};
