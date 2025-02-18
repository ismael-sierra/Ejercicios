const pedidos = [];

const agregarPedido = (id, cliente, platillo) => {
  pedidos.push({ id, cliente, platillo });
};

const eliminarPrimerPedido = () => pedidos.shift();

const contarPedidos = () => pedidos.length;

const buscarPedidoPorCliente = (cliente) =>
  pedidos.find((p) => p.cliente.toLowerCase() === cliente.toLowerCase());

const obtenerNombresPlatillos = () => pedidos.map((p) => p.platillo);

const hayPedidoDePlatillo = (platillo) =>
  pedidos.some((p) => p.platillo.toLowerCase() === platillo.toLowerCase());

module.exports = {
  agregarPedido,
  eliminarPrimerPedido,
  contarPedidos,
  buscarPedidoPorCliente,
  obtenerNombresPlatillos,
  hayPedidoDePlatillo,
  pedidos,
};
