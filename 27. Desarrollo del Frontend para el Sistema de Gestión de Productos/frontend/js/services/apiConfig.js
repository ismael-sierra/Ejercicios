const API_BASE_URL = "http://localhost:3000";

const HEADERS = {
  "Content-Type": "application/json",
};

async function request(url, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error en la solicitud");
    }

    return data;
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
}

export { API_BASE_URL, HEADERS, request };
