import api from "./api";

export async function login({ userName, password }) {
  const response = await api.post("/users/login", {
    userName,
    password,
  });
  return response.data;
}

export async function register({ name, email, userName, password }) {
  const response = await api.post("/users/register", {
    name,
    email,
    userName,
    password,
  });
  return response.data;
}

export async function search({ searchTerm }) {
  const response = await api.post("/search", {
    searchTerm,
  });
  return response.data;
}