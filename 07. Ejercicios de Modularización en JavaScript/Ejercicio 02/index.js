const {
  agregarPedido,
  eliminarPrimerPedido,
  contarPedidos,
  buscarPedidoPorCliente,
  obtenerNombresPlatillos,
  hayPedidoDePlatillo,
} = require("./pedidos");

agregarPedido(1, "Ismael", "Pizza");
agregarPedido(2, "Ana", "Sushi");
agregarPedido(3, "Julián", "Pasta");

console.log(eliminarPrimerPedido());
console.log(contarPedidos());
console.log(buscarPedidoPorCliente("Ana"));
console.log(obtenerNombresPlatillos());
console.log(hayPedidoDePlatillo("Sushi"));
