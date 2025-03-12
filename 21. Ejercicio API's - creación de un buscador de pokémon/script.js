document
  .getElementById("pokemon-form")
  .addEventListener("submit", async function (event) {
    // Con async/await manejamos errores sin necesidad de lanzar excepciones manualmente con throw,
    //  además de mejorar la legibilidad y facilitar la depuración del código
    event.preventDefault();

    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase()
      .trim(); // Eliminamos espacios en blanco al inicio y final

    const errorMessage = document.getElementById("error-message");
    const table = document.getElementById("pokemon-table");
    const tbody = document.getElementById("pokemon-data");

    errorMessage.classList.add("oculto");
    table.classList.add("oculto");
    tbody.innerHTML = ""; // Borramos el contenido de la tabla para limpiar datos anteriores

    if (!pokemonName) {
      errorMessage.textContent = "Por favor, introduce un nombre de Pokémon.";
      errorMessage.classList.remove("oculto"); // Enseñamos el mensaje de error
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      ); // Hacemos la solicitud a la PokeAPI con el nombre del Pokemon
      if (!response.ok) {
        throw new Error("Pokémon no encontrado.");
      }

      const data = await response.json(); // Convertimos la respuesta en un objeto JSON

      // Extraemos las habilidades y tipos del Pokémon
      const habilidades = data.abilities.map((a) => a.ability.name).join(", ");
      const tipos = data.types.map((t) => t.type.name).join(", ");

      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${data.name}</td>
          <td>${habilidades}</td>
          <td>${data.height / 10}</td>
          <td>${data.weight / 10}</td>
          <td>${tipos}</td>
      `;
      tbody.appendChild(row);
      table.classList.remove("oculto");
    } catch (error) {
      // Si ocurriera un error durante la solicitud mostramos y enseñamos el mensaje de error
      errorMessage.textContent = error.message;
      errorMessage.classList.remove("oculto");
    }
  });
