let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.getElementById("contador").textContent = visitas;
