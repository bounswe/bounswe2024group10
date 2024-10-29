import api from "./_axios";

export async function getUserByUsername({ username }) {
ƒ
  try {
    const response = await api({
      url: "/auth/get-user-details",
      method: "POST",
      headers: {
        Authorization: undefined,
      },
      data: { username },
    });

    return response.data;
  } catch (error) {
    console.error("Get user by username failed", error);
  }
  return null;
}
