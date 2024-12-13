import api from "./api";

export async function getPortfolio(username) {
    try {
        const response = await api.get(`/portfolio/get-portfolio?username=${username}`);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            throw new Error(`Failed to fetch comments. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
}
export async function getAssetDetails(symbol) {
    try {
      const response = await api.request({
        url: '/asset/details', // API endpoint
        method: 'POST', // Force GET method
        data: JSON.stringify({ symbol }), // Pass the request body
        headers: {
          "Content-Type": "application/json", // Inform the server about JSON content
        },
      });
  
      // Check for successful response
      if (response.status >= 200 && response.status < 300) {
        return response.data; // Return data
      } else {
        console.error("Unexpected response status:", response.status);
        throw new Error(`Failed to fetch asset details. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching details for asset ${symbol}`, error);
      throw error;
    }
  }
  export async function getAllAssets() {
    try {
      const response = await api.get('/asset/all');
      if (response.status >= 200 && response.status < 300) {
        return response.data; // Return the list of assets
      } else {
        console.error("Unexpected response status:", response.status);
        throw new Error(`Failed to fetch assets. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching all assets:", error);
      throw error; // Rethrow the error for handling in the calling component
    }
  }
  export async function addAssetToPortfolio(username, assetId, amount, token) {
    try {
      const response = await api.post(
        '/portfolio/add-asset',
        {
          "username":username,
          "assetId":assetId,
          "amount":amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status >= 200 && response.status < 300) {
        return response.data; // Return the API response directly
      } else {
        console.error('Unexpected response status:', response.status);
        throw new Error(`Failed to add asset to portfolio. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error adding asset to portfolio:', error);
      throw error; // Rethrow the error for the calling function to handle
    }
  }