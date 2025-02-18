const productos = [];

export const agregarProducto = (nombre, stock) => {
  productos.push({ nombre, stock });
};

export const eliminarUltimoProducto = () => productos.pop();

export const filtrarStockBajo = (limite = 10) =>
  productos.filter((producto) => producto.stock < limite);

export const ordenarPorStock = () =>
  productos.sort((a, b) => a.stock - b.stock);

export { productos };
