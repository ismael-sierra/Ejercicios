const proyectos = [];

const agregarProyecto = (nombre, estado, prioridad) => {
  proyectos.push({ nombre, estado, prioridad });
};

const filtrarEnProgreso = () =>
  proyectos.filter((p) => p.estado.toLowerCase() === "en progreso");

const ordenarPorPrioridad = () =>
  proyectos.sort((a, b) => a.prioridad - b.prioridad);

const eliminarUltimoProyecto = () => proyectos.pop();

const obtenerProyectosComoString = () =>
  proyectos
    .map((p) => `${p.nombre} - ${p.estado} - Prioridad: ${p.prioridad}`)
    .join(" | ");

module.exports = {
  agregarProyecto,
  filtrarEnProgreso,
  ordenarPorPrioridad,
  eliminarUltimoProyecto,
  obtenerProyectosComoString,
  proyectos,
};
