const transacciones = [];

export const registrarTransaccion = (tipo, monto) => {
  transacciones.push({ tipo, monto });
};

export const calcularSaldoTotal = () => {
  return transacciones.reduce((saldo, transaccion) => {
    return transaccion.tipo === "ingreso"
      ? saldo + transaccion.monto
      : saldo - transaccion.monto;
  }, 0);
};

export { transacciones };
