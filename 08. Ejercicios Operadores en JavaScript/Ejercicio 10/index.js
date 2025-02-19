function registrarAsistencia(estudiantes, presentes) {
  let asistencia = {};
  for (let estudiante of estudiantes) {
    asistencia[estudiante] = presentes.includes(estudiante);
  }
  return asistencia;
}

// Ejemplo de uso
const estudiantes = ["Ana", "Ismael", "Manuel", "Julián"];
const presentes = ["Ana", "Julián"];
console.log(registrarAsistencia(estudiantes, presentes));
// { Ana: true, Ismael: false, Manuel: false, Julián: true }
