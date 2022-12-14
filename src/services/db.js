export const getAllSnippets = async (snippetLength) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await response.json();

  const snippets = posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      snippet: post.body.substring(0, snippetLength).trim(),
    };
  });

  return snippets;
};

export const getProductById = async (id) =>
  fetch('https://jsonplaceholder.typicode.com/posts/' + id).then((response) =>
    response.json().then((post) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
      };
    })
  );
