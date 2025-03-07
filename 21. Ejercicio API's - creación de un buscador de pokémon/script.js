document
  .getElementById("pokemon-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase()
      .trim();
    const errorMessage = document.getElementById("error-message");
    const table = document.getElementById("pokemon-table");
    const tbody = document.getElementById("pokemon-data");
    errorMessage.classList.add("oculto");
    table.classList.add("oculto");
    tbody.innerHTML = "";

    if (!pokemonName) {
      errorMessage.textContent = "Por favor, introduce un nombre de Pokémon.";
      errorMessage.classList.remove("oculto");
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Pokémon no encontrado.");
      }
      const data = await response.json();
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
      errorMessage.textContent = error.message;
      errorMessage.classList.remove("oculto");
    }
  });
