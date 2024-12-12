import api from "./api";
// Search Subforums
export async function searchSubforums(keyword) {
    try {
        const response = await api.get(`/search/subforum?keyword=${encodeURIComponent(keyword)}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch subforums. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error searching subforums:", error);
        throw error;
    }
}
// Search Posts
export async function searchAssets(keyword) {
    try {
        const response = await api.get(`/search/asset?keyword=${keyword}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error searching posts:", error);
        throw error;
    }
}

// Search Tags
export async function searchTags(keyword) {
    try {
        const response = await api.get(`/search/tag?keyword=${keyword}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch tags. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error searching tags:", error);
        throw error;
    }
}

// Search Users
export async function searchUsers(keyword) {
    try {
        const response = await api.get(`/search/user?keyword=${keyword}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch users. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error searching users:", error);
        throw error;
    }
}

// Search Posts
export async function searchPosts(keyword) {
    try {
        const response = await api.get(`/search/post?keyword=${keyword}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error searching posts:", error);
        throw error;
    }
}
