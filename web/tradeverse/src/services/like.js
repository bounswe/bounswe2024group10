import api from "./api";

export async function likePost(token, postId) {
    try {
        const response = await api.post(`/like/like-post?postId=${postId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`, // Add Authorization header
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error liking post:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}

export async function unlikePost(token, postId) {
    try {
        const response = await api.post(`/like/unlike-post?postId=${postId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`, // Add Authorization header
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error unliking post:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}
