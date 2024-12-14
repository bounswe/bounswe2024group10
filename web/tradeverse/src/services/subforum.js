import api from './api'; // Assuming you have a configured API client

export async function getSubforum(subforumId, token) {
  try {
    const response = await api.get(`/subforum/${subforumId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Return the subforum data
    } else {
      console.error('Unexpected response status:', response.status);
      throw new Error(`Failed to fetch subforum. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching subforum:', error);
    throw error;
  }
}
export async function followSubforum(subforumFollow, token) {
    try {
        const response = await api.post("/subforum/follow", subforumFollow, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data; // Return the API response directly
        } else {
            console.error("Unexpected response status:", response.status);
            return { isSuccessful: false, message: "Unexpected response status" };
        }
    } catch (error) {
        console.error("Error creating comment:", error);
        return { isSuccessful: false, message: error.message };
    }
}
export async function unfollowSubforum(subforumUnfollow, token) {
    try {
        const response = await api.post("/subforum/unfollow", subforumUnfollow, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data; // Return the API response directly
        } else {
            console.error("Unexpected response status:", response.status);
            return { isSuccessful: false, message: "Unexpected response status" };
        }
    } catch (error) {
        console.error("Error creating comment:", error);
        return { isSuccessful: false, message: error.message };
    }
}
export async function createSubforum(subforumData, token) {
  try {
    const response = await api.post('/subforum/create', subforumData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Return the successful response data
    } else {
      console.error('Unexpected response status:', response.status);
      throw new Error(`Failed to create subforum. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error creating subforum:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}