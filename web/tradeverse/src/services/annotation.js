import annotation_api from "./annotation_api";


export async function getAnnotations(postId, commentIds) {
    try {
        const commentIdsQuery = commentIds.map(id => `commentIds=${id}`).join('&');
        const response = await annotation_api.get(`/annotations?postId=${postId}&${commentIdsQuery}`);
        return response.data;
    }
    catch (error) {
        console.error("Error getting annotations:", error);
        throw error;
    }
}

export async function createAnnotation(annotationPayload) {
    try {
        const response = await annotation_api.post("/annotations", annotationPayload);
        return response.data; // Return the created annotation response
    } catch (error) {
        console.error("Error creating annotation:", error.response?.data || error.message);
        throw error; // Re-throw the error to handle it where the function is called
    }
}