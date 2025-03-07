document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => response.json())
    .then((tareas) => {
      const completadas = tareas.filter((tarea) => tarea.completed).length;

      console.log("Número de tareas completadas:", completadas);
      document.getElementById("total").textContent = completadas;
    })
    .catch((error) => console.error("Error al obtener las tareas:", error));
});
