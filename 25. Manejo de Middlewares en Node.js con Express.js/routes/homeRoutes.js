const express = require("express");
const router = express.Router();

// GET / - Recupera la raíz, con parámetros de consulta para idioma y tema
router.get("/", (req, res) => {
  const { idioma, tema } = req.query;
  res
    .status(200)
    .json({ success: "OK", message: "Bienvenido a la API", idioma, tema });
});

// GET /about - Obtiene información acerca de la sección about, con detalles opcionales
router.get("/about", (req, res) => {
  res.status(200).json({ success: "OK", message: "Sección About de la API" });
});

// POST /contact - Recibe datos de contacto
router.post("/contact", (req, res) => {
  const { nombre, email, mensaje } = req.body;
  res.status(200).json({
    success: "OK",
    message: "Mensaje recibido",
    data: { nombre, email, mensaje },
  });
});

module.exports = router;
