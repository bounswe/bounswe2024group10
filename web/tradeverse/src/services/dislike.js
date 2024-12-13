import api from "./api";

export async function dislikePost(token, postId) {
    try {
        const response = await api.post(`/dislike/dislike-post?postId=${postId}`, null, {
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


export async function undislikePost(token, postId) {
    try {
        const response = await api.post(`/dislike/undislike-post?postId=${postId}`, null, {
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