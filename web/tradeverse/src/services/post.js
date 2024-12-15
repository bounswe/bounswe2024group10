import api from "./api";

export async function getSubforums() {
    try {
        const response = await api.get("/post/get-subforums");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching subforums:", error);
    }

}

export async function createPost(postPayload) {
    try {
        const response = await api.post('/post/create-post', postPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error creating post:", error);
    }
}

export async function explore() {
    try {
        const response = await api.get('/post/explore');
        return response.data;
    }
    catch (error) {
        console.error("Error fetching explore posts:", error);
    }
}

export async function feed(username) {
    try {
        const response = await api.get(`/post/feed?username=${username}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching feed:", error);
    }
}

export async function getPost(postId,token,userAuthenticated) {
    try {
        const response = await api.get(`/post/${postId}` ,{
            headers: {
                Authorization: userAuthenticated ? `Bearer ${token}` : "",
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching post:", error);
    }
}
export async function getComments(postId) {
    try {
        const response = await api.get(`/comment/get-comments?postId=${postId}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch comments. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
}



export async function createComment(commentPayload, token) {
    try {
        const response = await api.post("/comment/create", commentPayload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data; // Return the API response directly
        } else {
            console.error("Unexpected response status:", response.status);
            return { isSuccessful: false, message: "Unexpected response status" };
        }
    } catch (error) {
        console.error("Error creating comment:", error);
        return { isSuccessful: false, message: error.message };
    }
}
export async function deleteComment(commentPayload, token) {
    try {
        const response = await api.post("/comment/delete", commentPayload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data; // Return the API response directly
        } else {
            console.error("Unexpected response status:", response.status);
            return { isSuccessful: false, message: "Unexpected response status" };
        }
    } catch (error) {
        console.error("Error creating comment:", error);
        return { isSuccessful: false, message: error.message };
    }
}
export async function fetchRecentPosts(token) {
    try {
      const response = await api.get('/post/recent', {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      throw error;
    }
  }
  
  export async function fetchFollowedTopicsPosts(token) {
    try {
      const response = await api.get('/post/followed-topics', {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching followed topics posts:', error);
      throw error;
    }
  }
  
  export async function fetchFollowedPeoplePosts(token) {
    try {
      const response = await api.get('/post/followed-people', {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching followed people posts:', error);
      throw error;
    }
  }
  export async function getPostsByTag(tag, token) {
    try {
      const url = `/post/get-posts-by-tag?tag=${tag}`; // Directly include the tag with '@'
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        console.error("Unexpected response status:", response.status);
        throw new Error(`Failed to fetch posts by tag. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching posts by tag:", error);
      throw error;
    }
  }
  
  