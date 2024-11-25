import api from "./api";

export async function likePost(postPayload) {
    try {
        const response = await api.post('/like/like-post', postPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error liking post:", error);
    }
}

export async function unlikePost(postPayload) {
    try {
        const response = await api.post('/like/unlike-post', postPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error unliking post:", error);
    }
}