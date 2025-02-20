function crearCuentaBancaria() {
  let saldo = 0;
  return {
    depositar: function (cantidad) {
      if (cantidad > 0) {
        saldo += cantidad;
        console.log(`Depositado: ${cantidad}€`);
      } else {
        console.log("La cantidad debe ser positiva.");
      }
    },
    retirar: function (cantidad) {
      if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        console.log(`Retirado: ${cantidad}€`);
      } else {
        console.log("Fondos insuficientes o cantidad inválida.");
      }
    },
    consultarSaldo: function () {
      console.log(`Saldo actual: ${saldo}€`);
      return saldo;
    },
  };
}

// Ejemplo de uso
const cuenta = crearCuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(50);
cuenta.consultarSaldo();
