import {
  registrarTransaccion,
  calcularSaldoTotal,
  transacciones,
} from "./finanzas.js";

registrarTransaccion("ingreso", 1000);
registrarTransaccion("gasto", 200);
registrarTransaccion("ingreso", 500);
registrarTransaccion("gasto", 100);

console.log("Saldo total:", calcularSaldoTotal());
