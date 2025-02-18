const {
  agregarAlumno,
  obtenerPromedios,
  filtrarAprobados,
  ordenarPorPromedio,
  buscarAlumno,
} = require("./alumnos");

agregarAlumno("Juan", [85, 90, 78]);
agregarAlumno("Maria", [92, 88, 95]);
agregarAlumno("Carlos", [70, 65, 80]);

console.log(obtenerPromedios());
console.log(filtrarAprobados(75));
ordenarPorPromedio();
console.log(buscarAlumno("Maria"));
