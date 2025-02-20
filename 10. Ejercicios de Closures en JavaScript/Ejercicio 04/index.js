function crearTemporizador(segundos) {
  let tiempoRestante = segundos;
  return function () {
    if (tiempoRestante > 0) {
      console.log(`Tiempo restante: ${tiempoRestante} segundos`);
      tiempoRestante--;
    } else {
      console.log("Tiempo agotado");
    }
  };
}

// Ejemplo de uso
const temporizador = crearTemporizador(5);
temporizador();
temporizador();
temporizador();
temporizador();
temporizador();
temporizador();
