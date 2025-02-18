import {
  agregarCurso,
  ordenarPorInscritos,
  obtenerNombresCursos,
  cursos,
} from "./cursos.js";

agregarCurso("JavaScript Avanzado", 120);
agregarCurso("Python para Principiantes", 200);
agregarCurso("Diseño UX/UI", 80);

console.log("Cursos ordenados por inscritos:", ordenarPorInscritos());
console.log("Lista de nombres de cursos:", obtenerNombresCursos());
