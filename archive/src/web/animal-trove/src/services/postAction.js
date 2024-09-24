import api from "./api";

export async function likePost({ username, postID }) {
  const response = await api.post("/users/like", {
    username,
    postID,
  });
  return response.data;
}

export async function unlikePost({ username, postID }) {
  const response = await api.post("/users/unlike", {
    username,
    postID,
  });
  return response.data;
}

export async function dislikePost({ username, postID }) {
  const response = await api.post("/users/dislike", {
    username,
    postID,
  });
  return response.data;
}

export async function undislikePost({ username, postID }) {
  const response = await api.post("/users/undislike", {
    username,
    postID,
  });
  return response.data;
}

export async function bookmarkPost({ username, postID }) {
  const response = await api.post("/users/bookmark", {
    username,
    postID,
  });
  return response.data;
}

export async function unbookmarkPost({ username, postID }) {
  const response = await api.post("/users/unbookmark", {
    username,
    postID,
  });
  return response.data;
}

export async function getLikeCount({ postID }) {
  const response = await api.post("/users/getLikeCount", {
    postID,
  });
  return response.data;
}

export async function getDislikeCount({ postID }) {
  const response = await api.post("/users/getDislikeCount", {
    postID,
  });
  return response.data;
}

export async function getActionDetails({ username, postID }) {
  const response = await api.post("/posts/getUserPostInteractions", {
    postID,
    username,
  });
  return response.data;
}
