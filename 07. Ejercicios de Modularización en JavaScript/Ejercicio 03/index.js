const {
  agregarProyecto,
  filtrarEnProgreso,
  ordenarPorPrioridad,
  eliminarUltimoProyecto,
  obtenerProyectosComoString,
} = require("./proyectos");

agregarProyecto("Rediseño Web", "En progreso", 2);
agregarProyecto("Lanzamiento App", "Pendiente", 1);
agregarProyecto("Marketing Campaña", "En progreso", 3);

console.log(filtrarEnProgreso());
ordenarPorPrioridad();
console.log(obtenerProyectosComoString());
console.log(eliminarUltimoProyecto());
