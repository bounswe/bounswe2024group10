import api from "./api";

export async function getFeed() {
  const response = await api.get("/posts/getFeed", {

  });
  return response.data;
}
