const tablaDiv = document.getElementById("tabla");

for (let i = 1; i <= 10; i++) {
  let tablaHTML = `<div class="tabla"><pre>`;

  for (let j = 1; j <= 10; j++) {
    tablaHTML += `${i} x ${j} = ${i * j}\n`;
  }

  tablaHTML += "</pre></div>";
  tablaDiv.innerHTML += tablaHTML;
}
