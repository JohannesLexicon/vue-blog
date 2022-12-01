const posts = [
  { id: '1', title: 'hej1', content: 'yepa' },
  { id: '2', title: 'hej2', content: 'yepb' },
  { id: '3', title: 'hej3', content: 'yepc' },
  { id: '4', title: 'hej4', content: 'yepd' },
  { id: '5', title: 'hej5', content: 'yepe' },
];

export const getAll = (snippetLength) =>
  !snippetLength
    ? posts
    : posts.map((post) => {
        post.content = post.content.substring(0, snippetLength);
        return post;
      });

export const get = (id) => posts.find((post) => post.id === id);
