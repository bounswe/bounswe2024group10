import api from "./api";

export async function createPost({
  username,
  media,
  caption = "",
  location = "",
  photoDate = "",
  animalName,
}) {
  try {
    const response = await api.post("/posts/create", {
      username,
      media,
      caption,
      location,
      photoDate,
      animalName,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
