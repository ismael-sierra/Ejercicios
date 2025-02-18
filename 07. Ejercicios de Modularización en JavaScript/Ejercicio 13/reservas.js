const reservas = [];

export const agregarReserva = (nombre, fecha) => {
  reservas.push({ nombre, fecha: new Date(fecha) });
};

export const ordenarPorFecha = () => reservas.sort((a, b) => a.fecha - b.fecha);

export { reservas };
