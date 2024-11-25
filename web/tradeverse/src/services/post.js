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
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching explore posts:", error);
    }
}