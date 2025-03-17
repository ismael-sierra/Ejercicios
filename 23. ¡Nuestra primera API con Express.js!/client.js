// client.js - Cliente que realiza peticiones al servidor Express

const fetch = require("node-fetch"); // Importar fetch para entornos Node.js

const baseUrl = "http://localhost:3000";

// Función para realizar una petición GET a /api con nombre y edad
async function getApi(nombre, edad) {
  const response = await fetch(`${baseUrl}/api?nombre=${nombre}&edad=${edad}`);
  const data = await response.json();
  console.log(data);
}

// Función para realizar una petición GET a /api/:nombre
async function getApiNombre(nombre) {
  const response = await fetch(`${baseUrl}/api/${nombre}`);
  const data = await response.json();
  console.log(data);
}

// Función para realizar una petición POST a /registro
async function postRegistro(nombre, edad, mail) {
  const response = await fetch(`${baseUrl}/registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, edad, mail }),
  });
  const data = await response.json();
  console.log(data);
}

// Función para realizar una petición POST a /actualizar
async function postActualizar(nombre, edad, mail) {
  const response = await fetch(`${baseUrl}/actualizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, edad, mail }),
  });
  const data = await response.json();
  console.log(data);
}

// Función para realizar una petición POST a /eliminar
async function postEliminar(nombre) {
  const response = await fetch(`${baseUrl}/eliminar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre }),
  });
  const data = await response.json();
  console.log(data);
}

// Función para realizar una petición GET a /usuarios
async function getUsuarios() {
  const response = await fetch(`${baseUrl}/usuarios`);
  const data = await response.json();
  console.log(data);
}
