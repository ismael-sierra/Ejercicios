function convertirValoresANumero(valores) {
  if (!Array.isArray(valores)) {
    return "El argumento debe ser un array.";
  }

  const convertidos = [];
  const noConvertidos = [];

  valores.forEach((valor) => {
    const convertido = Number(valor);
    if (!isNaN(convertido)) {
      convertidos.push(convertido);
    } else {
      noConvertidos.push(valor);
    }
  });

  return { convertidos, noConvertidos };
}

// Ejemplo de uso
const valoresMixtos = [
  "123",
  45,
  true,
  false,
  null,
  undefined,
  "abc",
  {},
  "3.14",
];
console.log(convertirValoresANumero(valoresMixtos));
