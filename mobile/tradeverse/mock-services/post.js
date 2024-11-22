import { allSubforums } from "../mock-data/all-subforums";

const _getAllPosts = () => {
  return allSubforums.reduce((acc, sforum) => {
    return acc.concat(
      sforum.posts.map((post) => ({
        ...post,
        subforum: { id: sforum.id, title: sforum.title },
      }))
    );
  }, []);
};

export const getPostById = (postId) => {
  return _getAllPosts().find((post) => post.id == postId);
};

export const searchPosts = (searchTerm) => {
  if (!searchTerm) {
    return _getAllPosts();
  }
  return _getAllPosts().filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getPostsByUser = (uName) => {
  return _getAllPosts().filter((post) => post.author.username === uName);
};
