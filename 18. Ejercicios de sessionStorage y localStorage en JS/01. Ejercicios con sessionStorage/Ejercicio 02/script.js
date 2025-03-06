let visitas = sessionStorage.getItem("visitas") || 0;
visitas++;
sessionStorage.setItem("visitas", visitas);
console.log(`Visitas en esta sesión: ${visitas}`);
