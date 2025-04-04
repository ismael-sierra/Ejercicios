const errorService = {
  handleError: (error) => {
    console.error("Error:", error);
    alert(error.message || "Ocurrió un error inesperado.");
  },

  handleApiError: async (response) => {
    if (!response.ok) {
      let errorMessage = "Error desconocido";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch (e) {
        console.error("No se pudo procesar el error de la API:", e);
      }
      throw new Error(errorMessage);
    }
    return response.json();
  },
};

export default errorService;
