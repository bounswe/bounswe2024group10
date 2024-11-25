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

export async function getPost(postId) {
    try {
        const response = await api.get(`/post/get-post?postId=${postId}`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching post:", error);
    }
}

export async function createComment(commentPayload) {
    try {
        const response = await api.post('/post/create-comment', commentPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error creating comment:", error);
    }
}