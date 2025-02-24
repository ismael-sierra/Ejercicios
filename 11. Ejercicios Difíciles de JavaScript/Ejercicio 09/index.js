function filtrarNumeros(array) {
  if (!Array.isArray(array)) {
    return "El argumento debe ser un array.";
  }

  return array.filter(
    (elemento) => typeof elemento === "number" && !isNaN(elemento)
  );
}

// Ejemplo de uso
const datosMixtos = [1, "texto", 3.14, null, 42, NaN, undefined, 0];
console.log(filtrarNumeros(datosMixtos));
