import api from "./api";

export async function createPost({
  username,
  media,
  caption,
  location,
  photoDate,
}) {
  try {
    const payload = new FormData();
    payload.append("username", username);
    payload.append("media", media);
    payload.append("caption", caption);
    payload.append("location", location);
    payload.append("photoDate", photoDate);
    const response = await api.post("/posts/create", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
