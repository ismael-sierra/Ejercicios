fetch("https://jsonplaceholder.typicode.com/posts?userId=3")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  })
  .catch((error) => console.error("Error:", error));
