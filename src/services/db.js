export const getAllSnippets = async (snippetLength) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      snippet: post.body.substring(0, snippetLength).trim(),
    };
  });
};

export const getPostById = async (id) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const post = await response.json();

  return {
    id: post.id,
    title: post.title,
    body: post.body,
  };
};
