function cargarTareas() {
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  let lista = document.getElementById("listaTareas");
  lista.innerHTML = "";
  tareas.forEach((tarea, index) => {
    let li = document.createElement("li");
    li.textContent = tarea;
    li.onclick = () => eliminarTarea(index);
    lista.appendChild(li);
  });
}
function agregarTarea() {
  let tarea = document.getElementById("tareaInput").value;
  if (tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    cargarTareas();
    document.getElementById("tareaInput").value = "";
  }
}
function eliminarTarea(index) {
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cargarTareas();
}
window.onload = cargarTareas;
