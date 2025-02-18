const vehiculos = [];

export const agregarVehiculo = (marca, modelo, anio) => {
  vehiculos.push({ marca, modelo, anio });
};

export const buscarPorMarca = (marca) =>
  vehiculos.filter(
    (vehiculo) => vehiculo.marca.toLowerCase() === marca.toLowerCase()
  );

export const ordenarPorAnio = () => vehiculos.sort((a, b) => a.anio - b.anio);

export { vehiculos };
