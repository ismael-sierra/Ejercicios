import {
  agregarMensaje,
  filtrarMensajesPorUsuario,
  mensajes,
} from "./mensajes.js";

agregarMensaje("Ismael", "Hola, ¿cómo estás?");
agregarMensaje("Ana", "Estoy bien, gracias. ¿Y tú?");
agregarMensaje("Ismael", "Todo bien, probando este ejercicio.");

console.log("Mensajes de Ismael:", filtrarMensajesPorUsuario("Ismael"));
