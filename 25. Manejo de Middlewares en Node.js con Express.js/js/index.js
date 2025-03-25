const apiUrl = "http://localhost:3000";

// Obtener información de la raíz
document.getElementById("btnRaiz").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

// Obtener información About
document.getElementById("btnAbout").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/about`);
  const data = await response.json();
  alert(JSON.stringify(data));
});

// Enviar formulario de contacto
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("contactNombre").value;
  const email = document.getElementById("contactEmail").value;
  const mensaje = document.getElementById("contactMensaje").value;

  const response = await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, mensaje }),
  });
  const data = await response.json();
  alert(data.message);
  e.target.reset();
});
