function terminaCon(frase, palabra) {
  return frase.trim().endsWith(palabra);
}

// Ejemplo de uso
const frase = "Esta es una prueba de terminación";
const frase2 = "Esta es una prueba";
const palabra = "terminación";
console.log(terminaCon(frase, palabra)); // true
console.log(terminaCon(frase2, palabra)); // false
