document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const lista = document.getElementById("postsLista");
      posts.slice(0, 5).forEach((post) => {
        console.log(post.title);
        const li = document.createElement("li");
        li.textContent = post.title;
        lista.appendChild(li);
      });
    })
    .catch((error) => console.error("Error al obtener los posts:", error));
});
