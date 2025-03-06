const texto = document.createElement("p");
texto.textContent = "Texto parpadeante";
document.body.appendChild(texto);
setInterval(() => {
  texto.style.visibility =
    texto.style.visibility === "hidden" ? "visible" : "hidden";
}, 1000);
