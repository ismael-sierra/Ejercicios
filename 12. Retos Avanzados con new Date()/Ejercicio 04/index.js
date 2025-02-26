function esAnioBisiesto(anio) {
  // Un año es bisiesto si es divisible entre 4 y no entre 100,
  // excepto si es divisible entre 400
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function calcularEdadEnDias(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);
  if (isNaN(nacimiento)) {
    return "Fecha de nacimiento no válida";
  }

  const hoy = new Date();
  const diferenciaTiempo = hoy - nacimiento;
  const edadDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  return {
    esBisiesto: esAnioBisiesto(nacimiento.getFullYear()),
    edadDias,
  };
}

// Ejemplo de uso
console.log(calcularEdadEnDias("2003-09-30"));
