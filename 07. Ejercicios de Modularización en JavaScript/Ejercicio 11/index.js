import {
  agregarVehiculo,
  buscarPorMarca,
  ordenarPorAnio,
  vehiculos,
} from "./vehiculos.js";

agregarVehiculo("Audi", "A6", 2010);
agregarVehiculo("Citroen", "Xsara", 2003);
agregarVehiculo("Toyota", "Yaris", 2023);

console.log("Vehículos de la marca Citroen:", buscarPorMarca("Citroen"));
ordenarPorAnio();
console.log("Vehículos ordenados por año:", vehiculos);
