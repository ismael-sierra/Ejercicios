document.getElementById('eliminarNombre').addEventListener('click', () => {
  sessionStorage.removeItem('nombre');
  document.getElementById('eliminarNombre').textContent = '';
});