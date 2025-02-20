function reemplazarPalabra(texto, palabraObjetivo, palabraNueva) {
  return texto.split(palabraObjetivo).join(palabraNueva);
}

// Ejemplo de uso
console.log(
  reemplazarPalabra(
    "Esto es un texto de prueba con prueba repetido.",
    "prueba",
    "ejemplo"
  )
);
