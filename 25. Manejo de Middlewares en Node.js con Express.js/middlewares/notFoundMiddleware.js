module.exports = (req, res, next) => {
  res.status(404).json({ success: "FALLO", message: "Ruta no encontrada" });
};
