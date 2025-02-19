function validarContrasena(password) {
  let hasMinLength = password.length >= 8;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasNoSpaces = true;

  for (let caracter of password) {
    if (caracter >= "A" && caracter <= "Z") {
      hasUpperCase = true;
    }
    if (caracter >= "0" && caracter <= "9") {
      hasNumber = true;
    }
    if (caracter === " ") {
      hasNoSpaces = false;
      break;
    }
  }

  return hasMinLength && hasUpperCase && hasNumber && hasNoSpaces;
}

// Ejemplo de uso
console.log(validarContrasena("Secure123")); // true
console.log(validarContrasena("weakpass")); // false
console.log(validarContrasena("NoNumber")); // false
console.log(validarContrasena("With Space1")); // false
