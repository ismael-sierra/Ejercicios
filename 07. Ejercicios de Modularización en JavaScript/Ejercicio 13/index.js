import { agregarReserva, ordenarPorFecha, reservas } from "./reservas.js";

agregarReserva("Ismael Sierra", "2025-06-15");
agregarReserva("Ana Vega", "2025-05-10");
agregarReserva("Luis Rodríguez", "2025-07-01");

ordenarPorFecha();
console.log("Reservas ordenadas por fecha:", reservas);
