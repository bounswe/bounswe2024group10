import api from "./api";

export async function apiLogin({ username, password }) {
  const response = await api.post("/auth/login", {
    username,
    password,
  });
  return response.data;
}

export async function register({ email, username, password, name, profilePhoto, tag }) {
  const response = await api.post("/auth/register", {
    email,
    username,
    password,
    name,
    profilePhoto,
    tag,
  });
  return response.data;
}
