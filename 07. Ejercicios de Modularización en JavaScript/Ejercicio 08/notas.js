const notas = [];

export const agregarNota = (titulo, prioridad) => {
  notas.push({ titulo, prioridad });
};

export const filtrarNotasUrgentes = () =>
  notas.filter((nota) => nota.prioridad === "alta");

export const ordenarPorPrioridad = () =>
  notas.sort((a, b) => {
    const prioridades = { baja: 1, media: 2, alta: 3 };
    return (prioridades[a.prioridad] || 0) - (prioridades[b.prioridad] || 0);
  });

export const buscarNota = (titulo) =>
  notas.find((nota) => nota.titulo.toLowerCase() === titulo.toLowerCase());

export { notas };
