function crearLogger() {
  let historial = [];

  return {
    log: function (mensaje) {
      historial.push(mensaje);
      console.log(mensaje);
    },
    obtenerHistorial: function () {
      return [...historial];
    },
  };
}

// Ejemplo de uso
const logger = crearLogger();
logger.log("Primer mensaje");
logger.log("Segundo mensaje");
console.log(logger.obtenerHistorial());
