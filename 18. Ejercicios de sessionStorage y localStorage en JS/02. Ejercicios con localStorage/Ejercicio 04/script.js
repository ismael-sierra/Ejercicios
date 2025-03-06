function guardarDato() {
  let dato = document.getElementById("dato").value;
  localStorage.setItem("datoGuardado", dato);
}
function eliminarDato() {
  localStorage.removeItem("datoGuardado");
}
