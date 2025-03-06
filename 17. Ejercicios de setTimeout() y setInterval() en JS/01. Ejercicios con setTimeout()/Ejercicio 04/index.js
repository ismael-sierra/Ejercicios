const tiempoAleatorio = Math.floor(Math.random() * 5000) + 1000;
setTimeout(() => {
  console.log("Mensaje con retraso aleatorio");
}, tiempoAleatorio);
