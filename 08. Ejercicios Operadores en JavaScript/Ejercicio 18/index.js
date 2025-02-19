function invitadosConfirmados(nombres, confirmaciones) {
  return nombres.filter((nombre, index) => confirmaciones[index]);
}

// Ejemplo de uso:
const nombres = ["Ismael", "Ana", "Julián", "Manuel"];
const confirmaciones = [true, false, true, false];

const invitados = invitadosConfirmados(nombres, confirmaciones);
console.log(invitados);
