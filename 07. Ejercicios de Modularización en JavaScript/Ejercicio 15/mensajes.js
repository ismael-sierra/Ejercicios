const mensajes = [];

export const agregarMensaje = (remitente, texto) => {
  mensajes.push({ remitente, texto });
};

export const filtrarMensajesPorUsuario = (remitente) => {
  return mensajes.filter(
    (mensaje) => mensaje.remitente.toLowerCase() === remitente.toLowerCase()
  );
};

export { mensajes };
