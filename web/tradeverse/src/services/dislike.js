import api from "./api";

export async function dislikePost(postPayload) {
    try {
        const response = await api.post('/dislike/dislike-post', postPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error liking post:", error);
    }
}

export async function undislikePost(postPayload) {
    try {
        const response = await api.post('/sidlike/undislike-post', postPayload);
        return response.data;
    }
    catch (error) {
        console.error("Error unliking post:", error);
    }
}