// Importamos Express y configuramos la aplicación
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Lista de usuarios (almacenamiento temporal)
const usuarios = [];

// GET /api?nombre=Ismael&edad=21
app.get("/api", (req, res) => {
  const { nombre, edad } = req.query;
  res.status(200).json({
    success: "OK",
    message: `Bienvenido ${nombre}, tienes ${edad} años.`,
  });
});

// GET /api/:nombre
app.get("/api/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.status(200).json({ success: "OK", message: `Hola, ${nombre}!` });
});

// POST /registro
app.post("/registro", (req, res) => {
  const { nombre, edad, mail } = req.body;
  usuarios.push({ nombre, edad, mail });
  res
    .status(200)
    .json({ success: "OK", message: "Usuario registrado exitosamente." });
});

// POST /actualizar
app.post("/actualizar", (req, res) => {
  const { nombre, edad, mail } = req.body;
  const usuario = usuarios.find((user) => user.nombre === nombre);
  if (usuario) {
    usuario.edad = edad;
    usuario.mail = mail;
    res
      .status(200)
      .json({ success: "OK", message: "Usuario actualizado", usuario });
  } else {
    res
      .status(404)
      .json({ success: "FALLO", message: "Usuario no encontrado" });
  }
});

// POST /eliminar
app.post("/eliminar", (req, res) => {
  const { nombre } = req.body;
  const index = usuarios.findIndex((user) => user.nombre === nombre);
  if (index !== -1) {
    usuarios.splice(index, 1);
    res.status(200).json({ success: "OK", message: "Usuario eliminado." });
  } else {
    res
      .status(404)
      .json({ success: "FALLO", message: "Usuario no encontrado" });
  }
});

// GET /usuarios
app.get("/usuarios", (req, res) => {
  res.status(200).json({ success: "OK", usuarios });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
