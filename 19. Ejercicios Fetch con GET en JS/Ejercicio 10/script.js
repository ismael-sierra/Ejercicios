fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const longTitles = posts.filter((post) => post.title.length > 50);
    longTitles.forEach((post) => console.log(post.title));
  })
  .catch((error) => console.error("Error al obtener los posts:", error));
