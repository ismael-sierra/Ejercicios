document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/comments?postId=4")
    .then((response) => response.json())
    .then((comments) => {
      const lista = document.getElementById("correoLista");
      comments.forEach((comment) => {
        console.log(comment.email);
        const li = document.createElement("li");
        li.textContent = comment.email;
        lista.appendChild(li);
      });
    })
    .catch((error) =>
      console.error("Error al obtener los comentarios:", error)
    );
});
