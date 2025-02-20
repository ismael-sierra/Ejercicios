function crearPrefijo(prefijo) {
  return function (palabra) {
    return prefijo + palabra;
  };
}

// Ejemplo de uso
const agregarSuper = crearPrefijo("super");
console.log(agregarSuper("estrella"));
console.log(agregarSuper("man"));
