import api from "./api";

//backend service side
// public GetCommentsResponse getCommentsByPostID(GetCommentsRequest request) {
//     if (postRepository.findByPostID(request.getPostID()) == null) {
//         return new GetCommentsResponse(false, "Post not found", null);
//     }
//     return new GetCommentsResponse(true, "Comments retrieved successfully", commentRepository.findByPostID(request.getPostID()));
// }

export async function getCommentsByPostID({ postID, username }) {
  const response = await api.post(`/comment/getByPostID`, {
    postID,
    username,
  });
  return response.data;
}

export async function makeComment({ username, postID, description }) {
  try {
    const response = await api.post("/comment/post", {
      username,
      postID,
      description,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
//delete
export async function deleteComment({ commentID }) {
  try {
    const response = await api.post("/comment/delete", {
      commentID,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
