const express = require("express");
const router = express.Router();

const usuarios = [];

// GET /users - Devuelve una lista de usuarios con filtros opcionales por edad y ciudad
router.get("/", (req, res) => {
  const { edad, ciudad } = req.query;
  let filtrados = usuarios;
  if (edad) filtrados = filtrados.filter((u) => u.edad == edad);
  if (ciudad) filtrados = filtrados.filter((u) => u.ciudad == ciudad);
  res.status(200).json({ success: "OK", usuarios: filtrados });
});

// GET /users/new - Crea un nuevo usuario con un parámetro rol
router.get("/new", (req, res) => {
  const { nombre, edad, mail, rol } = req.query;
  if (!nombre || !edad || !mail || !rol) {
    return res
      .status(400)
      .json({ success: "FALLO", message: "Faltan datos obligatorios." });
  }
  usuarios.push({ nombre, edad, mail, rol });
  res.status(201).json({
    success: "OK",
    message: "Usuario creado.",
    usuario: { nombre, edad, mail, rol },
  });
});

// GET /users/:id/profile - Muestra el perfil del usuario identificado por id
router.get("/:id/profile", (req, res) => {
  const usuario = usuarios.find((u) => u.id == req.params.id);
  if (!usuario) {
    return res
      .status(404)
      .json({ success: "FALLO", message: "Usuario no encontrado." });
  }
  res.status(200).json({ success: "OK", usuario });
});

// POST /users - Crea un nuevo usuario en el sistema
router.post("/", (req, res) => {
  const { nombre, edad, mail } = req.body;
  if (!nombre || !edad || !mail) {
    return res
      .status(400)
      .json({ success: "FALLO", message: "Faltan datos obligatorios." });
  }
  const nuevoUsuario = { id: usuarios.length + 1, nombre, edad, mail };
  usuarios.push(nuevoUsuario);
  res.status(201).json({
    success: "OK",
    message: "Usuario registrado.",
    usuario: nuevoUsuario,
  });
});

// PUT /users/:id - Permite actualizar los datos de un usuario específico
router.put("/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id == req.params.id);
  if (!usuario) {
    return res
      .status(404)
      .json({ success: "FALLO", message: "Usuario no encontrado." });
  }
  Object.assign(usuario, req.body);
  res
    .status(200)
    .json({ success: "OK", message: "Usuario actualizado.", usuario });
});

// DELETE /users/:id - Elimina un usuario tras confirmar la acción
router.delete("/:id", (req, res) => {
  const index = usuarios.findIndex((u) => u.id == req.params.id);
  if (index === -1) {
    return res
      .status(404)
      .json({ success: "FALLO", message: "Usuario no encontrado." });
  }
  usuarios.splice(index, 1);
  usuarios.forEach((u, i) => {
    u.id = i + 1;
  });
  res
    .status(200)
    .json({ success: "OK", message: "Usuario eliminado e IDs reorganizados." });
});

// GET /users/:id/posts/:postId - Muestra los posts de un usuario específico
router.get("/:id/posts/:postId", (req, res) => {
  res.status(200).json({
    success: "OK",
    message: `Mostrando el post ${req.params.postId} del usuario ${req.params.id}`,
  });
});

// GET /users/search - Permite realizar una búsqueda avanzada de usuarios
router.get("/search", (req, res) => {
  res
    .status(200)
    .json({ success: "OK", message: "Búsqueda avanzada en construcción." });
});

module.exports = router;
