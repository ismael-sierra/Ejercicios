document.getElementById("guardarNombre").addEventListener("click", () => {
  let nombre = prompt("Ingresa tu nombre:");
  sessionStorage.setItem("nombre", nombre);
  document.getElementById("guardarNombre").textContent = nombre;
});
