import api from "./_axios";

export async function getUserByUsername({ username }) {
  console.log("====================================");
  console.log("params", { username });
  console.log("====================================");
  try {
    const response = await api.post('/auth/get-user-details', { username });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Get user by username failed", error);
  }
  return null;
}
