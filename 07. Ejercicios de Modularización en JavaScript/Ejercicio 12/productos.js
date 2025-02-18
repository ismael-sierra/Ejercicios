const productos = [];

export const agregarProducto = (nombre, calificaciones) => {
  productos.push({ nombre, calificaciones });
};

export const calcularPromedio = (nombre) => {
  const producto = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (!producto || producto.calificaciones.length === 0) return null;
  return (
    producto.calificaciones.reduce((sum, cal) => sum + cal, 0) /
    producto.calificaciones.length
  );
};

export { productos };
