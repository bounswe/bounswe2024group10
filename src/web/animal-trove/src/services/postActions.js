import api from "./api";

export async function likePost({ username, postId }) {
  const response = await api.post("users/like", {
    username,
    postId,
  });
  return response.data;
}

export async function unlikePost({username, postId }) {
  const response = await api.post("users/unlike", {
    username,
    postId,
  });
  return response.data;
}

export async function dislikePost({ username, postId }) {
  const response = await api.post("users/dislike", {
    username,
    postId,
  });
  return response.data;
}

export async function undislikePost({ username, postId }) {
  const response = await api.post("users/undislike", {
    username,
    postId,
  });
  return response.data;
}

export async function bookmarkPost({ username, postId }) {
  const response = await api.post("users/bookmark", {
    username,
    postId,
  });
  return response.data;
}

export async function unbookmarkPost({username, postId }) {
  const response = await api.post("users/unbookmark", {
    username,
    postId,
  });
  return response.data;
}
