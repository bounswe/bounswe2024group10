import api from "./api";

// Fetch user details by username
export async function getUserProfile(username,token) {
    try {
        const response = await api.get(`/user/profile?username=${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });

        return response.data; // Return the response data
    } catch (error) {
        console.error("Error fetching user details:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}

// Fetch posts created by a user
export async function getPostsByUser(username,token) {
    // Get the token from localStorage
    try {
        const response = await api.get(`/post/get-posts-by-user`, {
            params: {
                username: username
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching posts by user:", error.response ? error.response.data : error.message);
        throw error;
    }
  }
  
  export async function setUserDetails(token, userDetails) {
    try {
        const response = await api.put(
            "/user/set-user-details",
            userDetails,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Add Authorization header
                },
            }
        );
        return response.data; // Return the updated user details
    } catch (error) {
        console.error("Error setting user details:", error);
        throw error; // Rethrow error for the caller to handle
    }
}
