import {
  agregarNota,
  filtrarNotasUrgentes,
  ordenarPorPrioridad,
  buscarNota,
  notas,
} from "./notas.js";

agregarNota("Comprar el pan", "media");
agregarNota("Ir al gimnasio", "alta");
agregarNota("Estudiar JavaScript", "baja");

console.log("Notas urgentes:", filtrarNotasUrgentes());
ordenarPorPrioridad();
console.log("Notas ordenadas por prioridad:", notas);
console.log("Buscar nota 'Ir al gimnasio':", buscarNota("Ir al gimnasio"));
