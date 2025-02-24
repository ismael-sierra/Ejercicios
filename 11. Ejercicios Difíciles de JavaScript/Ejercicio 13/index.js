function extraerValorPrimitivo(valores) {
  if (!Array.isArray(valores)) {
    return "El argumento debe ser un array.";
  }

  return valores.map((valor) =>
    valor instanceof Number ? valor.valueOf() : valor
  );
}

// Ejemplo de uso
const valoresMixtos = [
  new Number(123),
  45,
  new Number(3.14),
  "hello",
  new Number(0),
];
console.log(extraerValorPrimitivo(valoresMixtos));
