import api from "./api";

// Fetch user details by username
export async function getUserProfile(username) {

    const token = localStorage.getItem('authToken');

    try {
        const response = await api.get(`/user/profile/`, {
            params: {
                username: username
            },
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
export async function getPostsByUser(username) {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');
  
    // Check if username is valid
    if (!username || username.trim() === '') {
        console.error("Invalid or empty username");
        throw new Error("Username is required");
    }
  
    // Check if token is valid
    if (!token) {
        console.error("No authentication token found");
        throw new Error("Authentication token is required");
    }
  
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
