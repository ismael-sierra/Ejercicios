function guardarColor() {
  let color = document.getElementById('colorPicker').value;
  localStorage.setItem('colorFondo', color);
  document.body.style.backgroundColor = color;
}
window.onload = function() {
  let colorGuardado = localStorage.getItem('colorFondo');
  if (colorGuardado) {
      document.body.style.backgroundColor = colorGuardado;
  }
}