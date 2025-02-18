import {
  agregarEmpleado,
  calcularTotalHoras,
  filtrarPorHorasExtras,
  ordenarPorHoras,
  empleados,
} from "./empleados.js";

agregarEmpleado("Carlos", 45);
agregarEmpleado("Ana", 38);
agregarEmpleado("Elena", 50);

console.log("Total de horas trabajadas:", calcularTotalHoras());
console.log("Empleados con más de 40 horas:", filtrarPorHorasExtras());
ordenarPorHoras();
console.log("Empleados ordenados por horas trabajadas:", empleados);
