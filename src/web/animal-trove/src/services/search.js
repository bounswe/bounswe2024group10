import api from "./api";

export async function search({ searchTerm }) {
  const response = await api.post("/search", {
    searchTerm,
  });
  return response.data;
}
