import api from "./api";

export async function likePost({ postId }) {
  const response = await api.post("posts/like", {
    postId,
  });
  return response.data;
}

export async function unlikePost({ postId }) {
  const response = await api.post("posts/unlike", {
    postId,
  });
  return response.data;
}

export async function dislikePost({ postId }) {
  const response = await api.post("posts/dislike", {
    postId,
  });
  return response.data;
}

export async function undislikePost({ postId }) {
  const response = await api.post("posts/undislike", {
    postId,
  });
  return response.data;
}

export async function bookmarkPost({ postId }) {
  const response = await api.post("posts/bookmark", {
    postId,
  });
  return response.data;
}

export async function unbookmarkPost({ postId }) {
  const response = await api.post("posts/unbookmark", {
    postId,
  });
  return response.data;
}
