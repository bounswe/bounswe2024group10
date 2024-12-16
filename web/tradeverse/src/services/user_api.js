import api from './api'; 

export async function getUserDetails(username) {
  try {
    const response = await api.get(`/user/get-user-details/${username}`);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}

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

export async function getPortfolio(username) {

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
        const response = await api.get(`/portfolio/get-portfolio?username=${username}`, {
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
        console.error("Error fetching portfolio:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}
  
  
