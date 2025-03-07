document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then((response) => response.json())
    .then((fotos) => {
      const contenedor = document.getElementById("contenedor");
      const primerasTres = fotos.slice(0, 3);

      primerasTres.forEach((foto) => {
        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = foto.title;
        img.style.width = "200px";
        img.style.margin = "10px";
        contenedor.appendChild(img);
      });

      console.log("URLs de las primeras 3 fotos:");
      primerasTres.forEach((foto) => console.log(foto.url));
    })
    .catch((error) => console.error("Error al obtener las fotos:", error));
});
