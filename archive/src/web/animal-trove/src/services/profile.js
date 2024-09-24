import api from "./api";

export async function getUserDetails({ username }) {
  const response = await api.post("/users/details", {
    username,
  });
  return response.data;
}
