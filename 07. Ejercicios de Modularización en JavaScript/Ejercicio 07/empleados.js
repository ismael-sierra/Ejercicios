const empleados = [];

export const agregarEmpleado = (nombre, horas) => {
  empleados.push({ nombre, horas });
};

export const calcularTotalHoras = () =>
  empleados.reduce((total, empleado) => total + empleado.horas, 0);

export const filtrarPorHorasExtras = (limite = 40) =>
  empleados.filter((empleado) => empleado.horas > limite);

export const ordenarPorHoras = () =>
  empleados.sort((a, b) => a.horas - b.horas);

export { empleados };
